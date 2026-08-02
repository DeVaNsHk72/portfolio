// ---------------------------------------------------------------------------
//  Central content — sourced from Devansh Khetan's resume + GitHub profile.
//  Edit here to update the whole site.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Devansh Khetan",
  handle: "devanshk",
  roles: [
    "AI / Deep-Learning Enthusiast",
    "Full-Stack Engineer",
    "Security & Systems Tinkerer",
  ],
  tagline:
    "Final-year CS (Cyber Security) undergrad who ships production features end to end — from LLM/RAG systems to full-stack apps used by thousands.",
  location: "Bengaluru, India",
  email: "devanshkhetan9@gmail.com",
  phone: "+91 8766099999",
  resumeUrl: "/Devansh_Khetan_Resume.pdf",
  socials: {
    github: "https://github.com/DeVaNsHk72",
    github2: "https://github.com/Devanshk9",
    linkedin: "https://linkedin.com/in/devansh-khetan-027681176",
    blog: "https://dkay.bearblog.dev",
    leetcode: "https://leetcode.com/u/not_dal_baati",
  },
};

// Short boot-sequence lines shown while the hero "powers on".
export const bootLines = [
  "booting devOS v4.8 ...",
  "loading kernel modules [ ml • web • security ] ... ok",
  "mounting /home/devansh ... ok",
  "establishing secure shell ... ok",
  "> whoami",
];

export const stats = [
  { value: "6,000+", label: "users on shipped products" },
  { value: "8.6", label: "CGPA @ BMSCE" },
  { value: "37+", label: "open-source contributions" },
  { value: "2027", label: "graduating" },
];

export const about = {
  summary:
    "I'm a final-year Computer Science (Cyber Security) undergraduate at B.M.S. College of Engineering, Bengaluru. I've shipped production engineering work at Frappe (ERPNext) — a product used by 6,000+ people — and built hands-on projects across full-stack development, LLM/RAG systems, and security.",
  detail:
    "I like owning features end to end in fast, PR-driven codebases: reading a large open-source repo, finding the seam, and shipping the change. Lately I've been deep in local RAG pipelines, PyTorch, and blockchain-backed systems.",
  personal:
    "Off the keyboard you'll find me on a piano or guitar, grinding LeetCode as not_dal_baati, or writing build notes over at dkay.bearblog.dev.",
  education: {
    school: "B.M.S. College of Engineering, Bengaluru",
    degree: "B.E. — Computer Science & Engineering (IoT & Cyber Security incl. Blockchain)",
    period: "2023 – 2027",
    cgpa: "8.6 / 10",
    cert: "Supervised Machine Learning — DeepLearning.AI (2026)",
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
    company: "Frappe Technologies (ERPNext)",
    meta: "Remote",
    period: "Oct 2025 – Dec 2025",
    points: [
      "Shipped core editor and UI features across Frappe Drive and Frappe Writer, including customizable tables built with ProseMirror to improve editor flexibility.",
      "Built and refined Vue 3 + Vite + Tailwind components using frappe-ui.",
      "Worked with Git submodules, CI pipelines, PR reviews, and debugging inside a production open-source codebase.",
    ],
    tags: ["Vue 3", "Vite", "Tailwind", "ProseMirror", "CI/CD"],
  },
  {
    role: "Sponsorship Point of Contact",
    company: "UTSAV — BMSCE",
    meta: "One of Bengaluru's largest college festivals",
    period: "Oct 2024 – Apr 2026",
    points: [
      "Owned brand partnerships end to end for a festival with footfall in the tens of thousands.",
      "Onboarded Paytm, Realme, and Unibic through 50+ cold outreaches.",
      "Executed on-ground activations with brand teams.",
    ],
    tags: ["Partnerships", "Outreach", "Ops"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  live?: boolean;
  cmd: string;
};

export const projects: Project[] = [
  {
    name: "RAG System for Frappe App Generation",
    blurb:
      "A fully local retrieval-augmented code-generation pipeline that grounds LLM output in retrieved Frappe framework conventions — producing framework-correct app code instead of relying on model memory.",
    tags: ["LangChain", "Ollama · qwen3-coder", "nomic-embed-text", "RAG"],
    cmd: "run rag-frappe.py",
  },
  {
    name: "Image Classification with CNNs",
    blurb:
      "An image-classification pipeline on CIFAR-10 using a CNN trained from scratch and a fine-tuned ResNet-18 via transfer learning, with OpenCV preprocessing and accuracy / confusion-matrix analysis.",
    tags: ["Python", "PyTorch", "torchvision", "OpenCV"],
    cmd: "train cnn --data cifar10",
  },
  {
    name: "Veri-Update",
    blurb:
      "A blockchain-backed system for secure software-update delivery — verifying update integrity and authenticity to protect against tampered or malicious updates.",
    tags: ["Solidity", "Truffle", "Web3", "Tailwind"],
    cmd: "deploy veri-update.sol",
  },
  {
    name: "NoteGo.in",
    blurb:
      "Founder. A MERN study-materials platform I took from idea to campus-wide adoption — now used by 6,000+ students at BMSCE for notes, past papers, and curated tutorials.",
    tags: ["React", "Node", "MongoDB", "Express"],
    href: "https://notego.in",
    live: true,
    cmd: "open notego.in",
  },
  {
    name: "Chef-Jugaad",
    blurb:
      "An AI-powered recipe platform that instantly generates creative, easy-to-make dishes from the ingredients you already have on hand.",
    tags: ["React", "AI", "Vercel"],
    href: "https://chef-jugaad.vercel.app/",
    live: true,
    cmd: "open chef-jugaad",
  },
  {
    name: "Stock-Predictor",
    blurb:
      "Forecasts stock prices from historical data using the Prophet model — pick a ticker, set the horizon, and visualise historical vs. forecasted trends.",
    tags: ["Python", "Prophet", "Streamlit"],
    href: "https://github.com/Devanshk9/Stock_Predictor",
    cmd: "git clone Stock_Predictor",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "languages",
    items: ["Python", "C++", "JavaScript", "Solidity", "SQL"],
  },
  {
    label: "frameworks & tools",
    items: [
      "React.js",
      "Node.js",
      "MongoDB",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "Git / GitHub",
    ],
  },
  {
    label: "ml / ai",
    items: ["PyTorch", "Pandas", "LangChain", "Ollama", "torchvision"],
  },
  {
    label: "security & systems",
    items: ["Wireshark", "Selenium", "Linux / Unix Shell", "Cryptography"],
  },
  {
    label: "coursework",
    items: [
      "Cyber Security",
      "Ethical Hacking",
      "Cloud Computing & Security",
      "Machine Learning",
      "DSA",
      "OS",
      "Networks",
    ],
  },
];

export type Achievement = {
  title: string;
  meta: string;
  points: string[];
};

export const achievements: Achievement[] = [
  {
    title: "Security Tester — e-Governance Platform, BMSCE",
    meta: "Responsible disclosure",
    points: [
      "Identified a critical vulnerability exposing sensitive student data via improper authentication flows.",
      "Performed manual testing and exploit analysis (input validation, access-control flaws).",
      "Proposed and helped implement a token-based authentication system, significantly improving data security.",
    ],
  },
  {
    title: "Google Code-in 2019–20 — Runner-Up",
    meta: "Global finalist · 15,000+ participants",
    points: [
      "Completed 37+ open-source contributions to OpenMRS.",
      "Spanned Android development, frontend improvements, and bug fixes.",
    ],
  },
];
