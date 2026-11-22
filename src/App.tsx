import { useEffect, useRef, useState, type ReactNode } from "react";
import { profile, intro, sections, outro, links, spotify } from "./data";
import { icons } from "./Icons";

function A({ href, children }: { href: string; children: ReactNode }) {
  const ext = href.startsWith("http");
  return (
    <a href={href} {...(ext && { target: "_blank", rel: "noreferrer" })}>
      {children}
    </a>
  );
}

// turn "[text](url)" inside a paragraph into links
function rich(text: string) {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    out.push(text.slice(last, m.index));
    out.push(
      <A key={m.index} href={m[2]}>
        {m[1]}
      </A>,
    );
    last = m.index! + m[0].length;
  }
  out.push(text.slice(last));
  return out;
}

function useBengaluruTime() {
  const fmt = () =>
    new Date()
      .toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "numeric", minute: "2-digit", hour12: true })
      .toLowerCase();
  const [t, setT] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 15_000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const HEART =
  "M16 27C6 19.5 2 14.5 2 9.2 2 5 5.2 2 9 2c2.9 0 5.2 1.7 7 4.4C17.8 3.7 20.1 2 23 2c3.8 0 7 3 7 7.2C30 14.5 26 19.5 16 27z";

// marker-written "devansh" that writes itself in, then a brush underline swipes under it
function Signature() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={on ? "sig on" : "sig"}>
      <h1 className="sig-name" aria-label={profile.name}>
        {profile.signature}
        <svg className="swipe" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden>
          <path pathLength={1} d="M4 14 C 80 6, 180 4, 296 9" />
        </svg>
      </h1>
    </div>
  );
}

export default function App() {
  const time = useBengaluruTime();
  return (
    <>
      <main>
        <header>
          <Signature />
          <nav>
            {links.map((l) => (
              <A key={l.label} href={l.href}>
                {icons[l.label]}
                {l.label}
              </A>
            ))}
          </nav>
        </header>
        {intro.map((p) => (
          <p key={p}>{rich(p)}</p>
        ))}
        {sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.items.map((it) => (
              <div key={it.text} className="item">
                {it.name && (
                  <div className="head">
                    <h3>
                      {it.href ? <A href={it.href}>{it.name}</A> : it.name}
                      {it.role && <span className="role">{it.role}</span>}
                    </h3>
                    {it.meta && <span className="dim">{it.meta}</span>}
                  </div>
                )}
                <p>{rich(it.text)}</p>
                {it.stack && <p className="dim stack">{it.stack}</p>}
              </div>
            ))}
            {s.title === "outside code" && spotify.embed && (
              <iframe
                className="spotify"
                title="what i'm listening to on spotify"
                src={spotify.embed}
                height="80"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            )}
          </section>
        ))}
        {outro.map((p) => (
          <p key={p}>{rich(p)}</p>
        ))}
        <p className="love">
          with love, {profile.signature}
          <svg className="heart-sm" viewBox="0 0 32 30" aria-hidden>
            <path d={HEART} />
          </svg>
        </p>
      </main>
      <footer>
        <span>{profile.name}</span>
        <span>bengaluru, {time}</span>
      </footer>
    </>
  );
}
