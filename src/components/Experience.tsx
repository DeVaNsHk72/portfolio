import { ChevronRight } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="02" title="./experience" cmd="git log --oneline" />
      </Reveal>

      <div className="relative border-l border-line pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08} className="relative mb-10 last:mb-0">
            {/* node */}
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-green bg-bg sm:-left-[39px]">
              <span className="absolute inset-0.5 rounded-full bg-green glow" />
            </span>

            <div className="term lift p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-green-bright">
                  {job.role}
                </h3>
                <span className="text-xs text-amber">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-fg-soft">
                {job.company}
                <span className="mx-2 text-dim">·</span>
                <span className="text-dim">{job.meta}</span>
              </p>

              <ul className="mt-4 space-y-2">
                {job.points.map((p, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-fg-soft">
                    <ChevronRight size={15} className="mt-0.5 shrink-0 text-green" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
