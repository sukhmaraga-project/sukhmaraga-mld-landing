import {
  practical,
  practiceAreas,
  PRACTICAL_VIDEO_EMBED_URL,
  SHOW_SESSION_SLIDESHOW,
} from "@/config/content";
import { SessionSlideshow } from "./SessionSlideshow";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";

const icons = ["eye", "steps", "focus", "hands"];

export function PracticalLearning() {
  const hasMedia = Boolean(PRACTICAL_VIDEO_EMBED_URL) || SHOW_SESSION_SLIDESHOW;
  return (
    <section
      aria-labelledby="practical-title"
      className="section-y relative overflow-hidden bg-navy-900 text-white"
    >
      <div
        aria-hidden
        className="bg-lines pointer-events-none absolute inset-0 opacity-60"
      />
      <div className="container-x relative">
        <div className="grid-12 items-end gap-y-6">
          <Reveal className="col-span-4 md:col-span-7">
            <Eyebrow light>{practical.eyebrow}</Eyebrow>
            <h2
              id="practical-title"
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] md:text-[2.75rem]"
            >
              {practical.title}
            </h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="col-span-4 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9"
          >
            <p className="text-[1rem] leading-[1.8] text-white/70">
              {practical.body}
            </p>
          </Reveal>
        </div>

        {hasMedia && (
          <ImageReveal className="mt-14 lg:mt-20">
            {PRACTICAL_VIDEO_EMBED_URL ? (
              <div className="relative aspect-video w-full overflow-hidden">
                <iframe
                  src={PRACTICAL_VIDEO_EMBED_URL}
                  title="Video demonstrasi Manual Lymphatic Drainage"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            ) : (
              <SessionSlideshow />
            )}
          </ImageReveal>
        )}

        <Reveal
          className={`${hasMedia ? "mt-10" : "mt-14 lg:mt-20"} flex flex-col gap-4 border-b border-white/10 pb-10 md:flex-row md:items-center md:gap-8`}
        >
          <p className="shrink-0 text-[0.6875rem] font-semibold uppercase tracking-[0.24em] text-gold-400">
            Area yang dipraktikkan
          </p>
          <ul className="flex flex-wrap gap-2">
            {practiceAreas.map((area) => (
              <li
                key={area}
                className="border border-white/15 px-3.5 py-1.5 text-[0.8125rem] text-white/80"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-4 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {practical.items.map((item, i) => (
            <li
              key={item.title}
              className="bg-navy-900 py-8 sm:px-6 lg:px-8 lg:first:pl-0"
            >
              <Reveal delay={0.06 * i} y={16} className="h-full">
                <Icon name={icons[i]} className="h-7 w-7 text-gold-400" />
                <h3 className="mt-6 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/65">
                  {item.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
