import React from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the icon
import Banner from './Banner/Banner';
import Abouts from './Abouts/Abouts';
import Service from './Service/Service';
import Why_us from './Why_us/Why_us';
import Video from './VideoSection/Video';
import StatsSection from './StatsSection/StatsSection';
import OurGallery from './OurGallery/OurGallery';
import OurClients from './OurClients/OurClients';

const Home = () => {
    // Scroll to the top (Banner section)
    const scrollToTop = () => {
        const bannerElement = document.getElementById('banner-section');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='overflow-hidden'>
            {/* Add an ID to the Banner section */}
            <div id="">
                <Banner />
            </div>
            {/* <Video></Video> */}
            <Abouts />
            <StatsSection></StatsSection>
            <Service />
            <Why_us />
            <OurGallery></OurGallery>
            <OurClients></OurClients>

            {/* Button to scroll to the Banner section */}
            <div className="fixed bottom-5 right-5">
                <button
                    onClick={scrollToTop}
                    className="bg-blue-950 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center"
                >
                    <FaArrowUp size={20} />
                </button>
            </div>
        </div>
    );
};

export default Home;
