import React from "react";
import pdf from '../../../assets/lift-guard-project-1.pdf'

const BookSlider = () => {
  return (
    <div
      className="bg-fixed bg-cover py-16 px-6 md:px-12 rounded-2xl shadow-2xl relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/7a/fa/0b/7afa0ba65edb517acc7267fb0c0fcbac.jpg')",
      }}
    >
      {/* Overlay color */}
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
          {/* First Image */}
          <div className="relative group w-full md:w-96 h-[32rem] rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-xl border-4 border-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 pointer-events-none"></div>
            <img
              src="https://i.ibb.co.com/0Rr6XRjM/Screenshot-2025-09-26-214830.png"
              alt="Brochure 1"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-50 transition duration-500 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold bg-black/30 px-3 py-1 rounded-lg text-sm">
              Page 1
            </div>
          </div>

          {/* Second Image */}
          <div className="relative group w-full md:w-96 h-[32rem] rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-xl border-4 border-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 pointer-events-none"></div>
            <img
              src="https://i.ibb.co.com/qPxLKZf/Screenshot-2025-09-26-214857.png"
              alt="Brochure 2"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-50 transition duration-500 rounded-xl"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold bg-black/30 px-3 py-1 rounded-lg text-sm">
              Page 2
            </div>
          </div>
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
    </div>
  );
};

export default BookSlider;
