# pablosuzarte.com

Personal portfolio site for Pablo Suzarte — Senior Product UX Designer.

## Stack

- **Astro 6** — static site generator, zero JS by default
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin (not the PostCSS plugin)
- **TypeScript strict** — `astro/tsconfigs/strict`
- **Prettier** — with `prettier-plugin-astro`
- **Deployed on Vercel**

## Commands

- `npm run dev` — start dev server (localhost:4321)
- `npm run build` — production build
- `npm run preview` — preview production build
- `npx astro check` — type check

## Project Structure

```
src/
  pages/
    index.astro       # Single-page portfolio (all sections)
  layouts/
    Layout.astro      # Base HTML shell — imports global.css, loads Inter font
  styles/
    global.css        # Tailwind entry point + CSS custom properties + resets
public/
  pablo_profile_photo.png   # Used in hero section
  pablo.jpg                 # Alternative photo
  favicon.ico / favicon.svg
.claude/
  settings.local.json       # Claude Code permissions & hooks
  commands/portfolio.md     # /portfolio skill definition
```

No `src/components/` folder yet — all markup lives in `index.astro`.

## Configuration Notes

- Tailwind is integrated as a **Vite plugin** (`@tailwindcss/vite`), not PostCSS. Do not add a `tailwind.config.js`.
- Import `../styles/global.css` in any layout that needs Tailwind.
- Prettier: `semi: false`, `singleQuote: true`, `tabWidth: 2`, `trailingComma: "es5"`.

## Design System

All CSS lives in `src/styles/global.css` and `src/pages/index.astro` (scoped `<style>` block).

### CSS Custom Properties (dark theme, defined in `:root`)

```css
--bg: #0a0a0f          /* Page background */
--surface: #12121a     /* Card background */
--surface-2: #1a1a27   /* Hover/elevated surface */
--border: #1e1e2e      /* Border color */
--accent: #64ffda      /* Cyan accent — CTAs, highlights */
--accent-dim: ...      /* Translucent accent for gradients */
--accent-glow: ...     /* Glow effect color */
--text: #e2e8f0        /* Primary text */
--muted: #64748b       /* Secondary/muted text */
```

### Breakpoint

Single breakpoint at `768px` for mobile responsive layout.

## Page Sections (index.astro)

1. **Nav** — Fixed, glassmorphic (backdrop-filter blur), "PS" logo + anchor links
2. **Hero** — Full-height, split layout (text left / photo right), gradient radial bg, animated CTAs
3. **About** — 3 paragraphs + 3 stat badges (15+ years / 4 orgs / AI native)
4. **Experience** — Timeline with 5 jobs, custom dots + connecting lines, hover effects
5. **Skills** — Pill tags grid + education + certifications
6. **Contact** — LinkedIn CTA
7. **Footer** — Copyright + tech stack credit

### Experience Data (hardcoded in index.astro frontmatter)

| Company | Role | Period |
|---|---|---|
| IKEA Global | Senior Product UX Designer | May 2022–Present |
| Prisjakt | Lead B2B Designer → Senior UX Designer | Apr 2019–May 2022 |
| Hero Gaming | Senior → UX Designer | Oct 2016–Feb 2019 |
| Mobenga | Interaction/UX Designer | Mar 2013–Sep 2016 |
| Freelance | Service Design | Jan 2016–May 2022 |

### Skills (16 total)

Journey Orchestration, User Research, Service Design, Workshop Facilitation, Cross-functional Leadership, Stakeholder Management, Systems Thinking, Prototyping, Figma, Information Architecture, Usability Testing, Interaction Design, AI-Assisted Design, Design Strategy, Experience Strategy, Product Thinking.

## About Pablo (always keep this in mind)

Pablo Suzarte — Senior Product UX Designer, 15+ years experience. Currently at IKEA Global doing Journey Orchestration & Experience Strategy.

**Core positioning for this portfolio:**

- AI has removed the tech bottleneck that always slowed down UX work
- Pablo can now design AND build — no waiting for engineering
- He wants to be presented as a UX expert, but with AI capability woven in naturally
- Not a developer, not just a designer — someone who uses AI to do both
- Real proof point: built his mother's website (mariaelenareiki.com) with AI
- His words: "AI allows me to do handmade user experiences in any platform"

**Leadership inspiration:** "Escaping the Build Trap" by Melissa Perri — outcome over output, empowering teams to discover real problems, not just ship features.

**Critical framing:** Pablo is NOT a one-man band. AI is a team multiplier — he uses it to make learning cycles faster and help teams adapt. He builds environments and brings people together. Always lead with leadership and cross-functional impact, not solo capability.

**Tone:** Direct, human, no corporate speak. Confident but collaborative. Outcome-led language.

**Domain:** pablosuzarte.com — transferred from Squarespace to Vercel (initiated 2026-03-19, may now be live).
**LinkedIn:** linkedin.com/in/pablosuzarte/

## AI Assistant Conventions

- **Do not refactor** unless explicitly asked. The single-file approach in `index.astro` is intentional.
- **Keep the dark theme** — all additions should use CSS custom properties, not hardcoded colors.
- **Verify with `npm run build`** after any structural changes to catch Astro/TS errors.
- **No new dependencies** without good reason — the current dep count is intentionally minimal.
- **Content changes** (copy, experience entries, skills) live in the `---` frontmatter or inline in `index.astro`.
- **New sections** should follow the existing pattern: semantic HTML, scoped `<style>`, CSS custom properties.
- When adding images, place them in `public/` and reference as `/filename.ext`.
