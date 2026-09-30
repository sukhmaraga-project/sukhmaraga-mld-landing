"use client";

import { m, type HTMLMotionProps } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Gentle fade-up on first scroll into view. */
export function Reveal({ delay = 0, y = 24, children, ...rest }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </m.div>
  );
}

/** Clip-path reveal for imagery. */
export function ImageReveal({ delay = 0, children, ...rest }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <m.div
      initial={{ clipPath: "inset(12% 0% 0% 0%)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </m.div>
  );
}
