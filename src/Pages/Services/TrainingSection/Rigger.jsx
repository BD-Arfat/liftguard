import React from "react";
import "aos/dist/aos.css";

const Rigger = () => {
  const image =
    "https://www.qanmos.com/wp-content/uploads/2024/09/rigger3.jpg";

  const services = [
    {
      title: "Operator Training",
      description:
        "Hands-on training for safe and efficient handling of cranes, hoists, and lifting equipment. Our program ensures operators gain practical skills, understand safety protocols, and become confident in real operations.",
    },
    {
      title: "Rigger Training",
      description:
        "Practical rigging training for lifting operations, load handling, and safety compliance. Equipping riggers with real experience to safely plan, inspect, and execute lifting operations.",
    },
    {
      title: "UTM Inspection Service",
      description:
        "Comprehensive inspection using Universal Testing Machines (UTM) to ensure safety, performance, and compliance according to international standards.",
    },
    {
      title: "Calibration Services",
      description:
        "Accurate calibration of instruments is essential for safety and compliance. We ensure reliable measurements and traceability to international standards.",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative md:py-48 bg-gradient-to-b from-white via-[#0F766E]/5 to-white py-16 px-4 md:px-12 lg:px-20"
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
            src={image}
            alt="Training"
            className=" md:w-[700px] md:h-[550px] rounded-xl shadow-2xl border-4 border-[#0F766E]/40 transition-transform duration-500 hover:scale-105 relative z-10"
          />
        </div>

        {/* Right: Content */}
        <div data-aos="fade-left" className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font-extrabold text-[#0F766E] text-3xl md:text-4xl uppercase mb-8 relative inline-block">
            Our Training & Inspection Services
            <span className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-24 h-1 bg-[#0F766E] rounded"></span>
          </h1>

          <ul className="space-y-6 text-gray-700 font-oswald text-lg">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#0F766E]/10 transition-colors duration-300"
              >
                <span className="text-[#0F766E] text-xl">✔</span>
                <div>
                  <h3 className="font-bold text-[#0F766E]">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-base mt-1">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rigger;
