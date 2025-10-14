import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutsImage from "../../../assets/abouts.jpg";

const Overview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="overflow-hidden relative bg-gray-50">
      {/* Hero Header */}
      <div
        className="relative w-full h-[100vh] sm:h-[100vh] md:h-96 lg:h-[32rem] flex items-center justify-center rounded-b-3xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(https://media.licdn.com/dms/image/v2/D5612AQEXxbZkMGYI1Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1718732191197?e=2147483647&v=beta&t=DBoPpzPeEd1abmiGvbvAzdcq2WhUfugTwlg5UlwS_P8)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F766E]/80 to-[#0F1B3D]/80"></div>

        {/* Header Content */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wider">
            About Us
          </h2>
          <hr className="border-t-4 border-[#10B981] w-16 sm:w-20 md:w-24 mx-auto mt-4" />
        </div>
      </div>

      {/* Content Section */}
      <div
        data-aos="fade-up"
        className="mt-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-0"
      >
        {/* Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl text-justify text-[#0F1B3D] leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-[#0F766E]">
              Liftguard Solutions
            </span>
            , a proud sister concern of KR Group and a leading name in safety
            solutions in Bangladesh. We specialize in innovative and reliable
            safety technologies for lifting gear and heavy equipment, ensuring
            the highest standards of workplace safety and accident prevention.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-justify text-[#0F1B3D] leading-relaxed">
            Founded with a mission to revolutionize safety in industrial and
            construction environments, Liftguard Solutions is committed to
            designing and delivering cutting-edge solutions that protect
            personnel and assets during lifting operations. Our services include
            comprehensive inspection, load testing, and pressure testing for a
            wide range of equipment, including cranes, forklifts, compressors,
            and lifting gear.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative group w-full max-w-xs sm:max-w-md md:max-w-full">
            <img
              src={aboutsImage}
              alt="About Liftguard Solutions"
              className="rounded-3xl shadow-2xl border-4 border-[#10B981] transform transition-transform duration-500 group-hover:scale-105 w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[480px] object-cover"
            />
            {/* Floating Accent Circles */}
            <div className="absolute -top-6 -right-6 w-14 h-14 sm:w-20 sm:h-20 bg-[#0F766E]/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-10 h-10 sm:w-16 sm:h-16 bg-[#10B981]/30 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div
        data-aos="fade-up"
        className="mt-16 max-w-5xl mx-auto space-y-6 px-5 sm:px-8 md:px-10 lg:px-0"
      >
        <p className="text-base sm:text-lg md:text-xl text-[#0F1B3D] leading-relaxed text-justify">
          With a team of dedicated engineers, technicians, and safety
          professionals, we combine expertise and innovation to meet
          international safety standards. Our state-of-the-art equipment,
          including high-capacity load cells and tensile testing machines,
          ensures precision and reliability in every project.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-[#0F1B3D] leading-relaxed text-justify">
          Choose{" "}
          <span className="font-semibold text-[#0F766E]">
            Liftguard Solutions
          </span>{" "}
          for a safer, more efficient workplace. Together, let’s build a future
          where safety is paramount.
        </p>
      </div>

      {/* Decorative Floating Background Shapes */}
      <div className="absolute -top-20 -left-20 w-40 h-40 sm:w-56 sm:h-56 bg-[#0F766E]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-[#10B981]/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
};

export default Overview;
