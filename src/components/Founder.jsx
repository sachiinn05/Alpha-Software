import Container from "./Container";
import founderImg from "../founderImg/sujeet.jpeg"

export default function Founder() {
  return (
    <section className="py-28 bg-slate-900/40">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Meet the <span className="gradient-text">Founder</span>
            </h2>

           <p className="text-gray-400 mb-6 leading-relaxed">
            Hi, I’m <strong>Sujeet Kumar</strong>, founder of Alpha Software. I hold an
            <strong> MBA degree</strong> and work as a <strong>Project Manager</strong>,
             leading a skilled team of developers to deliver high-quality software
             solutions.
            </p>

            <p className="text-gray-400 mb-8">
             We specialize in building <strong>ready-to-use software products</strong>,
             custom <strong>web applications</strong>, and
             <strong> mobile applications</strong> for startups and growing businesses,
              ensuring scalability, performance, and modern UI/UX.
            </p>


            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl glass hover:border-purple-500/40 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:sujeetkumarup64@gmail.com"
                className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image / Avatar Section */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-3xl glass overflow-hidden">
              <img
                src={founderImg}
                alt="Founder Sujeet Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
