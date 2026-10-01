"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { sessionSlides } from "@/config/content";

const INTERVAL = 4500;
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Slideshow thumbnail sesi. Semua slide tetap di DOM (crossfade via opacity),
 * autoplay berhenti saat di-hover/fokus dan saat pengguna memilih reduced motion.
 */
export function SessionSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion() ?? false;
  const listRef = useRef<HTMLOListElement>(null);
  const total = sessionSlides.length;

  const go = useCallback((i: number) => setIndex((i + total) % total), [total]);

  useEffect(() => {
    if (paused || reduced) return;
    const t = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, reduced, go]);

  // Keep the active session visible inside the scrollable list without moving the page.
  useEffect(() => {
    const list = listRef.current;
    const item = list?.children[index] as HTMLElement | undefined;
    if (!list || !item) return;
    const top = item.offsetTop - list.clientHeight / 2 + item.clientHeight / 2;
    list.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
  }, [index, reduced]);

  const active = sessionSlides[index];

  return (
    <div
      data-slideshow
      className="grid-12 gap-y-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="col-span-4 md:col-span-12 lg:col-span-8">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Cuplikan sesi e-course"
          className="relative aspect-video w-full overflow-hidden bg-navy-800 ring-1 ring-white/10"
        >
          {sessionSlides.map((s, i) => (
            <div
              key={s.src}
              data-slide={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} dari ${total}`}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-700 ease-premium ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={s.src}
                alt={`Sesi ${s.no} ${s.kind}: ${s.title}`}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                quality={90}
                className="object-cover"
              />
            </div>
          ))}

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-2 p-3 md:p-4">
            <button
              type="button"
              data-slide-prev
              onClick={() => go(index - 1)}
              aria-label="Sesi sebelumnya"
              className="flex h-10 w-10 items-center justify-center bg-navy-950/70 text-white backdrop-blur-sm transition-colors hover:bg-navy-950"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              data-slide-next
              onClick={() => go(index + 1)}
              aria-label="Sesi berikutnya"
              className="flex h-10 w-10 items-center justify-center bg-navy-950/70 text-white backdrop-blur-sm transition-colors hover:bg-navy-950"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-4 lg:hidden" aria-live="polite">
          <p className="text-[0.9375rem] text-white/85">
            <span data-slide-label className="mr-2 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
              {active.kind} · Sesi {active.no}
            </span>
            <span data-slide-title>{active.title}</span>
          </p>
          <p className="shrink-0 font-display text-sm tabular-nums text-white/50">
            <span data-slide-count>{pad(index + 1)}</span> / {pad(total)}
          </p>
        </div>
        <div className="mt-3 h-px w-full bg-white/10 lg:hidden">
          <div
            data-slide-progress
            className="h-px bg-gold-400 transition-[width] duration-500"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="relative hidden lg:col-span-4 lg:block">
        <div className="absolute inset-0 flex flex-col border border-white/10">
          <p className="border-b border-white/10 px-6 py-4 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold-400">
            {total} sesi video
          </p>
          <ol ref={listRef} className="relative min-h-0 flex-1 overflow-y-auto [scrollbar-color:rgb(255_255_255/0.2)_transparent] [scrollbar-width:thin]">
            {sessionSlides.map((s, i) => (
              <li key={s.src}>
                <button
                  type="button"
                  data-slide-go={i}
                  onClick={() => go(i)}
                  aria-current={i === index ? "true" : undefined}
                  className={`group flex w-full items-baseline gap-4 border-l-2 px-6 py-3 text-left transition-colors ${
                    i === index ? "border-gold-400 bg-white/[0.06]" : "border-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="w-[5.5rem] shrink-0 whitespace-nowrap text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold-400/80">
                    {s.kind} {s.no}
                  </span>
                  <span className={`text-[0.875rem] leading-snug ${i === index ? "text-white" : "text-white/60 group-hover:text-white/85"}`}>
                    {s.title}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
