import React from "react";

const Map = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
          🌍 Our Location
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Visit our office at the heart of the city. Easy to find, easy to connect.
        </p>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
        <iframe
          title="Google Street View"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58979.76599817729!2d91.67205113146048!3d22.49535046373629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd3ff861fe645%3A0x7ede2d746960e935!2sKR%20Steel%20Structure%20Limited!5e0!3m2!1sen!2sbd!4v1758905255525!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>


        

        {/* Watermark */}
        <div className="absolute top-6 right-6 bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-4 py-2 rounded-xl shadow-lg">
          <span className="text-sm font-semibold">Liftguard Map</span>
        </div>
      </div>
    </div>
  );
};

export default Map;
