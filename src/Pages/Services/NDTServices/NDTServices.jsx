import React from "react";

const NDTServices = () => {
  const services = [
    {
      title: "Core NDT Services",
      items: [
        "Visual Testing (VT) Inspection",
        "Radiographic Testing (RT) Inspection",
        "Ultrasonic Testing (UT) Inspection",
        "Magnetic Particle Testing (MT) Inspection",
        "Acoustic Emission (AE) Inspection",
        "Dye Penetrant Testing (PT) Inspection",
        "Leak Testing (LT) Inspection",
        "Eddy Current Testing (ET) Inspection",
      ],
    },
    {
      title: "Advanced Inspection & Evaluation",
      items: [
        "Hardness Inspection",
        "Surface Roughness Inspection",
        "DFT / Paint Coating Thickness Inspection",
        "Positive Material Identification (PMI)",
        "Holiday Test Service",
        "Pull-Off Test / Adhesion Test Service",
      ],
    },
    {
      title: "Specialized Services",
      items: [
        "Exothermic Welding Services",
        "Cathodic Protection Service",
        "Civil NDT Inspection Service",
        "Soil NDT Inspection Service",
        "Tank Calibration Service",
        "Pressure Vessel, Lifting & Boiler Inspection Service",
        "TOFD (Time of Flight Diffraction) Inspection",
      ],
    },
    {
      title: "Destructive Testing (DT)",
      items: [
        "Root Bend Test",
        "Face Bend Test",
        "Tensile Test",
        "Macrography",
        "Impact Test",
      ],
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-28 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.sandberg.co.uk/wp-content/uploads/2025/02/welding.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F766E]/80 to-[#0F1B3D]/80"></div>

      <div className="relative max-w-7xl mx-auto text-white">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              NDT Testing & Inspection
            </span>{" "}
            Services
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            At{" "}
            <span className="font-semibold text-cyan-400">
              Liftguard Solution
            </span>
            , we provide a wide range of Non-Destructive Testing (NDT) and
            inspection services to ensure safety, reliability, and compliance
            for industrial and marine applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] hover:scale-105 transition-all duration-500`}
              style={{
                transform: index % 2 === 0 ? "translateY(0)" : "translateY(30px)",
              }}
            >
              {/* Gradient Badge */}
              <div className="absolute -top-5 -left-5 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 text-black font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 hover:text-teal-400 transition-colors duration-300"
                    >
                      <span className="text-cyan-400 text-lg">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NDTServices;
