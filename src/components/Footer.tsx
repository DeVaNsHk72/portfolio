import { profile } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-dim sm:flex-row sm:px-8">
        <p>
          <span className="text-green">$</span> built by {profile.name} · React
          + Vite + Tailwind · retro-CRT vibes
        </p>
        <p className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-green glow" />
          <span>© {new Date().getFullYear()} — all systems nominal</span>
        </p>
      </div>
    </footer>
  );
}
