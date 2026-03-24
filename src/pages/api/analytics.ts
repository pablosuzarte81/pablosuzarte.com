export const prerender = false

import type { APIRoute } from 'astro'
import { Redis } from '@upstash/redis'

function getRedis(): Redis | null {
  const url = import.meta.env.UPSTASH_REDIS_REST_URL
  const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  return new Redis({ url, token })
}

function today(): string {
  return new Date().toISOString().slice(0, 10)
}

function dateRange(days: number): string[] {
  const dates: string[] = []
  const now = new Date()
  for (let i = 0; i < days; i++) {
    const d = new Date(now)
    d.setDate(d.getDate() - i)
    dates.push(d.toISOString().slice(0, 10))
  }
  return dates
}

function parseRef(raw: string): string {
  if (!raw || raw === 'direct') return 'direct'
  try {
    const hostname = new URL(raw).hostname.replace('www.', '')
    return hostname || 'direct'
  } catch {
    return 'direct'
  }
}

export const POST: APIRoute = async ({ request }) => {
  const redis = getRedis()
  if (!redis) {
    return new Response(JSON.stringify({ ok: false, error: 'Redis not configured' }), { status: 503 })
  }

  try {
    const body = await request.json()
    const { type, path, data, vid, device, ref } = body
    const date = today()

    if (!type || !path) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing type or path' }), { status: 400 })
    }

    const pipeline = redis.pipeline()

    if (type === 'pageview') {
      pipeline.zincrby(`pv:${date}`, 1, path)
      if (vid) pipeline.sadd(`visitors:${date}`, vid)
      if (ref) pipeline.zincrby(`ref:${date}`, 1, parseRef(ref))
      if (device) pipeline.hincrby(`device:${date}`, device, 1)
    } else if (type === 'scroll') {
      const depth = data?.depth
      if (depth) {
        pipeline.hincrby(`scroll:${date}`, `${path}:${depth}`, 1)
      }
    } else if (type === 'engage') {
      const seconds = data?.seconds
      if (seconds) {
        pipeline.hincrby(`engage:${date}`, `${path}:${seconds}`, 1)
      }
    }

    await pipeline.exec()

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'Server error' }), { status: 500 })
  }
}

export const GET: APIRoute = async ({ request }) => {
  const authHeader = request.headers.get('Authorization')
  const password = import.meta.env.DASHBOARD_PASSWORD
  if (!password || authHeader !== `Bearer ${password}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const redis = getRedis()
  if (!redis) {
    return new Response(JSON.stringify({ error: 'Redis not configured' }), { status: 503 })
  }

  try {
    const url = new URL(request.url)
    const days = parseInt(url.searchParams.get('days') || '7', 10)
    const dates = dateRange(days)

    // Aggregate page views
    const pageViews: Record<string, number> = {}
    let totalPageViews = 0
    for (const date of dates) {
      const data = await redis.zrange(`pv:${date}`, 0, -1, { withScores: true }) as (string | number)[]
      for (let i = 0; i < data.length; i += 2) {
        const path = data[i] as string
        const count = Number(data[i + 1])
        pageViews[path] = (pageViews[path] || 0) + count
        totalPageViews += count
      }
    }

    // Unique visitors
    let uniqueVisitors = 0
    if (days <= 1) {
      uniqueVisitors = await redis.scard(`visitors:${dates[0]}`) || 0
    } else {
      // Union all visitor sets via pipeline
      const tempKey = `_tmp_visitors_${Date.now()}`
      const keys = dates.map(d => `visitors:${d}`)
      const existingKeys: string[] = []
      for (const k of keys) {
        const exists = await redis.exists(k)
        if (exists) existingKeys.push(k)
      }
      if (existingKeys.length > 0) {
        await redis.sunionstore(tempKey, ...existingKeys)
        uniqueVisitors = await redis.scard(tempKey) || 0
        await redis.del(tempKey)
      }
    }

    // Traffic sources
    const sources: Record<string, number> = {}
    for (const date of dates) {
      const data = await redis.zrange(`ref:${date}`, 0, -1, { withScores: true }) as (string | number)[]
      for (let i = 0; i < data.length; i += 2) {
        const src = data[i] as string
        const count = Number(data[i + 1])
        sources[src] = (sources[src] || 0) + count
      }
    }

    // Scroll depth
    const scrollRaw: Record<string, number> = {}
    for (const date of dates) {
      const data = await redis.hgetall(`scroll:${date}`) as Record<string, string> | null
      if (data) {
        for (const [key, val] of Object.entries(data)) {
          scrollRaw[key] = (scrollRaw[key] || 0) + Number(val)
        }
      }
    }
    // Aggregate scroll by depth
    const scrollDepth: Record<string, number> = { '25': 0, '50': 0, '75': 0, '100': 0 }
    for (const [key, count] of Object.entries(scrollRaw)) {
      const depth = key.split(':').pop() || ''
      if (scrollDepth[depth] !== undefined) {
        scrollDepth[depth] += count
      }
    }

    // Engagement time
    const engageRaw: Record<string, number> = {}
    for (const date of dates) {
      const data = await redis.hgetall(`engage:${date}`) as Record<string, string> | null
      if (data) {
        for (const [key, val] of Object.entries(data)) {
          engageRaw[key] = (engageRaw[key] || 0) + Number(val)
        }
      }
    }
    const engagement: Record<string, number> = { '30': 0, '60': 0, '120': 0, '300': 0 }
    for (const [key, count] of Object.entries(engageRaw)) {
      const seconds = key.split(':').pop() || ''
      if (engagement[seconds] !== undefined) {
        engagement[seconds] += count
      }
    }

    // Device breakdown
    const devices: Record<string, number> = {}
    for (const date of dates) {
      const data = await redis.hgetall(`device:${date}`) as Record<string, string> | null
      if (data) {
        for (const [key, val] of Object.entries(data)) {
          devices[key] = (devices[key] || 0) + Number(val)
        }
      }
    }

    // Sort pages by views
    const topPages = Object.entries(pageViews)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)

    const topSources = Object.entries(sources)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)

    // Avg scroll depth
    const totalScrollEvents = Object.values(scrollDepth).reduce((a, b) => a + b, 0)
    const weightedScroll = (scrollDepth['25'] * 25 + scrollDepth['50'] * 50 + scrollDepth['75'] * 75 + scrollDepth['100'] * 100)
    const avgScrollDepth = totalScrollEvents > 0 ? Math.round(weightedScroll / totalScrollEvents) : 0

    // Avg engagement
    const totalEngageEvents = Object.values(engagement).reduce((a, b) => a + b, 0)
    const weightedEngage = (engagement['30'] * 30 + engagement['60'] * 60 + engagement['120'] * 120 + engagement['300'] * 300)
    const avgEngagement = totalEngageEvents > 0 ? Math.round(weightedEngage / totalEngageEvents) : 0

    return new Response(JSON.stringify({
      days,
      totalPageViews,
      uniqueVisitors,
      avgScrollDepth,
      avgEngagement,
      topPages,
      topSources,
      scrollDepth,
      engagement,
      devices,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
