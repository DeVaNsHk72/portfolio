import { GraduationCap, MapPin, Terminal } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import TerminalWindow from "./TerminalWindow";
import { about, profile, stats } from "@/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="01" title="./about" cmd="cat about.md" />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* narrative */}
        <Reveal className="lg:col-span-3">
          <TerminalWindow title="devansh@bmsce: ~/about" bodyClassName="space-y-4">
            <p className="flex items-center gap-2 text-xs text-dim">
              <MapPin size={13} className="text-green" /> {profile.location}
              <span className="mx-1">·</span>
              <Terminal size={13} className="text-green" /> open to internships & new-grad roles
            </p>
            <p className="text-sm leading-relaxed text-fg sm:text-base">
              {about.summary}
            </p>
            <p className="text-sm leading-relaxed text-fg-soft sm:text-base">
              {about.detail}
            </p>
            <p className="text-sm leading-relaxed text-fg-soft sm:text-base">
              <span className="text-green">$ </span>
              {about.personal}
            </p>
          </TerminalWindow>
        </Reveal>

        {/* stats + education */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="term lift p-4 text-center"
                >
                  <div className="font-crt text-3xl text-green-bright glow">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[0.7rem] leading-tight text-dim">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="term p-5">
              <div className="mb-2 flex items-center gap-2 text-green">
                <GraduationCap size={16} />
                <span className="text-sm font-semibold">{about.education.school}</span>
              </div>
              <p className="text-sm text-fg-soft">{about.education.degree}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-dim">
                <span>{about.education.period}</span>
                <span className="text-amber">CGPA {about.education.cgpa}</span>
              </div>
              <p className="mt-3 border-t border-line pt-3 text-xs text-fg-soft">
                <span className="text-green">cert:</span> {about.education.cert}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
