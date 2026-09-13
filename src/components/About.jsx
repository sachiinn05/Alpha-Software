import { projects } from "../data/projects";
import ProjectScreen from "./ui/ProjectScreen";
import Reveal from "./ui/Reveal";

export default function About() {
  const faces = [...projects, projects[0]].slice(0, 6);
  const size = 280;

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="text-center px-6">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] uppercase text-white/50">
            ( Focused digital practice )
          </p>
          <h2 className="mt-4 giant-title text-5xl sm:text-7xl md:text-8xl">
            Who we are
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="cube-scene" style={{ width: size, height: size }}>
          <div
            className="cube"
            style={{
              animation: "cube-spin 22s linear infinite",
              transform: "rotateX(-18deg) rotateY(24deg)",
            }}
          >
            {faces.map((project, i) => {
              const transforms = [
                `translateZ(${size / 2}px)`,
                `rotateY(90deg) translateZ(${size / 2}px)`,
                `rotateY(180deg) translateZ(${size / 2}px)`,
                `rotateY(-90deg) translateZ(${size / 2}px)`,
                `rotateX(90deg) translateZ(${size / 2}px)`,
                `rotateX(-90deg) translateZ(${size / 2}px)`,
              ];
              return (
                <div
                  key={project.id}
                  className="cube-face"
                  style={{ transform: transforms[i] }}
                >
                  <ProjectScreen project={project} compact />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Reveal className="mt-16 mx-auto max-w-3xl px-6 text-center">
        <p className="text-base md:text-lg leading-relaxed text-white/70">
          Every durable product starts from a precise core. Alpha Software
          partners with startups to design, engineer, and scale modern web and
          mobile systems — so every pixel, API, and deploy carries real
          commercial weight, not just launch-day polish.
        </p>
      </Reveal>
    </section>
  );
}
