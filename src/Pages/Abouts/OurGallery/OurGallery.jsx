import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-8.webp", category: "Load Test" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-9.webp", category: "Load Test" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-1-scaled.webp", category: "Load Test" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-10.webp", category: "Load Test" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-11.webp", category: "Load Test" },
  { url: "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg", category: "Lift" },
  { url: "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg", category: "Lift" },
  { url: "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg", category: "Lift" },
];

const categories = ["All", "Load Test", "Inspection", "Lift"];

const OurGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryRef = useRef(null);
  const isInView = useInView(galleryRef, { once: true }); // Animate only once when in viewport

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full py-16 mt-28 md:mt-20 font-oswald" ref={galleryRef}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 text-[#0F766E]">
          Our <span className="text-[#F59E0B]">Gallery</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:mt-12 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(null);
              }}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 
                ${activeCategory === cat
                  ? "bg-[#0F766E] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-[#F59E0B] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredImages.length === 0 ? (
          <p className="text-center text-lg font-medium text-gray-600">
            No images available in this category. 😢
          </p>
        ) : (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={gridVariants}
          >
            {filteredImages.map((img, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer border-2 border-transparent hover:border-[#F59E0B]"
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={img.url}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-[#0F766E]/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-sm font-medium">
                  Click to View
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && filteredImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-4xl w-full px-4 flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-4 bg-[#0F766E] text-white px-3 py-2 rounded-full text-xl font-bold hover:bg-[#0F5C57]"
            >
              ‹
            </button>

            <motion.img
              key={filteredImages[selectedIndex].url}
              src={filteredImages[selectedIndex].url}
              alt="Full View"
              className="w-full max-h-[500px] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />

            <button
              onClick={handleNext}
              className="absolute right-4 bg-[#0F766E] text-white px-3 py-2 rounded-full text-xl font-bold hover:bg-[#0F5C57]"
            >
              ›
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 right-4 bg-[#F59E0B] text-white px-3 py-1 rounded-lg font-bold hover:bg-[#D48806]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurGallery;
