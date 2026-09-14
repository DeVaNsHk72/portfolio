import Section, { Row } from "./Section";
import { experience } from "@/data";

export default function Work() {
  return (
    <Section id="work" title="Work">
      {experience.map((job) => (
        <Row
          key={job.company}
          meta={job.period}
        >
          <h3 className="text-head font-semibold leading-snug">{job.company}</h3>
          <p className="meta mt-1">
            {job.role} · {job.meta}
          </p>
          <ul className="mt-4 space-y-2 text-ink-2">
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="meta mt-4">{job.tags.join("  ·  ")}</p>
        </Row>
      ))}
    </Section>
  );
}
