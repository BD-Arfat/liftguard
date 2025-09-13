import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceProducts = ({ service }) => {
  const { image, name, proposition } = service;
  const [showFullText, setShowFullText] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -6 }}
    >
      {/* Image with overlay effect */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#0F766E] mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">
          {showFullText ? proposition : `${proposition.slice(0, 80)}...`}
        </p>

        <button
          onClick={() => setShowFullText(!showFullText)}
          className="mt-3 text-[#F59E0B] text-xs font-bold hover:underline"
        >
          {showFullText ? "Show Less" : "Read More"}
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceProducts;
