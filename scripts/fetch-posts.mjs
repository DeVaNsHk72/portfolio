// Pulls the latest posts from the bear blog RSS feed into src/posts.json before each build.
// Bear Blog answers non-browser clients with 404, so this sends a browser-style User-Agent.
// If the fetch fails, the committed posts.json is kept so the build still works.
import { writeFileSync } from "node:fs";

const FEED = "https://dkay.bearblog.dev/feed/?type=rss";
const OUT = new URL("../src/posts.json", import.meta.url);

const decode = (s) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .trim();
const tag = (block, name) => decode(block.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1] ?? "");

try {
  const res = await fetch(FEED, {
    headers: { "User-Agent": "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/131 Safari/537.36" },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`feed returned ${res.status}`);
  const xml = await res.text();
  const posts = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => ({
    title: tag(item, "title"),
    url: tag(item, "link"),
    date: new Date(tag(item, "pubDate")).toISOString().slice(0, 10),
  }));
  posts.sort((a, b) => b.date.localeCompare(a.date));
  writeFileSync(OUT, JSON.stringify(posts, null, 2) + "\n");
  console.log(`fetch-posts: ${posts.length} posts`);
} catch (e) {
  console.warn(`fetch-posts: kept existing posts.json (${e.message})`);
}
