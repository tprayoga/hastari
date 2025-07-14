import React from 'react';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import { companyData } from '../data/mockData';
import { Briefcase, HelpCircle, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const Career = () => {
  const [expandedFaq, setExpandedFaq] = React.useState(null);

  const careerSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Berkarir Bersama Kami",
      subtitle: "Wujudkan potensi terbaik Anda dalam lingkungan kerja yang dinamis dan profesional"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      title: "Kesempatan Berkembang",
      subtitle: "Bergabung dengan tim yang mendukung pertumbuhan karir dan inovasi"
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={careerSlides} height="h-96" />

      {/* Job Vacancies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="h-10 w-10 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Lowongan Pekerjaan
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan peluang karir yang sesuai dengan keahlian dan minat Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.jobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Persyaratan:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                  Lamar Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Alur Rekrutmen
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proses seleksi yang transparan dan profesional untuk memastikan kandidat terbaik
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {companyData.career.process.map((step, index) => (
                  <div key={step.step} className="text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                        {step.step}
                      </div>
                      {index < companyData.career.process.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-red-200"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-10 w-10 text-red-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan seputar karir
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {companyData.career.faq.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-4">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-red-600 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;