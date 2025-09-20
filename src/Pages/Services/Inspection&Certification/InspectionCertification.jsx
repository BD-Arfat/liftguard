import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InspectionCertification = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    
      
    
      
    
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
    
      return (
        <div className="font-oswald bg-gray-50">
    
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
        </div>
      );
};

export default InspectionCertification;