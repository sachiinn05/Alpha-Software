import { testimonials } from "../data/testimonials";
import Reveal from "./ui/Reveal";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function Card({ t }) {
  return (
    <article className="w-[300px] md:w-[440px] shrink-0 border border-white/10 p-7 md:p-9 flex flex-col justify-between min-h-[340px]">
      <p className="text-sm md:text-[15px] leading-relaxed text-white/75">
        “{t.quote}”
      </p>
      <div className="mt-10">
        <p>{t.name}</p>
        <p className="text-sm text-muted mt-1">{t.role}</p>
        {t.location && (
          <p className="text-[10px] tracking-[0.18em] uppercase text-white/45 mt-2">
            {t.location}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Testimonials() {
  const reduced = usePrefersReducedMotion();
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-28 md:py-36 overflow-hidden">
      <div className="px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-[12px] tracking-[0.28em] uppercase text-white/45 mb-5">
            ( Signal )
          </p>
          <h2 className="display-title text-4xl sm:text-6xl md:text-7xl">
            Trusted by
            <br />
            founders worldwide.
          </h2>
        </Reveal>
      </div>

      <div className={reduced ? "overflow-x-auto scrollbar-hide px-5 sm:px-8" : "overflow-hidden"}>
        <div
          className={
            reduced
              ? "flex gap-5"
              : "testimonial-marquee gap-5"
          }
        >
          {(reduced ? testimonials : loop).map((t, i) => (
            <Card key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
