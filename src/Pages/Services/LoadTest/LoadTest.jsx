import React from "react";

const LoadTest = () => {
  return (
    <section className="bg-gradient-to-b from-white via-[#0F766E]/5 to-white py-16  md:px-12 lg:px-20">
      <div className="md:max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 relative flex items-center justify-center">
            {/* Decorative shapes */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#0F766E]/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#0F766E]/30 rounded-full blur-3xl"></div>

            {/* <img
              src="https://i.ibb.co.com/Kz5Kx613/Whats-App-Image-2025-09-21-at-22-06-09-4189453b.jpg"
              alt="Liftguard Solution"
              className="relative z-10 w-80 md:w-[400px] rounded-xl shadow-2xl border-4 border-[#0F766E]/40"
            /> */}
          </div>
        </div>

        {/* text */}
        <div className="md:w-11/12 md:mx-auto text-center">
          <h1 className="text-xl md:text-5xl font-extrabold text-[#0F766E] mb-4">
            Crane & Lifting Equipment Inspection & Testing in Bangladesh
          </h1>

          {/* 🔰 TOP SECTION (ঠিক আগের মতোই থাকছে) */}
          <div className="md:max-w-6xl mx-auto  md:py-40 flex flex-col lg:flex-row items-start gap-16 relative">

            {/* Left Image */}
            <div className="lg:w-1/2 w-full relative z-10">
              <img data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src="https://i.ibb.co.com/Kz5Kx613/Whats-App-Image-2025-09-21-at-22-06-09-4189453b.jpg"
                alt="Load Testing"
                className="rounded-3xl shadow-2xl w-full object-cover transform transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black/20 rounded-3xl pointer-events-none"></div>
            </div>

            {/* Right Content Cards */}
            <div className="lg:w-1/2 w-full flex flex-col gap-12 relative z-20">

              {/* Card 1 */}
              <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F766E] mb-4 flex items-center gap-3">
                  <span className="w-3 h-3 bg-[#0F766E] rounded-full animate-ping"></span>
                  Who We Are
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <span className="font-semibold text-[#0F766E]">Liftguard Solution</span> is a trusted provider of
                  <span className="font-medium"> Inspection & Testing Services</span> for cranes and lifting equipment
                  in both <span className="italic">industrial</span> and <span className="italic">marine</span> sectors across Bangladesh.
                  We deliver complete solutions — <span className="font-semibold">testing, examination, repair supervision, and certification</span> —
                  ensuring your equipment is always <span className="text-[#0F766E] font-semibold">safe, compliant, and reliable.</span>
                </p>
              </div>

              {/* Card 2 */}
              <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F766E] mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0F766E] rounded-full"></span>
                  Our Expertise
                </h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    🏭 <span className="font-semibold">Industries:</span> Factories, manufacturing plants, power plants, steel, cement, and textile sectors
                  </p>
                  <p>
                    🚢 <span className="font-semibold">Marine:</span> Shipyards, dockyards, offshore platforms, and cargo handling operations
                  </p>
                  <p>
                    Our team is equipped to handle everything from technical safety evaluations to design and structural analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="hidden lg:block absolute top-10 right-0 w-2 h-2 bg-[#0F766E] rounded-full animate-pulse"></div>
            <div className="hidden lg:block absolute bottom-20 left-1/2 w-3 h-3 bg-[#0F766E] rounded-full animate-bounce"></div>
          </div>

          {/* 🔽 NEW SECTION (Why Load Testing) – উপরেরটার নিচে আনলাম */}
          <div className="max-w-6xl mx-auto md:px-4 mt-10 md:mt-0 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Card 1 */}
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 text-left">
              <h2 className="text-3xl font-bold text-[#0F766E] mb-6">
                Why Load Testing is Essential
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc list-inside text-lg">
                <li>Confirms cranes and hoists can safely handle their rated capacity</li>
                <li>Required for: New installations, after repairs, modifications, or alterations, before returning to service</li>
                <li>Guarantees safe operation and compliance with international standards</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 text-left">
              <h2 className="text-3xl font-bold text-[#0F766E] mb-6">
                Our Load Testing Process
              </h2>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside text-lg">
                <li>Define equipment objectives and requirements</li>
                <li>Review operating procedures and usage conditions</li>
                <li>Select proper tools and testing methods</li>
                <li>Perform static and dynamic load tests</li>
                <li>Verify performance, safety, and compliance</li>
              </ol>
            </div>
          </div>
        </div>



        {/* Why Choose Us */}
        <div
          className="relative p-10 rounded-3xl shadow-xl bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581090700227-4c4d8a1c3e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          {/* Overlay color */}
          <div className="absolute inset-0 bg-[#0F766E]/80 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 ">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
              Why Choose Liftguard Solution?
            </h2>

            <ul className="grid md:grid-cols-2 gap-6 text-white font-medium">
              <li className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0F766E] text-lg font-bold">
                  ✓
                </span>
                <p>Expertise in both Industrial & Marine sectors</p>
              </li>

              <li className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0F766E] text-lg font-bold">
                  ✓
                </span>
                <p>Qualified inspection & testing professionals</p>
              </li>

              <li className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0F766E] text-lg font-bold">
                  ✓
                </span>
                <p>Compliance with international standards</p>
              </li>

              <li className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0F766E] text-lg font-bold">
                  ✓
                </span>
                <p>24/7 service availability across Bangladesh</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoadTest;
