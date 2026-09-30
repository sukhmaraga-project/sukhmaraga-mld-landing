import { problem } from "@/config/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function ProblemSection() {
  return (
    <section aria-labelledby="problem-title" className="section-y bg-ivory">
      <div className="container-x grid-12 gap-y-14">
        <div className="col-span-4 md:col-span-12 lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <Eyebrow>{problem.eyebrow}</Eyebrow>
            <h2
              id="problem-title"
              className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-navy-900 md:text-[2.75rem]"
            >
              {problem.title}
            </h2>
            <div className="mt-7 space-y-5 text-[16px] leading-[1.8] text-stone-600">
              {problem.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-10 border-l-2 border-gold-500 pl-6 font-display text-xl font-medium leading-snug text-navy-900">
              “{problem.quote}”
            </blockquote>
          </Reveal>
        </div>

        <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-navy-900/50">
              Yang perlu dipahami seorang terapis
            </p>
          </Reveal>
          <ol className="mt-6 grid border-t border-stone-300 sm:grid-cols-2">
            {problem.aspects.map((a, i) => (
              <li
                key={a.title}
                className={`border-b border-stone-300 py-7 sm:pr-8 ${i % 2 === 1 ? "sm:border-l sm:pl-8" : ""}`}
              >
                <Reveal delay={0.04 * i} y={16}>
                  <span className="font-display text-xs font-semibold tabular-nums text-gold-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{a.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{a.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
