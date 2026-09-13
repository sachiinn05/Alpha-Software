import alphaLogo from "../Logo/Alpha Logo.jpeg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 py-16 md:py-20">
        <a
          href="mailto:alphasoftware.co.in@gmail.com"
          className="block display-title text-3xl sm:text-5xl md:text-6xl hover:opacity-70 transition-opacity"
        >
          alphasoftware.co.in@gmail.com
        </a>
        <p className="mt-6 text-lg text-white/70">
          <a href="tel:+919695981330" className="hover:opacity-70">
            +91 96959 81330
          </a>
        </p>
        <address className="mt-2 text-sm text-muted not-italic">
          Lucknow, India · Shipping worldwide
        </address>

        <div className="mt-10 flex flex-wrap gap-6 text-[11px] tracking-[0.22em] uppercase text-white/60">
          <a href="https://www.linkedin.com/in/sujeet-kumar-aa55a524b/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://wa.me/919695981330" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            WhatsApp
          </a>
          <a href="https://www.fiverr.com/s/zWqgR2E" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Fiverr
          </a>
        </div>
      </div>

      <div className="relative h-[42vw] min-h-[280px] max-h-[520px] overflow-hidden bg-[#101010]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,#3a3a3a,transparent_58%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={alphaLogo} alt="Alpha Software" className="w-[28vw] max-w-[220px] min-w-[120px] object-contain drop-shadow-2xl" />
        </div>
      </div>

      <div className="px-5 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] tracking-[0.22em] uppercase text-muted">
        <p>© {year} Alpha Software. All rights reserved.</p>
        <p>Web · Mobile · Cloud</p>
      </div>
    </footer>
  );
}
