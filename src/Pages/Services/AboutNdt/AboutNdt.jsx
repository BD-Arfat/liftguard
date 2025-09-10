import React from "react";
import image2 from "../../../assets/ser-1.webp";

const AboutNdt = () => {
  return (
    <div className="my-16">
      {/* Section Title */}
      <h1 className="md:text-3xl text-xl text-center mx-4 md:mx-0 font-extrabold text-[#0F766E] leading-snug font-oswald">
        Ensure Safety and Quality with Our NDT Services
      </h1>

      {/* Content Box */}
      <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div data-aos="fade-up" className="w-full">
          <div className="md:flex items-center justify-center gap-10 shadow-lg rounded-md bg-white p-6 border-t-4 border-[#0F766E] w-full md:mx-auto mt-10">
            {/* Left: Text */}
            <div className="md:w-1/2 mx-auto">
              <h2 className="font-bold text-xl lg:text-4xl text-[#0F766E] mb-4 uppercase font-oswald">
                About Us
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify font-oswald">
                At <span className="font-semibold text-[#0F766E]">Liftguard Solution</span>, we specialize in cutting-edge Nondestructive Testing (NDT) solutions designed to ensure the safety, reliability, and performance of your equipment and structures. With a team of certified professionals and state-of-the-art technology, we deliver accurate and reliable results that help you meet industry standards and maintain operational excellence.
              </p>
            </div>

            {/* Right: Image */}
            <div className="md:w-96 mt-6 md:mt-0 w-full flex justify-center">
              <img
                className="rounded-lg w-96 mx-auto shadow-md border-4 border-[#0F766E]/30 hover:scale-105 transition-transform duration-500"
                src={image2}
                alt="NDT Service"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNdt;
