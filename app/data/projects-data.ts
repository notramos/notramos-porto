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
      "SISTEM POS Toko Kelontong dengan pembayaran quick response code (QRIS) dan integrasi printer thermal untuk struk pembayaran ",
    image: "/projects/pos-eramedia.jpg",
    tech: ["Laravel", "PHP", "MySQL", "QRIS Integration"],
    type: "Freelance",
    client: "ERAMEDIA",
    features: [
      "Point of Sale system",
      "Monitor Stok",
      "Pencatatan Transaksi dan Pembelian",
      "PDF generation",
    ],
    github: "https://github.com/notramos/POS-ERAMEDIA.git",
    demo: "#",
  },
  {
    id: 2,
    title: "CV AXEL DIGITAL CREATIVE",
    description:
      "Aplikasi E-commerce untuk memesan dan membayar secara online spanduk dan perhiasan emas dengan validasi form yang ketat untuk memastikan data pelanggan yang akurat",
    image: "/projects/cvaxeldc.jpg",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Form Validation",
      "Midtrans Integration",
    ],
    type: "Freelance",
    client: "CV AXEL DIGITAL CREATIVE",
    features: [
      "Online ordering system",
      "Midtrans payment gateway integration",
      "Form validation",
      "Admin dashboard for order management",
    ],
    github: "#",
    demo: "cvaxeldc.my.id",
  },
  {
    id: 3,
    title: "Movies - Hub",
    description:
      "Website katalog film dengan fitur pencarian, filter berdasarkan genre, dan detail informasi film menggunakan API eksternal",
    image: "/project/movies-hub.png",
    tech: ["laravel 5.8", "php", "mysql", "qweb", "omdb api"],
    type: "Personal",
    client: "Personal Project",
    features: [
      "Authentication system",
      "Search and filter movies",
      "Favorite movies list",
      "Integration with OMDB API for movie data",
    ],
    github: "https://github.com/notramos/movies-hub.git",
    demo: "https://movieshub.my.id/",
  },
  {
    id: 4,
    title: "Sistem Informasi Pegadaian Palmenbang 1",
    description: "Konten Manajemen Admin Pegadaian Palembang ",
    image: "/project/sipp1.jpg",
    tech: ["laravel 12", "php", "postgresql", "Grafik Chart"],
    type: "Freelance",
    features: [
      "Upload File",
      "Data Visualization with Charts",
      "Responsive UI",
      "Authentication ready",
    ],
    github: "https://github.com/IanMikhael/SIPP.git",
    demo: "#",
  },
  {
    id: 5,
    title: "Sistem Informasi Pegadaian Palembang 2",
    description: "Implementasi Fungsi Gadai Emas",
    image: "/projects/aspnet-app.jpg",
    tech: [
      "laravel 12",
      "php",
      "postgresql",
      "Grafik Chart",
      "Inertia.js",
      "React JS",
    ],
    type: "Freelance",
    features: [
      "Gadai Emas",
      "Fungsi Pembayaran",
      "Pemantauan Status Gadai",
      "RESTful API",
    ],
    github: "#",
    demo: "#",
  },
];
