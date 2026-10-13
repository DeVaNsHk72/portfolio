import { Fragment, useEffect, useState, type ReactNode } from "react";
import Donut from "./components/Donut";
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

// one section = a numbered mono label on the left, content on the right
function Section({ id, n, title, children }: { id: string; n: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="sec">
      <h2>
        <span className="num">{n}</span>
        {title}/
      </h2>
      <div>{children}</div>
    </section>
  );
}

const host = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function App() {
  const time = useBengaluruTime();
  const s = profile.socials;

  const facts: [string, ReactNode][] = [
    [
      "who/",
      <>
        bengaluru, india <span className="mono dim">12.97°N 77.59°E</span>
        <br />
        it's {time} here
      </>,
    ],
    ["now/", "final-year cs (cyber security) at bmsce. building local rag pipelines and erpnext agents."],
    [
      "links/",
      <>
        <L href={s.github}>github</L>, <L href={s.linkedin}>linkedin</L>, <L href={s.leetcode}>leetcode</L>,{" "}
        <L href={s.blog}>blog</L>, <L href={profile.resumeUrl}>cv</L>
      </>,
    ],
  ];

  return (
    <div className="wrap">
      <nav className="top">
        <L href="#">devansh</L>
        <span>
          <L href="#work">work</L>
          <L href="#projects">projects</L>
          <L href={`mailto:${profile.email}`}>say hi</L>
        </span>
      </nav>

      <header className="hero">
        <Donut />
        <div>
          <h1>
            i'm <em>devansh</em>
          </h1>
          <p className="lede">i build things end to end: llm systems, full-stack apps, and the odd security hole.</p>
          <dl>
            {facts.map(([k, v]) => (
              <Fragment key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
      </header>

      <main>
        <Section id="about" n="01" title="about">
          <p className="prose">{about.summary}</p>
          <p className="prose">{about.detail}</p>
          <p className="prose dim">{about.personal}</p>
        </Section>

        <Section id="work" n="02" title="work">
          {experience.map((e) => (
            <article key={e.company} className="item">
              <header>
                <h3>
                  {e.role} <span className="dim">at</span> {e.company}
                </h3>
                <span className="meta">{e.period}</span>
              </header>
              <p className="sub">{e.meta}</p>
              <ul className="points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="tags">{e.tags.join(" · ")}</p>
            </article>
          ))}
        </Section>

        <Section id="projects" n="03" title="projects">
          {projects.map((p) => (
            <article key={p.name} className="item">
              <header>
                <h3>{p.href ? <L href={p.href}>{p.name}</L> : p.name}</h3>
                {p.href && <span className="meta">{p.live ? "● live" : host(p.href)}</span>}
              </header>
              <p>{p.blurb}</p>
              <p className="tags">{p.tags.join(" · ")}</p>
            </article>
          ))}
        </Section>

        <Section id="recognition" n="04" title="recognition">
          {achievements.map((a) => (
            <article key={a.title} className="item">
              <header>
                <h3>{a.title}</h3>
                <span className="meta">{a.period}</span>
              </header>
              <p className="sub">{a.meta}</p>
              <ul className="points">
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </Section>

        <Section id="skills" n="05" title="toolkit">
          <dl className="skills">
            {skills.map((g) => (
              <Fragment key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.items.join(", ")}</dd>
              </Fragment>
            ))}
          </dl>
        </Section>

        <Section id="education" n="06" title="education">
          <article className="item">
            <header>
              <h3>{about.education.school}</h3>
              <span className="meta">{about.education.period}</span>
            </header>
            <p>{about.education.degree}</p>
            <p className="sub">
              cgpa {about.education.cgpa} · {about.education.cert}
            </p>
          </article>
        </Section>

        <Section id="contact" n="07" title="contact">
          <p className="big">
            easiest way to reach me is email.{" "}
            <L href={`mailto:${profile.email}`}>{profile.email}</L>
          </p>
        </Section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} devansh khetan</span>
        <span>set in newsreader &amp; jetbrains mono</span>
      </footer>
    </div>
  );
}
