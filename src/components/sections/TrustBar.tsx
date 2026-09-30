import { trustItems } from "@/config/content";
import { Icon } from "@/components/ui/Icon";

export function TrustBar() {
  return (
    <section aria-label="Yang termasuk dalam program" className="border-y border-stone-200 bg-white">
      <div className="container-x">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {trustItems.map((item, i) => (
            <li
              key={item.label}
              className={`flex items-center gap-3.5 py-6 md:py-8 lg:justify-center ${
                i === trustItems.length - 1 ? "col-span-2 sm:col-span-1" : ""
              } ${i > 0 ? "lg:border-l lg:border-stone-200" : ""}`}
            >
              <Icon name={item.icon} className="h-6 w-6 shrink-0 text-gold-500" />
              <span className="text-[13px] font-semibold tracking-wide text-navy-900 md:text-sm">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
