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
    <section className="relative bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100 py-20 px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our NDT Testing & Inspection Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-[#0F766E]">Liftguard Solution</span>, we
            provide a wide range of Non-Destructive Testing (NDT) and inspection services
            to ensure safety, reliability, and compliance for industrial and marine
            applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-500"
            >
              {/* Gradient Accent with Brand Color */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#0F766E] to-[#0F766E] rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500"
              ></div>

              <div className="relative">
                <h3
                  className="text-2xl font-bold bg-gradient-to-r from-[#0F766E] to-[#0F766E] bg-clip-text text-transparent mb-6"
                >
                  {service.title}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 hover:text-[#0F766E] transition"
                    >
                      <span className="text-[#0F766E]">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NDTServices;
