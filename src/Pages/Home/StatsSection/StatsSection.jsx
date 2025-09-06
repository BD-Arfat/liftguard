import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
    const [clients, setClients] = useState(0);
    const [services, setServices] = useState(0);
    const [countries, setCountries] = useState(0);
    const [ports, setPorts] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false); // animation once

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
            { threshold: 0.3 } // 30% দেখা গেলে animation শুরু হবে
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
            className="relative w-full md:mt-32 h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] flex items-center justify-center bg-fixed bg-center bg-cover"
            style={{
                backgroundImage: "url('https://www.goi-international.com/images/lifting/proof-load-water-bag/one-img-bg.jpg')",
            }}
        >
            {/* Black overlay - darker now */}
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around gap-8 sm:gap-12 w-full max-w-6xl text-center text-white px-4 font-oswald">
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold">{clients}+</h2>
                    <p className="mt-2 text-xl md:text-2xl">Client</p>
                </div>
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold">{services}+</h2>
                    <p className="mt-2 text-xl md:text-2xl">Service Work</p>
                </div>
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold">{countries}+</h2>
                    <p className="mt-2 text-xl md:text-2xl">Country</p>
                </div>
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold">{ports}+</h2>
                    <p className="mt-2 text-xl md:text-2xl">Port</p>
                </div>
            </div>
        </div>

    );
};

export default StatsSection;
