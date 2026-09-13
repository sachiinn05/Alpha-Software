export default function HudLabel({ label, value, align = "left", ice = false }) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <div className="flex items-center gap-2 mb-1.5" style={{ justifyContent: align === "right" ? "flex-end" : "flex-start" }}>
        <span className={`status-dot ${ice ? "ice" : ""}`} />
        <p className="font-mono text-[10px] tracking-[0.28em] text-muted uppercase">
          {label}
        </p>
      </div>
      <p className="font-mono text-[11px] tracking-[0.2em] text-gold uppercase">
        {value}
      </p>
    </div>
  );
}
