import { useEffect, useRef } from "react";
import ProjectScreen from "./ProjectScreen";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

export default function DeviceStage({ project }) {
  const stageRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = stageRef.current;
    if (!el || reduced) return undefined;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.transform = `rotateX(${22 - y * 8}deg) rotateY(${-36 + x * 14}deg) rotateZ(4deg)`;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  return (
    <div className="device-stage relative mx-auto w-full max-w-[680px]">
      <div
        ref={stageRef}
        className="ipad-shell relative mx-auto w-[min(58vw,540px)] aspect-[4/3] p-[10px] md:p-3 transition-transform duration-500"
        style={{ transform: "rotateX(22deg) rotateY(-36deg) rotateZ(4deg)" }}
      >
        <div className="absolute -bottom-6 left-[8%] right-[8%] h-10 rounded-full bg-black/70 blur-2xl" />
        <div className="ipad-screen relative h-full w-full">
          <ProjectScreen project={project} />
          <div className="pointer-events-none absolute top-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black/40" />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[2.1rem] ring-1 ring-white/12" />
      </div>
    </div>
  );
}
