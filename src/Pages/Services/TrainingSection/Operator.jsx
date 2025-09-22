import React from 'react';

const Operator = () => {
  return (
    <section className="py-10 md:pb-40 px-6 md:px-12 bg-gradient-to-b from-slate-50 via-teal-50 to-slate-100">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F766E] mb-6">
          Operator Training
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Hands-on training for safe and efficient handling of cranes, hoists, and lifting equipment.
          Our training program ensures operators gain practical skills, understand safety protocols,
          and become confident in daily operations and emergency scenarios.
        </p>
      </div>

      {/* Image + List */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="https://cpfd-software.com/wp-content/uploads/2022/02/IMG_3362.jpg"
            alt="Operator Training"
            className="w-full h-96 md:h-[38rem] lg:h-[42rem] object-cover rounded-xl shadow-lg border-2 border-[#0F766E] hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right List */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-[#0F766E] mb-6">Training Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg md:text-xl">
            <li>Hands-on operation of cranes, hoists, and lifting equipment</li>
            <li>Equipment-specific techniques (Crane, Forklift, Hoist)</li>
            <li>Load calculation & capacity chart reading</li>
            <li>Signal & communication protocols</li>
            <li>Pre-operation safety checks and inspection routines</li>
            <li>Emergency procedures and hazard recognition</li>
            <li>Proper use of personal protective equipment (PPE)</li>
            <li>Daily maintenance and lubrication routines</li>
            <li>Incident reporting & documentation</li>
            <li>Advanced safety drills for high-risk scenarios</li>
            <li>Ergonomics & fatigue management</li>
            <li>Supervised operation and simulated lifting scenarios</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Operator;
