// Blog posts live in src/posts/*.md. To add one, create a new .md file with this header:
// ---
// title: "My post title"
// date: 2026-11-22
// ---
// and write the post in markdown below it. The file name becomes the URL: blog/<file-name>/
import { marked } from "marked";

export type Post = { slug: string; title: string; date: string; html: string };

const files = import.meta.glob("./posts/*.md", { query: "?raw", import: "default", eager: true }) as Record<
  string,
  string
>;

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    const meta = Object.fromEntries(
      (m?.[1] ?? "").split("\n").map((l) => {
        const i = l.indexOf(":");
        const v = l.slice(i + 1).trim();
        return [l.slice(0, i).trim(), v.startsWith('"') ? JSON.parse(v) : v];
      }),
    );
    return { slug, title: meta.title ?? slug, date: meta.date ?? "", html: marked.parse(m?.[2] ?? raw) as string };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const fmtDate = (d: string, long = false) =>
  new Date(d)
    .toLocaleDateString("en-IN", long ? { day: "numeric", month: "long", year: "numeric" } : { month: "short", year: "numeric" })
    .toLowerCase();
