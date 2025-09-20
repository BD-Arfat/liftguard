import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LiftguardPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const expertise = [
    { title: "🏭 Industries", items: ["Factories, manufacturing plants", "Power plants", "Steel, cement, and textile sectors"] },
    { title: "🚢 Marine", items: ["Shipyards, dockyards", "Offshore platforms", "Cargo handling operations"] },
  ];

  const loadTestingSteps = [
    "Define equipment objectives and requirements",
    "Review operating procedures and usage conditions",
    "Select proper tools and testing methods",
    "Perform static and dynamic load tests",
    "Verify performance, safety, and compliance",
  ];

  const inspectionServices = [
    "Brakes, clutches, sheaves, and wire rope assemblies check",
    "Design studies and calculation reviews",
    "Static and dynamic load testing",
    "Inspection of structural load-bearing members",
    "Overhead crane girders, rails, and column checks",
    "Gantry surveys (line level & span)",
    "NDT of load hooks + visual inspections",
    "Operational performance tests",
    "Periodic & pre-use inspections (mechanical, structural, electrical, safety systems)",
    "Wire rope and chain inspections",
    "Regulatory compliance assessments",
    "Remaining life assessments",
    "Repair supervision",
  ];

  const whyChoosePoints = [
    "Expertise in both Industrial & Marine sectors",
    "Qualified inspection & testing professionals",
    "Compliance with international standards",
    "24/7 service availability across Bangladesh",
  ];

  return (
    <div className="font-oswald bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-br from-[#0F766E]/20 via-[#10B981]/10 to-[#0F766E]/10 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0F766E] mb-6" data-aos="fade-down">
            Liftguard Solution
          </h1>
          <p className="text-lg md:text-2xl text-gray-700" data-aos="fade-up">
            Crane & Lifting Equipment Inspection & Testing in Bangladesh
          </p>
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-[#0F766E]/20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#10B981]/20 blur-3xl animate-pulse"></div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="100">
            Liftguard Solution is a trusted provider of <span className="font-semibold text-[#0F766E]">Inspection & Testing Services</span> for cranes and lifting equipment in both industrial and marine sectors across Bangladesh.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            We deliver complete solutions—testing, examination, repair supervision, and certification—ensuring your equipment is always <span className="font-semibold text-[#0F766E]">safe, compliant, and reliable</span>.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0F766E]/10 via-[#10B981]/10 to-[#0F766E]/5">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-aos="fade-up">
            Our Expertise
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {expertise.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-2xl font-semibold mb-4">{exp.title}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Load Testing */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            Why Load Testing is Essential
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6" data-aos="fade-up" data-aos-delay="100">
            Confirms cranes and hoists can safely handle their rated capacity
          </p>
          <ul className="text-gray-700 space-y-2 mb-6 list-disc list-inside text-left md:text-center">
            <li>Required for new installations</li>
            <li>After repairs, modifications, or alterations</li>
            <li>Before returning to operational service</li>
          </ul>
          <p className="text-lg md:text-xl text-gray-700 font-semibold" data-aos="fade-up" data-aos-delay="200">
            Guarantees safe operation and compliance with international standards
          </p>
        </div>
      </section>

      {/* Load Testing Process */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0F766E]/10 via-[#10B981]/10 to-[#0F766E]/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center" data-aos="fade-up">
            Our Load Testing Process
          </h2>
          <div className="space-y-6">
            {loadTestingSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4" data-aos="fade-right" data-aos-delay={index * 100}>
                <span className="flex-none w-10 h-10 bg-[#0F766E] text-white font-bold rounded-full flex items-center justify-center">{index + 1}</span>
                <p className="text-gray-700 text-lg md:text-xl">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection & Certification */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Inspection & Certification Services</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 max-w-6xl mx-auto">
          {inspectionServices.map((service, i) => (
            <div key={i} className="flex items-center gap-3 bg-[#0F766E]/10 p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay={i * 50}>
              <span className="text-[#0F766E] font-bold">✔</span>
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0F766E]/10 via-[#10B981]/10 to-[#0F766E]/5">
        <div className="max-w-5xl mx-auto text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Why Choose Liftguard Solution?</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 max-w-6xl mx-auto">
          {whyChoosePoints.map((point, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 flex-1 shadow-lg hover:shadow-2xl transition-all duration-500" data-aos="zoom-in" data-aos-delay={i * 100}>
              <p className="text-[#0F766E] font-semibold text-lg flex items-center gap-2">✔ {point}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LiftguardPage;
