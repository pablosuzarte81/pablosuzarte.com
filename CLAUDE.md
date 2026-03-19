# pablosuzarte.com

Personal portfolio site.

## Stack
- Astro (static site generator)
- Tailwind CSS v4
- TypeScript (strict)
- Deployed on Vercel

## Commands
- `npm run dev` — start dev server (localhost:4321)
- `npm run build` — production build
- `npm run preview` — preview production build
- `npx astro check` — type check

## Structure
- `src/pages/` — pages (file-based routing)
- `src/layouts/` — shared layout components
- `src/components/` — reusable components
- `src/styles/global.css` — global styles (Tailwind entry point)
- `public/` — static assets (images, fonts, etc.)

## Notes
- Import `../styles/global.css` in any layout that needs Tailwind
- Prettier is configured with `prettier-plugin-astro`
