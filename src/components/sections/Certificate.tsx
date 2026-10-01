import { certificate } from "@/config/content";
import { site } from "@/config/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/ui/Logo";
import { T } from "@/components/ui/Text";

/** Mirrors the real SUKHMARAGA Academy certificate of completion. */
function CertificateMockup() {
  const fs = (min: number, vw: number, max: number) => ({ fontSize: `clamp(${min}rem, ${vw}vw, ${max}rem)` });
  return (
    <figure className="relative">
      <div
        role="img"
        aria-label={`Contoh Certificate of Completion ${site.courseName} dari SUKHMARAGA Academy`}
        className="relative aspect-[1/1] w-full rotate-[-1.2deg] rounded-[clamp(10px,1.6vw,18px)] bg-[#42a5f5] p-[2.2%] shadow-[0_50px_80px_-40px_rgb(14_27_46/0.45)] transition-transform duration-700 ease-[var(--ease-premium)] hover:rotate-0"
      >
        <div className="relative flex h-full flex-col items-center rounded-[clamp(6px,1vw,12px)] bg-white px-[8%] pt-[7%] pb-[5%] text-center font-sans">
          <LogoMark className="absolute left-[6%] top-[5%] h-auto w-[11%]" />
          <p className="mt-[14%] font-sans font-black tracking-[0.12em] text-[#4b4f63]" style={fs(1.2, 3.6, 2.6)}>
            CERTIFICATE
          </p>
          <p className="-mt-[1%] tracking-[0.3em] text-[#4b4f63]" style={fs(0.4, 0.9, 0.62)}>
            OF COMPLETION
          </p>
          <p className="mt-[8%] text-[#333]" style={fs(0.42, 1, 0.72)}>
            This certificate is proudly presented to
          </p>
          <p className="mt-[3%] font-bold text-[#42a5f5]" style={fs(0.9, 2.4, 1.7)}>
            [Nama Peserta]
          </p>
          <p className="mt-[3%] text-[#333]" style={fs(0.38, 0.85, 0.62)}>
            for successfully completing the course
          </p>
          <p className="mt-[3%] font-bold uppercase text-[#4b4f63]" style={fs(0.55, 1.5, 1.05)}>
            {site.courseName}
          </p>
          <p className="mt-[3%] text-[#333]" style={fs(0.4, 0.9, 0.66)}>
            Issued on [Tanggal]
          </p>
          <div className="mt-auto flex w-full justify-between gap-[10%]">
            {[
              [site.directorName, "Director"],
              [site.instructorName, "Instructor"],
            ].map(([name, role]) => (
              <div key={role} className="w-[40%] border-t border-[#333] pt-[3%]">
                <p className="font-semibold text-[#4b4f63]" style={fs(0.36, 0.8, 0.58)}>
                  {name}
                </p>
                <p className="mt-[2%] text-[#c77d4b]" style={fs(0.3, 0.6, 0.45)}>
                  {role}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-[6%] text-[#8a5a3c]" style={fs(0.3, 0.6, 0.45)}>
            Certificate ID: SKH-XXXX-X-XXXXXXXX
          </p>
        </div>
      </div>
      <figcaption className="mt-7 text-center text-xs text-stone-500">
        Contoh tampilan sertifikat. Nama peserta, tanggal terbit, dan ID sertifikat mengikuti data Anda.
      </figcaption>
    </figure>
  );
}

export function Certificate() {
  return (
    <section aria-labelledby="certificate-title" className="section-y bg-ivory">
      <div className="container-x grid-12 items-center gap-y-14">
        <div className="col-span-4 md:col-span-12 lg:col-span-5">
          <Reveal>
            <Eyebrow>{certificate.eyebrow}</Eyebrow>
            <h2
              id="certificate-title"
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
            >
              {certificate.title}
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.8] text-stone-600">{certificate.body}</p>
          </Reveal>
          <ol className="mt-10 space-y-4">
            {certificate.steps.map((s, i) => (
              <Reveal key={s} delay={0.06 * i} y={12} className="flex items-center gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold-500/60 font-display text-xs font-semibold tabular-nums text-gold-600">
                  {i + 1}
                </span>
                <span className="text-[0.9375rem] font-medium text-navy-900">{s}</span>
              </Reveal>
            ))}
          </ol>
          <p className="mt-10 border-l-2 border-stone-300 pl-5 text-[0.8125rem] leading-relaxed text-stone-500">
            <T>{certificate.note}</T>
          </p>
        </div>

        <Reveal delay={0.15} className="col-span-4 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-7">
          <div className="bg-sand-100 px-[6%] py-[9%]">
            <CertificateMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
