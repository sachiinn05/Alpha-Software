import { useState } from "react";
import Container from "./Container";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28">
      <Container>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
          Selected Work
        </h2>
      </Container>

      <div className="flex gap-6 px-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            onClick={() => setSelected(p)}
          />
        ))}
      </div>

      <CaseStudyModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
