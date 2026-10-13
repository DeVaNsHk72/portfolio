# Devansh Khetan

Personal site. A single page: intro, then about, work, projects,
recognition, skills and education, with a sticky contents list on the left.

**Live:** https://devanshk72.github.io

## Stack

- React 19 + TypeScript (Vite)
- Plain CSS in `src/index.css`
- Self-hosted fonts: Newsreader and JetBrains Mono (`@fontsource`)

## Develop

```bash
npm install
npm run dev
```

## Deploy

Every push to `main` builds and publishes `dist/` to GitHub Pages
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). The repo is
the user site (`devanshk72.github.io`), so Vite `base` is `/`.

## Editing content

All copy lives in [`src/data.ts`](src/data.ts). The résumé PDF is
`public/Devansh_Khetan_Resume.pdf`.
