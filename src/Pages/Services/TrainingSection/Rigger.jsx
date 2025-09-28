import React from "react";

const services = [
  {
    title: "Operator Training",
    description:
      "Hands-on training for safe and efficient handling of cranes, hoists, and lifting equipment. Our training program ensures operators gain practical skills, understand safety protocols, and become confident in daily operations and emergency scenarios.",
    img: "https://cpfd-software.com/wp-content/uploads/2022/02/IMG_3362.jpg",
  },
  {
    title: "Rigger Training",
    description:
      "Practical rigging training for lifting operations, load handling, and safety compliance. Our program equips riggers with the knowledge and hands-on experience to safely plan, inspect, and execute lifting operations in industrial and marine environments.",
    img: "https://www.qanmos.com/wp-content/uploads/2024/09/rigger3.jpg",
  },
  {
    title: "UTM Inspection Service",
    description:
      "Comprehensive inspection using Universal Testing Machines (UTM) to ensure safety, performance, and compliance. Our services help verify equipment reliability and document inspection results according to international standards.",
    img: "https://vlm.ee/wp-content/uploads/2017/12/wsi-imageoptim-image-1404126121410-V-1024x612.jpg",
  },
  {
    title: "Calibration Services",
    description:
      "Accurate calibration of instruments is essential for safety and compliance. We provide calibration services for various devices to ensure reliable measurements and traceability to international standards.",
    img: "https://images.squarespace-cdn.com/content/v1/6180c7691217f33cc1502b9a/1678345629286-L9XLJITVUIZRS6ZEBI0I/235.jpg",
  },
];

const Rigger = () => {
  return (
    <section
      className="relative min-h-screen py-24  md:px-0 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.practical-sailor.com/wp-content/uploads/2020/03/p1b3qfufeb1i1n16hl1ogu1mht1uu86.jpg.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F766E]/70 to-[#0F1B3D]/70"></div>

      <div className="relative dark:bg-gray-800 min-h-screen py-12 md:py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold font-oswald text-white dark:text-gray-100 text-center mb-16">
          Our Training Services
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service, index) => (
            <details
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg cursor-pointer overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
              {/* Summary / Title */}
              <summary className="flex font-semibold items-center justify-between text-gray-800 dark:text-gray-100 px-6 py-5 text-lg md:text-xl bg-gray-50 dark:bg-gray-800 rounded-t-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span>{index + 1}. {service.title}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    className="dark:stroke-gray-300"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>

              {/* Expanded content */}
              <div className="p-6 md:p-8 border-t border-gray-200 dark:border-gray-600 flex flex-col md:flex-row items-center gap-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full md:w-1/3 h-56 md:h-72 object-cover rounded-xl shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg md:flex-1">
                  {service.description}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rigger;
