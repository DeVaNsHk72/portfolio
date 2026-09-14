import Section, { Row } from "./Section";
import { projects } from "@/data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {projects.map((p) => (
        <Row key={p.name} meta={p.live ? "Live" : p.href ? "Source" : ""}>
          <h3 className="text-head font-semibold leading-snug">
            {p.href ? (
              <a href={p.href} target="_blank" rel="noreferrer" className="link">
                {p.name}
              </a>
            ) : (
              p.name
            )}
          </h3>
          <p className="mt-2 text-ink-2">{p.blurb}</p>
          <p className="meta mt-3">{p.tags.join("  ·  ")}</p>
        </Row>
      ))}
    </Section>
  );
}
