import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import alphaLogo from "../Logo/Alpha Logo.jpeg";
import { navItems } from "../data/site";
import { scrollToId } from "../lib/scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = window.__alphaLenis;
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    scrollToId(id, -20);
  };

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <div className="flex items-center justify-between w-full max-w-[420px] h-[58px] px-5 rounded-full bg-black/90 text-white shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/8">
          <button
            type="button"
            onClick={() => go("contact")}
            className="h-10 w-10 flex items-center justify-center"
            aria-label="Contact"
            data-cursor="Mail"
          >
            <Mail size={18} strokeWidth={1.6} />
          </button>

          <button
            type="button"
            onClick={() => go("home")}
            className="h-9 w-9 overflow-hidden rounded-sm"
            aria-label="Alpha Software home"
          >
            <img src={alphaLogo} alt="" className="h-full w-full object-cover" />
          </button>

          <button
            type="button"
            className="h-10 w-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-5 bg-white transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-opacity duration-500 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-white transition-transform duration-500 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[45] bg-black transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="h-full px-8 pt-32 pb-12 flex flex-col justify-between">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="block w-full text-left py-2 giant-title text-5xl sm:text-7xl text-white/90 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go("contact")}
              className="block w-full text-left py-2 giant-title text-5xl sm:text-7xl text-white"
            >
              Contact
            </button>
          </nav>
          <div className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase text-muted">
            <span>Alpha Software</span>
            <span>Est. production</span>
          </div>
        </div>
      </div>
    </>
  );
}
