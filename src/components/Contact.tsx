import { BookOpen, Code2, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import Reveal, { SectionHeading } from "./Reveal";
import TerminalWindow from "./TerminalWindow";
import { profile } from "@/data";

const links = [
  { icon: Mail, label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: "github", value: "DeVaNsHk72", href: profile.socials.github },
  { icon: Linkedin, label: "linkedin", value: "devansh-khetan", href: profile.socials.linkedin },
  { icon: Code2, label: "leetcode", value: "not_dal_baati", href: profile.socials.leetcode },
  { icon: BookOpen, label: "blog", value: "dkay.bearblog.dev", href: profile.socials.blog },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading index="06" title="./contact" cmd="./say-hello" />
      </Reveal>

      <Reveal delay={0.05}>
        <TerminalWindow title="devansh@portfolio: ~/contact">
          <p className="text-sm text-fg-soft">
            <span className="text-green">$ </span>
            echo "Got an idea, a role, or just want to talk shop? My inbox is open."
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3 bg-green/[0.05] px-4 py-3 transition-colors hover:bg-green/[0.11]"
              >
                <l.icon size={17} className="shrink-0 text-green" />
                <span className="text-xs text-dim">{l.label}</span>
                <span className="ml-auto truncate text-sm text-fg-soft group-hover:text-green-bright">
                  {l.value}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-term">
              <Mail size={16} /> send a message
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-term amber"
            >
              download résumé
            </a>
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
