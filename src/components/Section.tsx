import type { ReactNode } from "react";

/** A titled block. The title is the quietest thing in it on purpose —
 *  the content is what the reader came for. */
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-24">
      <h2 className="meta uppercase tracking-[0.12em]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

/** The one part this page is built from. A left column for when and what,
 *  a right column for the thing itself. Used unmodified by work, projects
 *  and recognition. */
export function Row({
  meta,
  children,
}: {
  meta: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="row">
      <div className="meta md:pt-1">{meta}</div>
      <div className="max-w-[40rem]">{children}</div>
    </article>
  );
}
