import { finalCta } from "@/config/content";
import { ButtonLink, EnrollButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section id="daftar" aria-labelledby="final-cta-title" className="relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden className="bg-lines absolute inset-0 opacity-70" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="container-x section-y relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div aria-hidden className="mx-auto flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold-500/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
            <span className="h-px w-12 bg-gold-500/60" />
          </div>
          <h2
            id="final-cta-title"
            className="mt-10 font-display text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-[3.5rem]"
          >
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.8] text-white/70">{finalCta.body}</p>
          <div className="mt-11 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <EnrollButton variant="gold" className="w-full sm:w-auto" />
            <ButtonLink href="#kurikulum" variant="ghost-light" className="w-full sm:w-auto">
              Lihat Kurikulum
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
