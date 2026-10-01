import { benefits } from "@/config/content";
import { EnrollButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/Text";

export function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="section-y bg-white">
      <div className="container-x grid-12 gap-y-12">
        <div className="col-span-4 md:col-span-12 lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <Eyebrow>{benefits.eyebrow}</Eyebrow>
            <h2
              id="benefits-title"
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
            >
              {benefits.title}
            </h2>
            <div className="mt-10 hidden lg:block">
              <EnrollButton />
            </div>
          </Reveal>
        </div>

        <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7">
          <ul className="border-t border-navy-900">
            {benefits.items.map((item, i) => (
              <li key={item.title} className="border-b border-stone-200">
                <Reveal delay={0.04 * i} y={12} className="group flex items-start gap-5 py-6">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-navy-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <span className="font-display text-lg font-semibold text-navy-900">{item.title}</span>
                    <span className="text-[0.875rem] leading-relaxed text-stone-600 sm:max-w-[16rem] sm:text-right">
                      <T>{item.text}</T>
                    </span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
          {benefits.footnote && <p className="mt-6 text-[0.8125rem] text-stone-500">{benefits.footnote}</p>}
          <div className="mt-10 lg:hidden">
            <EnrollButton className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
