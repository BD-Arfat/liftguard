import React, { useState } from "react";
import pdf from "../../../assets/lift-guard-project-1.pdf"; // PDF path ঠিক রাখো

const BookSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Image list
  const images = [
    {
      src: "https://i.ibb.co.com/0Rr6XRjM/Screenshot-2025-09-26-214830.png",
      label: "Page 1",
    },
    {
      src: "https://i.ibb.co.com/qPxLKZf/Screenshot-2025-09-26-214857.png",
      label: "Page 2",
    },
  ];

  return (
    <div
      className="bg-fixed bg-cover py-16 px-6 md:px-12 rounded-2xl shadow-2xl relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/7a/fa/0b/7afa0ba65edb517acc7267fb0c0fcbac.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F766E]/80 via-[#0F1B3D]/60 to-[#0F1B3D]/80"></div>

      <div className="relative text-center z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold font-oswald text-white mb-12 drop-shadow-lg">
          Our{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Brochure
          </span>
        </h2>

        {/* Image Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group w-full md:w-96 h-[32rem] rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="absolute inset-0 rounded-xl border-4 border-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 pointer-events-none"></div>
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-50 transition duration-500 rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white font-semibold bg-black/30 px-3 py-1 rounded-lg text-sm">
                {img.label}
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="mt-12">
          <a
            href={pdf}
            download
            className="inline-block bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
          >
            📥 Download PDF
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-zoomIn"
            onClick={(e) => e.stopPropagation()} // modal ভিতরে ক্লিক করলে বন্ধ হবে না
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-rose-500 to-red-600 text-white text-3xl font-bold w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition hover:scale-110 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]"
              title="Close"
            >
              ✕
            </button>

            {/* Full Image */}
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-auto md:w-96 md:mx-auto md:h-[600px] lg:-h-[1000px] rounded-2xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSlider;
