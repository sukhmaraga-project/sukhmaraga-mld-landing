import { images, intro } from "@/config/content";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";

export function CourseIntroduction() {
  return (
    <section id="tentang" aria-labelledby="intro-title" className="section-y bg-white">
      <div className="container-x grid-12 items-center gap-y-14">
        <div className="relative col-span-4 md:col-span-8 lg:col-span-5">
          <ImageReveal>
            <EditorialImage
              {...images.intro}
              sizes="(min-width: 1024px) 38vw, (min-width: 768px) 65vw, 100vw"
              className="aspect-[4/5] w-full"
            />
          </ImageReveal>
          <div aria-hidden className="absolute -bottom-5 -right-5 -z-0 hidden h-2/3 w-2/3 border border-gold-500/40 md:block" style={{ zIndex: -1 }} />
        </div>

        <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <Eyebrow>{intro.eyebrow}</Eyebrow>
            <h2
              id="intro-title"
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
            >
              {intro.title}
            </h2>
            <p className="mt-7 text-[17px] leading-[1.8] text-stone-600">{intro.body}</p>
          </Reveal>

          <dl className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {intro.points.map((pt, i) => (
              <Reveal key={pt.title} delay={0.06 * i} y={16}>
                <dt className="flex items-center gap-3 font-display text-base font-semibold text-navy-900">
                  <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
                  {pt.title}
                </dt>
                <dd className="mt-2.5 pl-[18px] text-[15px] leading-relaxed text-stone-600">{pt.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
