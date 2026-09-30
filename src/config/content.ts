/**
 * ─────────────────────────────────────────────────────────────
 *  KONTEN HALAMAN — semua copy landing page ada di file ini.
 * ─────────────────────────────────────────────────────────────
 *
 * - Teks dalam [KURUNG SIKU] = placeholder. Ganti dengan data resmi.
 *   Di halaman, placeholder otomatis ditandai garis bawah emas agar
 *   mudah ditemukan saat review.
 * - Rincian topik kurikulum di bawah adalah draf berdasarkan judul modul.
 *   Sesuaikan dengan silabus resmi sebelum publikasi.
 */

import { site } from "./site";

/**
 * Foto. Letakkan file di /public/images lalu isi `src`, contoh:
 *   src: "/images/hero.jpg"
 * Selama `src` bernilai null, halaman menampilkan bingkai placeholder.
 */
export const images = {
  hero: {
    src: "/images/hero-mld-kaki.jpg" as string | null,
    alt: "Terapis SUKHMARAGA melakukan teknik Manual Lymphatic Drainage pada area kaki klien",
    brief: "Foto editorial: tangan terapis melakukan MLD, cahaya natural",
  },
  intro: {
    src: null as string | null,
    alt: "Sesi pembelajaran teknik Manual Lymphatic Drainage",
    brief: "Foto: instruktur menjelaskan arah gerakan kepada peserta",
  },
  practical: {
    src: null as string | null,
    alt: "Demonstrasi praktik Manual Lymphatic Drainage",
    brief: "Thumbnail video demo praktik",
  },
  instructor: {
    src: "/images/instructor-judha-novijana.jpg" as string | null,
    alt: "Judha Novijana, instruktur Manual Lymphatic Drainage SUKHMARAGA Academy",
    brief: "Potret profesional instruktur, rasio 4:5",
  },
};

/**
 * Video demo (opsional). Isi dengan URL embed YouTube/Vimeo,
 * contoh: "https://www.youtube-nocookie.com/embed/VIDEO_ID".
 */
export const PRACTICAL_VIDEO_EMBED_URL = "";

export const nav = [
  { label: "Tentang", href: "#tentang" },
  { label: "Kurikulum", href: "#kurikulum" },
  { label: "Instruktur", href: "#instruktur" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "E-Course Profesional",
  title: "Kuasai Manual Lymphatic Drainage Massage dengan Teknik Profesional",
  /** Bagian judul yang diberi aksen emas — harus persis ada di `title`. */
  titleHighlight: "Manual Lymphatic Drainage",
  lead: "Program pembelajaran terstruktur untuk memahami prinsip, teknik, dan penerapan praktis manual lymphatic drainage massage, dari dasar sistem limfatik hingga praktik treatment lengkap.",
  indicators: ["13 video teori & praktik", "Akses lifetime", "Bonus e-book"],
};

export const trustItems = [
  { icon: "layers", label: "Materi Terstruktur" },
  { icon: "play", label: "13 Video Pembelajaran" },
  { icon: "hands", label: "Pembelajaran Praktis" },
  { icon: "award", label: "Sertifikat" },
  { icon: "monitor", label: "Akses Lifetime" },
] as const;

export const problem = {
  eyebrow: "Mengapa pembelajaran terstruktur",
  title: "Bukan Sekadar Belajar Gerakan Massage",
  body: [
    "Manual lymphatic drainage terlihat sederhana: tekanan ringan dan gerakan yang lembut. Namun tanpa pemahaman yang benar, gerakan yang sama bisa kehilangan tujuan dan efektivitasnya.",
    "Terapis yang kompeten memahami alasan di balik setiap gerakan: ke mana arahnya, seberapa besar tekanannya, dan bagaimana menyesuaikannya dengan kondisi klien.",
  ],
  quote: "Gerakan yang terlihat sederhana membutuhkan pemahaman yang tepat.",
  aspects: [
    { title: "Prinsip dasar", text: "Memahami cara kerja dan tujuan teknik MLD." },
    { title: "Pertimbangan anatomi", text: "Mengenali struktur tubuh yang relevan dengan treatment." },
    { title: "Arah gerakan", text: "Mengikuti alur yang benar, bukan gerakan acak." },
    { title: "Tekanan", text: "Menakar tekanan ringan yang konsisten dan tepat." },
    { title: "Ritme", text: "Menjaga tempo gerakan yang tenang dan teratur." },
    { title: "Teknik", text: "Menguasai gerakan dasar dengan presisi." },
    { title: "Asesmen klien", text: "Memahami kondisi klien sebelum treatment." },
    { title: "Penerapan praktis", text: "Menerapkan seluruh prinsip dalam sesi nyata." },
  ],
};

export const intro = {
  eyebrow: "Tentang course",
  title: "Apa yang Akan Anda Pelajari?",
  body: "Manual Lymphatic Drainage Massage adalah teknik massage terstruktur yang menuntut pemahaman tentang teknik, urutan, tekanan, dan cara penerapannya. Course ini menyusun seluruh aspek tersebut menjadi alur belajar yang runtut, dari teori dasar hingga praktik treatment.",
  points: [
    { title: "Teknik", text: "Gerakan dasar MLD dijelaskan dan didemonstrasikan secara detail." },
    { title: "Sequence", text: "Urutan treatment yang sistematis untuk setiap area tubuh." },
    { title: "Tekanan & ritme", text: "Standar tekanan dan tempo yang konsisten." },
    { title: "Aplikasi", text: "Cara menerapkan teknik dalam sesi treatment profesional." },
  ],
};

export const modules = [
  { title: "Sistem Peredaran Limfatik", text: "Memahami cara kerja sistem peredaran limfatik pada tubuh manusia." },
  { title: "Organ Limfatik", text: "Mengenal organ-organ limfatik dan perannya." },
  { title: "Mengapa Pijat Drainase Limfatik", text: "Alasan dan tujuan dilakukannya pijat drainase limfatik." },
  { title: "Kontraindikasi", text: "Kondisi yang perlu diwaspadai sebelum melakukan treatment." },
  { title: "Rangkaian & SOP Treatment", text: "Urutan pijat drainase limfatik dan standar prosedurnya." },
  { title: "Mengukur & Pumping Nodus Limfatik", text: "Sesi praktik pertama sebelum masuk ke teknik per area tubuh." },
  { title: "Praktik 6 Area Tubuh", text: "Perut, lengan, kaki depan, punggung, kaki belakang, dan wajah." },
  { title: "Modul & E-Sertifikat", text: "Modul tertulis sebagai referensi dan sertifikat saat selesai." },
];

/** Isi course sesuai daftar isi di LMS SUKHMARAGA Academy. */
export const curriculum = [
  {
    label: "Pembuka",
    title: "Disclaimer & Ketentuan Peserta",
    count: "",
    summary: "Pengantar course dan ketentuan yang perlu dipahami peserta sebelum mulai belajar.",
    videos: ["Manual Lymphatic Drainage Massage by SUKHMARAGA"],
  },
  {
    label: "Bagian 1",
    title: "Teori",
    count: "6 sesi",
    summary: "Landasan pemahaman sebelum praktik: dari sistem dan organ limfatik, kontraindikasi, hingga SOP treatment.",
    videos: [
      "Sistem Peredaran Limfatik pada Tubuh Manusia",
      "Organ Limfatik",
      "Mengapa Harus Melakukan Pijat Drainase Limfatik?",
      "Kontraindikasi dalam Pijat Drainase Limfatik",
      "Rangkaian Pijat Drainase Limfatik",
      "SOP Pijat Drainase Limfatik",
    ],
  },
  {
    label: "Bagian 2",
    title: "Praktik",
    count: "7 sesi",
    summary: "Demonstrasi teknik langkah demi langkah, dimulai dari pumping nodus limfatik lalu per area tubuh.",
    videos: [
      "Cara Mengukur dan Pumping Nodus Limfatik",
      "Pijat Drainase Limfatik Area Perut",
      "Pijat Drainase Limfatik Area Lengan",
      "Pijat Drainase Limfatik Area Kaki Bagian Depan",
      "Pijat Drainase Limfatik Area Punggung",
      "Pijat Drainase Limfatik Area Kaki Bagian Belakang",
      "Pijat Drainase Limfatik Area Wajah",
    ],
  },
  {
    label: "Penutup",
    title: "Penutup, Modul & E-Sertifikat",
    count: "",
    summary: "Rangkuman penutup, Modul Manual Lymphatic Drainage Massage (e-book) sebagai referensi, dan e-sertifikat setelah Anda menyelesaikan course.",
    videos: ["Penutup", "Modul Manual Lymphatic Drainage Massage (e-book)", "E-Sertifikat"],
  },
];

/** Area tubuh yang dipraktikkan (ditampilkan di section Practical Learning). */
export const practiceAreas = ["Perut", "Lengan", "Kaki bagian depan", "Punggung", "Kaki bagian belakang", "Wajah"];

/** Tampilkan slideshow thumbnail sesi. Dimatikan sementara atas permintaan (30 Sep 2026). */
export const SHOW_SESSION_SLIDESHOW = false;

/**
 * Slideshow sesi di bagian "Metode pembelajaran", urut sesuai nomor sesi
 * pada thumbnail. File ada di /public/images/sesi/.
 */
export const sessionSlides: { src: string; kind: "Teori" | "Praktik"; no: number; title: string }[] = [
  { src: "/images/sesi/sesi-01.jpg", kind: "Teori", no: 1, title: "Sistem Peredaran pada Manusia" },
  { src: "/images/sesi/sesi-02.jpg", kind: "Teori", no: 2, title: "Organ Limfatik" },
  { src: "/images/sesi/sesi-03.jpg", kind: "Teori", no: 3, title: "Drainase Limfatik" },
  { src: "/images/sesi/sesi-04.jpg", kind: "Teori", no: 4, title: "Kontraindikasi" },
  { src: "/images/sesi/sesi-05.jpg", kind: "Teori", no: 5, title: "Rangkaian Pijat Limfatik" },
  { src: "/images/sesi/sesi-06.jpg", kind: "Teori", no: 6, title: "SOP" },
  { src: "/images/sesi/sesi-07.jpg", kind: "Praktik", no: 1, title: "Pijat Limfatik Area Perut" },
  { src: "/images/sesi/sesi-08.jpg", kind: "Praktik", no: 2, title: "Pijat Limfatik Area Kaki" },
  { src: "/images/sesi/sesi-09.jpg", kind: "Praktik", no: 3, title: "Pijat Limfatik Area Lengan" },
  { src: "/images/sesi/sesi-10.jpg", kind: "Praktik", no: 4, title: "Pijat Limfatik Area Kaki" },
  { src: "/images/sesi/sesi-11.jpg", kind: "Praktik", no: 5, title: "Pijat Limfatik Area Punggung" },
  { src: "/images/sesi/sesi-12.jpg", kind: "Praktik", no: 6, title: "Pijat Limfatik Area Wajah" },
  { src: "/images/sesi/sesi-13.jpg", kind: "Praktik", no: 7, title: "Pijat Limfatik Area Leher" },
];

export const practical = {
  eyebrow: "Metode pembelajaran",
  title: "Belajar Bukan Hanya Menonton",
  body: "Setiap teknik dipandu melalui materi terstruktur dan demonstrasi praktik, sehingga Anda memahami apa yang dilakukan, bagaimana melakukannya, dan mengapa dilakukan dengan cara tersebut.",
  items: [
    { title: "Demonstrasi", text: "Setiap area diperagakan langsung agar gerakan, posisi tangan, dan tekanan terlihat jelas." },
    { title: "Penjelasan step-by-step", text: "Dimulai dari mengukur dan pumping nodus limfatik, lalu diuraikan tahap demi tahap." },
    { title: "Breakdown teknik", text: "Detail arah, tekanan, dan ritme dibedah agar mudah dipahami." },
    { title: "Sesuai SOP", text: "Praktik mengikuti rangkaian dan SOP pijat drainase limfatik yang dibahas di sesi teori." },
  ],
};

export const audience = {
  eyebrow: "Untuk siapa",
  title: "Dirancang untuk Anda yang Serius Mengembangkan Kompetensi",
  items: [
    { title: "Terapis massage", text: "Menambah teknik terstruktur ke dalam layanan Anda." },
    { title: "Praktisi wellness", text: "Memperdalam pendekatan holistik dengan dasar yang tepat." },
    { title: "Spa therapist", text: "Meningkatkan kualitas dan variasi treatment." },
    { title: "Pemilik bisnis wellness", text: "Memahami standar layanan MLD untuk bisnis Anda." },
    { title: "Pemula", text: "Mempelajari teknik MLD dari dasar secara terarah." },
    { title: "Profesional", text: "Menambah kompetensi di bidang wellness." },
  ],
  disclaimer:
    "Course ini merupakan pendidikan keterampilan di bidang wellness dan tidak menggantikan pendidikan, diagnosis, maupun kualifikasi medis.",
};

export const benefits = {
  eyebrow: "Yang Anda dapatkan",
  title: "Semua yang Anda Butuhkan untuk Belajar dengan Terarah",
  items: [
    { title: "13 video pembelajaran", text: "6 video teori dan 7 video praktik yang bisa Anda ulang kapan saja." },
    { title: "Akses lifetime", text: "Sekali daftar, materi bisa diakses seumur hidup." },
    { title: "Bonus e-book gratis", text: "Modul Manual Lymphatic Drainage Massage sebagai referensi tertulis." },
    { title: "Materi terstruktur", text: "6 sesi teori dan 7 sesi praktik yang runtut, dari dasar hingga 6 area tubuh." },
    { title: "Demonstrasi teknik", text: "Peragaan teknik yang jelas dan detail." },
    { title: "Sertifikat penyelesaian", text: "Certificate of Completion dari SUKHMARAGA Academy." },
    { title: "Belajar online", text: "Akses materi melalui platform SUKHMARAGA Academy." },
  ],
  footnote: "",
};

export const instructor = {
  eyebrow: "Instruktur",
  name: "Judha Novijana",
  role: "Instruktur Manual Lymphatic Drainage",
  bio: "Judha Novijana mempelajari ilmu sistem limfatik secara mendalam sejak 2020 dan mulai mengajar Manual Lymphatic Drainage sejak 2023. Ia dikenal dengan cara mengajar yang sistematis dan terarah, sehingga materi mudah dipahami oleh para peserta.",
  details: [
    { label: "Latar belakang profesional", value: "Co-founder SUKHMARAGA" },
    { label: "Pengalaman", value: "Mendalami ilmu sistem limfatik sejak 2020" },
    {
      label: "Sertifikasi",
      value: "Sertifikat Training of Trainer (BNSP)\nSertifikat Spa Therapy Manual Lymphatic Drainage (BNSP)",
    },
    { label: "Pengalaman mengajar", value: "Mengajar klien SUKHMARAGA sejak 2023, khususnya klien Manual Lymphatic Drainage Massage" },
  ],
};

export const certificate = {
  eyebrow: "Sertifikat",
  title: "Selesaikan Pembelajaran Anda dengan Sertifikat",
  body: "Setelah menyelesaikan course, Anda menerima Certificate of Completion dari SUKHMARAGA Academy atas nama Anda, sebagai bukti telah menuntaskan pembelajaran Manual Lymphatic Drainage Massage.",
  steps: [
    "Selesaikan seluruh video pembelajaran",
    "Sertifikat diterbitkan atas nama Anda, lengkap dengan ID sertifikat",
    "Unduh sertifikat dalam format PDF",
  ],
  note: "Sertifikat ini adalah sertifikat penyelesaian course dari SUKHMARAGA Academy.",
};

/**
 * TESTIMONI — JANGAN diisi dengan testimoni karangan.
 * Ganti dengan testimoni asli peserta (dengan izin), atau set
 * SHOW_TESTIMONIALS = false untuk menyembunyikan section ini.
 */
export const SHOW_TESTIMONIALS = true;
export const testimonials = [
  {
    quote:
      "Materinya sangat lengkap dan mudah dipahami. Setelah mengikuti e-course ini, saya jadi lebih percaya diri dalam melakukan teknik MLD dan lebih memahami setiap gerakannya.",
    name: "Rina S.",
    role: "Terapis Spa | Jakarta",
    photo: null as string | null,
  },
  {
    quote:
      "Penjelasan instrukturnya sangat jelas dan profesional. Video praktiknya detail, jadi saya bisa langsung mengikuti dan mempraktikkannya di tempat kerja.",
    name: "Andi Pratama",
    role: "Terapis Wellness | Bandung",
    photo: null as string | null,
  },
  {
    quote:
      "Setelah mengikuti e-course ini, saya jadi lebih memahami anatomi sistem limfatik dan teknik MLD yang benar. Ilmunya sangat aplikatif dan membantu meningkatkan kualitas treatment saya.",
    name: "Dewi Lestari",
    role: "Terapis Wellness | Semarang",
    photo: null as string | null,
  },
];

export const pricing = {
  eyebrow: "Investasi pembelajaran",
  title: "Mulai Belajar dengan Akses Penuh",
  includes: [
    "1 modul Manual Lymphatic Drainage Massage SUKHMARAGA",
    "13 video: 6 video teori & 7 video praktik",
    "Akses lifetime",
    "Bonus e-book gratis",
    "Sertifikat penyelesaian (Certificate of Completion)",
  ],
  redirectNote: "Anda akan diarahkan ke halaman checkout resmi SUKHMARAGA Academy. Pembayaran mudah dengan QRIS.",
};

export const faq = [
  {
    q: "Apa itu Manual Lymphatic Drainage Massage?",
    a: "Manual Lymphatic Drainage (MLD) adalah teknik massage manual dengan tekanan ringan, gerakan ritmis, dan arah yang terstruktur mengikuti alur sistem limfatik. Berbeda dengan massage pada umumnya, MLD menuntut pemahaman yang tepat tentang arah gerakan, urutan, tekanan, dan ritme. Karena itu teknik ini perlu dipelajari secara terstruktur, bukan sekadar meniru gerakan.",
  },
  {
    q: "Siapa yang cocok mengikuti course ini?",
    a: "Course ini cocok untuk terapis massage, spa therapist, praktisi wellness, pemilik bisnis wellness yang ingin memahami standar layanan MLD, pemula yang ingin mempelajari teknik MLD dari dasar, dan profesional yang ingin menambah kompetensi di bidang wellness.",
  },
  {
    q: "Apakah course ini cocok untuk pemula?",
    a: "Ya. Materi dimulai dari 6 video teori yang membahas dasar sistem limfatik dan prinsip MLD, lalu dilanjutkan dengan 7 video praktik yang memperagakan teknik langkah demi langkah. Karena aksesnya lifetime, Anda bisa belajar sesuai ritme sendiri dan mengulang materi kapan saja.",
  },
  {
    q: "Apa saja yang saya dapatkan?",
    a: "Anda mendapatkan 1 modul Manual Lymphatic Drainage Massage SUKHMARAGA yang terdiri dari 13 video (6 video teori dan 7 video praktik), bonus e-book gratis, akses lifetime, dan Certificate of Completion setelah menyelesaikan course.",
  },
  {
    q: "Berapa lama akses course?",
    a: "Akses course berlaku lifetime (seumur hidup). Tidak ada batas waktu untuk menyelesaikan materi, dan Anda bisa kembali mengulang video kapan pun dibutuhkan, misalnya sebelum menangani klien.",
  },
  {
    q: "Bagaimana cara mengakses materi?",
    a: "Course ini diakses secara online melalui website SUKHMARAGA Academy (sukhmaragaacademy.com). Setelah pendaftaran dan pembayaran terkonfirmasi, seluruh video dan e-book dapat Anda akses dari akun Anda.",
  },
  {
    q: "Materi apa saja yang dipelajari?",
    a: "Sesi teori membahas sistem peredaran limfatik, organ limfatik, alasan dilakukannya pijat drainase limfatik, kontraindikasi, rangkaian pijat, dan SOP. Sesi praktik dimulai dari cara mengukur dan pumping nodus limfatik, lalu teknik per area tubuh: perut, lengan, kaki bagian depan, punggung, kaki bagian belakang, dan wajah.",
  },
  {
    q: "Apakah dibahas kontraindikasi?",
    a: "Ya. Ada sesi teori khusus tentang kontraindikasi dalam pijat drainase limfatik, sehingga Anda memahami kondisi yang perlu diwaspadai sebelum melakukan treatment.",
  },
  {
    q: "Apakah course dilakukan secara online?",
    a: "Ya, ini adalah e-course yang sepenuhnya online. Anda tidak perlu datang ke lokasi tertentu dan bisa belajar dari mana saja selama terhubung ke internet.",
  },
  {
    q: "Apakah mendapatkan sertifikat?",
    a: "Ya. Setelah menyelesaikan seluruh materi, Anda mendapatkan Certificate of Completion dari SUKHMARAGA Academy atas nama Anda, lengkap dengan ID sertifikat, yang dapat diunduh dalam format PDF.",
  },
  {
    q: "Apakah sertifikat course ini sertifikat BNSP?",
    a: "Bukan. Sertifikat yang Anda terima adalah sertifikat penyelesaian course (Certificate of Completion) dari SUKHMARAGA Academy. Sertifikat Training of Trainer BNSP adalah kualifikasi yang dimiliki instruktur, Judha Novijana.",
  },
  {
    q: "Siapa instruktur course ini?",
    a: "Course ini dibawakan oleh Judha Novijana, pemegang Sertifikat Training of Trainer (BNSP) dan Sertifikat Spa Therapy Manual Lymphatic Drainage (BNSP).",
  },
  {
    q: "Apakah course ini bisa menggantikan penanganan medis?",
    a: "Tidak. Course ini merupakan pendidikan keterampilan di bidang wellness dan tidak menggantikan pendidikan, diagnosis, maupun penanganan medis. Untuk klien dengan kondisi kesehatan tertentu, sebaiknya konsultasikan terlebih dahulu dengan tenaga medis.",
  },
  {
    q: "Bagaimana proses pembelian?",
    a: `Klik tombol “Daftar Sekarang”, Anda akan diarahkan ke halaman checkout resmi SUKHMARAGA Academy. Lengkapi data diri, lalu selesaikan pembayaran dengan mudah menggunakan QRIS dari aplikasi m-banking atau e-wallet Anda. Harga saat ini ${site.price} (harga normal ${site.originalPrice}).`,
  },
];

export const finalCta = {
  title: "Mulai Bangun Kompetensi Anda di Manual Lymphatic Drainage Massage",
  body: "Pelajari teknik dengan dasar yang benar, alur yang terstruktur, dan panduan praktik yang jelas bersama SUKHMARAGA Academy.",
};
