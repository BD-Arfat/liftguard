import React from 'react';

const Calibration = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-slate-50 via-teal-50 to-slate-100">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F766E] mb-6">
          Calibration Services
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Accurate calibration of instruments is essential for safety and compliance. 
          We provide calibration services for various devices to ensure reliable measurements 
          and traceability to international standards.
        </p>
      </div>

      {/* Image + List */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6180c7691217f33cc1502b9a/1678345629286-L9XLJITVUIZRS6ZEBI0I/235.jpg"
            alt="Calibration Services"
            className="w-full h-96 md:h-[38rem] lg:h-[42rem] object-cover rounded-xl shadow-lg border-2 border-[#0F766E] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right List */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-[#0F766E] mb-6">Calibration Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg md:text-xl">
            <li>Calibration of instruments such as Online Safety Valve, Pressure Gauge, Sound Meter, Lux Meter, Temperature Gauge, and more</li>
            <li>Ensures accurate and reliable measurements</li>
            <li>Traceable to international standards</li>
            <li>Periodic calibration to maintain compliance</li>
            <li>Documentation and certificate issuance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Calibration;
