import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../Service/Service.css";

const ServiceProducts = ({ service }) => {
  const { image, name, proposition } = service;
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="flex justify-center py-4">
      <div className="relative w-full">
        {/* Rotating Border */}
        <div className="absolute inset-0 z-0 border-animation rounded-xl"></div>

        {/* Card Content */}
        <motion.div
          className="relative bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow z-10"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 12px 18px rgba(0, 0, 0, 0.1)",
            y: -4,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Image with hover zoom effect */}
          <motion.img
            src={image}
            alt={name}
            className="w-full h-40 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          <div className="p-4">
            {/* Title with hover color transition */}
            <motion.h3
              className="text-gray-900 font-semibold text-lg mb-2 hover:text-indigo-500 transition-colors duration-300"
              whileHover={{ color: "#6c63ff" }}
            >
              {name}
            </motion.h3>

            {/* Description text with fade-in animation */}
            <motion.p
              className="text-gray-600 text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {showFullText ? proposition : `${proposition.slice(0, 90)}...`}
            </motion.p>

            {/* Read More / Show Less button */}
            <motion.button
              onClick={toggleText}
              className="text-indigo-600 text-xs font-semibold focus:outline-none hover:text-indigo-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {showFullText ? "Show Less" : "Read More"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceProducts;
