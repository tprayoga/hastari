import React, { useState } from "react";
import HeroCarousel from "../components/Carousel/HeroCarousel";
import { companyData } from "../data/mockData";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import kontak1 from "./kontak1.jpg";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactSlides = [
    {
      id: 1,
      image: kontak1,
      title: "Hubungi Kami",
      subtitle: "Kami siap membantu dan menjawab pertanyaan Anda",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Terima kasih! Pesan Anda telah terkirim.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel slides={contactSlides} height="h-96" />

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">Kami siap melayani dan menjawab setiap pertanyaan Anda. Jangan ragu untuk menghubungi kami kapan saja.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Alamat Kantor</h3>
              <p className="text-gray-700 text-sm">
                Jl. Sudirman No. 123
                <br />
                Jakarta Pusat 10220
                <br />
                Indonesia
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-700 text-sm">
                +62 21 1234 5678
                <br />
                +62 21 1234 5679
                <br />
                (Hunting Line)
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700 text-sm">
                info@nusantara.co.id
                <br />
                corporate@nusantara.co.id
                <br />
                career@nusantara.co.id
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jam Operasional</h3>
              <p className="text-gray-700 text-sm">
                Senin - Jumat
                <br />
                08:00 - 17:00 WIB
                <br />
                Sabtu: 08:00 - 12:00 WIB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="general">Informasi Umum</option>
                    <option value="business">Kerjasama Bisnis</option>
                    <option value="career">Pertanyaan Karir</option>
                    <option value="media">Media & Press</option>
                    <option value="complaint">Keluhan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                </div>

                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <Send className="h-5 w-5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Lokasi Kantor</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Google Maps Integration</p>
                    <p className="text-sm">Jl. Sudirman No. 123, Jakarta Pusat</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg">
                  <p className="text-red-800 text-sm">
                    <strong>Akses Transportasi:</strong>
                    <br />
                    - MRT: Stasiun Dukuh Atas (5 menit jalan kaki)
                    <br />
                    - TransJakarta: Halte Dukuh Atas 2<br />- Parkir tersedia di basement gedung
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Jam Kunjungan</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Senin - Jumat</span>
                    <span className="font-semibold text-gray-900">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sabtu</span>
                    <span className="font-semibold text-gray-900">08:00 - 12:00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Minggu</span>
                    <span className="font-semibold text-red-600">Tutup</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Catatan:</strong> Untuk kunjungan bisnis, mohon membuat janji terlebih dahulu melalui email atau telepon untuk memastikan ketersediaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
