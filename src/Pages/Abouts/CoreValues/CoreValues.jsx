import React from "react";

const CoreValues = () => {
  const values = [
    "Safety First – We prioritize human life and safe operations above all.",
    "Integrity – We conduct every inspection with honesty, transparency, and accountability.",
    "Excellence – We are committed to delivering the highest quality services every time.",
    "Innovation – We adopt advanced technology and methods to meet evolving client needs.",
    "Customer Focus – We aim to build lasting partnerships through trust and satisfaction.",
    "Sustainability – We promote responsible practices that ensure long-term asset performance and safety.",
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 py-20 px-4 sm:px-6 lg:px-12 md:py-60 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Core Values
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-[#0F766E]">Liftguard Solution</span>, we live by these principles to ensure safety, quality, and trust in every service.
        </p>

        {/* Values Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              {/* Accent circle */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0F766E]/20 rounded-full animate-pulse"></div>

              {/* Icon & title */}
              <div className="flex items-center mb-4">
                <span className="flex-none w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0F766E] text-white rounded-full mr-3 text-lg sm:text-xl font-bold animate-pulse">
                  ✔
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0F766E]">
                  Value {index + 1}
                </h3>
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-1 flex-1">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
