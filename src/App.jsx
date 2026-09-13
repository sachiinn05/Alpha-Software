import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SmoothScroll from "./lib/SmoothScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ui/ScrollProgress";
import Cursor from "./components/ui/Cursor";
import Home from "./pages/Home";
import CaseStudyPage from "./components/CaseStudyPage";

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <SmoothScroll>
      <div className="bg-black text-ivory min-h-screen">
        {!ready && <Loader onDone={() => setReady(true)} />}
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
