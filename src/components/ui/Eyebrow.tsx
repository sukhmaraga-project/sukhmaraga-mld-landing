export function Eyebrow({ children, light = false, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] ${
        light ? "text-gold-400" : "text-gold-600"
      } ${className}`}
    >
      <span aria-hidden className={`h-px w-8 ${light ? "bg-gold-400/70" : "bg-gold-500"}`} />
      {children}
    </p>
  );
}
