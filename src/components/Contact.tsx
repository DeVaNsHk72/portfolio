import { Github, Linkedin } from "./BrandIcons";
import { profile } from "@/data";

const elsewhere = [
  { label: "GitHub", href: profile.socials.github, Icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin },
  { label: "Blog", href: profile.socials.blog, Icon: null },
  { label: "LeetCode", href: profile.socials.leetcode, Icon: null },
];

export default function Contact() {
  return (
    <section id="contact" className="mt-24 border-t border-hairline pt-16">
      <h2 className="text-head font-semibold">
        Got a role, a project, or a question?
      </h2>
      <p className="mt-3 max-w-[34rem] text-ink-2">
        My inbox is open. I read everything and reply to anything that isn't a
        template.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          {profile.email}
        </a>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6">
        {elsewhere.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="link meta inline-flex min-h-[44px] items-center gap-2"
          >
            {Icon && <Icon size={15} />}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
