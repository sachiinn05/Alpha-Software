import Container from "./Container";

export default function Skills() {
  return (
    <section id="skills" className="py-36 bg-slate-900/50">
      <Container>
        <div className="max-w-7xl mx-auto space-y-24">

          {/* ================= HEADING ================= */}
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              What We <span className="gradient-text">Build</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              Alpha Software delivers end-to-end digital solutions —
              from early MVPs to scalable production systems.
            </p>
          </div>

          {/* ================= NETFLIX-STYLE CAPABILITIES ================= */}
          <div>
            <h3 className="text-3xl font-bold mb-8">
              Capabilities
            </h3>

            <div
              className="
                flex gap-6
                overflow-x-auto
                pb-6
                scrollbar-hide
                snap-x snap-mandatory
              "
            >
              {[
                {
                  title: "Web Applications (SaaS & Dashboards)",
                  items: [
                    "Full-stack web applications",
                    "Admin dashboards & analytics",
                    "Authentication & role management",
                    "Real-time features (chat, live updates)",
                    "Scalable startup architecture",
                  ],
                },
                {
                  title: "Mobile & Android Development",
                  items: [
                    "Android app development",
                    "Cross-platform apps (React Native)",
                    "API integration & authentication",
                    "Real-time features & notifications",
                    "Performance optimization",
                  ],
                },
                {
                  title: "Website Development",
                  items: [
                    "Modern, responsive websites",
                    "Landing pages & business sites",
                    "Portfolio & personal websites",
                    "SEO-friendly & fast UI",
                    "Mobile-first design",
                  ],
                },
                {
                  title: "Backend & API Engineering",
                  items: [
                    "REST API development",
                    "JWT & cookie-based authentication",
                    "Role-based access control",
                    "Payment gateway integration",
                    "Security & performance optimization",
                  ],
                },
                {
                  title: "Deployment & DevOps",
                  items: [
                    "AWS EC2 deployments",
                    "Nginx & PM2 setup",
                    "Domain & SSL configuration",
                    "Cloudflare security & performance",
                    "CI/CD basics",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="
                    min-w-[320px]
                    md:min-w-[380px]
                    snap-start
                    glass
                    rounded-3xl
                    p-8
                    border border-white/10
                    hover:border-purple-500/40
                    transition
                  "
                >
                  <h4 className="text-xl font-semibold mb-6">
                    {block.title}
                  </h4>

                  <ul className="space-y-3 text-sm text-gray-400">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-purple-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ================= HOT SKILLS ================= */}
          <div>
            <h3 className="text-3xl font-bold mb-8">
              High-Demand Skills <span className="text-purple-400">(2025)</span>
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "React Native",
                "Android Development",
                "Tailwind CSS",
                "JavaScript (ES6+)",
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT Authentication",
                "Socket.io",
                "MongoDB",
                "AWS EC2",
                "Nginx",
                "PM2",
                "Cloudflare",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-purple-500/10
                    text-purple-300
                    text-sm
                    border border-purple-500/20
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* ================= TECH STACK ================= */}
          <div className="glass rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">
              Technology Stack
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <strong className="text-white">Languages</strong>
                <p>JavaScript, C++, Java, Swift, Drat, Kotlin, Python</p>
              </div>

              <div>
                <strong className="text-white">Frontend</strong>
                <p>React.js, Tailwind CSS, HTML, CSS, Tailwind CSS, Next.js, UI/UX Principles, Redux Toolkit</p>
              </div>

              <div>
                <strong className="text-white">Mobile</strong>
                <p>Android, React Native, Jetpack Compose, Google Play Store Deployment, Firebase, Android SDK</p>
              </div>

              <div>
                <strong className="text-white">Backend</strong>
                <p>Node.js, Express.js, REST APIs, Socket.io, WebSockets (Socket.io), Payment Gateway Integration, MVC/Clean Architecture</p>
              </div>

              <div>
                <strong className="text-white">Database</strong>
                <p>MongoDB, SQL, Redis (Caching), PostgreSQL</p>
              </div>

              <div>
                <strong className="text-white">Cloud & Tools</strong>
                <p>AWS EC2, Nginx, PM2, Cloudflare, Git, GitHub</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
