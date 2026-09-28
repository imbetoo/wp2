export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-[1.625rem] leading-none font-semibold tracking-[-0.05em] ${className}`}
    >
      tecnica<span className="text-brand">ie</span>
    </span>
  );
}
