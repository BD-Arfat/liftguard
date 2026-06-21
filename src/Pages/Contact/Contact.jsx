import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Map from "./Map";
import WhatsappScanner from "./WhatsappScanner/WhatsappScanner";

const Contact = () => {

  const getOfficeStatus = () => {
    const now = new Date();

    const bdDate = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );

    const day = bdDate.getDay();
    const hour = bdDate.getHours();
    const minute = bdDate.getMinutes();

    const currentTime = hour * 60 + minute;

    const currentTimeText = bdDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const officeStart = 9 * 60;
    const officeEnd = 18 * 60;

    const holidays = [
      "2026-02-21",
      "2026-03-26",
      "2026-04-14",
      "2026-05-01",
      "2026-12-16",
      "2026-12-25",
    ];

    const dateStr = bdDate.toISOString().split("T")[0];

    // Friday
    if (day === 5) {
      return {
        open: false,
        title: "Office is Closed",
        reason: "Weekly Holiday (Friday)",
        currentTime: currentTimeText,
      };
    }

    // Government Holiday
    if (holidays.includes(dateStr)) {
      return {
        open: false,
        title: "Office is Closed",
        reason: "Government Holiday",
        currentTime: currentTimeText,
      };
    }

    // Office Open
    if (currentTime >= officeStart && currentTime < officeEnd) {
      return {
        open: true,
        title: "Office is Open",
        reason: "Visitors are welcome during office hours.",
        currentTime: currentTimeText,
      };
    }

    // Office Closed
    return {
      open: false,
      title: "Office is Closed",
      reason: "Office Hours: 9:00 AM – 6:00 PM",
      currentTime: currentTimeText,
    };
  };



  const officeStatus = getOfficeStatus();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Banner Section */}
      <div
        id="hero-section"
        className="relative w-full top-0 h-screen sm:h-56 md:h-80 lg:h-[32rem] flex items-center justify-center rounded-b-3xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(https://i.ibb.co.com/nN6HTwKZ/Gemini-Generated-Image-fjcuezfjcuezfjcu.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F766E]/80 to-[#0F1B3D]/80"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-oswald tracking-widest drop-shadow-lg">
            CONTACT US
          </h2>
          <hr className="border-t-4 border-[#10B981] w-20 mx-auto mt-4" />
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 md:px-16 -mt-12 relative z-10">
        {/* Contact Info Cards */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { title: "📍 Lab", text: "Boro Kumira, Sitakunda, Chattogram" },
            {
              title: "🏢 Head Office",
              text: "BBC Steel Bhaban, South Shitalpur, Sitakunda, Chattogram",
            },
            {
              title: "🏢 Corporate Office",
              text: "As-Salam Tower (11th Floor), 57, Agrabad C/A, Chattogram",
            },
            {
              title: "✉️ Email",
              text: (
                <>
                  <p>solutionliftguard@gmail.com</p>
                  <p>ranaliftguardsolution@gmail.com</p>
                </>
              ),
            },
            { title: "☎️ Phone", text: "01321229107" },
            {
              title: "⏰ Opening Hours",
              text: (
                <>

                  <h4
                    className={`font-bold text-lg ${officeStatus.open
                      ? "text-green-700"
                      : "text-red-700"
                      }`}
                  >
                    {officeStatus.open
                      ? "🟢 Office is Open"
                      : "🔴 Office is Closed"}
                  </h4>

                  <p className="text-gray-600 text-sm mt-2">
                    {officeStatus.reason}
                  </p>
                </>
              ),

            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl 
                border border-gray-200 hover:shadow-2xl transition transform hover:-translate-y-2 hover:rotate-1 duration-500 p-8"
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0F766E] group-hover:shadow-[0_0_20px_#0F766E] transition duration-500"></div>

              {/* Icon Badge */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0F766E] text-white text-3xl shadow-lg mb-4">
                {item.title.slice(0, 2)}
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl md:text-2xl uppercase text-[#0F766E] mb-2 relative z-10">
                {item.title}
              </h3>

              {/* Text */}
              <div className="text-gray-700 text-sm md:text-base relative z-10">{item.text}</div>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div data-aos="fade-up" className="flex justify-center gap-6 text-3xl mb-16">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61571056233771" },
            { icon: <FaLinkedin />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaWhatsapp />, link: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link} target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full 
                bg-[#0F766E]/10 text-[#0F766E] hover:bg-[#0F766E] hover:text-white 
                transform hover:scale-110 transition duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Map */}
        <div data-aos="fade-up" className="mb-16">
          <Map />
        </div>

        {/* WhatsApp QR Scanner */}
        <div data-aos="fade-up" className="mb-16">
          <WhatsappScanner />
        </div>

        {/* Call to Action Banner */}
        <div
          className="bg-gradient-to-r from-[#0F766E] to-[#10B981] text-white text-center py-8 rounded-3xl shadow-lg relative overflow-hidden mb-10"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
          <h3 className="text-2xl md:text-4xl font-bold font-oswald relative z-10">
            Need Help? Call Us Today – ☎ 01321229107
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
