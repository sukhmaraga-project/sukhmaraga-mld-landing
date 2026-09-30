import { pricing } from "@/config/content";
import { site } from "@/config/site";
import { EnrollButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/Text";

const parsePrice = (s: string) => Number(s.replace(/\D/g, ""));
const formatRp = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

export function Pricing() {
  return (
    <section id="harga" aria-labelledby="pricing-title" className="section-y bg-sand-50">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">{pricing.eyebrow}</Eyebrow>
          <h2
            id="pricing-title"
            className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
          >
            {pricing.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl lg:mt-16">
          <div className="grid overflow-hidden bg-white shadow-[0_40px_80px_-50px_rgb(14_27_46/0.4)] md:grid-cols-[1.15fr_1fr]">
            <div className="p-8 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-600">E-Course</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy-900">{site.courseName}</h3>
              <p className="mt-2 text-sm text-stone-500">{site.academy}</p>
              <p className="mt-9 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-900/50">Termasuk</p>
              <ul className="mt-5 space-y-4">
                {pricing.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-[15px] text-navy-900">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span>
                      <T>{item}</T>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden bg-navy-900 p-8 text-white md:p-12">
              <div aria-hidden className="bg-lines absolute inset-0 opacity-50" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-400">Investasi</p>
                {site.originalPrice && (
                  <p className="mt-5 flex flex-wrap items-center gap-3 text-[15px]">
                    <span className="text-white/45 line-through decoration-white/45">
                      <span className="sr-only">Harga normal </span>
                      {site.originalPrice}
                    </span>
                    <span className="bg-gold-500/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-400">
                      Hemat {formatRp(parsePrice(site.originalPrice) - site.priceValue)}
                    </span>
                  </p>
                )}
                <p className="mt-3 font-display text-[2.75rem] font-semibold leading-none tracking-tight md:text-5xl">
                  <span className="sr-only">Harga sekarang </span>
                  {site.price}
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-white/60">
                  <T>{site.priceNote}</T>
                </p>
                <div className="my-8 h-px bg-white/15" />
                <EnrollButton variant="gold" className="w-full" />
                <p className="mt-5 flex items-start gap-2.5 text-[12px] leading-relaxed text-white/55">
                  <svg aria-hidden viewBox="0 0 24 24" className="mt-px h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" />
                    <path d="M8.5 10.5V7.5a3.5 3.5 0 017 0v3" />
                  </svg>
                  {pricing.redirectNote}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
