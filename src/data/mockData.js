// Mock data for the w
import lp1 from "./lp_1.jpg";
import lp2 from "./lp_2.JPG";
import lp3 from "./lp_3.jpg";
import lp4 from "./lp_4.jpeg";
export const companyData = {
  hero: {
    slides: [
      {
        id: 1,
        image: lp1,
        title: "Membangun Indonesia Bersama",
        description: "Berkomitmen untuk kemajuan bangsa melalui inovasi dan dedikasi tinggi dalam setiap langkah usaha.",
        buttonText: "Pelajari Lebih Lanjut",
        buttonLink: "/about",
      },
      {
        id: 2,
        image: lp2,
        title: "Inovasi Berkelanjutan",
        description: "Menghadirkan solusi terdepan dengan teknologi modern untuk masa depan yang lebih baik.",
        buttonText: "Lihat Entitas",
        buttonLink: "/entities",
      },
      {
        id: 3,
        image: lp3,
        title: "Tim Profesional",
        description: "Didukung oleh tim berpengalaman yang siap memberikan pelayanan terbaik untuk Indonesia.",
        buttonText: "Bergabung Bersama Kami",
        buttonLink: "/career",
      },
      {
        id: 4,
        image: lp4,
        title: "Komitmen Terhadap Lingkungan",
        description: "Berperan aktif dalam menjaga kelestarian lingkungan melalui praktik bisnis yang berkelanjutan.",
        buttonText: "Hubungi Kami",
        buttonLink: "/contact",
      },
    ],
  },
  company: {
    history: {
      title: "Sejarah Perusahaan",
      content:
        "Didirikan pada tahun 1995, PT Indonesia Maju telah berkembang menjadi salah satu perusahaan terkemuka di Indonesia. Perjalanan kami dimulai dengan visi untuk memberikan kontribusi nyata bagi kemajuan bangsa melalui inovasi dan dedikasi yang tinggi.",
      milestones: [
        { year: "1995", event: "Pendirian perusahaan" },
        { year: "2000", event: "Ekspansi ke 5 kota besar" },
        { year: "2010", event: "Sertifikasi ISO 9001:2008" },
        { year: "2020", event: "Digitalisasi penuh operasional" },
      ],
    },
    vision: "Menjadi perusahaan terdepan yang memberikan solusi berkelanjutan untuk kemajuan Indonesia.",
    mission: ["Menghadirkan produk dan layanan berkualitas tinggi", "Membangun kemitraan strategis yang saling menguntungkan", "Mengembangkan SDM yang kompeten dan berintegritas", "Berkontribusi pada pembangunan ekonomi nasional"],
    values: [
      {
        title: "Integritas",
        description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap tindakan",
      },
      {
        title: "Inovasi",
        description: "Selalu mencari cara baru untuk memberikan nilai tambah",
      },
      {
        title: "Kerjasama",
        description: "Membangun sinergi yang kuat dengan semua stakeholder",
      },
      {
        title: "Keunggulan",
        description: "Komitmen untuk selalu memberikan yang terbaik",
      },
    ],
  },
  entities: [
    {
      id: 1,
      name: "PT Indonesia Teknologi",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Fokus pada pengembangan solusi teknologi informasi",
    },
    {
      id: 2,
      name: "PT Indonesia Konstruksi",
      logo: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Spesialisasi dalam pembangunan infrastruktur",
    },
    {
      id: 3,
      name: "PT Indonesia Energi",
      logo: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300&h=200",
      description: "Pengembangan energi terbarukan dan berkelanjutan",
    },
  ],
  news: [
    {
      id: 1,
      title: "Peluncuran Produk Inovatif Terbaru",
      date: "2024-01-15",
      excerpt: "Perusahaan meluncurkan produk terbaru yang akan mengubah industri...",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    },
    {
      id: 2,
      title: "Kemitraan Strategis dengan Perusahaan Global",
      date: "2024-01-10",
      excerpt: "Menjalin kerjasama dengan perusahaan internasional untuk ekspansi...",
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400&h=250",
    },
  ],
  jobs: [
    {
      id: 1,
      title: "Software Engineer",
      location: "Jakarta",
      type: "Full-time",
      requirements: ["S1 Teknik Informatika", "Pengalaman 2+ tahun", "Menguasai React.js"],
    },
    {
      id: 2,
      title: "Project Manager",
      location: "Surabaya",
      type: "Full-time",
      requirements: ["S1 Manajemen", "Pengalaman 3+ tahun", "Sertifikasi PMP"],
    },
  ],
  career: {
    faq: [
      {
        question: "Bagaimana cara melamar pekerjaan?",
        answer: "Anda dapat melamar melalui website resmi kami atau mengirim CV ke email careers@indonesia-maju.com",
      },
      {
        question: "Berapa lama proses rekrutmen?",
        answer: "Proses rekrutmen biasanya memakan waktu 2-4 minggu tergantung posisi yang dilamar",
      },
    ],
    process: [
      { step: 1, title: "Pendaftaran", description: "Submit aplikasi dan CV" },
      { step: 2, title: "Screening", description: "Seleksi administrasi" },
      { step: 3, title: "Interview", description: "Wawancara dengan HRD dan user" },
      { step: 4, title: "Offering", description: "Penawaran kerja" },
    ],
  },
  contact: {
    address: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
    phone: "+62 21 1234 5678",
    email: "info@indonesia-maju.com",
    hours: "Senin - Jumat: 08:00 - 17:00 WIB",
  },
};
