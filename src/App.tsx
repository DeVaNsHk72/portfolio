import { Fragment, useEffect, useState, type ReactNode } from "react";
import { profile, about, experience, projects, achievements, skills } from "./data";

function L({ href, children }: { href: string; children: ReactNode }) {
  const ext = href.startsWith("http");
  return (
    <a className="l" href={href} {...(ext && { target: "_blank", rel: "noreferrer" })}>
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

const SECTIONS = ["about", "work", "projects", "recognition", "skills", "education"] as const;

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
  const s = profile.socials;

  return (
    <div className="wrap">
      <aside className="side">
        <a className="mark" href="#">
          dk
        </a>
        <nav>
          {SECTIONS.map((id, i) => (
            <a key={id} href={`#${id}`} className={active === id ? "on" : undefined}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {id}
            </a>
          ))}
        </nav>
        <p className="side-foot">
          Bengaluru
          <br />
          {time}
        </p>
      </aside>

      <main>
        <header className="hero">
          <h1>i'm devansh</h1>
          <p className="lede">I build full-stack apps and tools around LLMs. I also do some security testing.</p>
          <p className="links">
            <L href={s.github}>GitHub</L>
            <L href={s.linkedin}>LinkedIn</L>
            <L href={s.leetcode}>LeetCode</L>
            <L href={s.blog}>Blog</L>
            <L href={profile.resumeUrl}>Résumé</L>
            <L href={`mailto:${profile.email}`}>Email</L>
          </p>
        </header>

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
          {projects.map((p) => (
            <article key={p.name} className="item">
              <div className="row">
                <h3>{p.href ? <L href={p.href}>{p.name}</L> : p.name}</h3>
                {p.live && <span className="meta">live</span>}
              </div>
              <p>{p.blurb}</p>
              <p className="meta">{p.tags.join(" / ")}</p>
            </article>
          ))}
        </Section>

        <Section id="recognition">
          {achievements.map((a) => (
            <article key={a.title} className="item">
              <div className="row">
                <h3>{a.title}</h3>
                <span className="meta">{a.period}</span>
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
          <p>
            Say hi at <L href={`mailto:${profile.email}`}>{profile.email}</L>
          </p>
          <span className="meta">© {new Date().getFullYear()} Devansh Khetan</span>
        </footer>
      </main>
    </div>
  );
}
