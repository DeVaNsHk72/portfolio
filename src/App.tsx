import { Fragment, useEffect, useState, type ReactNode } from "react";
import Donut from "./components/Donut";
import { profile, projects, achievements } from "./data";

function L({ href, children }: { href: string; children: ReactNode }) {
  const ext = href.startsWith("http");
  return (
    <a className="l" href={href} {...(ext && { target: "_blank", rel: "noreferrer" })}>
      {children}
    </a>
  );
}

// "+N more" that unfolds in place instead of navigating away
function More({ items }: { items: { label: string; note: string; href?: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <button className="l more" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? "less" : `+${items.length} more`}
      </button>
      {open && (
        <ul className="list">
          {items.map((p) => (
            <li key={p.label}>
              {p.href ? <L href={p.href}>{p.label}</L> : p.label}
              <span className="dim"> — {p.note}</span>
            </li>
          ))}
        </ul>
      )}
    </>
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

export default function App() {
  const time = useBengaluruTime();
  const s = profile.socials;

  const rows: [string, ReactNode][] = [
    [
      "who/",
      <>
        <span className="mono">12.9716°N 77.5946°E</span>, bengaluru — {time} here
      </>,
    ],
    ["about/", "final-year cs (cyber security) at bmsce. i like reading big codebases, finding the seam, and shipping the change. piano, guitar."],
    ["currently/", "local rag pipelines, pytorch, erpnext agents"],
    [
      "work/",
      <>
        interned at <L href="https://frappe.io">frappe</L>, built <L href="https://notego.in">notego.in</L> (6,000+ students)
        <More
          items={projects
            .filter((p) => p.name !== "NoteGo.in")
            .map((p) => ({ label: p.name.toLowerCase(), note: p.tags.slice(0, 2).join(", ").toLowerCase(), href: p.href }))}
        />
      </>,
    ],
    [
      "wins/",
      <>
        flipkart grid '26 semi-finalist
        <More items={achievements.slice(1).map((a) => ({ label: a.title.split(" — ")[0].toLowerCase(), note: a.period }))} />
      </>,
    ],
    ["writing/", <L href={s.blog}>dkay.bearblog.dev</L>],
    [
      "links/",
      <>
        <L href={s.github}>github</L>, <L href={s.linkedin}>linkedin</L>, <L href={s.leetcode}>leetcode</L>,{" "}
        <L href={`mailto:${profile.email}`}>email</L>, <L href={profile.resumeUrl}>cv</L>
      </>,
    ],
  ];

  return (
    <>
      <nav className="top">
        <L href={s.blog}>blog</L>
        <span>
          <L href={`mailto:${profile.email}`}>drop a message</L>
          <L href={profile.resumeUrl}>résumé</L>
        </span>
      </nav>
      <main className="page">
        <Donut />
        <section>
          <h1>i'm devansh</h1>
          <dl>
            {rows.map(([k, v]) => (
              <Fragment key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </Fragment>
            ))}
          </dl>
        </section>
      </main>
    </>
  );
}
