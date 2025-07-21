import { React, useState } from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import { companyData } from "../data/mockData";
import { Briefcase, HelpCircle, MapPin, Clock, ChevronDown, ChevronUp, Users } from "lucide-react";
import karir1 from "./karir1.jpg";
import karir2 from "./karir2.png";
const Career = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeSection, setActiveSection] = useState("jobs");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const jobVacancies = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Technology",
      location: "Jakarta",
      type: "Full Time",
      experience: "5+ years",
      description: "Mengembangkan dan memelihara sistem aplikasi enterprise dengan teknologi terdepan. Bertanggung jawab dalam arsitektur software dan mentoring junior developer.",
      requirements: ["Bachelor degree in Computer Science or related field", "Experience with React, Node.js, and cloud platforms", "Strong problem-solving skills", "Experience in agile development methodology"],
      posted: "2 hari yang lalu",
    },
    {
      id: 2,
      title: "Business Development Manager",
      department: "Business Development",
      location: "Jakarta",
      type: "Full Time",
      experience: "3-5 years",
      description: "Mengidentifikasi dan mengembangkan peluang bisnis baru, membangun hubungan strategis dengan mitra potensial, dan merumuskan strategi ekspansi pasar.",
      requirements: ["Bachelor degree in Business, Marketing, or related field", "Proven track record in business development", "Excellent communication and negotiation skills", "Experience in B2B sales"],
      posted: "3 hari yang lalu",
    },
    {
      id: 3,
      title: "Financial Analyst",
      department: "Finance",
      location: "Jakarta",
      type: "Full Time",
      experience: "2-4 years",
      description: "Melakukan analisis keuangan, perencanaan budget, dan evaluasi investasi. Menyiapkan laporan keuangan dan presentasi untuk manajemen.",
      requirements: ["Bachelor degree in Finance, Accounting, or Economics", "Strong analytical and Excel skills", "Knowledge of financial modeling", "CFA or relevant certification preferred"],
      posted: "5 hari yang lalu",
    },
    {
      id: 4,
      title: "Human Resources Specialist",
      department: "Human Resources",
      location: "Jakarta",
      type: "Full Time",
      experience: "2-3 years",
      description: "Mengelola proses rekrutmen, pengembangan karyawan, dan implementasi kebijakan HR. Mendukung employee engagement dan culture transformation.",
      requirements: ["Bachelor degree in Psychology, HR, or related field", "Experience in recruitment and talent management", "Strong interpersonal skills", "Knowledge of labor law"],
      posted: "1 minggu yang lalu",
    },
    {
      id: 5,
      title: "Marketing Communication Manager",
      department: "Marketing",
      location: "Jakarta",
      type: "Full Time",
      experience: "4-6 years",
      description: "Mengembangkan dan mengimplementasikan strategi komunikasi perusahaan, mengelola brand image, dan memimpin campaign marketing terintegrasi.",
      requirements: ["Bachelor degree in Marketing, Communications, or related field", "Experience in digital marketing and brand management", "Creative thinking and project management skills", "Portfolio of successful campaigns"],
      posted: "1 minggu yang lalu",
    },
    {
      id: 6,
      title: "Operations Manager",
      department: "Operations",
      location: "Surabaya",
      type: "Full Time",
      experience: "5+ years",
      description: "Mengawasi operasional harian, mengoptimalkan proses bisnis, dan memastikan pencapaian target operasional dengan standar kualitas tertinggi.",
      requirements: ["Bachelor degree in Engineering, Operations, or related field", "Experience in operations management", "Leadership and team management skills", "Process improvement mindset"],
      posted: "2 minggu yang lalu",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "Bagaimana cara melamar pekerjaan di Hastari Corp?",
      answer: "Anda dapat melamar melalui website resmi kami dengan mengisi formulir online dan mengunggah CV serta dokumen pendukung. Pastikan posisi yang dilamar sesuai dengan kualifikasi dan pengalaman Anda.",
    },
    {
      id: 2,
      question: "Berapa lama proses rekrutmen berlangsung?",
      answer: "Proses rekrutmen umumnya berlangsung 2-4 minggu tergantung posisi. Tahapan meliputi seleksi administrasi, tes kemampuan, wawancara, dan medical check-up untuk posisi tertentu.",
    },
    {
      id: 3,
      question: "Apakah ada program magang atau fresh graduate?",
      answer: "Ya, kami memiliki program Management Trainee untuk fresh graduate dan program magang untuk mahasiswa semester akhir. Program ini dirancang untuk pengembangan karir jangka panjang.",
    },
    {
      id: 4,
      question: "Benefit apa saja yang ditawarkan?",
      answer: "Kami menyediakan kompensasi kompetitif, asuransi kesehatan, tunjangan pendidikan, program pengembangan karir, flexible working arrangement, dan various employee benefits lainnya.",
    },
    {
      id: 5,
      question: "Apakah ada kesempatan untuk bekerja di luar Jakarta?",
      answer: "Ya, kami memiliki cabang di berbagai kota di Indonesia. Terdapat kesempatan assignment dan rotasi untuk pengembangan karir serta ekspansi bisnis perusahaan.",
    },
  ];
  const careerSlides = [
    {
      id: 1,
      image: karir1,
      title: "Mari bergabung menjadi Hastarian",
      subtitle: "Wujudkan potensi terbaik Anda dalam lingkungan kerja yang dinamis dan profesional",
    },
    {
      id: 2,
      image: karir2,
      title: "Kesempatan Berkembang",
      subtitle: "Bergabung dengan tim yang mendukung pertumbuhan karir dan inovasi",
    },
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={careerSlides} height="h-96" />
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button onClick={() => setActiveSection("jobs")} className={`px-6 py-2 rounded-md font-medium transition-colors ${activeSection === "jobs" ? "bg-red-600 text-white" : "text-gray-600 hover:text-red-600"}`}>
                Lowongan Kerja
              </button>
              <button onClick={() => setActiveSection("faq")} className={`px-6 py-2 rounded-md font-medium transition-colors ${activeSection === "faq" ? "bg-red-600 text-white" : "text-gray-600 hover:text-red-600"}`}>
                FAQ Karir
              </button>
              <button onClick={() => setActiveSection("process")} className={`px-6 py-2 rounded-md font-medium transition-colors ${activeSection === "process" ? "bg-red-600 text-white" : "text-gray-600 hover:text-red-600"}`}>
                Alur Rekrutmen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Vacancies */}
      {activeSection === "jobs" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lowongan Kerja Tersedia</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">Bergabunglah dengan tim kami dan wujudkan karir impian Anda bersama Hastari Corp</p>
            </div>

            <div className="space-y-6">
              {jobVacancies.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <span className="text-sm text-gray-500">{job.posted}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Kualifikasi:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">Lamar Sekarang</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {activeSection === "faq" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600">Pertanyaan yang sering diajukan seputar karir dan rekrutmen di Hastari Corp</p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md">
                  <button onClick={() => toggleFAQ(faq.id)} className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {expandedFAQ === faq.id ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                  </button>

                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recruitment Process */}
      {activeSection === "process" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alur Rekrutmen</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">Proses rekrutmen yang transparan dan profesional untuk memastikan kandidat terbaik bergabung dengan tim kami</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Aplikasi Online</h3>
                <p className="text-gray-700 text-sm">Submit aplikasi dan CV melalui website resmi atau portal karir kami</p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Seleksi Administrasi</h3>
                <p className="text-gray-700 text-sm">Review CV dan dokumen untuk memastikan kesesuaian dengan kualifikasi</p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tes & Wawancara</h3>
                <p className="text-gray-700 text-sm">Tes kemampuan, psikotes, dan wawancara dengan HR serta user</p>
              </div>

              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Offer & Onboarding</h3>
                <p className="text-gray-700 text-sm">Job offer, negosiasi, dan proses onboarding untuk kandidat terpilih</p>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tips Sukses Melamar</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">Persiapan Dokumen</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• CV yang terstruktur dan relevan dengan posisi</li>
                    <li>• Cover letter yang personalized</li>
                    <li>• Portfolio atau contoh karya (jika applicable)</li>
                    <li>• Sertifikat dan ijazah yang valid</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">Persiapan Interview</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Pelajari profil dan nilai-nilai perusahaan</li>
                    <li>• Siapkan contoh pencapaian dan pengalaman</li>
                    <li>• Dress code professional dan punctual</li>
                    <li>• Siapkan pertanyaan tentang role dan perusahaan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Job Vacancies Section */}
    </div>
  );
};

export default Career;
