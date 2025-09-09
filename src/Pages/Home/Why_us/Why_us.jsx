import React, { useEffect, useState } from 'react';
import Choose from './Choose';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Why_us = () => {
    const [chooses, setChooses] = useState([]);

    useEffect(() => {
        fetch('choose.json')
            .then((res) => res.json())
            .then((data) => setChooses(data));

        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 mt-28 md:mt-40 lg:px-8 py-16 md:py-24">
            {/* Section Heading */}
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl  text-[#0F766E] font-extrabold mb-6">
                    Why Choose Liftguard Solutions?
                </h2>
                <p className="text-gray-800 text-base md:text-lg opacity-90">
                    At Liftguard Solutions, we ensure the highest standards of safety and reliability for your operations.
                    Here's why we stand out:
                </p>
            </div>

            {/* Timeline */}
            <div className="relative wrap overflow-hidden">
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F59E0B] opacity-40"></div>

                {/* Timeline Items */}
                {chooses.map((event, index) => (
                    <Choose
                        key={event.id}
                        choose={event}
                        alignment={index % 2 === 0 ? 'right' : 'left'}
                        data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Why_us;
