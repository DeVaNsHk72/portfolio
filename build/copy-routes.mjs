// After the build, copy index.html to each blog URL so direct links to a post
// load with a normal 200 on GitHub Pages and Vercel (the app picks the page from the URL).
import { copyFileSync, mkdirSync, readdirSync } from "node:fs";

const dist = new URL("../dist/", import.meta.url);
const slugs = readdirSync(new URL("../src/posts/", import.meta.url))
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""));

for (const route of ["blog", ...slugs.map((s) => `blog/${s}`)]) {
  const dir = new URL(`${route}/`, dist);
  mkdirSync(dir, { recursive: true });
  copyFileSync(new URL("index.html", dist), new URL("index.html", dir));
}
copyFileSync(new URL("index.html", dist), new URL("404.html", dist));
console.log(`copy-routes: blog + ${slugs.length} posts`);
