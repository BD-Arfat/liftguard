import React, { useState, useEffect } from "react";
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll listener: show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // 300px নিচে গেলে দেখা দেবে
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top (Banner section)
  const scrollToTop = () => {
    const bannerElement = document.getElementById("banner-section");
    if (bannerElement) {
      bannerElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      {showScrollTop && (
        <div className="fixed bottom-5 right-5 z-50 transition-opacity duration-500">
          <button
            onClick={scrollToTop}
            className="bg-[#0F766E] text-white p-3 rounded-full shadow-lg hover:bg-[#065f56] flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
