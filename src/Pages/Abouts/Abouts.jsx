import React, { useState, useEffect } from 'react';
import Overview from './Abouts/Overview';
import OurGallery from './OurGallery/OurGallery';
import OurAllClients from './OurAllClients/OurAllClients';
import OurStatsSection from './Abouts/OurStatsSection/OurStatsSection';
import AllServicesCard from './AllServicesCard/AllServicesCard';
import VisionMission from './VisionMission/VisionMission';
import CoreValues from './CoreValues/CoreValues';
import { FaArrowUp } from 'react-icons/fa';

const Abouts = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show/Hide scroll-to-top button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
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
            window.scrollTo({ top: 0, behavior: "smooth" }); // fallback
        }
    };

    return (
        <div>
            {/* এখানে div এর মাধ্যমে id বসাও */}
            <div id="banner-section">
                <Overview />
            </div>

            <VisionMission />
            <CoreValues />
            <OurGallery />
            <OurAllClients />
            <OurStatsSection />
            <AllServicesCard />

            {/* Scroll To Top Button */}
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

export default Abouts;
