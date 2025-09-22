import React from 'react';

const Utm = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-slate-50 via-teal-50 to-slate-100">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F766E] mb-6">
          UTM Inspection Service
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Comprehensive inspection using Universal Testing Machines (UTM) to ensure safety,
          performance, and compliance. Our services help verify equipment reliability and
          document inspection results according to international standards.
        </p>
      </div>

      {/* Image + List */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="https://vlm.ee/wp-content/uploads/2017/12/wsi-imageoptim-image-1404126121410-V-1024x612.jpg"
            alt="UTM Inspection"
            className="w-full h-96 md:h-[38rem] lg:h-[42rem] object-cover rounded-xl shadow-lg border-2 border-[#0F766E] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right List */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-[#0F766E] mb-6">Inspection Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg md:text-xl">
            <li>Comprehensive inspection using Universal Testing Machines (UTM)</li>
            <li>Load testing and performance verification</li>
            <li>Stress-strain analysis for equipment safety</li>
            <li>Compliance with international standards</li>
            <li>Reporting and certification of inspection results</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Utm;
