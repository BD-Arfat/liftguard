import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Abouts = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://i.ibb.co.com/yc2GW16Q/Whats-App-Image-2025-10-14-at-22-22-25-b4bbf14c-3.jpg"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white/10"></div>

      {/* Content */}
      <div data-aos="fade-up" className="relative px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#0F766E] mb-6 uppercase tracking-wide">
          Our Story
        </h2>
        <div className="w-32 mx-auto mb-8 border-b-4 border-amber-400"></div>
        <p className="text-gray-800 md:w-9/12 md:mx-auto text-lg md:text-2xl leading-relaxed font-medium font-sans">
          Founded with a mission to revolutionize safety in industrial and
          construction environments,
          <span className="text-[#0F766E] font-semibold">
            {" "}
            LiftGuard Solutions{" "}
          </span>
          is committed to delivering cutting-edge solutions that protect
          personnel and assets during lifting operations. Our services include
          comprehensive inspection, load testing, and pressure testing for a
          wide range of equipment including cranes, forklifts, compressors, and
          lifting gear.
        </p>
      </div>
    </div>
  );
};

export default Abouts;
