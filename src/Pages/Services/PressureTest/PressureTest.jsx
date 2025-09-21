import React from "react";
import image2 from "../../../assets/presser-test.jpg";

const PressureTest = () => {
  return (
    <section
      data-aos="fade-up"
      className="relative bg-gradient-to-b from-white via-[#0F766E]/5 to-white py-16 px-4 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div
          data-aos="fade-right"
          className="lg:w-1/2 flex items-center justify-center relative"
        >
          {/* Decorative shapes */}
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#0F766E]/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-12 -right-10 w-20 h-20 bg-[#0F766E]/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 left-10 w-24 h-24 bg-[#0F766E]/25 rounded-full blur-3xl"></div>

          {/* Main Image */}
          <img
            src={image2}
            alt="Pressure Test"
            className="w-72 md:w-[500px] rounded-xl shadow-2xl border-4 border-[#0F766E]/40 transition-transform duration-500 hover:scale-105 relative z-10"
          />
        </div>

        {/* Right: Content */}
        <div
          data-aos="fade-left"
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="font-extrabold text-[#0F766E] text-3xl md:text-4xl uppercase mb-6 relative inline-block">
            Scope of Inspection & Pressure Test
            <span className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 h-1 bg-[#0F766E] rounded"></span>
          </h1>

          <ul className="space-y-4 text-gray-700 font-oswald text-lg">
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#0F766E]/10 transition-colors duration-300">
              <span className="text-[#0F766E] text-xl">✔</span>
              Pressure gauge calibration & pressure test.
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#0F766E]/10 transition-colors duration-300">
              <span className="text-[#0F766E] text-xl">✔</span>
              Air compressor thickness & pressure test.
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#0F766E]/10 transition-colors duration-300">
              <span className="text-[#0F766E] text-xl">✔</span>
              Safety valve inspection & pressure test.
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#0F766E]/10 transition-colors duration-300">
              <span className="text-[#0F766E] text-xl">✔</span>
              Pressure measuring instrument.
            </li>
            <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#0F766E]/10 transition-colors duration-300">
              <span className="text-[#0F766E] text-xl">✔</span>
              Pressure vessel inspection and hydro test.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PressureTest;
