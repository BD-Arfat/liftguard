import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/6005876/pexels-photo-6005876.jpeg",
  "https://i0.wp.com/triadlifts.com/wp-content/uploads/2022/06/chicago-elevator-testing.jpg?fit=1024%2C587&ssl=1",
  "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg",
  "https://images.pexels.com/photos/6005876/pexels-photo-6005876.jpeg",
  "https://i0.wp.com/triadlifts.com/wp-content/uploads/2022/06/chicago-elevator-testing.jpg?fit=1024%2C587&ssl=1",
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
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Our <span className="text-orange-500">Gallery</span>
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-lg font-semibold">
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
              className="absolute left-4 bg-white text-black px-3 py-2 rounded-full text-xl font-bold hover:bg-gray-200"
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
              className="absolute right-4 bg-white text-black px-3 py-2 rounded-full text-xl font-bold hover:bg-gray-200"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-lg font-bold hover:bg-gray-200"
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
