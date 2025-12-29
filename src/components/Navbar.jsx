import alphaLogo from "../Logo/Alpha Logo.jpeg";

export default function Navbar({ onScroll }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 px-6 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => onScroll("home")}
          className="flex items-center gap-3"
        >
          <img
            src={alphaLogo}
            alt="Alpha Software Logo"
            className="h-9 w-9 rounded-md object-cover"
          />

          <span className="text-xl font-extrabold tracking-wide">
            <span className="text-purple-400">Alpha</span>{" "}
            <span className="text-white">Software</span>
          </span>
        </button>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          {["about", "skills", "projects", "testimonials"].map((item) => (
            <button
              key={item}
              onClick={() => onScroll(item)}
              className="
                relative
                text-gray-300
                hover:text-white
                transition
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-purple-400
                after:transition-all
                hover:after:w-full
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          {/* Contact CTA */}
          <button
            onClick={() => onScroll("contact")}
            className="
              px-4 py-2
              rounded-full
              bg-purple-500/10
              text-purple-300
              border border-purple-500/30
              hover:bg-purple-500/20
              hover:text-white
              transition
            "
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
