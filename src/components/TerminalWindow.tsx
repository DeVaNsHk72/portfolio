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
        <span className="term-dot bg-dim" />
        <span className="term-dot bg-amber" />
        <span className="term-dot bg-green" />
        <span className="ml-2 text-xs text-dim truncate select-none">
          {title}
        </span>
      </div>
      <div className={`p-5 sm:p-6 ${bodyClassName}`}>{children}</div>
    </div>
  );
}
