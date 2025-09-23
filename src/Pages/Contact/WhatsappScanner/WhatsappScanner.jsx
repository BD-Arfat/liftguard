import React from "react";
import QRCode from "react-qr-code";

const WhatsappScanner = () => {
  // Predefined WhatsApp number
  const phoneNumber = "8801846615162"; // Country code সহ
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#0F766E] mb-6">
        Scan to Chat on WhatsApp
      </h2>

      <div className="flex justify-center">
        <QRCode value={whatsappLink} size={250} />
      </div>
    </div>
  );
};

export default WhatsappScanner;
