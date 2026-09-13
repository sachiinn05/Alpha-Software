import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import useIsMobile from "../../hooks/useIsMobile";

export default function Cursor() {
  const dot = useRef(null);
  const label = useRef(null);
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile(1024);

  useEffect(() => {
    if (reduced || mobile) return undefined;
    const d = dot.current;
    const l = label.current;
    if (!d || !l) return undefined;

    const pos = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const target = e.target.closest("[data-cursor]");
      l.textContent = target?.dataset.cursor ?? "";
      l.style.opacity = target ? "1" : "0";
      d.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px) scale(${target ? 0.4 : 1})`;
    };

    let frame = 0;
    const tick = () => {
      cur.x += (pos.x - cur.x) * 0.18;
      cur.y += (pos.y - cur.y) * 0.18;
      l.style.transform = `translate(${cur.x + 16}px, ${cur.y + 16}px)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduced, mobile]);

  if (reduced || mobile) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 z-[90] h-2.5 w-2.5 rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={label}
        className="pointer-events-none fixed top-0 left-0 z-[90] text-[10px] tracking-[0.28em] uppercase text-white opacity-0"
      />
    </>
  );
}
