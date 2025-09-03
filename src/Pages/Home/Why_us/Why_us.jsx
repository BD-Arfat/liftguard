import React, { useEffect, useState } from 'react';
import Choose from './Choose';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Why_us = () => {
    const [chooses, setChooses] = useState([]);

    useEffect(() => {
        fetch('choose.json')
            .then((res) => res.json())
            .then((data) => setChooses(data));

        AOS.init({ duration: 1000, once: true }); // Initialize AOS with animation duration
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:mt-40 md:mb-40">
            <div className="max-w-2xl mx-auto text-center md:mt-20 md:mb-10">
                <h2 className="text-3xl md:text-4xl text-blue-950 font-bold mb-6">
                    Why Choose Liftguard Solutions?
                </h2>
                <p className="text-blue-950 text-sm md:text-base mb-12">
                    At Liftguard Solutions, we are committed to ensuring the highest standards of safety and reliability for your operations. Here's why we stand out:
                </p>
            </div>

            <div className="relative wrap overflow-hidden">
                {/* Timeline Line */}
                <div className="border-2 absolute border-opacity-20 border-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

                {/* Dynamic Choose Components */}
                {chooses.map((event, index) => (
                    <Choose
                        key={event.id}
                        choose={event}
                        alignment={index % 2 === 0 ? 'right' : 'left'}
                        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Add animation
                    />
                ))}
            </div>
        </div>
    );
};

export default Why_us;