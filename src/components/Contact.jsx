import Container from "./Container";
import { Mail, Linkedin, Briefcase, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-slate-900/40 to-slate-900/80"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let’s Build Something Great
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg mb-12">
            Partner with{" "}
            <span className="text-purple-400 font-semibold">
              Alpha Software
            </span>{" "}
            for startups, internships, and modern digital products.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">

            {/* Email */}
            <a
              href="mailto:alphasoftware.co.in@gmail.com"
              className="group bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 hover:border-purple-500/40 hover:-translate-y-1
              transition-all duration-300"
            >
              <Mail
                className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition"
                size={32}
              />
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-gray-400 mt-1">
                Business inquiries
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sujeet-kumar-aa55a524b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 hover:border-purple-500/40 hover:-translate-y-1
              transition-all duration-300"
            >
              <Linkedin
                className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition"
                size={32}
              />
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-sm text-gray-400 mt-1">
                Professional profile
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919695981330"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 hover:border-green-500/40 hover:-translate-y-1
              transition-all duration-300"
            >
              <MessageCircle
                className="mx-auto mb-4 text-green-400 group-hover:scale-110 transition"
                size={32}
              />
              <h3 className="font-semibold">WhatsApp</h3>
              <p className="text-sm text-gray-400 mt-1">
                Quick chat & support
              </p>
            </a>

            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/s/zWqgR2E"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl border border-white/10
              rounded-2xl p-6 hover:border-purple-500/40 hover:-translate-y-1
              transition-all duration-300"
            >
              <Briefcase
                className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition"
                size={32}
              />
              <h3 className="font-semibold">Fiverr</h3>
              <p className="text-sm text-gray-400 mt-1">
                Hire Alpha Software
              </p>
            </a>

          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/919695981330"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-xl
            bg-green-600 hover:bg-green-700
            font-semibold shadow-lg shadow-green-600/30
            transition"
          >
            Chat on WhatsApp
          </a>

        </div>
      </Container>
    </section>
  );
}
