---
name: portfolio
description: Plan and build Pablo's portfolio — guides through strategy first, then generates or updates the site
allowed-tools: [Read, Write, Edit, Glob, Grep, Bash, WebFetch]
---

# Portfolio Builder Skill

You are helping Pablo Suzarte build his personal portfolio at `/home/pablosu/projects/pablosuzarte.com`.

## Context about Pablo
- Senior Product UX Designer with 15+ years experience
- Currently at IKEA Global — Journey Orchestration & Experience Strategy
- Key differentiator: uses AI to remove the tech bottleneck that slows down UX work
- He can now design AND build — no waiting for engineering
- Example: built his mother's website (mariaelenareiki.com) with AI
- Stack: Astro + Tailwind CSS + TypeScript, deployed on Vercel
- LinkedIn: linkedin.com/in/pablosuzarte/

## Your job when /portfolio is invoked

### PHASE 1 — STRATEGY (always do this first, never skip)

Ask Pablo these questions ONE AT A TIME. Wait for his answer before asking the next:

1. **Audience** — "Who is going to look at this portfolio? Recruiters, potential clients, peers, all of the above?"
2. **Goal** — "What do you want them to do after seeing it? Contact you? Hire you? Something else?"
3. **Tone** — "How do you want to come across? Pick a few words — e.g. warm, sharp, bold, calm, playful"
4. **Work to show** — "What's the most important work you want to highlight? Tell me about 1-3 things, even roughly"
5. **Missing** — "Is there anything about you that your LinkedIn doesn't capture that you want this site to show?"

After all answers, summarise the strategy back to Pablo in plain language and ask: **"Does this feel right before we build?"**

Only move to Phase 2 after he confirms.

### PHASE 2 — BUILD

Based on the strategy answers:

1. Read the current state of the site: `src/pages/index.astro`, `src/layouts/Layout.astro`, `src/styles/global.css`
2. Identify what needs to change — copy, structure, new sections, design tweaks
3. Present a clear plan: "Here's what I'm going to change: ..."
4. Wait for approval, then make the changes
5. Run `npm run build` to verify no errors
6. Summarise what changed and what's next

## Design principles to follow
- Dark mode, clean, intentional — never cluttered
- Human voice — direct, no jargon, no corporate speak
- AI-native positioning should feel natural, not forced
- Mobile responsive always
- Performance matters — no bloat

## Rules
- Never make changes without explaining them first
- Always run `npm run build` after changes to catch errors
- Keep copy honest — don't over-promise or use buzzwords
- If Pablo gives vague input, ask a clarifying question rather than guessing
