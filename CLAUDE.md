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

## Project Structure (Current — as of 2026-03-23)

```
src/
  pages/
    index.astro               # EN homepage — delegates to PortfolioPage.astro
    sv/index.astro            # SV homepage — delegates to PortfolioPage.astro
    es/index.astro            # ES homepage — delegates to PortfolioPage.astro
    ai-project-brain-lab.astro # Dedicated AI + Education portfolio page
    projects/
      [slug].astro            # Dynamic case study template (getStaticPaths)
  components/
    PortfolioPage.astro       # All portfolio sections + scoped CSS (single source of truth)
  layouts/
    Layout.astro              # Base HTML shell — imports global.css, loads Inter font
  styles/
    global.css                # Tailwind entry point + CSS custom properties + resets
  i18n/
    translations.ts           # T interface + translations for en / sv / es
  data/
    projects.ts               # ProjectCase interface + projects[] array
public/
  pablo_profile_photo.png     # Used in hero section
  pablo.jpg                   # Alternative photo
  favicon.ico / favicon.svg
  projects/                   # Cover images for case studies (e.g. ikea-cover.jpg) — ADD HERE
.claude/
  settings.local.json         # Claude Code permissions & hooks
  commands/portfolio.md       # /portfolio skill definition
```

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

## Page Sections (PortfolioPage.astro)

Nav has 5 links: About · AI & Education · Experience · Skills · Contact

1. **Nav** — Fixed, glassmorphic (backdrop-filter blur), "PS" logo + anchor links + language switcher (EN/SV/ES)
2. **Hero** — Full-height, split layout (text left / photo right), gradient radial bg, animated CTAs
3. **About** — label `01` — 3 paragraphs + 3 stat badges (15+ years / 4 orgs / AI native)
4. **AI & Education** — label `02` — featured teaser for `AI Project Brain Lab`, linking to the dedicated page
5. **Experience** — label `03` — Timeline with 5 jobs, custom dots + connecting lines, hover effects
6. **Skills** — label `04` — Pill tags grid + education + certifications
7. **Contact** — label `05` — LinkedIn CTA
8. **Footer** — Copyright + tech stack credit

## AI Project Brain Lab Page

Route: `src/pages/ai-project-brain-lab.astro`

- this page is now the internal portfolio home for the AI + Education project
- it includes a second hero framing the future role around `Designing Project Intelligence`
- it should stay aligned with the main portfolio visual language, not feel like a separate microsite

### Future note

The page is in a good enough live state, but the content still needs a refinement pass later. The next strong content pass should make the role definition, teaching arc, and conceptual language more elegant and more teachable without changing the overall direction.

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

**Domain:** pablosuzarte.com — live on Vercel (domain transferred from Squarespace, confirmed live 2026-03-20).
**LinkedIn:** linkedin.com/in/pablosuzarte/

## Case Study Pages (`/projects/[slug]`)

Template: `src/pages/projects/[slug].astro` — dynamic route, English-only, outside i18n routing.

Data source: `src/data/projects.ts` exports `ProjectCase[]`. To add a new case study, add an entry to the `projects` array — the page is generated automatically.

**`ProjectCase` key fields:** `slug`, `title`, `company`, `role`, `period`, `tagline`, `coverImage`, `heroMetrics[]`, `businessNeed`, `userNeed`, `roleTitle`, `responsibilities[]`, `owned[]`, `collaborated[]`, `teamContext`, `challengeStatement` (HMW format), `problemDiscovery`, `researchMethods[]`, `workshops[]`, `dataAnalysisApproach`, `sharingSessions`, `insights[]`, `opportunities[]`, `designSteps[]` (with optional `stakeholderMoment`), `outcomeMetrics[]`, `nextProjectSlug`.

**Cover images:** place in `public/projects/` and reference as `/projects/filename.jpg`.

**Current entries:**
| Slug | Company | Status |
|---|---|---|
| `ikea-journey-orchestration` | IKEA Global | Placeholder — real content TBD |

**Sections in the template (in order):** back nav → hero (metrics) → 01 Overview → 02 My Role → 03 Problem Framing → 04 Research → 05 Synthesis → 06 Design Process (timeline) → 07 Impact → Next/Back

## i18n Architecture

- `src/i18n/translations.ts` exports `T` interface + `translations: Record<Locale, T>`
- Locales: `en` (default, no prefix), `sv` (`/sv/`), `es` (`/es/`)
- All portfolio text goes through `T` — update all 3 locales when adding new keys
- Case study pages are English-only — not translated
- `prefixDefaultLocale: false` in `astro.config.mjs` — EN has no URL prefix

## AI Assistant Conventions

- **Do not refactor** unless explicitly asked. `PortfolioPage.astro` is the single source of truth for portfolio layout.
- **Keep the dark theme** — all additions must use CSS custom properties, not hardcoded colors.
- **Verify with `npm run build`** after any structural changes to catch Astro/TS errors.
- **No new dependencies** without good reason — the current dep count is intentionally minimal.
- **Content changes** — portfolio copy lives in `translations.ts`; case study data lives in `src/data/projects.ts`.
- **New sections** should follow the existing pattern: semantic HTML, scoped `<style>`, CSS custom properties.
- **CSS is scoped** — classes in `PortfolioPage.astro` are NOT available in `[slug].astro`. Redefine layout utilities locally in each component.
- When adding images, place them in `public/` and reference as `/filename.ext`.
