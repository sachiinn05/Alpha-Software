import { metrics } from "../data/site";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

export default function Metrics() {
  return (
    <section className="relative py-24 md:py-32 border-y border-white/8">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {metrics.map((item) => (
            <Reveal key={item.label}>
              <p className="display-title text-5xl md:text-7xl text-ivory">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-4 text-[10px] tracking-[0.2em] uppercase text-muted max-w-[12rem]">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
