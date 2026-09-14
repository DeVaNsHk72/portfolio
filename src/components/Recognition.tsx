import Section, { Row } from "./Section";
import { achievements } from "@/data";

export default function Recognition() {
  return (
    <Section id="recognition" title="Recognition">
      {achievements.map((a) => (
        <Row key={a.title} meta={a.period}>
          <h3 className="text-head font-semibold leading-snug">{a.title}</h3>
          <p className="meta mt-1">{a.meta}</p>
          <ul className="mt-3 space-y-2 text-ink-2">
            {a.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Row>
      ))}
    </Section>
  );
}
