# Devansh Khetan — Portfolio

A retro-terminal / CRT themed developer portfolio. Boot-sequence hero, glitch
type, scanline overlays, and a fully responsive layout.

**Live:** https://devanshk72.github.io/portfolio/

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

## Deploy (GitHub Pages)

Deployed via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):
every push to `main` builds and publishes `dist/` to Pages. The site is a
project page, so `base` is set to `/portfolio/` in `vite.config.ts` — rename
that if you rename the repo. Pages source must be set to **GitHub Actions**
(Settings → Pages).

## Editing content

All copy lives in [`src/data.ts`](src/data.ts) — profile, experience,
projects, skills, and achievements. The résumé PDF is served from
`public/Devansh_Khetan_Resume.pdf`.

---

Built by Devansh Khetan · [github.com/DeVaNsHk72](https://github.com/DeVaNsHk72)
