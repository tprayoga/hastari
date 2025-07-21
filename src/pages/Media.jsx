import { React, useState } from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import { companyData } from "../data/mockData";
import { Newspaper, FileText, Calendar, Download } from "lucide-react";
import { Eye } from "lucide-react";
import media1 from "./media1.jpg";
import media2 from "./media2.jpg";
import media3 from "./media3.jpg";
import media4 from "./media4.jpg";
import media5 from "./media5.jpg";

const Media = () => {
  const [activeTab, setActiveTab] = useState("berita");
  const beritaList = [
    {
      id: 1,
      image: media1,
      title: "#SalingBerbagiKebaikan Hastarian melalui Sebuah Cokelat (14 Februari 2025)",
      excerpt: "Prestasi gemilang dalam kategori inovasi berkelanjutan dan kontribusi terhadap pembangunan nasional.",
      date: "14 Januari 2025",
      readTime: "3 min",
    },
    {
      id: 2,
      image: media2,
      title: "AHastari Jaya Sentosa BukaBersama Yayasan Anak Yatim (25 Maret 2025)",
      excerpt: "Komitmen kami untuk meratakan pembangunan dan memberikan kesempatan yang sama di seluruh Indonesia.",
      date: "25 Maret 2025",
      readTime: "5 min",
    },
    {
      id: 3,
      image: media3,
      title: "Program CSR untuk Pendidikan Indonesia",
      excerpt: "Anniversary 5th Hastari Corp 2025 (19 Desember 2024)",
      date: "19 Desember 2024",
      readTime: "4 min",
    },
    {
      id: 4,
      title: "Dari Hastari, Oleh Hastari, Untuk Hastari_ Halal bi Halal Hastari Corp 2025 (10 April 2025)",
      excerpt: "Sinergi untuk percepatan pembangunan infrastruktur dan ekonomi daerah.",
      date: "10 April 2025",
      readTime: "6 min",
      image: media4,
    },
    {
      id: 5,
      image: media5,
      title: "One Goal, One Team, One Spirit of Hastari Cop_ Capacity Building 2024 (9-11 Oktober 2024)",
      excerpt: "Mengembangkan solusi teknologi ramah lingkungan untuk mendukung keberlanjutan.",
      date: "9 Oktober 2024",
      readTime: "5 min",
    },
  ];

  const buletinList = [
    {
      id: 1,
      title: "Buletin Nusantara Edisi Q4 2024",
      description: "Laporan pencapaian dan rencana strategis memasuki tahun 2025.",
      publishDate: "Desember 2024",
      downloadUrl: "#",
      fileSize: "2.5 MB",
    },
    {
      id: 2,
      title: "Newsletter Inovasi dan Teknologi",
      description: "Update terbaru tentang pengembangan teknologi dan inovasi perusahaan.",
      publishDate: "November 2024",
      downloadUrl: "#",
      fileSize: "1.8 MB",
    },
    {
      id: 3,
      title: "Laporan Sustainability 2024",
      description: "Komitmen kami terhadap praktik bisnis berkelanjutan dan ramah lingkungan.",
      publishDate: "Oktober 2024",
      downloadUrl: "#",
      fileSize: "3.2 MB",
    },
    {
      id: 4,
      title: "Buletin SDM dan Pengembangan Karir",
      description: "Informasi tentang program pengembangan karyawan dan kesempatan karir.",
      publishDate: "September 2024",
      downloadUrl: "#",
      fileSize: "1.5 MB",
    },
  ];
  const mediaSlides = [
    {
      id: 1,
      image: media1,
      title: "#SalingBerbagiKebaikan Hastarian melalui Sebuah Cokelat (14 Februari 2025)",
      subtitle: "Pusat informasi terkini seputar perkembangan perusahaan",
    },
    {
      id: 2,
      image: media2,
      title: "AHastari Jaya Sentosa BukaBersama Yayasan Anak Yatim (25 Maret 2025)",
      subtitle: "Komitmen untuk memberikan informasi yang akurat dan terpercaya",
    },
    {
      id: 3,
      image: media3,
      title: "Anniversary 5th Hastari Corp 2025 (19 Desember 2025)",
      subtitle: "Berita terbaru dan informasi penting dari perusahaan kami",
    },
    {
      id: 4,
      image: media4,
      title: "Dari Hastari, Oleh Hastari, Untuk Hastari_ Halal bi Halal Hastari Corp 2025 (10 April 2025)",
      subtitle: "Dapatkan informasi terkini tentang perusahaan kami",
    },
    {
      id: 5,
      image: media5,
      title: "One Goal, One Team, One Spirit of Hastari Cop_ Capacity Building 2024 (9-11 Oktober 2024)",
      subtitle: "Kami berkomitmen untuk memberikan informasi yang bermanfaat",
    },
  ];

  const bulletins = [
    {
      id: 1,
      title: "Laporan Tahunan 2023",
      date: "2024-01-20",
      size: "2.5 MB",
      type: "PDF",
    },
    {
      id: 2,
      title: "Buletin Kuartal IV 2023",
      date: "2024-01-15",
      size: "1.8 MB",
      type: "PDF",
    },
    {
      id: 3,
      title: "Newsletter Januari 2024",
      date: "2024-01-10",
      size: "1.2 MB",
      type: "PDF",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={mediaSlides} height="h-96" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Media & Informasi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dapatkan informasi terkini tentang perkembangan perusahaan, pencapaian, dan berbagai publikasi resmi kami.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button onClick={() => setActiveTab("berita")} className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === "berita" ? "bg-red-600 text-white" : "text-gray-600 hover:text-gray-900"}`}>
              <Newspaper className="h-4 w-4 inline mr-2" />
              Berita Perusahaan
            </button>
            <button onClick={() => setActiveTab("buletin")} className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === "buletin" ? "bg-red-600 text-white" : "text-gray-600 hover:text-gray-900"}`}>
              <FileText className="h-4 w-4 inline mr-2" />
              Buletin & Newsletter
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "berita" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beritaList.map((berita) => (
              <article key={berita.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={berita.image} alt={berita.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{berita.date}</span>
                    <span className="mx-2">•</span>
                    <Eye className="h-4 w-4 mr-1" />
                    <span>{berita.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{berita.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{berita.excerpt}</p>
                  <button className="text-red-600 hover:text-red-700 font-medium transition-colors">Baca Selengkapnya →</button>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === "buletin" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buletinList.map((buletin) => (
              <div key={buletin.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{buletin.title}</h3>
                    <p className="text-gray-600 mb-3">{buletin.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{buletin.publishDate}</span>
                      <span className="mx-2">•</span>
                      <span>{buletin.fileSize}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center ml-4">
                    <FileText className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <a href={buletin.downloadUrl} className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* News Section */}
    </div>
  );
};

export default Media;
