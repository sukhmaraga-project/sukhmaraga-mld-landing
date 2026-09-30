/**
 * ─────────────────────────────────────────────────────────────
 *  KONFIGURASI UTAMA — edit nilai di file ini sebelum deploy.
 * ─────────────────────────────────────────────────────────────
 *
 * Semua teks di dalam [KURUNG SIKU] adalah placeholder yang WAJIB
 * diganti dengan informasi resmi. Jangan mengarang harga, kredensial,
 * atau testimoni.
 */

/**
 * URL checkout WordPress / LMS SUKHMARAGA.
 * Semua tombol "DAFTAR SEKARANG" mengarah ke URL ini.
 *
 * Bisa diisi langsung di sini, atau lewat environment variable
 * NEXT_PUBLIC_COURSE_CHECKOUT_URL (disarankan di Vercel).
 */
export const COURSE_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_COURSE_CHECKOUT_URL || "https://sukhmaragaacademy.com/courses/manual-lymphatic-drainage-massage/";

/** URL publik website ini (untuk SEO, Open Graph, sitemap). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mld.sukhmaragaacademy.com";

/**
 * Selama COURSE_CHECKOUT_URL belum diisi dengan URL asli, tombol daftar
 * diarahkan ke section harga agar tidak ada link yang rusak.
 */
export const isCheckoutConfigured = /^https?:\/\//.test(COURSE_CHECKOUT_URL);
export const checkoutHref = isCheckoutConfigured ? COURSE_CHECKOUT_URL : "#harga";

export const site = {
  academy: "SUKHMARAGA Academy",
  academyUpper: "SUKHMARAGA ACADEMY",
  parentBrand: "SUKHMARAGA Holistic & Wellness",
  tagline: "Professional Holistic Wellness Education",
  courseName: "Manual Lymphatic Drainage Massage",
  seoTitle: "Manual Lymphatic Drainage Massage | SUKHMARAGA Academy",
  seoDescription:
    "Pelajari Manual Lymphatic Drainage Massage melalui pembelajaran terstruktur bersama SUKHMARAGA Academy.",

  /** Harga. `originalPrice` ditampilkan dicoret; kosongkan ("") jika tidak ada harga coret. */
  price: "Rp 449.000",
  priceValue: 449000,
  originalPrice: "Rp 599.000",
  priceNote: "Akses lifetime + bonus e-book gratis",

  accessDuration: "Lifetime",
  moduleCount: "1 modul",
  videoCount: "13 video",
  videoBreakdown: "6 video teori · 7 video praktik",

  instructorName: "Judha Novijana",
  directorName: "Muhamad Syafrudin",

  /** Kontak — kosongkan string ("") untuk menyembunyikan link. */
  contact: {
    email: "sukhmaraga.tc@gmail.com",
    whatsapp:
      "https://wa.me/6285179783339?text=" +
      encodeURIComponent("Halo SUKHMARAGA Academy, saya ingin bertanya tentang E-Course Manual Lymphatic Drainage Massage."),
    phone: "+6285179783339",
    emailLabel: "sukhmaraga.tc@gmail.com",
    whatsappLabel: "0851-7978-3339",
    /** Baris baru (\n) ditampilkan sebagai baris baru di footer. */
    address:
      "Gedung PT Roxy Kreanova Esmentica, Lt. 3\nJl. Gandaria 1 No. 11, RT.4/RW.10, Kramat Pela\nKebayoran Baru, Jakarta Selatan 12130",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Jalan Gandaria 1 No 11, Kramat Pela, Kebayoran Baru, Jakarta Selatan 12130"),
    addressParts: {
      streetAddress: "Jl. Gandaria 1 No. 11, Gedung PT Roxy Kreanova Esmentica Lt. 3, RT.4/RW.10, Kramat Pela",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12130",
      addressCountry: "ID",
    },
  },

  /** Media sosial — isi URL lengkap. Kosong = ditampilkan sebagai placeholder non-link. */
  social: {
    instagram: "https://www.instagram.com/sukhmaraga.tc/",
    youtube: "",
    tiktok: "https://www.tiktok.com/@sukhmaraga",
    facebook: "",
  },
} as const;
