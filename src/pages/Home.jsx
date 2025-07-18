import React from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import { companyData } from "../data/mockData";
import { ArrowRight, Eye, Target, Award, Calendar } from "lucide-react";
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
        <div className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16 max-w-7xl mx-auto">
          {/* Gambar Kiri */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img src={hero1} alt="Tim Hastari Corp" className="rounded-xl shadow-md w-full object-cover" />
          </div>

          {/* Konten Kanan */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Hastari Corp</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Hastari Corp telah berkembang selama bertahun-tahun dengan beberapa sektor bisnis prioritas yang terintegrasi dan berhasil memperkuat kemampuannya dengan memberikan solusi bernilai tambah bagi pelanggan dengan meningkatkan
              kemampuan, aset, dan kualitas untuk membawa perbaikan dan pertumbuhan berkelanjutan bagi perusahaan.
            </p>
            <a
              href="/files/company-profile.pdf" // Ganti sesuai lokasi file PDF kamu
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white text-lg font-medium py-3 px-6 rounded-full transition duration-300"
              download
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6.414l-4 4V3z" clipRule="evenodd" />
              </svg>
              Unduh Company Profile
            </a>
          </div>
        </div>

        {/* Section: Visi dan Misi */}
        <div className="bg-[#B41515] py-14 px-6 md:px-10 text-white">
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
      <section className="py-16 bg-gray-50">
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
      </section>
      <div className="bg-white">
        {/* Core Value Section */}
        <div className="relative bg-cover bg-center h-[300px] flex items-center justify-center" style={{ backgroundImage: `url(${coreBg})` }}></div>
        {/* <div className="flex flex-col items-center justify-center p-4 bg-white rounded-full shadow-lg border-2 border-gray-200 w-24 h-24">
          {coreIcons.map((word, index) => (
            <image src={word} width="40" height="40" />
          ))} */}
        {/* <div className="text-xs font-medium text-red-700 mt-1 text-center leading-tight">
            <div key={index}>{word}</div>
          </div> */}
        {/* </div> */}
        {/* Core Icons */}
        {/* Core Value Section */}
        {/* Icon Carousel */}
        {/* Entitas Section */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h3 className="text-3xl font-bold text-red-700 mb-8">Entitas Hastari Corp</h3>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {entities.map((item, index) => (
              <div key={index} className="group rounded-xl overflow-hidden shadow-md relative cursor-pointer hover:shadow-xl transition">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-700/90 via-red-500/30 to-transparent px-4 py-3 flex flex-col justify-end">
                  <h4 className="text-white text-lg font-semibold drop-shadow-md">{item.name}</h4>
                  <a href={item.link} className="text-white text-sm font-medium flex items-center gap-1 mt-1 hover:underline">
                    Selengkapnya <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
