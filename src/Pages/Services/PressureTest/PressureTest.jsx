import React from "react";
import image2 from "../../../assets/presser-test.jpg";

const PressureTest = () => {
  return (
    <section
      data-aos="fade-up"
      className="bg-white container mx-auto px-4 md:px-16 md:mb-16 md:flex flex-col md:flex-row items-center justify-center md:w-11/12 md:mx-auto"
    >
      <div className="lg:flex md:items-center justify-center md:w-11/12 md:mx-auto gap-10">
        {/* Right: Images */}
        <div className="lg:w-1/2 mt-8 md:mt-0 flex items-center justify-center mb-10">
          <div data-aos="fade-right" className="relative">
            <img
              src={image2}
              alt="Service"
              className="rounded-lg shadow-lg border-4 border-[#0F766E]/30 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Left: Service List */}
        <div data-aos="fade-left" className="lg:w-1/2">
          <h1 className="font-extrabold text-[#0F766E] text-2xl md:text-3xl uppercase mb-6">
            Scope of Inspection & Pressure Test
          </h1>
          <ul className="list-disc list-inside space-y-3 text-gray-700 font-oswald">
            <li className="hover:text-[#0F766E] transition-colors duration-300">
              Pressure gauge calibration & pressure test.
            </li>
            <li className="hover:text-[#0F766E] transition-colors duration-300">
              Air compressor thickness & pressure test.
            </li>
            <li className="hover:text-[#0F766E] transition-colors duration-300">
              Safety valve inspection & pressure test.
            </li>
            <li className="hover:text-[#0F766E] transition-colors duration-300">
              Pressure measuring instrument.
            </li>
            <li className="hover:text-[#0F766E] transition-colors duration-300">
              Pressure vessel inspection and hydro test.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PressureTest;
