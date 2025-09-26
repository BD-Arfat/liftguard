import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ServiceProducts = ({ service }) => {
  const { image, name, proposition } = service;
  const navigate = useNavigate(); // ✅ navigate hook

  const handleReadMore = () => {
    navigate("/services"); // ✅ এখানে তোমার সার্ভিস পেজের রাউট বসাও
  };

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
          {proposition.slice(0, 80)}...
        </p>

        {/* ✅ Read More button এখন service পেজে নিয়ে যাবে */}
        <button
          onClick={handleReadMore}
          className="mt-3 text-[#F59E0B] text-xs font-bold hover:underline"
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceProducts;
