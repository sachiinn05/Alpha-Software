import { techStack } from "../data/site";
import Reveal from "./ui/Reveal";

export default function Technology() {
  return (
    <section id="technology" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] uppercase text-white/45 mb-5">
            ( The stack )
          </p>
          <h2 className="display-title text-4xl sm:text-6xl max-w-2xl">
            The system
            <br />
            behind every ship.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {Object.entries(techStack).map(([label, value]) => (
            <Reveal key={label} className="bg-black p-7 md:p-8">
              <p className="text-[10px] tracking-[0.24em] uppercase text-white/50 mb-6">
                {label}
              </p>
              <p className="text-sm text-muted leading-relaxed">{value}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
