import { ArrowUpRight, Circle } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="03" title="./projects" cmd="ls -la ~/projects" />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const Wrapper = p.href ? "a" : "div";
          return (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <Wrapper
                {...(p.href
                  ? { href: p.href, target: "_blank", rel: "noreferrer" }
                  : {})}
                className={`term group flex h-full flex-col p-5 sm:p-6 ${
                  p.href ? "lift cursor-pointer" : ""
                }`}
              >
                {/* prompt line */}
                <div className="flex items-center gap-2 text-xs text-dim">
                  <span className="text-green">$</span>
                  <span className="text-fg-soft">{p.cmd}</span>
                  {p.live && (
                    <span className="ml-auto inline-flex items-center gap-1 text-green">
                      <Circle size={7} className="fill-green text-green" />
                      live
                    </span>
                  )}
                </div>

                <h3 className="mt-3 flex items-start gap-1 text-lg font-semibold text-green-bright">
                  {p.name}
                  {p.href && (
                    <ArrowUpRight
                      size={16}
                      className="mt-1 text-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
                    />
                  )}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-soft">
                  {p.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
