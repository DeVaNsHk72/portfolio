import { profile } from "@/data";

/** Name and one action. With six short sections, the page is its own
 *  navigation — a five-item menu would be five decisions to reach one. */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex min-h-[44px] items-center font-semibold">
          {profile.name}
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="link meta flex min-h-[44px] items-center"
        >
          Résumé
        </a>
      </div>
    </header>
  );
}
