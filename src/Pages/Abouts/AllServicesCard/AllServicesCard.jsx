import React from "react";
import { Link } from "react-router-dom";

const AllServicesCard = () => {
  return (
    <div className="w-4/6 mx-auto mt-20 md:mt-48 mb-20 md:mb-40">
      <div className="relative bg-white py-12 border-dotted border-4 border-[#0F766E] rounded-xl shadow-lg p-6 text-center overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
        
        {/* Decorative Background Ribbon */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0F766E]/20 rounded-full rotate-45 pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0F766E]/20 rounded-full rotate-45 pointer-events-none"></div>

        {/* Title / Text */}
        <h3 className="text-2xl md:text-5xl font-oswald font-bold text-gray-800 mb-4">
          Explore Our Services
        </h3>
        <p className="text-gray-600 mb-6 font-oswald">
          We provide top-notch services to ensure safety and quality for your projects.
        </p>

        {/* Button with animation */}
        <Link
          to={"/Services"}
          className="relative inline-block px-8 py-3 font-semibold rounded-md overflow-hidden text-white transition-all duration-300 
                     bg-[#0F766E] group-hover:bg-gradient-to-r group-hover:from-[#0F766E] group-hover:to-[#F59E0B] 
                     hover:scale-105"
        >
          <span className="relative z-10">View All Services</span>
          {/* Hover overlay effect */}
          <span className="absolute inset-0 bg-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>
    </div>
  );
};

export default AllServicesCard;
