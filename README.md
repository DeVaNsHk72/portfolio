# Devansh Khetan — Portfolio

A retro-terminal / CRT themed developer portfolio. Boot-sequence hero, glitch
type, scanline overlays, and a fully responsive layout.

**Live:** _(add your Vercel URL here)_

## Stack

- **React 19 + TypeScript** (Vite)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** for scroll reveals
- Self-hosted fonts (`@fontsource` — JetBrains Mono + VT323)
- Hero adapted from a [21st.dev](https://21st.dev) terminal component

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-check + bundle to dist/
npm run preview  # preview the production build
```

## Deploy (Vercel)

Vercel auto-detects Vite. Framework preset: **Vite** · Build: `npm run build`
· Output: `dist`. Push to GitHub and import the repo at
[vercel.com/new](https://vercel.com/new), or run `npx vercel --prod`.

## Editing content

All copy lives in [`src/data.ts`](src/data.ts) — profile, experience,
projects, skills, and achievements. The résumé PDF is served from
`public/Devansh_Khetan_Resume.pdf`.

---

Built by Devansh Khetan · [github.com/DeVaNsHk72](https://github.com/DeVaNsHk72)
