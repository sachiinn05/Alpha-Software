import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, className = "", delay = 0, y = 36 }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reduced || !ref.current) return;
      gsap.fromTo(
        ref.current,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    },
    { scope: ref, dependencies: [reduced, delay, y] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
