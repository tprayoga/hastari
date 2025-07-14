import React from 'react';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import { companyData } from '../data/mockData';
import { Newspaper, FileText, Calendar, Download } from 'lucide-react';

const Media = () => {
  const mediaSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3184440/pexels-photo-3184440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Media & Informasi",
      subtitle: "Pusat informasi terkini seputar perkembangan perusahaan"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Transparansi Informasi",
      subtitle: "Komitmen untuk memberikan informasi yang akurat dan terpercaya"
    }
  ];

  const bulletins = [
    {
      id: 1,
      title: "Laporan Tahunan 2023",
      date: "2024-01-20",
      size: "2.5 MB",
      type: "PDF"
    },
    {
      id: 2,
      title: "Buletin Kuartal IV 2023",
      date: "2024-01-15",
      size: "1.8 MB",
      type: "PDF"
    },
    {
      id: 3,
      title: "Newsletter Januari 2024",
      date: "2024-01-10",
      size: "1.2 MB",
      type: "PDF"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={mediaSlides} height="h-96" />

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Newspaper className="h-10 w-10 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Berita Perusahaan
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Informasi terkini seputar aktivitas dan perkembangan perusahaan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.news.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(news.date).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {news.excerpt}
                  </p>
                  <button className="text-red-600 hover:text-red-700 font-medium">
                    Baca Selengkapnya →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bulletins Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-10 w-10 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Buletin & Publikasi
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Akses publikasi resmi dan dokumen penting perusahaan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bulletins.map((bulletin) => (
              <div key={bulletin.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <FileText className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="ml-3">
                      <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded">
                        {bulletin.type}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {bulletin.title}
                </h3>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex items-center mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(bulletin.date).toLocaleDateString('id-ID')}
                  </div>
                  <div>Ukuran: {bulletin.size}</div>
                </div>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Unduh
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;