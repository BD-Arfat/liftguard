import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
    const [clients, setClients] = useState(0);
    const [services, setServices] = useState(0);
    const [countries, setCountries] = useState(0);
    const [ports, setPorts] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated) {
                    animateValue(0, 100, setClients, 2000);
                    animateValue(0, 380, setServices, 2200);
                    animateValue(0, 26, setCountries, 2400);
                    animateValue(0, 70, setPorts, 2600);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [hasAnimated]);

    const animateValue = (start, end, setter, duration) => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setter(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    };

    return (
        <div
            ref={sectionRef}
            className="relative w-full py-20 flex items-center justify-center mt-44 bg-[#0F766E]"
        >
            <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around gap-8 sm:gap-12 w-full max-w-6xl text-center text-white px-4 font-oswald">
                <div>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F59E0B]">{clients}+</h2>
                    <p className="mt-2 text-lg md:text-xl">Clients</p>
                </div>
                <div>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F59E0B]">{services}+</h2>
                    <p className="mt-2 text-lg md:text-xl">Service Works</p>
                </div>
                <div>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F59E0B]">{countries}+</h2>
                    <p className="mt-2 text-lg md:text-xl">Countries</p>
                </div>
                <div>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F59E0B]">{ports}+</h2>
                    <p className="mt-2 text-lg md:text-xl">Ports</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
