import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyPage from "./components/CaseStudyPage";

export default function App() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Navbar onScroll={scrollTo} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero onScroll={scrollTo} />
              <About />
              <Skills />
              <Projects />
              <Testimonials />
              <Founder />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/case-study/:id"
          element={<CaseStudyPage />}
        />
      </Routes>
    </>
  );
}
