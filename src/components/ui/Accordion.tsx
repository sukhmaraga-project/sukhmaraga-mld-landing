"use client";

import { m } from "framer-motion";
import { useId, useState } from "react";
import { Icon } from "./Icon";

export type AccordionItem = {
  key: string;
  header: React.ReactNode;
  content: React.ReactNode;
};

/** Accessible disclosure list (WAI-ARIA accordion pattern). */
export function Accordion({
  items,
  defaultOpen = null,
  className = "",
  itemClassName = "",
  buttonClassName = "",
}: {
  items: AccordionItem[];
  defaultOpen?: string | null;
  className?: string;
  itemClassName?: string;
  buttonClassName?: string;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen);
  const id = useId();

  return (
    <div className={className}>
      {items.map((item) => {
        const isOpen = open === item.key;
        const btnId = `${id}-btn-${item.key}`;
        const panelId = `${id}-panel-${item.key}`;
        return (
          <div key={item.key} className={itemClassName}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : item.key)}
                className={`group flex w-full items-center gap-6 text-left ${buttonClassName}`}
              >
                <span className="min-w-0 flex-1">{item.header}</span>
                <span
                  aria-hidden
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-navy-900 bg-navy-900 text-white"
                      : "border-stone-300 text-navy-900 group-hover:border-navy-900"
                  }`}
                >
                  <Icon name="plus" className="h-4 w-4" />
                </span>
              </button>
            </h3>
            {/* Panels stay in the DOM (collapsed + inert) so answers are indexable and readable without JS. */}
            <m.div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              data-accordion-panel
              initial={false}
              animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              inert={!isOpen}
              className="overflow-hidden"
            >
              {item.content}
            </m.div>
          </div>
        );
      })}
    </div>
  );
}
