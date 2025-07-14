import React from 'react';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import { companyData } from '../data/mockData';
import { Building } from 'lucide-react';

const Entities = () => {
  const entitiesSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Entitas Bisnis",
      subtitle: "Jaringan perusahaan yang saling mendukung untuk mencapai visi bersama"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Sinergi Berkelanjutan",
      subtitle: "Kolaborasi antar entitas untuk memberikan solusi menyeluruh"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={entitiesSlides} height="h-96" />

      {/* Entities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-10 w-10 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Entitas Perusahaan
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Grup perusahaan yang terdiri dari berbagai entitas bisnis yang saling melengkapi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyData.entities.map((entity) => (
              <div key={entity.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden">
                  <img
                    src={entity.logo}
                    alt={entity.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {entity.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {entity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Chart Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Struktur Organisasi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hubungan struktural antar entitas dalam grup perusahaan
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Parent Company */}
            <div className="text-center mb-8">
              <div className="bg-red-600 text-white rounded-lg p-6 inline-block">
                <h3 className="text-xl font-semibold">PT Indonesia Maju</h3>
                <p className="text-red-100">Holding Company</p>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gray-400"></div>
            </div>

            {/* Subsidiaries */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companyData.entities.map((entity) => (
                <div key={entity.id} className="text-center">
                  <div className="bg-white border-2 border-red-600 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {entity.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Subsidiary
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entities;