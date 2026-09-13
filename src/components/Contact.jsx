import { contactChannels } from "../data/site";
import Reveal from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] uppercase text-white/45 mb-5">
            ( Let’s talk )
          </p>
          <h2 className="display-title text-4xl sm:text-6xl md:text-7xl max-w-4xl">
            Let’s build
            <br />
            something that lasts.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Partner with Alpha Software for startups, internships, and modern
            digital products.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {contactChannels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bg-black p-7 hover:bg-white hover:text-black transition-colors duration-500 group"
              data-cursor="Open"
            >
              <h3 className="text-lg mb-1">{channel.label}</h3>
              <p className="text-sm text-muted group-hover:text-black/60">{channel.detail}</p>
            </a>
          ))}
        </div>

        <Reveal className="mt-14">
          <MagneticButton href="https://wa.me/919695981330">
            Chat on WhatsApp
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
