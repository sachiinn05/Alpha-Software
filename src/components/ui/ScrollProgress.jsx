import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      el.style.transform = `scaleX(${Math.min(Math.max(p, 0), 1)})`;
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[80] h-px bg-white/10">
      <div
        ref={ref}
        className="h-full origin-left bg-white"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
