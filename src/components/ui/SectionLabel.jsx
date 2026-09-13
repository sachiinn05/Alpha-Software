export default function SectionLabel({ index, label }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[10px] tracking-[0.32em] text-white/50 uppercase">
        {index}
      </span>
      <span className="h-px w-10 bg-white/25" />
      <span className="text-[10px] tracking-[0.32em] text-muted uppercase">
        {label}
      </span>
    </div>
  );
}
