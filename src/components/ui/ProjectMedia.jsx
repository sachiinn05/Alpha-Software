import { useState } from "react";

export default function ProjectMedia({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-panel ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full field-grid flex items-center justify-center min-h-[180px]">
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-gold">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
