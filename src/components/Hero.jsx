import { useState } from "react";
import { projects } from "../data/projects";
import { heroServicesLeft, heroServicesRight, heroTicker } from "../data/site";
import DeviceStage from "./ui/DeviceStage";
import ProjectScreen from "./ui/ProjectScreen";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const total = projects.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(40,40,40,0.35),transparent_58%)]" />

      <div className="relative z-10 min-h-[100svh] flex flex-col justify-between pt-28 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-[140px_minmax(0,1fr)_140px] xl:grid-cols-[1fr_minmax(0,720px)_1fr] items-center gap-3 px-4 md:px-8">
          <ul className="hidden md:flex flex-col gap-3 text-[11px] xl:text-[12px] tracking-[0.08em] text-white/75">
            {heroServicesLeft.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="col-span-1 lg:col-auto">
            <DeviceStage project={project} />
          </div>

          <ul className="hidden md:flex flex-col gap-3 text-[11px] xl:text-[12px] tracking-[0.08em] text-white/75 text-right">
            {heroServicesRight.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-center gap-8 text-white">
          <button type="button" onClick={prev} className="text-lg" aria-label="Previous work">
            ⟪
          </button>
          <p className="text-[12px] tracking-[0.28em] uppercase">
            {String(index + 1).padStart(2, "0")}
            <span className="text-white/35"> // </span>
            {String(total).padStart(2, "0")}
          </p>
          <button type="button" onClick={next} className="text-lg" aria-label="Next work">
            ⟫
          </button>
        </div>
        <p className="mt-2 text-center text-[13px] tracking-[0.18em] uppercase text-white/70">
          {project.title}
        </p>

        <div className="mt-6 px-4 md:px-10">
          <div className="flex items-end gap-3 overflow-x-auto scrollbar-hide">
            {projects.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`shrink-0 overflow-hidden transition-opacity duration-500 ${
                  i === index ? "opacity-100" : "opacity-40 hover:opacity-80"
                } ${i === 1 ? "device-phone w-[92px] h-[150px] p-1.5" : "device-laptop w-[170px] h-[110px] p-1.5"}`}
                data-cursor="View"
              >
                <div className="h-full w-full overflow-hidden rounded-sm">
                  <ProjectScreen project={item} compact />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 px-5 md:px-10 flex items-end justify-between gap-6 text-[11px] tracking-[0.16em] uppercase text-white/70">
          <div>
            <a href="mailto:alphasoftware.co.in@gmail.com" className="block hover:text-white">
              alphasoftware.co.in@gmail.com
            </a>
            <p className="mt-2 text-white/40">Production systems · Global</p>
            <p className="mt-1 text-white/40">Alpha Software 2026©</p>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1">
            <a href="https://www.linkedin.com/in/sujeet-kumar-aa55a524b/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="https://wa.me/919695981330" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp
            </a>
            <a href="https://www.fiverr.com/s/zWqgR2E" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Fiverr
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 overflow-hidden opacity-20">
        <div className="marquee py-2 text-[11px] tracking-[0.32em] uppercase text-white">
          {[...heroTicker, ...heroTicker].map((item, i) => (
            <span key={`${item}-${i}`} className="px-6">
              {item} （ {item.toLowerCase()} ）
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
