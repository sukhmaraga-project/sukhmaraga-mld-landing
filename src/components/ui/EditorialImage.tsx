import Image from "next/image";

type EditorialImageProps = {
  src: string | null;
  alt: string;
  /** Short art-direction note shown on the placeholder frame. */
  brief: string;
  sizes: string;
  priority?: boolean;
  tone?: "sand" | "navy";
  className?: string;
  /** Position class for the placeholder caption. */
  captionClassName?: string;
  /** object-position for the photo (default: top). */
  imagePositionClassName?: string;
};

/**
 * Photo slot. Renders an optimized next/image when `src` is set,
 * otherwise an art-directed placeholder frame that states which
 * photo belongs here (see /src/config/content.ts → images).
 */
export function EditorialImage({ src, alt, brief, sizes, priority, tone = "sand", className = "", captionClassName = "top-0", imagePositionClassName = "object-top" }: EditorialImageProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-white ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imagePositionClassName}`} />
      </div>
    );
  }

  const navy = tone === "navy";
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${navy ? "bg-navy-800" : "bg-sand-100"} ${className}`}
    >
      <svg
        aria-hidden
        className={`absolute inset-0 h-full w-full ${navy ? "text-gold-400/25" : "text-gold-500/30"}`}
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M-40 ${60 + i * 32} C 80 ${10 + i * 30}, 170 ${140 + i * 28}, 260 ${70 + i * 31} S 420 ${40 + i * 34}, 460 ${90 + i * 30}`}
          />
        ))}
      </svg>
      <div
        aria-hidden
        className={`absolute inset-0 ${
          navy
            ? "bg-[radial-gradient(ellipse_at_30%_20%,rgb(58_76_102/0.6),transparent_60%)]"
            : "bg-[radial-gradient(ellipse_at_30%_20%,rgb(255_255_255/0.7),transparent_60%)]"
        }`}
      />
      <div className={`absolute inset-x-0 ${captionClassName} flex items-start justify-between gap-4 p-5 sm:p-6`}>
        <p
          className={`max-w-[18rem] text-[0.6875rem] leading-relaxed tracking-wide ${
            navy ? "text-white/55" : "text-navy-900/50"
          }`}
        >
          <span className="mb-1 block font-semibold uppercase tracking-[0.2em]">[Foto]</span>
          {brief}
        </p>
      </div>
    </div>
  );
}
