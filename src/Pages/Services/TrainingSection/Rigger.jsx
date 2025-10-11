import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Operator Training",
    description:
      "Hands-on training for safe and efficient handling of cranes, hoists, and lifting equipment. Our program ensures operators gain practical skills, understand safety protocols, and become confident in real operations.",
    img: "https://cpfd-software.com/wp-content/uploads/2022/02/IMG_3362.jpg",
  },
  {
    title: "Rigger Training",
    description:
      "Practical rigging training for lifting operations, load handling, and safety compliance. Equipping riggers with real experience to safely plan, inspect, and execute lifting operations.",
    img: "https://www.qanmos.com/wp-content/uploads/2024/09/rigger3.jpg",
  },
  {
    title: "UTM Inspection Service",
    description:
      "Comprehensive inspection using Universal Testing Machines (UTM) to ensure safety, performance, and compliance according to international standards.",
    img: "https://vlm.ee/wp-content/uploads/2017/12/wsi-imageoptim-image-1404126121410-V-1024x612.jpg",
  },
  {
    title: "Calibration Services",
    description:
      "Accurate calibration of instruments is essential for safety and compliance. We ensure reliable measurements and traceability to international standards.",
    img: "https://images.squarespace-cdn.com/content/v1/6180c7691217f33cc1502b9a/1678345629286-L9XLJITVUIZRS6ZEBI0I/235.jpg",
  },
];

const Rigger = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-5xl font-oswald font-bold text-center text-[#0F766E] mb-4">
        Our Training Services
      </h2>
      <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
        Professional, certified, and practical training programs designed for industrial excellence.
      </p>

      <div className="md:w-11/12 mx-auto px-6 md:px-10">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4 ">
              <div className="relative h-full bg-white/70  backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-3">
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden group">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-700"></div>
                  <h3 className="absolute bottom-4 left-5 text-2xl font-bold text-white drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>

                {/* Text Section */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Rigger;
