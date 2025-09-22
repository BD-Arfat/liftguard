import React from 'react';

const Rigger = () => {
  return (
    <section
      className="relative w-full min-h-screen py-24 px-6 md:px-0 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://speedwaysafety.org/speedtraining/web/uploads/course/thumb_photo_17.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F766E]/70 to-[#0F1B3D]/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-white">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Rigger Training
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Practical rigging training for lifting operations, load handling, and safety compliance.
            Our program equips riggers with the knowledge and hands-on experience to safely
            plan, inspect, and execute lifting operations in industrial and marine environments.
          </p>
        </div>

        {/* Image + List */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src="https://www.qanmos.com/wp-content/uploads/2024/09/rigger3.jpg"
              alt="Rigger Training"
              className="w-full h-96 md:h-[38rem] lg:h-[42rem] object-cover rounded-xl shadow-lg border-2 border-[#0F766E] hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right List */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">Training Highlights</h3>
            <ul className="list-disc list-inside space-y-4 text-lg md:text-lg">
              <li>Understanding different types of slings, shackles, chains, ropes, and lifting accessories</li>
              <li>Rigging plan preparation & load charts</li>
              <li>Pre-rigging inspections of lifting gear</li>
              <li>Hazard identification and risk assessment</li>
              <li>Sling selection based on load type and weight</li>
              <li>Attaching and securing loads correctly</li>
              <li>Hand signaling and communication with crane operators</li>
              <li>Proper lifting angles, preventing swinging and load instability</li>
              <li>Complex lifts (multi-point, tandem, critical lifts)</li>
              <li>Environment-specific rigging (marine, confined space, construction)</li>
              <li>Inspection, maintenance & certification of rigging gear</li>
              <li>Simulated lifting and movement scenarios to build confidence</li>
              <li>Accident case studies & lessons learned</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rigger;
