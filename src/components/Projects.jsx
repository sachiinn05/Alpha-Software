import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center mb-16 md:mb-24">
          <p className="text-[12px] tracking-[0.28em] uppercase text-white/45 mb-5">
            ( Redefining how products ship )
          </p>
          <h2 className="giant-title text-[11vw] md:text-[8vw]">
            Archive of
            <br />
            the selected works
            <br />
            by Alpha
          </h2>
          <p className="mt-8 text-[13px] tracking-[0.2em] uppercase text-white/45">
            Production systems in the field
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
