import { useEffect, useRef } from "react";

// donut.c (a1k0n, 2006) rendered into a <pre>. The pointer steers the spin.
const COLS = 64;
const ROWS = 80;
const SHADE = ".,-~:;=!*#$@";

function frame(A: number, B: number): string {
  const out = new Array<string>(COLS * ROWS);
  const z = new Float32Array(COLS * ROWS);
  // faint background grid, so the frame reads as a surface rather than a void
  for (let i = 0; i < out.length; i++) {
    const x = i % COLS;
    const y = (i / COLS) | 0;
    out[i] = x % 8 === 4 && y % 8 === 4 ? "·" : " ";
  }
  const cA = Math.cos(A), sA = Math.sin(A);
  const cB = Math.cos(B), sB = Math.sin(B);
  // characters are ~0.6 as wide as they are tall at line-height 1
  const kx = 56, ky = 34;
  for (let j = 0; j < 6.28; j += 0.05) {
    const ct = Math.cos(j), st = Math.sin(j);
    for (let i = 0; i < 6.28; i += 0.015) {
      const sp = Math.sin(i), cp = Math.cos(i);
      const h = ct + 2;
      const D = 1 / (sp * h * sA + st * cA + 5);
      const t = sp * h * cA - st * sA;
      const x = (COLS / 2 + kx * D * (cp * h * cB - t * sB)) | 0;
      const y = (ROWS / 2 + ky * D * (cp * h * sB + t * cB)) | 0;
      const o = x + COLS * y;
      const N = (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB)) | 0;
      if (y >= 0 && y < ROWS && x >= 0 && x < COLS && D > z[o]) {
        z[o] = D;
        out[o] = SHADE[N > 0 ? N : 0];
      }
    }
  }
  let s = "";
  for (let r = 0; r < ROWS; r++) s += out.slice(r * COLS, (r + 1) * COLS).join("") + "\n";
  return s;
}

export default function Donut() {
  const pre = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const el = pre.current!;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let A = 1, B = 1;
    let vA = 0.035, vB = 0.018;
    let tA = vA, tB = vB;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tA = ((e.clientY - r.top) / r.height - 0.5) * 0.14;
      tB = ((e.clientX - r.left) / r.width - 0.5) * 0.14;
    };
    const onLeave = () => { tA = 0.035; tB = 0.018; };

    el.textContent = frame(A, B);
    if (still) return;

    let raf = 0, last = 0;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - last < 33) return; // ~30fps is plenty for text
      last = now;
      vA += (tA - vA) * 0.06;
      vB += (tB - vB) * 0.06;
      A += vA; B += vB;
      el.textContent = frame(A, B);
    };
    raf = requestAnimationFrame(tick);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <figure className="donut">
      <pre ref={pre} aria-hidden="true" />
      <figcaption>donut.c — move your cursor over it</figcaption>
    </figure>
  );
}
