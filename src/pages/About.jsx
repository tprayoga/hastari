import React from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import { companyData } from "../data/mockData";
import { History, Eye, Award } from "lucide-react";
import { Clock, Target, Users, Heart, Lightbulb } from "lucide-react";

import tk1 from "./tentang1.jpg";
import tk2 from "./tentang2.jpg";
import tk3 from "./tentang3.jpg";
import tk4 from "./tentang4.jpg";

const About = () => {
  const aboutSlides = [
    {
      id: 1,
      image: tk1,
      title: "Sejarah Perusahaan",
      description: "Perjalanan panjang membangun kepercayaan dan dedikasi untuk Indonesia.",
    },
    {
      id: 2,
      image: tk3,
      title: "Visi & Misi",
      description: "Arah strategis menuju masa depan yang lebih cemerlang bagi bangsa.",
    },
    {
      id: 3,
      image: tk4,
      title: "Nilai-Nilai Kami",
      description: "Fondasi kuat yang mendasari setiap tindakan dan keputusan perusahaan.",
    },
    {
      id: 4,
      image: tk2,
      title: "Tentang Kami",
      description: "kami adalah perusahaan yang berkomitmen untuk memberikan kontribusi nyata bagi kemajuan bangsa.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={aboutSlides} height="h-96" />

      {/* Company History Section */}
      {/* <div className="bg-white text-black py-10 px-6 md:px-16 lg:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Hastari Corp telah berkembang selama bertahun-tahun dengan beberapa sektor bisnis prioritas yang terintegrasi dan berhasil memperkuat kemampuannya dengan memberikan solusi bernilai tambah bagi pelanggan dengan meningkatkan
          kemampuan, aset, dan kualitas untuk membawa perbaikan dan pertumbuhan berkelanjutan bagi perusahaan. Strategi baru yang efisien dan pendekatan organisasi yang rasional, profesional, dan andal telah memperkuat posisi perusahaan,
          bahkan dengan meningkatnya persaingan saat ini. Hastari Corp terus berupaya untuk meningkatkan daya saingnya di pasar nasional.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8">Bersama-sama kita menciptakan nilai yang langgeng dan membentuk masa depan industri yang berkelanjutan, mempromosikan transparansi dan membangun kepercayaan.</p>
        <a
          href="/path-to-company-profile.pdf" // Ganti dengan URL file sebenarnya
          download
          className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 20 20">
            <path d="M9 0a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V1a1 1 0 011-1zM3 18a1 1 0 100 2h14a1 1 0 100-2H3z" />
          </svg>
          Unduh Company Profile
        </a>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sejarah Perusahaan</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">1995</h3>
                    <p className="text-red-100">Pendirian</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed">
                    PT Nusantara didirikan dengan visi membangun Indonesia yang lebih maju. Dimulai sebagai perusahaan kecil dengan komitmen besar terhadap excellence dan pelayanan terbaik untuk bangsa.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">2005</h3>
                    <p className="text-red-100">Ekspansi</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed">Memasuki dekade kedua dengan ekspansi ke berbagai sektor strategis. Membentuk anak perusahaan dan memperluas jangkauan layanan di seluruh nusantara.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">2015</h3>
                    <p className="text-red-100">Transformasi</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed">Era transformasi digital dimulai. Mengadopsi teknologi terdepan dan mengembangkan solusi inovatif untuk menghadapi tantangan masa depan.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="md:w-1/3">
                  <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">2025</h3>
                    <p className="text-red-100">Masa Kini</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 leading-relaxed">Tiga dekade kemudian, PT Nusantara kini menjadi grup perusahaan terkemuka dengan komitmen berkelanjutan pada pembangunan nasional dan kesejahteraan rakyat Indonesia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section: Tentang Kami */}
      <div className="bg-white text-black py-10 px-6 md:px-16 lg:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Hastari Corp telah berkembang selama bertahun-tahun dengan beberapa sektor bisnis prioritas yang terintegrasi dan berhasil memperkuat kemampuannya dengan memberikan solusi bernilai tambah bagi pelanggan dengan meningkatkan
          kemampuan, aset, dan kualitas untuk membawa perbaikan dan pertumbuhan berkelanjutan bagi perusahaan. Strategi baru yang efisien dan pendekatan organisasi yang rasional, profesional, dan andal telah memperkuat posisi perusahaan,
          bahkan dengan meningkatnya persaingan saat ini. Hastari Corp terus berupaya untuk meningkatkan daya saingnya di pasar nasional.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8">Bersama-sama kita menciptakan nilai yang langgeng dan membentuk masa depan industri yang berkelanjutan, mempromosikan transparansi dan membangun kepercayaan.</p>
        <a
          href="/path-to-company-profile.pdf" // Ganti dengan URL file sebenarnya
          download
          className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 20 20">
            <path d="M9 0a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V1a1 1 0 011-1zM3 18a1 1 0 100 2h14a1 1 0 100-2H3z" />
          </svg>
          Unduh Company Profile
        </a>
      </div>
      <div className="bg-white text-black py-10 px-6 md:px-16 lg:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sejarah Perusahaan</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..
        </p>
        {/* <a
          href="/path-to-company-profile.pdf" // Ganti dengan URL file sebenarnya
          download
          className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 20 20">
            <path d="M9 0a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 11.586V1a1 1 0 011-1zM3 18a1 1 0 100 2h14a1 1 0 100-2H3z" />
          </svg>
          Unduh Company Profile
        </a> */}
      </div>

      {/* Section: Sejarah Perusahaan */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sejarah Perusahaan</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">1995</h3>
                  <p className="text-red-100">Pendirian</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed">
                  PT Nusantara didirikan dengan visi membangun Indonesia yang lebih maju. Dimulai sebagai perusahaan kecil dengan komitmen besar terhadap excellence dan pelayanan terbaik untuk bangsa.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2005</h3>
                  <p className="text-red-100">Ekspansi</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed">Memasuki dekade kedua dengan ekspansi ke berbagai sektor strategis. Membentuk anak perusahaan dan memperluas jangkauan layanan di seluruh nusantara.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2015</h3>
                  <p className="text-red-100">Transformasi</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed">Era transformasi digital dimulai. Mengadopsi teknologi terdepan dan mengembangkan solusi inovatif untuk menghadapi tantangan masa depan.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/3">
                <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2025</h3>
                  <p className="text-red-100">Masa Kini</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 leading-relaxed">Tiga dekade kemudian, PT Nusantara kini menjadi grup perusahaan terkemuka dengan komitmen berkelanjutan pada pembangunan nasional dan kesejahteraan rakyat Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Vision Mission Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{companyData.company.vision}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
              </div>
              <ul className="space-y-3">
                {companyData.company.mission.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Visi */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">Visi</h3>
            <p className="text-gray-900 text-lg leading-relaxed">
              Become a leading <br />
              holding & strategic investment company to oversee various credible business sectors in Indonesia.
            </p>
          </div>

          {/* Misi */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">Misi</h3>
            <ul className="list-disc list-outside text-gray-900 space-y-3 pl-5 text-lg leading-relaxed">
              <li>Running the investment by considering business risk, diversification, and attractive return on investment to the company and its subsidiary.</li>
              <li>Coordinating with subsidiaries in devising activities and strategic policies.</li>
              <li>Creating a business ecosystem to build a strategic partnership.</li>
              <li>Carrying out regulatory, inspection, and collaboration functions to enhance the growth of each business sector.</li>
              <li>Maximizing qualified and professional human resources who have determination, high integrity, and productivity.</li>
              <li>Increasing competitiveness to create business sustainability that supports stakeholder welfare.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Nilai-nilai fundamental yang membentuk budaya kerja dan menjadi pedoman dalam setiap langkah perusahaan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">INTEGRITY</h3>
              <p className="text-gray-700">Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas dalam setiap aspek bisnis dan hubungan profesional.</p>
            </div>

            <div className="text-center p-6">
              <Lightbulb className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">INNOVATION</h3>
              <p className="text-gray-700">Mendorong kreativitas dan pemikiran out-of-the-box untuk menghasilkan solusi terdepan yang memberikan nilai tambah.</p>
            </div>

            <div className="text-center p-6">
              <Award className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">EXCELLENCE</h3>
              <p className="text-gray-700">Berkomitmen pada standar kualitas tertinggi dalam setiap produk, layanan, dan proses yang kami lakukan.</p>
            </div>

            <div className="text-center p-6">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">CARE</h3>
              <p className="text-gray-700">Peduli terhadap karyawan, masyarakat, dan lingkungan sebagai bagian dari tanggung jawab sosial perusahaan.</p>
            </div>

            <div className="text-center p-6">
              <Users className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">COLLABORATION</h3>
              <p className="text-gray-700">Membangun kerjasama tim yang solid dan sinergi positif untuk mencapai tujuan bersama.</p>
            </div>

            <div className="text-center p-6">
              <Target className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">COMMITMENT</h3>
              <p className="text-gray-700">Dedikasi penuh terhadap janji, target, dan tanggung jawab yang telah ditetapkan dengan konsistensi tinggi.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
