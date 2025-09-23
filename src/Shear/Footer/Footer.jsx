import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";
import QRCode from "react-qr-code";

const Footer = () => {
  // Predefined WhatsApp number
  const phoneNumber = "8801846615162"; // Country code সহ
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <footer className="bg-[#0F766E] text-gray-300 py-10 font-sans relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="Logo"
            className="w-16 md:w-44 h-16 md:h-20 rounded-md mb-3"
          />
          <span className="text-xl font-semibold text-white">
            LIFTGUARD SOLUTION
          </span>
          <p className="mt-4 text-sm text-gray-300 max-w-xs">
            The Guardian of Equipment Safety ensures protection and reliability,
            keeping machines secure, preventing risks tirelessly. ⚙️🔒
          </p>
        </div>

        {/* Office Addresses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-amber-400 font-medium">HEAD OFFICE:</p>
              <p className="text-gray-300">
                BBC Steel Bhaban, South Shitalpur, Sitakunda, Chattagram.
              </p>
            </div>
            <div>
              <p className="text-amber-400 font-medium">CORPORATE OFFICE:</p>
              <p className="text-gray-300">
                As-Salam Tower (11th Floor), 57, Agrabad C/A, Chattagram.
              </p>
            </div>
            <div>
              <p className="text-amber-400 font-medium">LAB:</p>
              <p className="text-gray-300">
                Boro Kumira, Sitakunda, Chattagram.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <div className="text-sm space-y-2 text-center md:text-left">
            <p>
              Email:{" "}
              <a
                href="mailto:solutionliftguard@gmail.com"
                className="text-amber-400 hover:underline"
              >
                solutionliftguard@gmail.com
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:ranaliftguardsolution@gmail.com"
                className="text-amber-400 hover:underline"
              >
                ranaliftguardsolution@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:01321229107" className="text-amber-400 hover:underline">
                01321229107
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-5 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61571056233771&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-700 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp QR Code at the bottom */}
      <div className="flex justify-center mt-10">
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <QRCode value={whatsappLink} size={80} />
          <p className="text-gray-700 text-sm font-oswald mt-1 text-center">
            WhatsApp
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 mt-8 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} LiftGuard Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
