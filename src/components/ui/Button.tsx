import { checkoutHref, isCheckoutConfigured } from "@/config/site";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "gold" | "ghost-light";

const base =
  "group relative inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[2px] px-7 py-4 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-[var(--ease-premium)] active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-[0_10px_30px_-12px_rgb(14_27_46/0.55)]",
  gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-[0_10px_30px_-12px_rgb(176_141_87/0.6)]",
  secondary: "border border-navy-900/20 text-navy-900 hover:border-navy-900 hover:bg-navy-900/[0.03]",
  "ghost-light": "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  arrow?: boolean;
  arrowDown?: boolean;
};

export function ButtonLink({ href, variant = "primary", className = "", children, arrow, arrowDown }: ButtonLinkProps) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { rel: "noopener" } : {})}
    >
      <span>{children}</span>
      {arrow && (
        <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {arrowDown && (
        <Icon name="arrowDown" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      )}
    </a>
  );
}

/** Primary enrollment CTA — always points to COURSE_CHECKOUT_URL. */
export function EnrollButton({
  variant = "primary",
  className = "",
  label = "Daftar Sekarang",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  return (
    <ButtonLink href={checkoutHref} variant={variant} className={className} arrow>
      {label}
      {!isCheckoutConfigured && <span className="sr-only"> (menuju informasi harga)</span>}
    </ButtonLink>
  );
}
