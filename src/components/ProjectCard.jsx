import { Link } from "react-router-dom";
import ProjectScreen from "./ui/ProjectScreen";

export default function ProjectCard({ project, index }) {
  return (
    <article className="group">
      <Link to={`/case-study/${project.id}`} className="block" data-cursor="View">
        <div className="relative aspect-[16/11] overflow-hidden bg-[#111]">
          <div className="project-cover h-full w-full">
            <ProjectScreen project={project} />
          </div>
          <div className="absolute top-4 left-4 text-[10px] tracking-[0.28em] uppercase text-white/70">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
        <div className="pt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm text-muted">{project.desc}</p>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 mt-2 group-hover:text-white transition-colors">
            Open
          </span>
        </div>
      </Link>
    </article>
  );
}
