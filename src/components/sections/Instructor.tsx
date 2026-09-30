import { images, instructor } from "@/config/content";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageReveal, Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/Text";

export function Instructor() {
  return (
    <section id="instruktur" aria-labelledby="instructor-title" className="section-y bg-sand-50">
      <div className="container-x grid-12 items-center gap-y-14">
        <div className="col-span-4 md:col-span-8 md:col-start-3 lg:col-span-5 lg:col-start-1">
          <ImageReveal className="relative">
            <EditorialImage
              {...images.instructor}
              sizes="(min-width: 1024px) 38vw, (min-width: 768px) 65vw, 100vw"
              className="aspect-[4/5] w-full"
            />
            <div className="absolute bottom-0 left-0 bg-navy-900 px-6 py-4 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-400">Instruktur</p>
              <p className="mt-1 font-display text-sm font-semibold">
                <T>{instructor.name}</T>
              </p>
            </div>
          </ImageReveal>
        </div>

        <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <Eyebrow>{instructor.eyebrow}</Eyebrow>
            <h2
              id="instructor-title"
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
            >
              <T>{instructor.name}</T>
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold-600">
              <T>{instructor.role}</T>
            </p>
            <p className="mt-7 text-[17px] leading-[1.8] text-stone-600">
              <T>{instructor.bio}</T>
            </p>
          </Reveal>

          <dl className="mt-10 border-t border-stone-300">
            {instructor.details.map((d, i) => (
              <Reveal
                key={d.label}
                delay={0.05 * i}
                y={12}
                className="grid gap-1 border-b border-stone-300 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-900/50 sm:pt-1">{d.label}</dt>
                <dd className="whitespace-pre-line text-[15px] leading-relaxed text-navy-900">
                  <T>{d.value}</T>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
