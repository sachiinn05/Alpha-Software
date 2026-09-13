import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      if (reduced) {
        ref.current.textContent = `${value}${suffix}`;
        return;
      }

      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = `${Math.round(obj.n)}${suffix}`;
        },
      });
    },
    { dependencies: [value, suffix, reduced] }
  );

  return <span ref={ref}>0{suffix}</span>;
}
