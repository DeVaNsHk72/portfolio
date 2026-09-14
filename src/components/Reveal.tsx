import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Fade + rise into view once, when scrolled into the viewport. */
export default function Reveal({ children, delay = 0, y = 12, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.24, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** A small "// section" heading used above each section. */
export function SectionHeading({
  index,
  title,
  cmd,
}: {
  index: string;
  title: string;
  cmd: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 text-xs text-dim">
        <span className="text-green">{index}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="text-amber">{cmd}</span>
      </div>
      <h2 className="mt-4 font-crt text-4xl sm:text-5xl text-green-bright glow tracking-wide">
        {title}
      </h2>
    </div>
  );
}
