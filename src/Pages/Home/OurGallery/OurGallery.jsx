import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/6005876/pexels-photo-6005876.jpeg",
  "https://i0.wp.com/triadlifts.com/wp-content/uploads/2022/06/chicago-elevator-testing.jpg?fit=1024%2C587&ssl=1",
  "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg",
  "https://images.pexels.com/photos/6005876/pexels-photo-6005876.jpeg",
  "https://images.pexels.com/photos/6005876/pexels-photo-6005876.jpeg",
  "https://i0.wp.com/triadlifts.com/wp-content/uploads/2022/06/chicago-elevator-testing.jpg?fit=1024%2C587&ssl=1",
  "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg",
  "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg",
  "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg",
  "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg",
];

const OurGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full py-16 mt-28 md:mt-20  font-oswald">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-[#0F766E]">
          Our <span className="text-[#F59E0B]">Gallery</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer border-2 border-transparent hover:border-[#F59E0B] transition-all duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0F766E]/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-sm font-medium">
                Click to View
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-4xl w-full px-4 flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 bg-[#0F766E] text-white px-3 py-2 rounded-full text-xl font-bold hover:bg-[#0F5C57] transition-all"
            >
              ‹
            </button>

            <img
              src={images[selectedIndex]}
              alt="Full View"
              className="w-full max-h-[500px] object-contain rounded-lg shadow-2xl"
            />

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 bg-[#0F766E] text-white px-3 py-2 rounded-full text-xl font-bold hover:bg-[#0F5C57] transition-all"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 right-4 bg-[#F59E0B] text-white px-3 py-1 rounded-lg font-bold hover:bg-[#D48806] transition-all"
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
