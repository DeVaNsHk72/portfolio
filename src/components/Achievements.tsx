import { Award, ShieldCheck } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { achievements } from "@/data";

const icons = [ShieldCheck, Award];

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="05" title="./achievements" cmd="sudo ./flex" />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="term lift h-full p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center border border-line-strong text-green">
                    <Icon size={17} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold leading-tight text-green-bright">
                      {a.title}
                    </h3>
                    <p className="text-xs text-amber">{a.meta}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {a.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-fg-soft">
                      <span className="text-green">–</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
