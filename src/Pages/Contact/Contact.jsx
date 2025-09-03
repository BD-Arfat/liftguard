import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Map from "./Map";

const Contact = () => {
    useEffect(() => {
            AOS.init({
                duration: 1000, // অ্যানিমেশন সময়কাল (মিলিসেকেন্ডে)
                once: true, // একবারই অ্যানিমেশন হবে
            });
        }, []);
  return (
    <div className="container mx-auto pt-20 px-4 md:px-16">
      <h2 className="text-center text-3xl font-bold text-blue-950 font-oswald mt-2">
        Contact Us
      </h2>
      <hr className="border border-blue-950 h-1 bg-blue-950 w-48 mx-auto mt-1 mb-10"/>
      
      <div data-aos="fade-up" className="flex flex-col md:flex-row items-center gap-8 mb-10">
        {/* Left: Contact Information */}
        <div className="md:w-1/2 w-full">
        <div className="text-lg mb-4">
            <h3 className="font-bold text-xl uppercase font-oswald text-blue-950">Lab:</h3>
            <p className="font-oswald">Boro Kumira, Sitakunda, Chattogram</p>
          </div>
          <div className="text-lg mb-4 font-oswald">
            <h3 className="font-bold text-xl uppercase text-blue-950">Head Office:</h3>
            <p>BBC Steel Bhaban, South Shitalpur, Sitakunda, Chattogram</p>
          </div>
          <div className="text-lg mb-4 font-oswald ">
            <h3 className="font-bold text-xl uppercase text-blue-950">Corporate Office:</h3>
            <p>As-Salam Tower (11th Floor), 57, Agrabad C/A, Chattogram</p>
          </div>
           
          <div className="text-lg mb-4 font-oswald ">
            <h3 className="font-bold text-xl uppercase text-blue-950">Email:</h3>
            <p>solutionliftguard@gmail.com</p>
            <p>ranaliftguardsolution@gmail.com</p>
          </div>
          <div className="text-lg mb-4 font-oswald">
            <h3 className="font-bold text-xl uppercase text-blue-950">Phone:</h3>
            <p>01321229107</p>
          </div>
        </div>

        {/* Right: Image or Other Information */}
        <div className="md:w-1/2 w-full ">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?ga=GA1.1.418619699.1734761489&semt=ais_hybrid"
            alt="Contact Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
      <div>
        <Map></Map>
      </div>
    </div>
  );
};

export default Contact;
