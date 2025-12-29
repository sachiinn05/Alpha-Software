import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="min-w-[320px] glass rounded-2xl overflow-hidden">

      <img
        src={project.image}
        alt={project.title}
        className="h-44 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold mb-1">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-3">{project.desc}</p>

        <Link
          to={`/case-study/${project.id}`}
          className="text-purple-400 text-sm"
        >
          View Case Study →
        </Link>
      </div>

    </div>
  );
}
