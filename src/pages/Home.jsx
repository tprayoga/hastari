import React from 'react';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import { companyData } from '../data/mockData';
import { ArrowRight, Eye, Target, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={companyData.hero.slides} height="h-screen" />

      {/* Vision Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {companyData.company.vision}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
              </div>
              <ul className="space-y-2">
                {companyData.company.mission.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Berita Terkini
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dapatkan informasi terbaru seputar perkembangan perusahaan dan industri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.news.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(news.date).toLocaleDateString('id-ID')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link
                    to="/media"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlight Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bergabunglah dengan Kami
            </h2>
            <p className="text-red-100 max-w-2xl mx-auto">
              Wujudkan karir impian Anda bersama perusahaan yang terus berkembang
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.jobs.slice(0, 2).map((job) => (
              <div key={job.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-red-100 mb-4">{job.location} • {job.type}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Persyaratan:</h4>
                  <ul className="text-sm text-red-100 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/career"
                  className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Lamar Sekarang
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;