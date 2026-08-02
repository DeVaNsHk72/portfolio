import Reveal, { SectionHeading } from "./Reveal";
import { skills } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="04" title="./skills" cmd="cat skills.json" />
      </Reveal>

      <div className="term p-5 font-mono text-sm sm:p-7">
        <div className="text-dim">{"{"}</div>
        <div className="space-y-5 py-2 pl-4 sm:pl-6">
          {skills.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.06}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                <span className="w-full shrink-0 text-amber sm:w-52">
                  "{group.label}":
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className="chip hover:border-line-strong hover:text-green transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-dim">{"}"}</div>
      </div>
    </section>
  );
}
