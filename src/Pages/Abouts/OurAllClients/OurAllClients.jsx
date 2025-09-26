import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurAllClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const data = [
        "https://krshiprecycling.com/_astro/logo_dark.3b76f077.svg",
        "https://arabshiprecycling.com/assets/ASBRL_Logo-Bs7ByH4m.png",
        "https://safetyzenbd.com/wp-content/uploads/2025/07/Safetyzen-Logo.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9FItlIdWqQPH6BNR9-pD-F3PO1jBD4Ccxhogkm1zgcbYpggZwk1Qiu1McawVOTDSK8I&usqp=CAU",
        "https://cliftongroupbd.com/wp-content/uploads/2023/09/clifton-logo.png1_.png",
        "https://pms-bd.com/wp-content/uploads/2024/11/PMS_LOGO-removebg-preview.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrqzd6xOiRJ4-rjn43QwHErBA9qACtcmFvQJNRZafln0BkhWjMDbL2FLxJU7Bj4mBjmI&usqp=CAU",
        "https://intermarinebd.com/wp-content/uploads/2025/06/Intermarine-ship-service-logo-light-version1-copy@2x-scaled.png",
        "https://media.licdn.com/dms/image/v2/C560BAQGDxWgSbdWvQQ/company-logo_200_200/company-logo_200_200/0/1670992527266?e=2147483647&v=beta&t=PruTL1w48Ic_FR_ZwbqDZjW0tzfIcZR22GARlDH5qoU",
      ];
      setClients(data);
    };

    fetchClients();
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280, // large screen
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 }, // 👉 Mobile এ একটার পর একটা full width
      },
    ],
  };

  return (
    <section className="w-full py-20 mt-28 md:mt-20 mb-20 md:mb-40 font-oswald">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#0F766E]">
          Our Clients
        </h2>
        <p className="text-lg mb-12 text-gray-700 opacity-90">
          We are proud to work with these amazing companies.
        </p>

        {/* Slider */}
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#0F766E]/10 p-6 rounded-2xl shadow-lg h-40 md:h-48 flex items-center justify-center">
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-20 md:h-24 lg:h-28 object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurAllClients;
