import React, { useState, useEffect, useRef } from "react";

const OurStatsSection = () => {
  const [clients, setClients] = useState(0);
  const [services, setServices] = useState(0);
  const [countries, setCountries] = useState(0);
  const [ports, setPorts] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateValue(0, 70, setClients, 2000);
          animateValue(0, 400, setServices, 2200);
          animateValue(0, 20, setCountries, 2400);
          animateValue(0, 5, setPorts, 2600);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 flex items-center justify-center mt-20 mb-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://certifiedsafetyexperts.com/wp-content/uploads/2024/09/crane-inspection-procedures.jpg')",
      }}
    >
      {/* Darker overlay for better visibility */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around gap-8 sm:gap-12 w-full max-w-6xl text-center text-white px-4 font-oswald">
        <div>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F59E0B]">
            {clients}+
          </h2>
          <p className="mt-2 text-lg md:text-xl">Loyar Clients</p>
        </div>

        <div>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F59E0B]">
            {services}+
          </h2>
          <p className="mt-2 text-lg md:text-xl">Successful Projects</p>
        </div>

        <div>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F59E0B]">
            {countries}+
          </h2>
          <p className="mt-2 text-lg md:text-xl">Skilled Professinoals</p>
        </div>

        <div>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F59E0B]">
            {ports}+
          </h2>
          <p className="mt-2 text-lg md:text-xl">Years Of Dedication</p>
        </div>
      </div>
    </section>
  );
};

export default OurStatsSection;
