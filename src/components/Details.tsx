import Section, { Row } from "./Section";
import { about, skills } from "@/data";

/** Education and stack. Demoted, not deleted — a recruiter searching for
 *  "PyTorch" still needs to find the word, but nobody reads a chip cloud. */
export default function Details() {
  return (
    <Section id="details" title="Details">
      <Row meta={about.education.period}>
        <h3 className="text-head font-semibold leading-snug">
          {about.education.school}
        </h3>
        <p className="mt-2 text-ink-2">{about.education.degree}</p>
        <p className="meta mt-3">
          CGPA {about.education.cgpa} · {about.education.cert}
        </p>
      </Row>

      {skills.map((group) => (
        <Row key={group.label} meta={group.label}>
          <p className="text-ink-2">{group.items.join("  ·  ")}</p>
        </Row>
      ))}
    </Section>
  );
}
