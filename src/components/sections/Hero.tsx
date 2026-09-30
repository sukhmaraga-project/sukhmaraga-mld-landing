"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, images } from "@/config/content";
import { site } from "@/config/site";
import { ButtonLink, EnrollButton } from "@/components/ui/Button";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Icon } from "@/components/ui/Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [before, after] = hero.title.split(hero.titleHighlight);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory pt-24 md:pt-32 lg:pt-36">
      {/* soft beige field behind image */}
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[32%] bg-sand-50 lg:block" />

      <div className="container-x relative">
        <div className="grid-12 items-center gap-y-12 pb-16 md:pb-20 lg:pb-28">
          <div className="col-span-4 md:col-span-12 lg:col-span-7 lg:pr-10">
            <m.p {...fade(0.05)} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-600">
              <span aria-hidden className="h-px w-8 bg-gold-500" />
              <span className="hidden sm:inline">{site.academy}</span>
              <span aria-hidden className="hidden text-stone-300 sm:inline">/</span>
              <span className="text-navy-900/60">{hero.eyebrow}</span>
            </m.p>

            <m.h1
              id="hero-title"
              {...fade(0.15)}
              className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.025em] text-navy-900 sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem]"
            >
              {before}
              <span className="text-gold-600">{hero.titleHighlight}</span>
              {after}
            </m.h1>

            <m.p {...fade(0.28)} className="mt-7 max-w-xl text-[17px] leading-[1.75] text-stone-600 md:text-lg">
              {hero.lead}
            </m.p>

            <m.div {...fade(0.4)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <EnrollButton className="w-full sm:w-auto" />
              <ButtonLink href="#kurikulum" variant="secondary" className="w-full sm:w-auto" arrowDown>
                Lihat Kurikulum
              </ButtonLink>
            </m.div>

            <m.ul
              {...fade(0.52)}
              aria-label="Keunggulan program"
              className="mt-9 flex flex-col gap-3 border-t border-stone-200 pt-7 text-[13px] text-navy-900/70 sm:flex-row sm:flex-wrap sm:gap-x-7"
            >
              {hero.indicators.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </m.ul>
          </div>

          <div className="relative col-span-4 md:col-span-10 md:col-start-2 lg:col-span-5 lg:col-start-8">
            <m.div
              initial={{ clipPath: "inset(8% 8% 8% 8%)", opacity: 0 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]"
            >
              <m.div style={{ y: imageY }} className="absolute -inset-y-[6%] inset-x-0">
                <EditorialImage
                  {...images.hero}
                  priority
                  captionClassName="top-[7%]"
                  imagePositionClassName="object-[50%_72%] lg:object-center"
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 80vw, 100vw"
                  className="h-full w-full"
                />
              </m.div>
            </m.div>

            {/* editorial caption card */}
            <m.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}
              className="relative -mt-16 ml-4 mr-10 bg-navy-900 p-6 text-white shadow-[0_30px_60px_-30px_rgb(14_27_46/0.6)] sm:mr-auto sm:max-w-sm lg:absolute lg:-bottom-10 lg:-left-12 lg:m-0"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-400">Alur pembelajaran</p>
              <ol className="mt-4 space-y-2.5 text-sm text-white/85">
                {["Teori: sistem & organ limfatik", "Kontraindikasi, rangkaian & SOP", "Praktik 6 area tubuh"].map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="font-display text-xs tabular-nums text-gold-400">0{i + 1}</span>
                    <span className="h-px w-4 bg-white/20" aria-hidden />
                    {s}
                  </li>
                ))}
              </ol>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
