import Container from "./Container";

export default function Hero({ onScroll }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28">
      <Container>
        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-block mb-6 px-4 py-2 rounded-full glass text-sm text-gray-300">
            🚀 Building global-ready software
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            We turn <span className="gradient-text">ideas</span> into
            <br /> production-ready products
          </h1>

          <p className="text-lg text-gray-400 mb-10">
            Alpha Software partners with startups to design,
            build, and scale modern web applications.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => onScroll("projects")}
              className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 shadow-lg"
            >
              View Work
            </button>

            <button
              onClick={() => onScroll("contact")}
              className="px-8 py-3 rounded-xl glass hover:border-purple-500/40"
            >
              Contact Alpha
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
