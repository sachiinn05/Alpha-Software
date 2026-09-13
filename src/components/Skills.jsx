import { sectors, demandSkills } from "../data/site";
import { projects } from "../data/projects";
import ProjectScreen from "./ui/ProjectScreen";
import Reveal from "./ui/Reveal";
import alphaLogo from "../Logo/Alpha Logo.jpeg";

const orbit = [
  { top: "8%", left: "8%", w: 88, rotate: -12 },
  { top: "14%", right: "10%", w: 72, rotate: 8 },
  { bottom: "22%", left: "6%", w: 96, rotate: 14 },
  { bottom: "16%", right: "8%", w: 80, rotate: -8 },
  { top: "42%", left: "18%", w: 64, rotate: 6 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40 overflow-hidden">
      {orbit.map((pos, i) => (
        <div
          key={projects[i % projects.length].id + i}
          className="orbit-card hidden md:block"
          style={{
            ...pos,
            width: pos.w,
            height: pos.w * 0.72,
            transform: `rotate(${pos.rotate}deg)`,
            animation: `float-y ${7 + i}s ease-in-out ${i * 0.4}s infinite`,
          }}
        >
          <ProjectScreen project={projects[i % projects.length]} compact />
        </div>
      ))}

      <div className="relative z-10 text-center px-6">
        <Reveal>
          <h2 className="giant-title text-[18vw] leading-[0.78]">
            The
            <br />
            Sectors
          </h2>
          <p className="mt-8 text-[12px] tracking-[0.32em] uppercase text-white/55">
            Defining the core dna of
            <br />
            production systems
          </p>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <img src={alphaLogo} alt="Alpha Software" className="h-16 w-16 object-contain" />
        </Reveal>

        <Reveal className="mt-10 space-y-3">
          {sectors.map((item) => (
            <p key={item.title} className="text-[15px] tracking-[0.08em] text-white/80">
              ( {item.title} )
            </p>
          ))}
        </Reveal>

        <Reveal className="mt-16 max-w-xl mx-auto">
          <p className="text-[12px] tracking-[0.24em] uppercase text-white/40 mb-5">
            High-demand skills
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {demandSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase border border-white/15 text-white/70"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function DemandSkills() {
  return (
    <div className="flex flex-wrap gap-2">
      {demandSkills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase border border-white/15 text-white/70"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
