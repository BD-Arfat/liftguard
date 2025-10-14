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
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/418720732/MK/TG/ZV/162291983/1.jpg",
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
    <section className="relative md:bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto text-gray-900">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              NDT Testing & Inspection
            </span>{" "}
            Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At{" "}
            <span className="font-semibold text-teal-600">
              Liftguard Solution
            </span>
            , we provide a wide range of Non-Destructive Testing (NDT) and
            inspection services to ensure safety, reliability, and compliance
            for industrial and marine applications.
          </p>
        </div>

        {/* ✅ 1️⃣ Core NDT Services (Image + Card) */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={services[0].image}
              alt={services[0].title}
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Card */}
          <div className="relative p-10 rounded-3xl border border-gray-200 bg-white shadow-lg hover:shadow-teal-300/40 hover:scale-[1.02] transition-all duration-500 w-full">
            <div className="absolute -top-5 -left-5 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 text-black font-bold text-lg shadow-lg">
              1
            </div>
            <h3 className="text-2xl font-bold mb-6 text-teal-600">
              {services[0].title}
            </h3>
            <ul className="space-y-3">
              {services[0].items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 hover:text-teal-500 transition-colors duration-300"
                >
                  <span className="text-cyan-500 text-lg">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ 2️⃣ - 4️⃣ Other Services (Now side-by-side cards) */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.slice(1).map((service, index) => (
            <div
              key={index + 1}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:shadow-teal-300/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-teal-700 text-left">
                {service.title}
              </h3>
              <ul className="space-y-3 list-disc list-inside text-gray-700">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-teal-600 transition-colors duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NDTServices;
