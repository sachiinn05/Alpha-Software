import Container from "./Container";
import { Code2, Palette, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-36 relative">
      <Container>
        <div className="max-w-7xl mx-auto space-y-24">

          {/* ================= PHILOSOPHY ================= */}
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              We build software
              <br />
              <span className="gradient-text">the right way.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Alpha Software is a product-focused digital studio.
              We partner with ambitious teams to design, engineer,
              and scale software that survives real-world usage —
              not just demos.
            </p>
          </div>

          <div className="alpha-divider" />

          {/* ================= CAPABILITIES ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* CARD */}
            {[
              {
                icon: Code2,
                title: "Engineering Discipline",
                desc: "Readable, scalable systems designed for long-term ownership — not quick hacks.",
              },
              {
                icon: Palette,
                title: "Design With Intent",
                desc: "Interfaces that prioritize clarity, accessibility, and user trust.",
              },
              {
                icon: Rocket,
                title: "Startup Execution",
                desc: "Fast iteration without sacrificing architecture or code quality.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  alpha-hover
                  alpha-shadow
                  glass
                  rounded-3xl
                  p-8
                  border border-white/10
                  transition-all duration-300
                  hover:border-purple-500/50
                "
              >
                {/* Icon */}
                <div className="mb-8 w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                  <item.icon className="text-purple-400" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="alpha-divider" />

          {/* ================= TRUST STRIP ================= */}
          <div className="max-w-5xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We believe great software is built at the intersection of
              <span className="text-purple-400 font-medium"> thoughtful design</span>,
              <span className="text-purple-400 font-medium"> strong engineering</span>,
              and
              <span className="text-purple-400 font-medium"> clear ownership</span>.
              <br />
              <br />
              That philosophy guides every decision we make — from architecture
              to pixel-level details.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
