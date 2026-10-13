// All site copy lives here. Sourced from Devansh's resume and GitHub profile.

export const profile = {
  name: "Devansh Khetan",
  email: "devanshkhetan9@gmail.com",
  resumeUrl: import.meta.env.BASE_URL + "Devansh_Khetan_Resume.pdf",
  socials: {
    github: "https://github.com/DeVaNsHk72",
    linkedin: "https://linkedin.com/in/devansh-khetan-027681176",
    blog: "https://dkay.bearblog.dev",
    leetcode: "https://leetcode.com/u/not_dal_baati",
  },
};

export const about = {
  summary:
    "I'm a final-year Computer Science student at B.M.S. College of Engineering in Bengaluru, specialising in cyber security. I interned at Frappe, where I worked on Frappe Drive and Frappe Writer, and I run NoteGo, a study site used by over 6,000 BMSCE students.",
  detail:
    "Most of what I build is full-stack web apps and tools around LLMs. Right now that means local RAG pipelines and PyTorch models.",
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
    meta: "Remote",
    period: "Oct – Dec 2025",
    points: [
      "Built editor and UI features for Frappe Drive and Frappe Writer, including custom tables in ProseMirror.",
      "Wrote Vue 3 components with frappe-ui and Tailwind.",
      "Shipped through PR reviews and CI in a large open-source codebase that uses Git submodules.",
    ],
    tags: ["Vue 3", "Vite", "Tailwind", "ProseMirror"],
  },
  {
    role: "Sponsorship lead",
    company: "UTSAV, BMSCE",
    meta: "BMSCE's annual college fest",
    period: "Oct 2024 – Apr 2026",
    points: [
      "Handled brand partnerships for the fest.",
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
  live?: boolean;
};

export const projects: Project[] = [
  {
    name: "NoteGo",
    blurb:
      "A study site for BMSCE with notes, past papers and tutorials. I started it and still run it. Over 6,000 students use it.",
    tags: ["React", "Node", "Express", "MongoDB"],
    href: "https://notego.in",
    live: true,
  },
  {
    name: "Frappe app generator",
    blurb:
      "Generates Frappe app code with a local LLM. It looks up Frappe conventions before writing, so the code follows the framework instead of guessing.",
    tags: ["LangChain", "Ollama", "qwen3-coder", "nomic-embed-text"],
  },
  {
    name: "Veri-Update",
    blurb: "Records software updates on a blockchain so a client can check that an update hasn't been tampered with.",
    tags: ["Solidity", "Truffle", "Web3"],
  },
  {
    name: "Chef-Jugaad",
    blurb: "Tell it what's in your kitchen and it suggests recipes you can make with it.",
    tags: ["React", "LLM API"],
    href: "https://chef-jugaad.vercel.app/",
    live: true,
  },
  {
    name: "CIFAR-10 classifier",
    blurb:
      "A CNN trained from scratch compared against a fine-tuned ResNet-18, with OpenCV preprocessing and a confusion-matrix breakdown.",
    tags: ["PyTorch", "torchvision", "OpenCV"],
  },
  {
    name: "Stock-Predictor",
    blurb: "Pick a ticker and a time range and it plots past prices next to a Prophet forecast.",
    tags: ["Python", "Prophet", "Streamlit"],
    href: "https://github.com/Devanshk9/Stock_Predictor",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "C++", "JavaScript", "Solidity", "SQL"] },
  { label: "Web", items: ["React", "Node.js", "FastAPI", "MongoDB", "PostgreSQL"] },
  { label: "ML", items: ["PyTorch", "Pandas", "LangChain", "Ollama"] },
  { label: "Security", items: ["Wireshark", "Selenium", "Linux", "Cryptography"] },
];

export type Achievement = {
  title: string;
  period: string;
  meta: string;
  points: string[];
};

export const achievements: Achievement[] = [
  {
    title: "Flipkart GRID 2026, national semi-finalist",
    period: "2026",
    meta: "Flipkart's national engineering challenge",
    points: [],
  },
  {
    title: "Found a data leak in BMSCE's e-governance portal",
    period: "2025",
    meta: "Responsible disclosure",
    points: [
      "An authentication flaw exposed student records. I found it by testing access control and input validation by hand.",
      "Reported it and helped move the portal to token-based auth.",
    ],
  },
  {
    title: "Google Code-in 2019–20, runner-up",
    period: "2019",
    meta: "15,000+ participants worldwide",
    points: ["Made 37 contributions to OpenMRS across Android, frontend and bug fixes."],
  },
];
