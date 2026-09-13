import founderImg from "../founderImg/sujeet.jpeg";
import Reveal from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";

export default function Founder() {
  return (
    <section id="founder" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <p className="text-[12px] tracking-[0.28em] uppercase text-white/45 mb-5">
              ( Command )
            </p>
            <h2 className="display-title text-4xl sm:text-6xl mb-8">
              Meet the founder
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Hi, I’m <strong className="text-ivory font-medium">Sujeet Kumar</strong>,
              founder of Alpha Software. I hold an{" "}
              <strong className="text-ivory font-medium">MBA</strong> and work as a{" "}
              <strong className="text-ivory font-medium">Project Manager</strong>,
              leading a skilled team of developers to deliver high-quality software
              solutions.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              We specialize in building{" "}
              <strong className="text-ivory font-medium">ready-to-use software products</strong>,
              custom <strong className="text-ivory font-medium">web applications</strong>, and{" "}
              <strong className="text-ivory font-medium">mobile applications</strong> for
              startups and growing businesses — with scalability, performance, and
              modern UX as the baseline.
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                variant="secondary"
                href="https://www.linkedin.com/in/sujeet-kumar-aa55a524b/"
              >
                LinkedIn
              </MagneticButton>
              <MagneticButton href="mailto:sujeetkumarup64@gmail.com">
                Contact me
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative mx-auto max-w-sm">
              <img
                src={founderImg}
                alt="Sujeet Kumar, founder of Alpha Software"
                className="w-full aspect-[4/5] object-cover grayscale"
              />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] tracking-[0.2em] uppercase text-white">
                <span>Sujeet Kumar</span>
                <span>Founder / Alpha</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
