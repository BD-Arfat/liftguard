import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Rigger = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Operator Training",
      description:
        "Hands-on training for safe and efficient handling of cranes, hoists, and lifting equipment. Our program ensures operators gain practical skills, understand safety protocols, and become confident in real operations.",
      image:
        "https://cpfd-software.com/wp-content/uploads/2022/02/IMG_3362.jpg",
    },
    {
      title: "Rigger Training",
      description:
        "Practical rigging training for lifting operations, load handling, and safety compliance. Equipping riggers with real experience to safely plan, inspect, and execute lifting operations.",
      image:
        "https://www.qanmos.com/wp-content/uploads/2024/09/rigger3.jpg",
    },
    {
      title: "UTM Inspection Service",
      description:
        "Comprehensive inspection using Universal Testing Machines (UTM) to ensure safety, performance, and compliance according to international standards.",
      image:
        "https://vlm.ee/wp-content/uploads/2017/12/wsi-imageoptim-image-1404126121410-V-1024x612.jpg",
    },
    {
      title: "Calibration Services",
      description:
        "Accurate calibration of instruments is essential for safety and compliance. We ensure reliable measurements and traceability to international standards.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/11/467327429/YW/JW/AQ/25457586/pressure-calibration-services.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#0F766E]/5 to-white py-20 px-4 md:px-12 lg:px-20">
      {/* Section Heading */}
      <div data-aos="fade-down" className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F766E] uppercase mb-4">
          Our Training & Inspection Services
        </h1>
        <div className="w-28 mx-auto h-1 bg-amber-400 rounded"></div>
      </div>

      {/* Services */}
      <div className="space-y-24 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-xl md:w-[500px] md:h-[350px] object-cover border-4 border-[#0F766E]/30 hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F766E] mb-3">
                {service.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rigger;
