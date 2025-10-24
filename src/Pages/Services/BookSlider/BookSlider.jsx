import React, { useEffect, useState } from "react";
import pdf from "../../../assets/lift-guard-project-1.pdf"; // PDF path ঠিক রাখো

const BookSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://i.ibb.co.com/DfRtN9H1/Screenshot-2025-10-24-212658.png",
      label: "Page 1",
    },
    {
      src: "https://i.ibb.co.com/Y4GB45tM/Screenshot-2025-10-24-212745.png",
      label: "Page 2",
    },
    {
      src: "https://i.ibb.co.com/zhwrmZGs/Screenshot-2025-10-24-212805.png",
      label: "Page 3",
    },
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="py-16 px-6 md:px-12">
      {/* Custom styles for animation / small helpers */}
      <style>{`
        @keyframes glassZoom {
          0% { transform: scale(.98); opacity: 0 }
          100% { transform: scale(1); opacity: 1 }
        }
        .animate-glassZoom { animation: glassZoom 260ms ease-out; }

        /* subtle floating animation for cards */
        @keyframes floaty {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-6px) }
          100% { transform: translateY(0px) }
        }
        .floaty-slow { animation: floaty 6s ease-in-out infinite; }
      `}</style>

      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(5, 10, 20, 0.55), rgba(2,6,23,0.75)), url('https://i.pinimg.com/736x/7a/fa/0b/7afa0ba65edb517acc7267fb0c0fcbac.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* top gradient overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl pointer-events-none"></div>

        <div className="relative z-10 py-12 px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold font-oswald text-white mb-6 drop-shadow-lg">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-400">
              Brochure
            </span>
          </h2>

          {/* Cards container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img.src)}
                className="relative w-full md:w-80 h-[28rem] rounded-xl cursor-pointer transform transition-all duration-400 hover:scale-105 hover:translate-y-[-6px] group"
              >
                {/* gradient border (outer) */}
                <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400">
                  {/* glass panel (inner) */}
                  <div className="w-full h-full rounded-lg backdrop-blur-md bg-white/6 border border-white/10 overflow-hidden relative flex flex-col">
                    {/* optional subtle floating */}
                    <div className="absolute -top-6 -left-10 w-32 h-32 rounded-full opacity-10 bg-gradient-to-r from-cyan-300 to-emerald-400 blur-3xl pointer-events-none"></div>

                    {/* image */}
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    {/* label */}
                    <div className="absolute bottom-4 left-4 text-white/95 font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-lg text-sm">
                      {img.label}
                    </div>

                    {/* glass shine on hover */}
                    <div className="absolute inset-0 pointer-events-none transition-opacity duration-400 opacity-0 group-hover:opacity-60 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                        mixBlendMode: "overlay",
                      }}
                    />
                  </div>
                </div>

                {/* small floating accent (optional) */}
                <div className="absolute -bottom-6 right-6 text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-300/80 animate-pulse" />
                    <span className="opacity-80">Preview</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div className="mt-10">
            <a
              href={pdf}
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <span className="text-lg">📥</span>
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl animate-glassZoom"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              title="Close"
              className="absolute -top-6 -right-6 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg transition transform hover:scale-110"
            >
              ✕
            </button>

            {/* modal content holder with glass */}
            <div className="rounded-2xl overflow-hidden backdrop-blur-md bg-white/6 border border-white/10 shadow-2xl">
              <div className="p-4 md:p-6">
                <img
                  src={selectedImage}
                  alt="Full view"
                  className="w-full h-auto md:h-[720px] object-contain rounded-lg"
                />
              </div>
              {/* footer with download of single image (optional) */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-white/6">
                <div className="text-sm text-white/80">{/* optionally page info */}</div>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedImage}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm bg-white/8 px-3 py-2 rounded-md text-white/90 hover:bg-white/12 transition"
                  >
                    Open image
                  </a>
                  <a
                    href={pdf}
                    download
                    className="text-sm bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-500 text-white px-4 py-2 rounded-md shadow"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSlider;
