"use client";

import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { EnrollButton } from "@/components/ui/Button";

/**
 * Mobile/tablet only. Appears after the hero and hides while the
 * pricing or final CTA sections are on screen (they carry their own CTA).
 */
export function MobileStickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = ["harga", "daftar"].map((id) => document.getElementById(id)).filter(Boolean) as Element[];
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setCtaVisible(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const show = pastHero && !ctaVisible;

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-ivory/95 backdrop-blur-md lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="container-x flex items-center justify-between gap-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium uppercase tracking-[0.14em] text-stone-500">E-Course MLD</p>
              <p className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-display text-base font-semibold text-navy-900 min-[400px]:text-lg">{site.price}</span>
                {site.originalPrice && (
                  <span className="text-[11px] text-stone-500 line-through">
                    <span className="sr-only">Harga normal </span>
                    {site.originalPrice}
                  </span>
                )}
              </p>
            </div>
            <EnrollButton className="shrink-0 px-4! py-3.5! min-[400px]:px-5!" label="Daftar" />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
