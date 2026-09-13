const tiles = {
  ott: ["For You", "Following", "Live", "Studio"],
  cinema: ["Movies", "Series", "New", "My List"],
  social: ["Feed", "Explore", "Create", "Inbox"],
  events: ["Tonight", "This week", "Nearby", "Host"],
  commerce: ["Whisky", "Beer", "Rare", "Cellar"],
};

const hues = {
  ott: 350,
  cinema: 38,
  social: 24,
  events: 250,
  commerce: 32,
};

export default function ProjectScreen({ project, compact = false }) {
  const v = project.visual;
  const nav = tiles[v.kind] ?? tiles.ott;
  const light = v.paper.startsWith("#f");
  const hue = hues[v.kind] ?? 30;

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: v.paper, color: v.ink }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 18% 20%, hsla(${hue}, 55%, ${light ? 70 : 48}%, 0.55), transparent 34%),
            radial-gradient(circle at 86% 78%, hsla(${hue + 18}, 40%, ${light ? 42 : 22}%, 0.7), transparent 40%),
            linear-gradient(160deg, ${v.paper}, ${v.accent}22)
          `,
        }}
      />

      <div
        className={`absolute ${compact ? "right-3 top-10 h-16 w-16" : "right-6 top-16 h-36 w-36 md:h-44 md:w-44"} rounded-full opacity-80`}
        style={{ background: v.accent }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className={`flex items-center justify-between ${compact ? "px-3 py-2" : "px-6 py-4"}`}>
          <span className={`${compact ? "text-[8px]" : "text-[11px]"} tracking-[0.26em] uppercase`}>
            {project.title}
          </span>
          <span
            className={`${compact ? "text-[7px]" : "text-[10px]"} tracking-[0.16em] uppercase`}
            style={{ color: v.muted }}
          >
            {v.eyebrow}
          </span>
        </div>

        <div className={`mt-auto ${compact ? "px-3 pb-3" : "px-6 pb-8"}`}>
          <p
            className={`${compact ? "text-lg leading-none" : "text-4xl md:text-5xl leading-[0.9]"} font-medium`}
            style={{ letterSpacing: "-0.045em" }}
          >
            {v.headline}
          </p>
          {!compact && (
            <div className="mt-5 flex flex-wrap gap-2">
              {nav.map((label) => (
                <span
                  key={label}
                  className="shrink-0 px-2.5 py-1 text-[9px] tracking-[0.14em] uppercase whitespace-nowrap"
                  style={{
                    border: `1px solid ${light ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.28)"}`,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
