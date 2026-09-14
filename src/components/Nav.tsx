import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data";

const links = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "achievements", label: "wins" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...links.map((l) => l.id)];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-2 text-sm">
          <span className="text-green">{profile.handle}@portfolio</span>
          <span className="text-dim">:</span>
          <span className="text-amber">~</span>
          <span className="text-fg-soft">$</span>
          <span className="blink text-green">_</span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`px-3 py-1.5 text-sm transition-colors ${
                  active === l.id
                    ? "text-green-bright glow"
                    : "text-fg-soft hover:text-green"
                }`}
              >
                <span className="inline-block w-3 text-dim">
                  {active === l.id ? ">" : ""}
                </span>
                {l.label}
              </a>
            </li>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-term amber ml-3 !py-1.5 !px-3 text-xs"
          >
            resume.pdf
          </a>
        </ul>

        {/* mobile toggle */}
        <button
          className="-mr-2 grid h-11 w-11 place-items-center text-green md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-fg-soft hover:text-green"
                >
                  <span className="text-dim">$ cd </span>
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 py-2.5 text-sm text-amber"
            >
              <span className="text-dim">$ open </span>resume.pdf
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
