import { Github } from "./BrandIcons";
import { about, profile } from "@/data";

export default function Hero() {
  return (
    <section id="top" className="pt-20 sm:pt-28">
      <h1 className="text-display font-semibold leading-[1.05] tracking-[-0.02em]">
        {profile.name}
      </h1>

      <p className="mt-6 max-w-[34rem] text-ink-2">{profile.tagline}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn btn-primary">
          Email me
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          Résumé
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          <Github size={17} />
          GitHub
        </a>
      </div>

      <p className="meta mt-8">
        {profile.location} · open to internships and new-grad roles
      </p>

      <div className="mt-16 max-w-[34rem] space-y-4 border-t border-hairline pt-16 text-ink-2">
        <p>{about.detail}</p>
        <p>{about.personal}</p>
      </div>
    </section>
  );
}
