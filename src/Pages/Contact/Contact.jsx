import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Map from "./Map";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto pt-20 px-4 md:px-16">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-[#0F766E] font-oswald mt-2">
        Contact Us
      </h2>
      <hr className="border border-[#0F766E] h-1 bg-[#0F766E] w-48 mx-auto mt-1 mb-10 rounded-full" />

      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row items-center gap-8 mb-16"
      >
        {/* Left: Contact Information */}
        <div className="md:w-1/2 w-full space-y-6">
          <div className="text-lg font-oswald">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">
              📍 Lab:
            </h3>
            <p>Boro Kumira, Sitakunda, Chattogram</p>
          </div>
          <div className="text-lg font-oswald">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">
              🏢 Head Office:
            </h3>
            <p>BBC Steel Bhaban, South Shitalpur, Sitakunda, Chattogram</p>
          </div>
          <div className="text-lg font-oswald">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">
              🏢 Corporate Office:
            </h3>
            <p>As-Salam Tower (11th Floor), 57, Agrabad C/A, Chattogram</p>
          </div>
          <div className="text-lg font-oswald">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">
              ✉️ Email:
            </h3>
            <p>solutionliftguard@gmail.com</p>
            <p>ranaliftguardsolution@gmail.com</p>
          </div>
          <div className="text-lg font-oswald">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">
              ☎️ Phone:
            </h3>
            <p>01321229107</p>
          </div>

          {/* Opening Hours */}
          <div className="text-lg font-oswald">
            <h3 className="font-bold text-xl uppercase text-[#0F766E]">
              ⏰ Opening Hours:
            </h3>
            <p>Saturday – Thursday: 9:00 AM – 6:00 PM</p>
            <p>Friday: Closed</p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 text-2xl text-[#0F766E] mt-4">
            <a href="#" className="hover:text-yellow-500"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-500"><FaLinkedin /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-500"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Right: Image + Contact Form */}
        <div className="md:w-1/2 w-full space-y-6">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300"
          />

          
        </div>
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
  );
};

export default Contact;
