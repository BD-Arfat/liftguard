import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 font-oswald">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-md mb-2" />
          <span className="text-xl font-semibold text-white">LIFTGUARD SOLUTION</span>
          <p className="mt-4 text-sm text-gray-400 text-center md:text-left">
          The Guardian of Equipment Safety ensures protection and reliability,
          Keeping machines secure, preventing risks tirelessly. ⚙️🔒
          </p>
        </div>

        {/* Office Addresses */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div>
            <p className="text-yellow-400 font-medium">HEAD OFFICE:</p>
            <p className="text-gray-400 text-sm">
              BBC Steel Bhaban, South Shitalpur, Sitakunda, Chattagram.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-yellow-400 font-medium">CORPORATE OFFICE:</p>
            <p className="text-gray-400 text-sm">
              As-Salam Tower (11th Floor), 57, Agrabad C/A, Chattagram.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-yellow-400 font-medium">LAB:</p>
            <p className="text-gray-400 text-sm">
              Boro Kumira, Sitakunda, Chattagram.
            </p>
          </div>
        </div>

        {/* Contact and Social Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-gray-400 text-sm">
            Email: <a href="mailto:solutionliftguard@gmail.com" className="text-yellow-400">solutionliftguard@gmail.com</a>
          </p>
          <p className="text-gray-400 text-sm">
            Email: <a href="mailto:ranaliftguardsolution@gmail.com" className="text-yellow-400">ranaliftguardsolution@gmail.com</a>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Phone: <a href="tel:01321229107" className="text-yellow-400">01321229107</a>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 justify-center md:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=61571056233771&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
