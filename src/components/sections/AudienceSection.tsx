import { audience } from "@/config/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function AudienceSection() {
  return (
    <section aria-labelledby="audience-title" className="section-y bg-ivory">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">{audience.eyebrow}</Eyebrow>
          <h2
            id="audience-title"
            className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
          >
            {audience.title}
          </h2>
        </Reveal>

        <ul className="mt-14 grid border-t border-stone-300 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {audience.items.map((item, i) => (
            <li key={item.title} className="border-b border-stone-300 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0">
              <Reveal delay={0.05 * i} y={16} className="flex items-start gap-5 py-8 sm:px-8">
                <span className="mt-0.5 font-display text-sm font-semibold tabular-nums text-gold-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <h3 className="font-display text-lg font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{item.text}</p>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[13px] leading-relaxed text-stone-500">
            {audience.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
