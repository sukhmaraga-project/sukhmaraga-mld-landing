import { modules } from "@/config/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function LearningModules() {
  return (
    <section aria-labelledby="modules-title" className="section-y bg-sand-50">
      <div className="container-x">
        <div className="grid-12 items-end gap-y-6">
          <Reveal className="col-span-4 md:col-span-7">
            <Eyebrow>Ruang lingkup materi</Eyebrow>
            <h2
              id="modules-title"
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
            >
              Dari fondasi teori hingga praktik treatment utuh
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-4 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
            <p className="text-[16px] leading-[1.8] text-stone-600">
              Setiap topik dibangun di atas topik sebelumnya, sehingga pemahaman Anda terbentuk secara bertahap dan
              menyeluruh.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px bg-stone-300 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4" style={{ border: "1px solid var(--color-stone-300)" }}>
          {modules.map((mod, i) => (
            <li key={mod.title} className="group bg-sand-50 transition-colors duration-500 hover:bg-white">
              <Reveal delay={0.05 * (i % 4)} y={16} className="flex h-full flex-col p-7 md:p-8">
                <span className="font-display text-[2.5rem] font-light leading-none tabular-nums text-gold-500/80 transition-colors duration-500 group-hover:text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="mt-8 h-px w-8 bg-navy-900/20 transition-all duration-500 group-hover:w-14 group-hover:bg-gold-500" />
                <h3 className="mt-6 font-display text-[17px] font-semibold leading-snug text-navy-900">{mod.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-stone-600">{mod.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
