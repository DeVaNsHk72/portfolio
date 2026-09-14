import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { Github } from "./BrandIcons";
import { profile, bootLines } from "@/data";

/** Rotating role text with a typewriter effect. */
const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useTypewriter(words: string[], speed = 70, pause = 1400) {
  const [text, setText] = useState(reducedMotion() ? words[0] : "");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (reducedMotion()) return;
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(
      () => {
        setText((prev) =>
          del ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        );
      },
      del ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const [lineCount, setLineCount] = useState(() =>
    reducedMotion() ? bootLines.length : 0
  );
  const ref = useRef<HTMLDivElement>(null);

  // Boot lines type themselves in alongside the identity -- they never gate it.
  useEffect(() => {
    if (lineCount >= bootLines.length) return;
    const t = setTimeout(() => setLineCount((c) => c + 1), 110);
    return () => clearTimeout(t);
  }, [lineCount]);

  // Reactive glow following the cursor.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* reactive grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx, 50%) var(--my, 30%), rgba(76,224,136,0.10), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-28 sm:px-8">
        {/* boot terminal */}
        <div className="mb-10 min-h-[7.5rem] max-w-xl font-mono text-sm leading-relaxed">
          {bootLines.slice(0, lineCount).map((line, idx) => (
            <div
              key={idx}
              className={
                line.startsWith(">") ? "text-amber" : "text-fg-soft/80"
              }
            >
              <span className="text-green">
                {line.startsWith(">") ? "" : "[ ok ] "}
              </span>
              {line}
            </div>
          ))}
          {lineCount < bootLines.length && (
            <span className="text-green blink">▮</span>
          )}
        </div>

        {/* main identity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm tracking-widest text-green uppercase">
            $ ./devansh --introduce
          </p>

          <h1 className="font-crt text-6xl leading-[0.95] tracking-tight sm:text-8xl">
            <span className="text-fg">Devansh</span>{" "}
            <span className="glitch" data-text="Khetan">
              Khetan
            </span>
          </h1>

          <div className="mt-5 h-7 font-mono text-lg text-green-bright sm:text-2xl">
            <span className="text-dim">&gt; </span>
            {role}
            <span className="blink">_</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-soft sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-term">
              <span className="text-dim">$</span> view projects
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-term amber"
            >
              <FileText size={16} /> resume.pdf
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn-term"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-term"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center text-dim hover:text-green"
        aria-label="Scroll to about"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
