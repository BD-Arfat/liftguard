import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadTest from "./LoadTest/LoadTest";
import PressureTest from "./PressureTest/PressureTest";
import AboutNdt from "./AboutNdt/AboutNdt";
import Ndt from "./Ndt/Ndt";
import { FaArrowUp } from "react-icons/fa";
import BookSlider from "./BookSlider/BookSlider";
import EquipmentCard from "./EquipmentCard/EquipmentCard";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const scrollToTop = () => {
    const loadTestElement = document.getElementById("loda-test");
    if (loadTestElement) {
      loadTestElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden relative bg-gray-50">

      {/* Hero Section */}
      <div
        id="loda-test"
        className="relative py-40 flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/indian-worker-special-uniform-helmet-controls-lift-manually_1429-11824.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Title */}
        <div className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-oswald tracking-widest drop-shadow-lg">
            OUR SERVICES
          </h2>
          <p className="mt-4 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            We provide professional{" "}
            <span className="font-semibold text-[#0F766E]">
              Lifting Equipment Inspection
            </span>
            ,{" "}
            <span className="font-semibold text-[#0F766E]">
              Pressure Testing
            </span>
            , and{" "}
            <span className="font-semibold text-[#0F766E]">NDT Services</span>{" "}
            with the highest safety standards.
          </p>
        </div>
      </div>



      {/* Services Sections */}
      <div className=" mx-auto px-4 py-16 space-y-20">
        {/* <LoadTest data-aos="fade-up" /> */}
        <EquipmentCard></EquipmentCard>
        <PressureTest data-aos="fade-up" />
        {/* BookSlider section start */}
        <BookSlider></BookSlider>
        {/* BookSlider section end */}
        <AboutNdt data-aos="fade-up" />
        <Ndt data-aos="fade-up" />
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
