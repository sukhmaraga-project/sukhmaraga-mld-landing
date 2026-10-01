import Image from "next/image";
import logo from "../../../public/images/logo-sukhmaraga.png";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return <Image src={logo} alt="" aria-hidden className={`shrink-0 ${className}`} sizes="80px" priority />;
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-10 w-10 md:h-11 md:w-11" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[0.8125rem] font-bold tracking-[0.2em] ${light ? "text-white" : "text-navy-900"}`}
        >
          SUKHMARAGA
        </span>
        <span className={`mt-1 text-[0.5625rem] font-medium tracking-[0.42em] ${light ? "text-gold-400" : "text-gold-600"}`}>
          ACADEMY
        </span>
      </span>
    </span>
  );
}
