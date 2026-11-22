// All site copy lives here. [text](url) inside any text becomes a link.

const BASE = import.meta.env.BASE_URL;
const CV = BASE + "Devansh_Khetan_Resume.pdf";

export const profile = {
  name: "Devansh Khetan",
  signature: "devansh",
};

// the opening lines, before any section
export const intro: string[] = [
  "hi",
  "i'm devansh, a final-year computer science student at bmsce in bengaluru. i like building backends, data systems, and llm agents that answer from real data instead of guessing. if you prefer reading, my cv is [here](" + CV + ").",
];

export type Item = {
  name?: string; // bold title; leave out for a plain paragraph
  href?: string;
  meta?: string; // small grey text on the right (date, status)
  role?: string; // shown after the name, e.g. "SDE intern"
  text: string;
  stack?: string; // small grey line under the text
};

export type Section = { title: string; items: Item[] };

export const sections: Section[] = [
  {
    title: "work",
    items: [
      {
        name: "Frappe",
        href: "https://frappe.io",
        role: "SDE intern",
        meta: "oct – dec 2025",
        text: "worked on frappe drive and frappe writer, the company's open-source file storage and document editor. i built editor features like custom tables in prosemirror, wrote vue components with frappe-ui, and worked on exporting one document to pdf, markdown and html. i also reproduced and fixed bugs users reported. every change went through code review and ci on a large open-source codebase.",
        stack: "vue 3, prosemirror, python, frappe-ui, tailwind",
      },
      {
        name: "UTSAV, BMSCE",
        meta: "2024 – 2026",
        text: "sponsorship lead for the college fest. pitched 50+ brands and signed paytm, realme and unibic.",
      },
    ],
  },
  {
    title: "projects",
    items: [
      {
        name: "NoteGo",
        href: "https://notego.in",
        meta: "live, 6,000+ students",
        text: "finding notes and past papers at bmsce used to mean digging through random drive folders, so i built one place for all of it, sorted by course code across 150 courses. i started it, i run it, and most of the college uses it now. right now i'm rewriting the backend from express and mongodb to go and sqlite.",
        stack: "react, go, sqlite, aws (s3, cloudfront, ec2)",
      },
      {
        name: "ERP Agent",
        meta: "2026",
        text: "a chat panel inside erpnext. you ask something like \"which invoices are overdue this quarter\" and it finds the right data and answers with tables and charts. it only sees what you're allowed to see, sql runs through a read-only account, and nothing is written until you click confirm. it started on a hosted 120b model; i then fine-tuned a 9b model with qlora to replace it, and the small one scored 90.9% on a company it had never seen, against 67.8% for the big one.",
        stack: "python, frappe, vue, qwen 9b, qlora",
      },
      {
        name: "Kronos",
        href: "https://github.com/DeVaNsHk72/kronos",
        meta: "hackathon, 2nd runner-up",
        text: "built at the databricks campus hackathon. it turns 696 exam papers into 15,888 structured questions in a proper sql warehouse, so an agent can answer questions about academic performance from actual rows instead of guessed text.",
        stack: "databricks, sql, python",
      },
      {
        name: "Drover",
        href: "https://github.com/DeVaNsHk72/drover",
        meta: "in progress",
        text: "a small job queue in go, meant to be easy to read where celery and bullmq aren't. every state change is a single atomic lua script on redis, so a job is never given to two workers or lost in between.",
        stack: "go, redis, lua, docker",
      },
      {
        name: "deepfake voice detection",
        meta: "final-year project",
        text: "spots fake, ai-generated speech on a raspberry pi with no internet needed. it's trained on audio played through speakers and re-recorded, so it still works on a real microphone. 83.8% accuracy and 0.956 auc on asvspoof 2019.",
        stack: "pytorch, raspberry pi, signal processing",
      },
      {
        name: "TinyVoiceGuard",
        href: "https://github.com/DeVaNsHk72/tinyvoiceguard",
        text: "the same idea shrunk down for microcontrollers. after pruning, the whole model is under a kilobyte, and a plain c version gives the same answers as the python one.",
        stack: "pytorch, c",
      },
      {
        name: "Oxidize",
        href: "https://github.com/DeVaNsHk72/oxidize",
        text: "a claude code skill that helps move a codebase to rust one piece at a time, with tests that check each piece still behaves like the original.",
        stack: "rust",
      },
      {
        text: "older stuff: [Chef-Jugaad](https://chef-jugaad.vercel.app/) (recipes from whatever's in your kitchen), Veri-Update (software updates checked on a blockchain), and a few ml experiments like a cifar-10 classifier and a [stock forecaster](https://github.com/Devanshk9/Stock_Predictor).",
      },
    ],
  },
  {
    title: "open source",
    items: [
      {
        text: "i fixed exported zip files in [apache superset](https://github.com/apache/superset/pull/44391) so the same export always gives the same file (merged). i've also sent a training feature to [neural-lam](https://github.com/mllam/neural-lam/pull/739), a new lint rule to [sqlfluff](https://github.com/sqlfluff/sqlfluff/pull/8249), and table improvements to [frappe-ui](https://github.com/frappe/frappe-ui/pull/561). back in school i made 37 contributions to openmrs during google code-in.",
      },
    ],
  },
  {
    title: "a few wins",
    items: [
      {
        text: "global runner-up, google code-in 2019–20, out of 15,000+ students. national semi-finalist, flipkart grid 8.0. second runner-up, databricks campus hackathon 2026. one of 50 students picked for the acm india winter school at iiit allahabad. i also found a data leak in my college's portal, reported it, and helped them fix it.",
      },
    ],
  },
  {
    title: "education",
    items: [
      {
        name: "B.M.S. College of Engineering",
        meta: "2023 – 2027",
        text: "b.e. in computer science (iot, cyber security and blockchain). cgpa 8.6.",
      },
    ],
  },
  {
    // filled from the blog's rss feed at build time (scripts/fetch-posts.mjs → src/posts.json)
    title: "writing",
    items: [],
  },
  {
    title: "outside code",
    items: [
      {
        text: "i play piano and guitar, solve leetcode as not_dal_baati, and sometimes write on my [blog](https://dkay.bearblog.dev). this is the song on repeat right now:",
      },
    ],
  },
];

// paste a spotify playlist, album or track link here and it shows up as a player
// under "outside code", plus a spotify icon in the link row. leave "" to hide both.
const SPOTIFY_URL: string = "https://open.spotify.com/track/567e29TDzLwZwfDuEpGTwo";

export const spotify = {
  url: SPOTIFY_URL,
  // https://open.spotify.com/playlist/ID -> https://open.spotify.com/embed/playlist/ID
  embed: SPOTIFY_URL ? SPOTIFY_URL.split("?")[0].replace("open.spotify.com/", "open.spotify.com/embed/") : "",
};

// closing lines, after the sections
export const outro: string[] = ["reach out to me at devanshkhetan72 [at] gmail [dot] com", "thanks!"];

export const links: { label: string; href: string }[] = [
  { label: "cv", href: CV },
  { label: "email", href: "mailto:devanshkhetan72@gmail.com" },
  { label: "github", href: "https://github.com/DeVaNsHk72" },
  { label: "linkedin", href: "https://www.linkedin.com/in/devanshk72" },
  { label: "leetcode", href: "https://leetcode.com/u/not_dal_baati" },
  { label: "blog", href: "https://dkay.bearblog.dev" },
  { label: "spotify", href: "https://open.spotify.com/user/z8etmld9xst8rq3imqdltp5yp" },
];
