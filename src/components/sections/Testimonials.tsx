import Image from "next/image";
import { SHOW_TESTIMONIALS, testimonials } from "@/config/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/Text";

type Item = (typeof testimonials)[number];

/** "Andi Pratama" -> "AP", "Rina S." -> "RS"; placeholders ([NAMA]) get no initials. */
const initials = (name: string) =>
  name.startsWith("[")
    ? ""
    : name
        .split(/\s+/)
        .map((w) => w.replace(/[^A-Za-z]/g, "").charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase();

function Author({ item, light = false }: { item: Item; light?: boolean }) {
  return (
    <figcaption className="flex items-center gap-4">
      {item.photo ? (
        <Image src={item.photo} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
      ) : (
        <span
          aria-hidden
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-display text-[0.875rem] font-semibold tracking-wide ${
            light ? "border-gold-400/40 text-gold-400" : "border-gold-200 bg-sand-50 text-gold-600"
          }`}
        >
          {initials(item.name)}
        </span>
      )}
      <span>
        <span className={`block font-display text-[0.9375rem] font-semibold ${light ? "text-white" : "text-navy-900"}`}>
          <T>{item.name}</T>
        </span>
        <span className={`block text-[0.8125rem] ${light ? "text-white/60" : "text-stone-500"}`}>
          <T>{item.role}</T>
        </span>
      </span>
    </figcaption>
  );
}

export function Testimonials() {
  if (!SHOW_TESTIMONIALS || testimonials.length === 0) return null;
  const [featured, ...rest] = testimonials;

  return (
    <section aria-labelledby="testimonials-title" className="section-y bg-white">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Eyebrow>Pengalaman peserta</Eyebrow>
          <h2
            id="testimonials-title"
            className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
          >
            Cerita dari peserta
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="flex h-full flex-col justify-between gap-12 bg-navy-900 p-8 text-white md:p-12">
              <span aria-hidden className="font-display text-7xl leading-none text-gold-500">
                “
              </span>
              <blockquote className="font-display text-2xl font-medium leading-snug md:text-[1.9rem]">
                <T>{featured.quote}</T>
              </blockquote>
              <Author item={featured} light />
            </figure>
          </Reveal>
          <div className="grid gap-6 lg:col-span-5">
            {rest.map((item, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)}>
                <figure className="flex h-full flex-col justify-between gap-8 border border-stone-200 p-8">
                  <blockquote className="text-[1.0625rem] leading-relaxed text-navy-900">
                    <T>{item.quote}</T>
                  </blockquote>
                  <Author item={item} />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
