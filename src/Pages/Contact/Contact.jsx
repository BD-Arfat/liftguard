import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Map from "./Map";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import contactImage from "../../assets/contact3.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-72 md:h-96">
        <img
          src={contactImage}
          alt="Contact Banner"
          className="w-full h-full object-cover rounded-b-2xl shadow-lg"
        />
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 md:px-16 -mt-10 relative z-10">
        {/* Contact Info Cards */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Lab */}
          <div className="bg-gray-50 shadow-2xl rounded-xl p-12 border-[#0F766E]  border-4 hover:shadow-3xl transition duration-300">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">📍 Lab</h3>
            <p className="mt-2">Boro Kumira, Sitakunda, Chattogram</p>
          </div>

          {/* Head Office */}
          <div className="bg-gray-50 shadow-2xl rounded-xl p-12 border-[#0F766E]  border-4 hover:shadow-3xl transition duration-300">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">🏢 Head Office</h3>
            <p className="mt-2">BBC Steel Bhaban, South Shitalpur, Sitakunda, Chattogram</p>
          </div>

          {/* Corporate Office */}
          <div className="bg-gray-50 shadow-2xl rounded-xl p-12 border-[#0F766E]  border-4 hover:shadow-3xl transition duration-300">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">🏢 Corporate Office</h3>
            <p className="mt-2">As-Salam Tower (11th Floor), 57, Agrabad C/A, Chattogram</p>
          </div>

          {/* Email */}
          <div className="bg-gray-50 shadow-2xl rounded-xl p-12 border-[#0F766E]  border-4 hover:shadow-3xl transition duration-300">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">✉️ Email</h3>
            <p className="mt-2">solutionliftguard@gmail.com</p>
            <p>ranaliftguardsolution@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-gray-50 shadow-2xl rounded-xl p-12 border-[#0F766E]  border-4 hover:shadow-3xl transition duration-300">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">☎️ Phone</h3>
            <p className="mt-2">01321229107</p>
          </div>

          {/* Opening Hours */}
          <div className="bg-gray-50 shadow-2xl rounded-xl p-12 border-[#0F766E]  border-4 hover:shadow-3xl transition duration-300">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">⏰ Opening Hours</h3>
            <p className="mt-2">Saturday – Thursday: 9:00 AM – 6:00 PM</p>
            <p>Friday: Closed</p>
          </div>
        </div>

        {/* Social Media */}
        <div
          data-aos="fade-up"
          className="flex justify-center gap-6 text-3xl text-[#0F766E] mb-16"
        >
          <a href="#" className="hover:text-yellow-500"><FaFacebook /></a>
          <a href="#" className="hover:text-yellow-500"><FaLinkedin /></a>
          <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-500"><FaWhatsapp /></a>
        </div>

        {/* Map */}
        <div data-aos="fade-up">
          <Map />
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#0F766E] text-white text-center py-6 rounded-lg mt-10 shadow-lg mb-10">
          <h3 className="text-xl md:text-2xl font-bold font-oswald">
            Need Help? Call Us Today – ☎ 01321229107
          </h3>
        </div>
      </div>

    </div>
  );
};

export default Contact;
