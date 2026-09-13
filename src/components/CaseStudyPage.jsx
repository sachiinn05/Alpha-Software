import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Container from "./Container";
import SectionLabel from "./ui/SectionLabel";
import MagneticButton from "./ui/MagneticButton";
import ProjectScreen from "./ui/ProjectScreen";
import Seo from "./Seo";
import { SITE, origin } from "../data/seo";

export default function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const jsonLd = useMemo(() => {
    if (!project) return null;
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${project.title} Case Study`,
      description: project.desc,
      url: `${origin()}/case-study/${project.id}`,
      creator: {
        "@type": "Organization",
        name: SITE.name,
      },
      about: project.caseStudy.techStack,
      keywords: project.caseStudy.techStack.join(", "),
    };
  }, [project]);

  if (!project) {
    return (
      <section className="min-h-[80vh] flex items-center">
        <Seo
          title="Case study not found"
          description="This Alpha Software case study could not be found."
          path={`/case-study/${id ?? ""}`}
          noIndex
        />
        <Container>
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-6">
            404 / Not found
          </p>
          <h1 className="display-title text-5xl mb-8">Case study not found</h1>
          <MagneticButton to="/">Return home</MagneticButton>
        </Container>
      </section>
    );
  }

  const { caseStudy } = project;
  const blocks = [
    { title: "Overview", body: caseStudy.overview },
    { title: "The challenge", body: caseStudy.problem },
    { title: "The solution", body: caseStudy.solution },
    { title: "Outcome", body: caseStudy.result },
  ];

  return (
    <article className="pt-32 pb-24">
      <Seo
        title={`${project.title} Case Study`}
        description={caseStudy.overview.slice(0, 158)}
        path={`/case-study/${project.id}`}
        type="article"
        jsonLd={jsonLd}
      />
      <Container>
        <Link
          to="/"
          className="text-[10px] tracking-[0.24em] uppercase text-white/50 hover:text-white"
        >
          ← Back to work
        </Link>

        <div className="mt-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
          <div>
            <SectionLabel index="CS" label={project.id} />
            <h1 className="display-title text-5xl md:text-7xl mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-muted max-w-2xl">{project.desc}</p>
          </div>
          <div className="aspect-[16/10] overflow-hidden bg-[#111]">
            <ProjectScreen project={project} />
          </div>
        </div>

        <div className="mt-20 space-y-16 max-w-3xl">
          {blocks.map((block) => (
            <section key={block.title}>
              <h2 className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-4">
                {block.title}
              </h2>
              <p className="text-lg text-ivory/80 leading-relaxed">{block.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-5">
              Key features
            </h2>
            <ul className="space-y-3">
              {caseStudy.features.map((f) => (
                <li key={f} className="flex gap-3 text-muted">
                  <span className="text-white/40">/</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[10px] tracking-[0.28em] uppercase text-white/45 mb-5">
              Technology stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase border border-white/15 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/8">
          <MagneticButton to="/">All work</MagneticButton>
        </div>
      </Container>
    </article>
  );
}
