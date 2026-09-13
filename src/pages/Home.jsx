import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Metrics from "../components/Metrics";
import Technology from "../components/Technology";
import Testimonials from "../components/Testimonials";
import Founder from "../components/Founder";
import Contact from "../components/Contact";
import { scrollToId } from "../lib/scroll";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return undefined;
    const timer = window.setTimeout(() => scrollToId(id), 120);
    return () => window.clearTimeout(timer);
  }, [location.state]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Metrics />
      <Technology />
      <Testimonials />
      <Founder />
      <Contact />
    </main>
  );
}
