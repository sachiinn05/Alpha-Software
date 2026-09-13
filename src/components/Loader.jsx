import { useEffect, useState } from "react";
import alphaLogo from "../Logo/Alpha Logo.jpeg";

export default function Loader({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      onDone?.();
      return undefined;
    }

    const leave = window.setTimeout(() => setLeaving(true), 1800);
    const done = window.setTimeout(() => onDone?.(), 2400);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-8 md:gap-14 text-white">
        <span className="text-6xl md:text-8xl font-medium tracking-tight">A</span>
        <div className="relative w-16 h-16 md:w-20 md:h-20" style={{ perspective: "600px" }}>
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              animation: "loader-spin 1.6s linear infinite",
            }}
          >
            <img
              src={alphaLogo}
              alt=""
              className="h-full w-full object-contain bg-black"
            />
          </div>
        </div>
        <span className="text-6xl md:text-8xl font-medium tracking-tight">S</span>
      </div>
    </div>
  );
}
