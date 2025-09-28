import React, { useEffect, useRef, useState } from "react";

const OurClients = () => {
  const [clients, setClients] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const data = [
      "https://krshiprecycling.com/_astro/logo_dark.3b76f077.svg",
      "https://arabshiprecycling.com/assets/ASBRL_Logo-Bs7ByH4m.png",
      "https://safetyzenbd.com/wp-content/uploads/2025/07/Safetyzen-Logo.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9FItlIdWqQPH6BNR9-pD-F3PO1jBD4Ccxhogkm1zgcbYpggZwk1Qiu1McawVOTDSK8I&usqp=CAU",
      "https://cliftongroupbd.com/wp-content/uploads/2023/09/clifton-logo.png-white.png",
      "https://i.ibb.co/SDmcFtSy/Whats-App-Image-2025-09-24-at-12-57-01-fbb28b62.jpg",
      "https://i.ibb.co/spvdFLVF/Whats-App-Image-2025-09-24-at-12-54-46-2b17cb14.jpg",
      "https://i.ibb.co/qL0Jr3Bp/Whats-App-Image-2025-09-24-at-11-18-53-0f6b921b.jpg",
      "https://pms-bd.com/wp-content/uploads/2024/11/PMS_LOGO-removebg-preview.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzrqzd6xOiRJ4-rjn43QwHErBA9qACtcmFvQJNRZafln0BkhWjMDbL2FLxJU7Bj4mBjmI&usqp=CAU",
      "https://intermarinebd.com/wp-content/uploads/2025/06/Intermarine-ship-service-logo-light-version1-copy@2x-scaled.png",
      "https://media.licdn.com/dms/image/v2/C560BAQGDxWgSbdWvQQ/company-logo_200_200/company-logo_200_200/0/1670992527266?e=2147483647&v=beta&t=PruTL1w48Ic_FR_ZwbqDZjW0tzfIcZR22GARlDH5qoU",
    ];
    setClients(data);
  }, []);

  // 🟡 Auto slide effect
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth / 4; // প্রতি স্লাইডে প্রায় 1 কার্ডের সমান স্ক্রল
        if (scrollAmount >= slider.scrollWidth - slider.offsetWidth) {
          scrollAmount = 0; // শেষ হলে আবার শুরুতে নিয়ে যাও
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 2500); // ⏱️ প্রতি 2.5 সেকেন্ডে স্লাইড

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="w-full py-20 font-oswald bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#0F766E]">
          Our Clients
        </h2>
        <p className="text-lg mb-12 text-gray-700 opacity-90">
          We are proud to work with these amazing companies.
        </p>

        {/* Auto Sliding Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[23%] bg-[#0F766E]/10 p-6 rounded-2xl shadow-md flex items-center justify-center h-40 md:h-48 lg:h-52"
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="max-h-full object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
