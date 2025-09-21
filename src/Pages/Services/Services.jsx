import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadTest from "./LoadTest/LoadTest";
import PressureTest from "./PressureTest/PressureTest";
import { FaArrowUp } from "react-icons/fa";
import BookSlider from "./BookSlider/BookSlider";
import NDTServices from "./NDTServices/NDTServices";
import LiftguardPage from "./LiftguardPage/LiftguardPage";
import InspectionCertification from "./Inspection&Certification/InspectionCertification";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  // Scroll To Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden relative bg-gray-50">
      {/* Hero Header */}
      <div
  id="hero-section"
  className="relative w-full top-0 h-screen sm:h-56 md:h-80 lg:h-[32rem] flex items-center justify-center rounded-b-3xl overflow-hidden shadow-lg"
  style={{
    backgroundImage: `url(https://img.freepik.com/premium-photo/indian-worker-special-uniform-helmet-controls-lift-manually_1429-11824.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Fixed background for desktop
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0F766E]/80 to-[#0F1B3D]/80"></div>

  {/* Header Content */}
  <div className="relative z-10 text-center px-4">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-oswald tracking-widest drop-shadow-lg">
      OUR SERVICES
    </h2>
    <hr className="border-t-4 border-[#10B981] w-16 sm:w-20 md:w-24 mx-auto mt-4" />
  </div>
</div>


      {/* Services Sections */}
      <div className="mx-auto px-4 py-16 space-y-20">
        <LoadTest data-aos="fade-up" />
        <NDTServices />
        {/* <LiftguardPage /> */}
        <PressureTest data-aos="fade-up" />
        <InspectionCertification />
        {/* BookSlider section start */}
        <BookSlider />
        {/* BookSlider section end */}
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className="bg-[#0F766E] hover:bg-teal-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default Services;
