import { Fragment, useEffect, useState, type ReactNode } from "react";
import { profile, now, about, experience, projects, older, openSource, achievements, skills } from "./data";

function L({ href, children, className = "l" }: { href: string; children: ReactNode; className?: string }) {
  const ext = href.startsWith("http");
  return (
    <a className={className} href={href} {...(ext && { target: "_blank", rel: "noreferrer" })}>
      {children}
    </a>
  );
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

const SECTIONS = ["now", "about", "work", "projects", "open-source", "recognition", "skills", "education"] as const;

// which section is under the top third of the viewport
function useActive() {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-30% 0px -65% 0px" },
    );
    SECTIONS.forEach((id) => io.observe(document.getElementById(id)!));
    return () => io.disconnect();
  }, []);
  return active;
}

// reading progress through the page, 0..1
function useProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setP(max > 0 ? Math.min(1, scrollY / max) : 0);
    };
    on();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => {
      removeEventListener("scroll", on);
      removeEventListener("resize", on);
    };
  }, []);
  return p;
}

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="sec">
      <h2>{id}/</h2>
      {children}
    </section>
  );
}

export default function App() {
  const time = useBengaluruTime();
  const active = useActive();
  const progress = useProgress();
  const s = profile.socials;

  return (
    <div className="wrap">
      <aside className="side">
        <a className="mark" href="#">
          dk<span>.</span>
        </a>
        <nav>
          {SECTIONS.map((id, i) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : undefined}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {id}
            </a>
          ))}
        </nav>
        <div className="track" aria-hidden>
          <i style={{ transform: `scaleX(${progress})` }} />
        </div>
        <p className="side-foot">
          Bengaluru
          <br />
          {time}
        </p>
      </aside>

      <main>
        <header className="hero">
          <p className="kicker">
            <span className="dot" aria-hidden /> final-year CS at BMSCE, Bengaluru
          </p>
          <h1>
            i'm <em>devansh</em>
          </h1>
          <p className="lede">I build backends, data systems and LLM agents that answer from real data.</p>
          <p className="links">
            <L href={s.github}>GitHub</L>
            <L href={s.linkedin}>LinkedIn</L>
            <L href={s.leetcode}>LeetCode</L>
            <L href={s.blog}>Blog</L>
            <L href={profile.resumeUrl}>Résumé</L>
            <L href={`mailto:${profile.email}`}>Email</L>
          </p>
        </header>

        <Section id="now">
          <ul className="now">
            {now.items.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="meta">updated {now.updated}</p>
        </Section>

        <Section id="about">
          <p>{about.summary}</p>
          <p>{about.detail}</p>
          <p className="dim">{about.personal}</p>
        </Section>

        <Section id="work">
          {experience.map((e) => (
            <article key={e.company} className="item">
              <div className="row">
                <h3>
                  {e.role}, {e.company}
                </h3>
                <span className="meta">{e.period}</span>
              </div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {e.tags.length > 0 && <p className="meta">{e.tags.join(" / ")}</p>}
            </article>
          ))}
        </Section>

        <Section id="projects">
          <ol className="projects">
            {projects.map((p, i) => (
              <li key={p.name} className="proj">
                <span className="num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="proj-body">
                  <div className="row">
                    <h3>{p.href ? <L href={p.href}>{p.name}</L> : p.name}</h3>
                    {p.status && <span className={`tag ${p.status}`}>{p.status}</span>}
                  </div>
                  <p>{p.blurb}</p>
                  <p className="meta">{p.tags.join(" / ")}</p>
                </div>
                {p.stat && (
                  <figure className="stat">
                    <strong>{p.stat.value}</strong>
                    <figcaption>{p.stat.label}</figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ol>

          <h4 className="sub">earlier</h4>
          <dl className="older">
            {older.map((p) => (
              <Fragment key={p.name}>
                <dt>{p.href ? <L href={p.href}>{p.name}</L> : p.name}</dt>
                <dd>
                  {p.blurb} <span className="meta">{p.tags.join(" / ")}</span>
                </dd>
              </Fragment>
            ))}
          </dl>
        </Section>

        <Section id="open-source">
          <ul className="oss">
            {openSource.map((c) => (
              <li key={c.href}>
                <L href={c.href} className="oss-link">
                  <span className="repo">{c.repo}</span>
                  <span className="what">{c.what}</span>
                  <span className={`tag ${c.state.replace(" ", "-")}`}>{c.state}</span>
                </L>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="recognition">
          {achievements.map((a) => (
            <article key={a.title} className="item">
              <div className="row">
                <h3>{a.title}</h3>
                {a.period && <span className="meta">{a.period}</span>}
              </div>
              <p className="dim">{a.meta}</p>
              {a.points.length > 0 && (
                <ul>
                  {a.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </Section>

        <Section id="skills">
          <dl>
            {skills.map((g) => (
              <Fragment key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.items.join(", ")}</dd>
              </Fragment>
            ))}
          </dl>
        </Section>

        <Section id="education">
          <article className="item">
            <div className="row">
              <h3>{about.education.school}</h3>
              <span className="meta">{about.education.period}</span>
            </div>
            <p>{about.education.degree}</p>
            <p className="dim">
              CGPA {about.education.cgpa}. {about.education.cert}.
            </p>
          </article>
        </Section>

        <footer>
          <p className="sign">
            Say hi at <L href={`mailto:${profile.email}`}>{profile.email}</L>
          </p>
          <span className="meta">
            © {new Date().getFullYear()} Devansh Khetan. Set in Newsreader and JetBrains Mono.
          </span>
        </footer>
      </main>
    </div>
  );
}
