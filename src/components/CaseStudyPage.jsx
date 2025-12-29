import { useParams, Link } from "react-router-dom";
import Container from "./Container";
import { projects } from "../data/projects";

export default function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10 text-white">Case study not found</div>;
  }

  const { caseStudy } = project;

  return (
    <section className="py-32">
      <Container>

        <Link to="/" className="text-purple-400 text-sm mb-6 inline-block">
          ← Back to Projects
        </Link>

        <h1 className="text-5xl font-extrabold mb-4">
          {project.title}
        </h1>

        <p className="text-gray-400 text-lg mb-12">
          {project.desc}
        </p>

        <div className="glass rounded-3xl p-10 space-y-10 max-w-4xl">

          <div>
            <h3 className="text-2xl font-semibold mb-3">Overview</h3>
            <p className="text-gray-400">{caseStudy.overview}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">The Challenge</h3>
            <p className="text-gray-400">{caseStudy.problem}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">The Solution</h3>
            <p className="text-gray-400">{caseStudy.solution}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 text-gray-400">
              {caseStudy.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {caseStudy.techStack.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-purple-500/10
                             text-purple-300 text-sm border border-purple-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Outcome</h3>
            <p className="text-gray-400">{caseStudy.result}</p>
          </div>

        </div>
      </Container>
    </section>
  );
}
