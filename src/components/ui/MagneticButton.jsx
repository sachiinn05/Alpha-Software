import { useRef } from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors duration-500";

const variants = {
  primary: "bg-white text-black hover:bg-ivory",
  secondary:
    "border border-white/35 text-ivory hover:border-white hover:text-white bg-transparent",
  ghost: "text-white hover:text-white/70 px-0 py-0",
};

export default function MagneticButton({
  children,
  className = "",
  variant = "primary",
  href,
  to,
  onClick,
  type = "button",
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const props = {
    ref,
    className: classes,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s, background 0.4s, border-color 0.4s" },
  };

  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
