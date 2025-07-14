import React from 'react';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import { companyData } from '../data/mockData';
import { History, Eye, Target, Award } from 'lucide-react';

const About = () => {
  const aboutSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Tentang Kami",
      subtitle: "Mengenal lebih dekat perjalanan dan nilai-nilai perusahaan"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Komitmen Kualitas",
      subtitle: "Dedikasi untuk memberikan yang terbaik dalam setiap layanan"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={aboutSlides} height="h-96" />

      {/* Company History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <History className="h-10 w-10 text-red-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {companyData.company.history.title}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {companyData.company.history.content}
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-red-600"></div>
              {companyData.company.history.milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  <div className="absolute left-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-12 bg-gray-50 p-6 rounded-lg">
                    <div className="text-red-600 font-bold text-xl mb-2">{milestone.year}</div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {companyData.company.vision}
              </p>
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
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-10 w-10 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nilai-Nilai Perusahaan
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap langkah dan keputusan perusahaan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyData.company.values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                  <Award className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;