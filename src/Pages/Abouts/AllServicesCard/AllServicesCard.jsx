import React from "react";
import { Link } from "react-router-dom";

const AllServicesCard = () => {
  return (
    <div className="w-11/12 md:w-4/6 mx-auto mt-20 md:mt-48 mb-20 md:mb-40">
      <div className="relative bg-white/90 backdrop-blur-md border-4 border-dotted border-[#0F766E] rounded-2xl shadow-lg p-8 md:p-12 text-center overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
        
        {/* Decorative Background Ribbons */}
        <div className="absolute -top-12 -left-12 w-36 h-36 bg-[#0F766E]/20 rounded-full rotate-45 pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-[#0F766E]/20 rounded-full rotate-45 pointer-events-none animate-pulse"></div>

        {/* Main Title */}
        <h3 className="text-3xl md:text-5xl font-oswald font-bold text-gray-800 mb-6 relative z-10">
          Explore Our Services
        </h3>

        {/* Subtitle / Description */}
        <p className="text-gray-600 mb-8 font-oswald text-base md:text-lg max-w-3xl mx-auto relative z-10">
          We provide top-notch services to ensure safety, reliability, and quality for all your projects.
        </p>

        {/* Button with Gradient & Hover Animation */}
        <Link
          to={"/Services"}
          className="relative inline-block px-8 py-4 md:px-10 md:py-5 font-semibold rounded-xl overflow-hidden text-white transition-all duration-500 
                     bg-gradient-to-r from-[#0F766E] to-[#10B981] hover:scale-105 hover:from-[#0F766E] hover:to-[#F59E0B] shadow-lg"
        >
          <span className="relative z-10">View All Services</span>
          {/* Hover overlay */}
          <span className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>
    </div>
  );
};

export default AllServicesCard;
