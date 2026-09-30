import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { T } from "@/components/ui/Text";

const footerNav = [
  { label: "Tentang", href: "#tentang" },
  { label: "Kurikulum", href: "#kurikulum" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const socials = [
  { key: "instagram", label: "Instagram" },
  { key: "youtube", label: "YouTube" },
  { key: "tiktok", label: "TikTok" },
  { key: "facebook", label: "Facebook" },
] as const;

export function Footer() {
  const { email, whatsapp, emailLabel, whatsappLabel, address, mapsUrl } = site.contact;
  const activeSocials = socials.filter((s) => site.social[s.key]);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 pb-28 text-white/70 lg:pb-0">
      <div className="container-x grid-12 gap-y-12 py-16 md:py-20">
        <div className="col-span-4 md:col-span-6 lg:col-span-5">
          <Logo light />
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed">
            {site.tagline}. Bagian dari {site.parentBrand}.
          </p>
          <ul className="mt-8 flex gap-3" aria-label="Media sosial">
            {activeSocials.map((s) => (
              <li key={s.key}>
                <a
                  href={site.social[s.key]}
                  rel="noopener"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <Icon name={s.key} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navigasi footer" className="col-span-2 md:col-span-3 lg:col-span-2 lg:col-start-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-400">Navigasi</p>
          <ul className="mt-5 space-y-3 text-[14px]">
            {footerNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="kontak" className="col-span-4 md:col-span-3 lg:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-400">Kontak</p>
          <ul className="mt-5 space-y-3 text-[14px]">
            <li className="flex items-center gap-3">
              <Icon name="chat" className="h-4 w-4 shrink-0 text-gold-400" />
              {whatsapp ? (
                <a href={whatsapp} rel="noopener" className="hover:text-white">
                  {whatsappLabel} (WhatsApp)
                </a>
              ) : (
                <T>{whatsappLabel}</T>
              )}
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-gold-400" />
              {email ? (
                <a href={`mailto:${email}`} className="hover:text-white">
                  {email}
                </a>
              ) : (
                <T>{emailLabel}</T>
              )}
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <a href={mapsUrl} rel="noopener" className="whitespace-pre-line leading-relaxed hover:text-white">
                {address}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-[12px] text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.academyUpper}. Seluruh hak cipta dilindungi.
          </p>
          <p>{site.parentBrand}</p>
        </div>
      </div>
    </footer>
  );
}
