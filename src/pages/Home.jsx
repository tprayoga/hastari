import React from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import { companyData } from "../data/mockData";
import { ArrowRight, Eye, Target, Award, Calendar, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "./hero1.png";
import hero2 from "./hero2.png";
import coreBg from "./core.png";
import adaptive from "./Adaptive.png";
import Agile from "./Agile.png";
import Honest from "./Honest.png";
import Innovative from "./Innovative.png";
import Reliable from "./Reliable.png";
import SenseofBelonging from "./SenseofBelonging.png";
import Thrive from "./Thrive.png";
const Home = () => {
  const entities = [
    {
      name: "PT. Hastari Jaya Sentosa",
      image: hero1,
      link: "#",
    },
    {
      name: "PT. Hastari Abhipraya Prima",
      image: hero2,
      link: "#",
    },
    {
      name: "PT. Hastari Nawasena Energi",
      image: hero1,
      link: "#",
    },
    {
      name: "PT. Bodha Padma Nawasdhya",
      image: hero2,
      link: "#",
    },
  ];
  const coreIcons = [adaptive, Agile, Honest, Innovative, Reliable, SenseofBelonging, Thrive];
  const coreWords = ["adaptive", "Agile", "Honest", "Innovative", "Reliable", "Sense of Belonging", "Thriving"];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={companyData.hero.slides} height="h-screen" />
      <div className="bg-white">
        {/* Section: Company Overview */}

        {/* Section: Visi dan Misi */}
        <div className="bg-white py-14 px-6 md:px-10 text-white">
          <div className="max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row bg-[#991010]">
            {/* Kiri: Konten Visi & Misi */}
            <div className="w-full lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-bold uppercase mb-6 border-b border-white/30 pb-3">Visi dan Misi</h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Visi</h3>
                <p className="text-white/90 leading-relaxed">Become a leading holding & strategic investment company to oversee various credible business sectors in Indonesia.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Misi</h3>
                <ul className="list-disc pl-6 space-y-2 text-white/90 text-base leading-relaxed">
                  <li>Running the investment by considering business risk, diversification, and attractive return on investment to the company and its subsidiary.</li>
                  <li>Coordinating with subsidiaries in devising activities and strategic policies.</li>
                  <li>Creating a business ecosystem to build a strategic partnership.</li>
                  <li>Carrying out regulatory, inspection, and collaboration functions to enhance the growth of each business sector.</li>
                  <li>Maximizing qualified and professional human resources who have determination, high integrity, and productivity.</li>
                  <li>Increasing competitiveness to create business sustainability that supports stakeholder welfare.</li>
                </ul>
              </div>
            </div>

            {/* Kanan: Gambar */}
            <div className="w-full lg:w-1/3">
              <img src={hero2} alt="Visi dan Misi" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{companyData.company.vision}</p>
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
      </section> */}

      {/* Latest News Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita Terkini</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Dapatkan informasi terbaru seputar perkembangan perusahaan dan industri</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.news.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(news.date).toLocaleDateString("id-ID")}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link to="/media" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Latest Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Latest News */}
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Berita Terbaru</h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">Ekspansi Bisnis ke Sektor Digital</h4>
                  <p className="text-gray-600 text-sm">15 Januari 2025</p>
                  <p className="text-gray-700 mt-2">PT Nusantara mengumumkan rencana ekspansi...</p>
                </div>

                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">Penghargaan Corporate Social Responsibility</h4>
                  <p className="text-gray-600 text-sm">10 Januari 2025</p>
                  <p className="text-gray-700 mt-2">Meraih pengakuan atas komitmen terhadap...</p>
                </div>

                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">Kerjasama Strategis dengan BUMN</h4>
                  <p className="text-gray-600 text-sm">5 Januari 2025</p>
                  <p className="text-gray-700 mt-2">Menjalin partnership untuk proyek nasional...</p>
                </div>
              </div>

              <a href="/media" className="inline-block mt-6 text-red-600 hover:text-red-700 font-semibold">
                Lihat Semua Berita →
              </a>
            </div>

            {/* Job Opportunities */}
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">Lowongan Kerja</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Senior Software Engineer</h4>
                  <p className="text-gray-600 text-sm">Jakarta • Full Time</p>
                  <p className="text-gray-700 mt-2">Mengembangkan sistem digital inovatif...</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Business Development Manager</h4>
                  <p className="text-gray-600 text-sm">Jakarta • Full Time</p>
                  <p className="text-gray-700 mt-2">Mengidentifikasi peluang bisnis baru...</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Financial Analyst</h4>
                  <p className="text-gray-600 text-sm">Jakarta • Full Time</p>
                  <p className="text-gray-700 mt-2">Melakukan analisis keuangan dan investasi...</p>
                </div>
              </div>

              <a href="/career" className="inline-block mt-6 text-red-600 hover:text-red-700 font-semibold">
                Lihat Semua Lowongan →
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Career Highlight Section */}
      {/* <section className="py-16 bg-[#B41515] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabunglah dengan Kami</h2>
            <p className="text-red-100 max-w-2xl mx-auto">Wujudkan karir impian Anda bersama perusahaan yang terus berkembang</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.jobs.slice(0, 2).map((job) => (
              <div key={job.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-red-100 mb-4">
                  {job.location} • {job.type}
                </p>
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
                <Link to="/career" className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                  Lamar Sekarang
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
