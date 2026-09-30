import { faq } from "@/config/content";
import { site } from "@/config/site";
import { Accordion } from "@/components/ui/Accordion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { T } from "@/components/ui/Text";

export function FAQ() {
  const items = faq.map((item, i) => ({
    key: String(i),
    header: (
      <span className="block font-display text-[17px] font-semibold leading-snug text-navy-900 md:text-lg">{item.q}</span>
    ),
    content: (
      <p className="max-w-2xl pb-7 pr-12 text-[15px] leading-[1.8] text-stone-600">
        <T>{item.a}</T>
      </p>
    ),
  }));

  const { email, whatsapp, emailLabel, whatsappLabel } = site.contact;

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-y bg-white">
      <div className="container-x grid-12 gap-y-12">
        <Reveal className="col-span-4 md:col-span-12 lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <h2
            id="faq-title"
            className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
          >
            Pertanyaan yang sering diajukan
          </h2>
          <p className="mt-6 text-[15px] leading-[1.8] text-stone-600">
            Masih ada pertanyaan? Hubungi tim kami melalui{" "}
            {whatsapp ? (
              <a href={whatsapp} rel="noopener" className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">
                WhatsApp
              </a>
            ) : (
              <T>{whatsappLabel}</T>
            )}{" "}
            atau{" "}
            {email ? (
              <a href={`mailto:${email}`} className="font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4">
                {email}
              </a>
            ) : (
              <T>{emailLabel}</T>
            )}
            .
          </p>
        </Reveal>

        <Reveal delay={0.1} className="col-span-4 md:col-span-12 lg:col-span-7 lg:col-start-6">
          <Accordion
            items={items}
            className="border-t border-stone-300"
            itemClassName="border-b border-stone-300"
            buttonClassName="py-6"
          />
        </Reveal>
      </div>
    </section>
  );
}
