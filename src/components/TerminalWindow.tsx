import type { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

/** A reusable retro terminal window with traffic-light chrome. */
export default function TerminalWindow({
  title = "bash",
  children,
  className = "",
  bodyClassName = "",
}: Props) {
  return (
    <div className={`term ${className}`}>
      <div className="term-bar">
        <span className="term-dot" style={{ background: "#ff5f56" }} />
        <span className="term-dot" style={{ background: "#ffbd2e" }} />
        <span className="term-dot" style={{ background: "#27c93f" }} />
        <span className="ml-2 text-xs text-dim truncate select-none">
          {title}
        </span>
      </div>
      <div className={`p-5 sm:p-6 ${bodyClassName}`}>{children}</div>
    </div>
  );
}
