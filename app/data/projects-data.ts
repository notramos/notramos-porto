export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  type: "Freelance" | "Academic" | "Personal";
  client?: string;
  features?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "POS ERAMEDIA",
    description:
      "Sistem kasir untuk toko kelontong dengan pembayaran QRIS dan dukungan cetak struk thermal.",
    tech: ["Laravel", "PHP", "MySQL", "QRIS"],
    type: "Freelance",
    client: "ERAMEDIA",
    features: ["Point of Sale", "Pemantauan stok", "Transaksi dan pembelian", "PDF"],
    github: "https://github.com/notramos/POS-ERAMEDIA",
  },
  {
    id: 2,
    title: "CV AXEL DIGITAL CREATIVE",
    description:
      "Aplikasi pemesanan online untuk produk cetak dan perhiasan, dengan validasi pesanan serta pembayaran Midtrans.",
    tech: ["Laravel", "PHP", "MySQL", "Midtrans"],
    type: "Freelance",
    client: "CV AXEL DIGITAL CREATIVE",
    features: ["Pemesanan online", "Pembayaran", "Validasi formulir", "Manajemen pesanan"],
    demo: "https://cvaxeldc.my.id",
  },
  {
    id: 3,
    title: "Movies Hub",
    description:
      "Katalog film dengan pencarian, filter genre, autentikasi, dan daftar favorit menggunakan OMDb API.",
    image: "/projects/movies-hub.png",
    tech: ["Laravel", "PHP", "MySQL", "OMDb API"],
    type: "Personal",
    client: "Proyek pribadi",
    features: ["Autentikasi", "Pencarian dan filter", "Daftar favorit", "OMDb API"],
    github: "https://github.com/notramos/movies-hub",
    demo: "https://movieshub.my.id/",
  },
  {
    id: 4,
    title: "Sistem Informasi Pegadaian Palembang 1",
    description:
      "Sistem manajemen konten untuk membantu pengelolaan informasi dan data pegadaian.",
    tech: ["Laravel", "PHP", "PostgreSQL", "Charts"],
    type: "Freelance",
    github: "https://github.com/IanMikhael/SIPP",
  },
  {
    id: 5,
    title: "Sistem Informasi Pegadaian Palembang 2",
    description:
      "Aplikasi untuk proses gadai emas, pembayaran, dan pemantauan status transaksi.",
    tech: ["Laravel", "PHP", "PostgreSQL", "Inertia.js", "React"],
    type: "Freelance",
  },
];
