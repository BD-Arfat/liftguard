import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Banner from "./Banner/Banner";
import Abouts from "./Abouts/Abouts";
import Service from "./Service/Service";
import Why_us from "./Why_us/Why_us";
import Video from "./VideoSection/Video";
import StatsSection from "./StatsSection/StatsSection";
import OurGallery from "./OurGallery/OurGallery";
import OurClients from "./OurClients/OurClients";

const Home = () => {
  // Scroll to the top (Banner section)
  const scrollToTop = () => {
    const bannerElement = document.getElementById("banner-section");
    if (bannerElement) {
      bannerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Banner section with ID for scroll */}
      <div id="banner-section">
        <Banner />
      </div>

      {/* Uncomment Video if needed */}
      {/* <Video /> */}

      <Abouts />
      <Service />
      <StatsSection />
      <Why_us />
      <OurGallery />
      <OurClients />

      {/* Scroll to top button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={scrollToTop}
          className="bg-[#0F766E] text-white p-3 rounded-full shadow-lg hover:bg-[#065f56] flex items-center justify-center transition-colors duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default Home;
