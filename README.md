# SUKHMARAGA Academy — Landing Page E-Course Manual Lymphatic Drainage Massage

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Framer Motion. Siap deploy ke Vercel.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm start
```

## Yang WAJIB diisi sebelum publikasi

| Apa | Di mana |
| --- | --- |
| URL checkout WordPress/LMS | `src/config/site.ts` → `COURSE_CHECKOUT_URL`, atau env `NEXT_PUBLIC_COURSE_CHECKOUT_URL` di Vercel |
| URL website (SEO/OG/sitemap) | env `NEXT_PUBLIC_SITE_URL` atau `SITE_URL` di `src/config/site.ts` |
| Harga, durasi akses, jumlah modul | `src/config/site.ts` (`price`, `priceNote`, `accessDuration`, `moduleCount`) |
| Kontak & media sosial | `src/config/site.ts` (`contact`, `social`) — string kosong = ditampilkan sebagai placeholder, bukan link |
| Semua copy, kurikulum, FAQ, instruktur, testimoni | `src/config/content.ts` |
| Foto | taruh di `public/images/`, lalu isi `images.*.src` di `content.ts` (mis. `"/images/hero.jpg"`) |
| Video demo | `PRACTICAL_VIDEO_EMBED_URL` di `content.ts` (URL embed YouTube/Vimeo) |

- Setiap teks dalam `[KURUNG SIKU]` adalah placeholder dan otomatis diberi garis bawah titik-titik emas di halaman agar mudah ditemukan. Cari `[` di `content.ts` dan `site.ts`.
- Selama `COURSE_CHECKOUT_URL` belum berupa URL `https://…`, semua tombol "Daftar Sekarang" mengarah ke section harga (`#harga`) agar tidak ada link rusak.
- **Testimoni**: isi hanya dengan testimoni asli (dengan izin), atau set `SHOW_TESTIMONIALS = false` untuk menyembunyikan section.
- **Kurikulum**: rincian topik per modul adalah draf dari judul modul. Sesuaikan dengan silabus resmi.
- Sertifikat pada halaman adalah ilustrasi; tidak ada klaim akreditasi.

## Struktur

```
src/
  app/            layout (SEO, fonts), page, opengraph-image, robots, sitemap
  config/         site.ts (URL, harga, kontak) · content.ts (semua copy)
  components/
    sections/     Navbar, Hero, TrustBar, ProblemSection, CourseIntroduction,
                  LearningModules, Curriculum, PracticalLearning, AudienceSection,
                  Benefits, Instructor, Certificate, Testimonials, Pricing, FAQ,
                  FinalCTA, Footer, MobileStickyCTA
    ui/           Button/EnrollButton, Accordion, EditorialImage, Reveal, Icon, Logo, Text
    StructuredData.tsx   JSON-LD (EducationalOrganization, Course, FAQPage)
```

## Deploy ke Vercel

1. Push folder ini ke repository GitHub.
2. Import di Vercel (framework: Next.js, tanpa konfigurasi tambahan). URL checkout dan domain
   sudah terisi default di `src/config/site.ts`, jadi env var hanya perlu kalau ingin mengganti.
3. Vercel → Project → Settings → Domains → tambahkan `mld.sukhmaragaacademy.com`.
4. Di pengelola DNS domain `sukhmaragaacademy.com`, tambahkan record:
   `CNAME` · nama `mld` · nilai `cname.vercel-dns.com`.
5. Kalau domain berbeda, ubah `SITE_URL` (atau env `NEXT_PUBLIC_SITE_URL`) supaya canonical,
   sitemap dan gambar share (`src/app/opengraph-image.jpg`) memakai domain yang benar.
