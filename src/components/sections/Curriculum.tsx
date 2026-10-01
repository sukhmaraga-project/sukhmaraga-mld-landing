import { curriculum } from "@/config/content";
import { site } from "@/config/site";
import { Accordion } from "@/components/ui/Accordion";
import { EnrollButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/Text";

export function Curriculum() {
  const items = curriculum.map((part, i) => ({
    key: String(i),
    header: (
      <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
        <span className="w-24 shrink-0 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gold-600">
          {part.label}
        </span>
        <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-display text-lg font-semibold leading-snug text-navy-900 transition-colors group-hover:text-navy-700 md:text-xl">
            {part.title}
          </span>
          {part.count && <span className="text-[0.8125rem] font-medium text-stone-500">{part.count}</span>}
        </span>
      </span>
    ),
    content: (
      <div className="pb-8 sm:pl-32 sm:pr-16">
        <p className="text-[0.9375rem] leading-relaxed text-stone-600">{part.summary}</p>
        {part.videos.length > 0 && (
          <ol className="mt-5 space-y-2.5">
            {part.videos.map((v, n) => (
              <li key={n} className="flex items-baseline gap-4 text-[0.9375rem] text-navy-900/85">
                <span className="w-6 shrink-0 font-display text-xs font-semibold tabular-nums text-gold-600">
                  {String(n + 1).padStart(2, "0")}
                </span>
                <span>
                  <T>{v}</T>
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
    ),
  }));

  return (
    <section id="kurikulum" aria-labelledby="curriculum-title" className="section-y bg-ivory">
      <div className="container-x grid-12 gap-y-12">
        <div className="col-span-4 md:col-span-12 lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32">
            <Eyebrow>Kurikulum</Eyebrow>
            <h2
              id="curriculum-title"
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
            >
              Dari teori ke praktik, dalam satu modul utuh
            </h2>
            <p className="mt-6 text-[1rem] leading-[1.8] text-stone-600">
              Susunan materi persis seperti di LMS SUKHMARAGA Academy: 6 sesi teori, 7 sesi praktik, lalu modul dan e-sertifikat.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-stone-300 pt-8 text-sm">
              {[
                ["Modul", site.moduleCount],
                ["Sesi", "6 teori · 7 praktik"],
                ["Akses", site.accessDuration],
                ["Bonus", "E-book gratis"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-navy-900/50">{label}</dt>
                  <dd className="mt-2 font-display font-semibold text-navy-900">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 hidden lg:block">
              <EnrollButton />
            </div>
          </Reveal>
        </div>

        <div className="col-span-4 md:col-span-12 lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.1}>
            <Accordion
              items={items}
              defaultOpen="1"
              className="border-t border-stone-300"
              itemClassName="border-b border-stone-300"
              buttonClassName="py-6 md:py-7"
            />
          </Reveal>
          <div className="mt-10 lg:hidden">
            <EnrollButton className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
