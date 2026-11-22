// All site copy lives here. Sourced from Devansh's resume, project write-ups and GitHub.

export const profile = {
  name: "Devansh Khetan",
  email: "devanshkhetan72@gmail.com",
  resumeUrl: import.meta.env.BASE_URL + "Devansh_Khetan_Resume.pdf",
  socials: {
    github: "https://github.com/DeVaNsHk72",
    linkedin: "https://www.linkedin.com/in/devanshk72",
    blog: "https://dkay.bearblog.dev",
    leetcode: "https://leetcode.com/u/not_dal_baati",
  },
};

export const now = {
  updated: "November 2026",
  items: [
    "Writing Drover, a distributed job queue in Go on Redis.",
    "Moving NoteGo's backend from Express and MongoDB to Go and SQLite, with every PDF on S3.",
    "Finishing my final-year project on deepfake voice detection on a Raspberry Pi.",
  ],
};

export const about = {
  summary:
    "I'm a final-year Computer Science student at B.M.S. College of Engineering in Bengaluru. I interned at Frappe, and I run NoteGo, a study site used by over 6,000 BMSCE students.",
  detail:
    "I mostly work on backends and systems: services in Go and Python, data models that hold up, and LLM agents that answer from real data instead of guessing. I like measuring things before I claim them.",
  personal:
    "Outside of code I play piano and guitar, solve LeetCode as not_dal_baati, and write at dkay.bearblog.dev.",
  education: {
    school: "B.M.S. College of Engineering, Bengaluru",
    degree: "B.E. in Computer Science (IoT, Cyber Security and Blockchain)",
    period: "2023 – 2027",
    cgpa: "8.6 / 10",
    cert: "Supervised Machine Learning, DeepLearning.AI (2026)",
  },
};

export type Experience = {
  role: string;
  company: string;
  meta: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Software & Product Intern",
    company: "Frappe Technologies",
    meta: "Bengaluru, hybrid",
    period: "Oct – Dec 2025",
    points: [
      "Built editor and UI features for Frappe Drive and Frappe Writer, including custom tables in ProseMirror.",
      "Worked on export pipelines that turn one source document into PDF, Markdown and HTML.",
      "Shipped through PR review and CI in a large open-source codebase that uses Git submodules.",
    ],
    tags: ["Vue 3", "ProseMirror", "Python", "frappe-ui"],
  },
  {
    role: "Sponsorship lead",
    company: "UTSAV, BMSCE",
    meta: "BMSCE's annual college fest",
    period: "Oct 2024 – Apr 2026",
    points: [
      "Signed Paytm, Realme and Unibic after 50+ cold pitches.",
      "Ran on-ground activations with the brand teams.",
    ],
    tags: [],
  },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  status?: string;
  stat?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    name: "ERP Agent",
    blurb:
      "A chat panel inside ERPNext that answers questions on live business data. Permissions are enforced in code, SQL runs through a SELECT-only account, and drafts are checked in a rolled-back savepoint before anyone confirms them. I then fine-tuned Qwen3.5-9B with QLoRA to replace the hosted 120B model it started on.",
    tags: ["Python", "Frappe v16", "Vue 3", "QLoRA"],
    stat: { value: "90.9%", label: "on a held-out company, vs 67.8% for the 120B teacher" },
  },
  {
    name: "NoteGo",
    blurb:
      "Notes, past papers and lab material for BMSCE, keyed by course code across 150 courses. I started it and still run it, on S3, CloudFront and EC2.",
    tags: ["React", "Go", "AWS"],
    href: "https://notego.in",
    status: "live",
    stat: { value: "6,000+", label: "students use it" },
  },
  {
    name: "Kronos",
    blurb:
      "Second runner-up at the Databricks Campus Hackathon 2026. An ETL that shreds exam papers into a seven-table star schema, so an agent can answer questions about academic performance from rows rather than retrieved passages.",
    tags: ["Databricks", "SQL", "Python"],
    href: "https://github.com/DeVaNsHk72/kronos",
    stat: { value: "15,888", label: "questions pulled from 696 papers" },
  },
  {
    name: "Drover",
    blurb:
      "A small job queue in Go, meant to be readable where Celery and BullMQ are not. Every state change is one atomic Lua script, so a job is never handed to two workers or lost between commands.",
    tags: ["Go", "Redis", "Lua", "Docker"],
    href: "https://github.com/DeVaNsHk72/drover",
    status: "building",
  },
  {
    name: "Deepfake voice detection on a Pi",
    blurb:
      "Final-year project. A spoofed-speech detector that runs on a Raspberry Pi with no cloud call, trained with replay-channel simulation so it holds up on real microphone audio.",
    tags: ["PyTorch", "Raspberry Pi", "DSP"],
    stat: { value: "0.956", label: "AUC on ASVspoof 2019 LA" },
  },
  {
    name: "TinyVoiceGuard",
    blurb:
      "The same problem pushed down to microcontroller size: an MFCC CNN with int8 weights, pruning, and a plain C engine that matches the Python reference.",
    tags: ["PyTorch", "C", "int8"],
    href: "https://github.com/DeVaNsHk72/tinyvoiceguard",
    stat: { value: "970 B", label: "of weights after pruning" },
  },
  {
    name: "Oxidize",
    blurb:
      "A Claude Code skill for porting codebases to Rust one piece at a time, with differential tests proving each piece behaves like the original.",
    tags: ["Rust", "Claude Code"],
    href: "https://github.com/DeVaNsHk72/oxidize",
  },
];

export const older: Project[] = [
  {
    name: "Chef-Jugaad",
    blurb: "Recipes from whatever is in your kitchen.",
    tags: ["React", "LLM API"],
    href: "https://chef-jugaad.vercel.app/",
  },
  {
    name: "Veri-Update",
    blurb: "Software updates recorded on a blockchain so clients can check them.",
    tags: ["Solidity", "Web3"],
  },
  {
    name: "CIFAR-10 classifier",
    blurb: "A CNN from scratch against a fine-tuned ResNet-18.",
    tags: ["PyTorch"],
  },
  {
    name: "Stock-Predictor",
    blurb: "Past prices next to a Prophet forecast.",
    tags: ["Python", "Streamlit"],
    href: "https://github.com/Devanshk9/Stock_Predictor",
  },
];

export type Contribution = { repo: string; what: string; state: string; href: string };

export const openSource: Contribution[] = [
  {
    repo: "apache/superset",
    what: "Made exported ZIP archives deterministic by stamping entries with the export time.",
    state: "merged",
    href: "https://github.com/apache/superset/pull/44391",
  },
  {
    repo: "mllam/neural-lam",
    what: "Exponential moving average of model weights as a Lightning callback.",
    state: "in review",
    href: "https://github.com/mllam/neural-lam/pull/739",
  },
  {
    repo: "sqlfluff/sqlfluff",
    what: "Rule LT16, putting GROUP BY and ORDER BY targets on separate lines.",
    state: "proposed",
    href: "https://github.com/sqlfluff/sqlfluff/pull/8249",
  },
  {
    repo: "frappe/frappe-ui",
    what: "Table improvements for the editor: menus, resizing, copy and paste.",
    state: "internship",
    href: "https://github.com/frappe/frappe-ui/pull/561",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Go", "Python", "C++", "C", "JavaScript", "SQL"] },
  { label: "Backend", items: ["REST APIs", "Redis", "FastAPI", "Node.js", "SQLite", "PostgreSQL"] },
  { label: "Cloud", items: ["AWS (EC2, S3, CloudFront)", "Docker", "GitHub Actions", "Linux"] },
  { label: "ML", items: ["PyTorch", "QLoRA", "LangChain", "Ollama", "Databricks"] },
];

export type Achievement = {
  title: string;
  period: string;
  meta: string;
  points: string[];
};

export const achievements: Achievement[] = [
  {
    title: "Databricks Campus Hackathon, second runner-up",
    period: "2026",
    meta: "For Kronos",
    points: [],
  },
  {
    title: "Flipkart GRiD 8.0, national semi-finalist",
    period: "2026",
    meta: "Reached round 3",
    points: [],
  },
  {
    title: "ACM India Winter School, IIIT Allahabad",
    period: "",
    meta: "One of 50 students selected nationally",
    points: [],
  },
  {
    title: "Found a data leak in BMSCE's e-governance portal",
    period: "2025",
    meta: "Responsible disclosure",
    points: [
      "An authentication flaw exposed student records. I found it by testing access control by hand, reported it, and helped move the portal to token-based auth.",
    ],
  },
  {
    title: "Google Code-in 2019–20, global runner-up",
    period: "2019",
    meta: "Out of 15,000+ participants, with 37 contributions to OpenMRS",
    points: [],
  },
];
