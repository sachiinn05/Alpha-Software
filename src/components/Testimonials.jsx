import Container from "./Container";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-slate-900/40 to-slate-950"
    >
      <Container>
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Trusted by{" "}
            <span className="text-purple-400">Startups Worldwide</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Founders and product leaders across OTT, social media,
            e-commerce, and event platforms.
          </p>
        </div>

        {/* Netflix-style horizontal slider */}
        <div
          className="
            flex gap-6
            overflow-x-auto
            snap-x snap-mandatory
            pb-6
            scrollbar-hide
          "
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                min-w-[320px]
                md:min-w-[420px]
                snap-start
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-6
                hover:border-purple-500/40
                transition
                flex flex-col justify-between
              "
            >
              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                “{t.quote}”
              </p>

              {/* Footer */}
              <div className="mt-auto">
                <div className="font-semibold text-white">
                  {t.name}
                </div>

                <div className="text-gray-400 text-sm">
                  {t.role}
                </div>

                {t.location && (
                  <div className="text-xs text-purple-400 mt-1">
                    {t.location}
                  </div>
                )}

                {t.highlight && (
                  <div className="mt-3 text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 inline-block">
                    {t.highlight}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
