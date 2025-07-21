import React from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import { companyData } from "../data/mockData";
import { Building } from "lucide-react";
import tk1 from "./tentang1.jpg";
import bpn from "./BPN.jpg";
import ham from "./HAM.jpg";
import hap from "./HAP.jpg";
import hjb from "./HJB.jpg";
import hjs from "./HJS.jpg";
import hne from "./HNE.jpg";
import hpa from "./HPA.jpg";
const CompanyCard = ({ name, image, link }) => (
  <div className="group overflow-hidden rounded-lg shadow-md transition duration-300">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-56 object-cover filter grayscale group-hover:grayscale-0 transition duration-500 ease-in-out" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-700 via-red-600/80 to-transparent text-white px-4 py-3">
        <h3 className="font-bold text-sm md:text-base">{name}</h3>
        <a href={link} className="text-sm mt-1 inline-flex items-center gap-1 text-white hover:underline">
          Selengkapnya
          <span className="text-white text-base">⟶</span>
        </a>
      </div>
    </div>
  </div>
);

const Entities = () => {
  const entitiesSlides = [
    {
      id: 1,
      image: tk1,
      title: "Entitas Hastari Corp",
      subtitle: "Jaringan perusahaan yang saling mendukung untuk mencapai visi bersama",
    },
  ];
  const companies = [
    {
      name: "PT. Hastari Jaya Sentosa",
      image: hjs, // Ganti dengan path gambar asli
      link: "#",
    },
    {
      name: "PT. Hastari Abhipraya Prima",
      image: hap, // Ganti dengan path gambar asli
      link: "#",
    },
    {
      name: "Hastari Nawasena Energi",
      image: hne, // Ganti dengan path gambar asli
      link: "#",
    },
    {
      name: "PT. Hastari Perkaya Anugerah",
      image: hpa, // Ganti dengan path gambar asli
      link: "#",
    },
    {
      name: "PT. Bodha Padma Nawadhya",
      image: bpn, // Ganti dengan path gambar asli
      link: "#",
    },
    {
      name: "PT. Hastari Alam Makmur",
      image: ham, // Ganti dengan path gambar asli
      link: "#",
    },
    {
      name: "PT. Hastari Jeriji Bersatu",
      image: hjb, // Ganti dengan path gambar asli
      link: "#",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={entitiesSlides} height="h-96" />

      {/* Entities Section */}
      {/* <section className="py-16 bg-white">
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
      </section> */}

      {/* Organization Chart Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company, idx) => (
            <CompanyCard key={idx} name={company.name} image={company.image} link={company.link} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Entities;
