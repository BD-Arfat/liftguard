import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import pdfFile from "../../../assets/lift-guard-project-1.pdf";

const BookSlider = () => {
  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [bookSize, setBookSize] = useState({ width: 400, height: 550 });

  const pages = [
    { src: "https://i.ibb.co/DfRtN9H1/Screenshot-2025-10-24-212658.png", label: "Page 1" },
    { src: "https://i.ibb.co/Y4GB45tM/Screenshot-2025-10-24-212745.png", label: "Page 2" },
    { src: "https://i.ibb.co/zhwrmZGs/Screenshot-2025-10-24-212805.png", label: "Page 3" },
  ];

  const totalPages = pages.length;

  // Responsive size
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) setBookSize({ width: 280, height: 400 });
      else if (width < 1024) setBookSize({ width: 400, height: 550 });
      else setBookSize({ width: 460, height: 620 });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextPage = () => {
    if (bookRef.current && currentPage < totalPages - 1) {
      bookRef.current.pageFlip().flipNext();
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (bookRef.current && currentPage > 0) {
      bookRef.current.pageFlip().flipPrev();
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Page flip sound
  useEffect(() => {
    if (currentPage > 0) {
      const flipSound = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/03/15/audio_0a7ef65a15.mp3?filename=page-flip-110626.mp3"
      );
      flipSound.volume = 0.25;
      flipSound.play();
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center py-16 px-4">

      <h2 className="text-4xl md:text-5xl font-bold font-oswald text-gray-900 mb-8 text-center">
        Our <span className="text-teal-500">Brochure</span>
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-[95vw] md:max-w-4xl">
        {/* Prev Button */}
        {currentPage > 0 && (
          <button
            onClick={prevPage}
            className="absolute left-2 sm:left-4 md:left-[-4rem] bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md transition-all flex items-center justify-center z-10"
            title="Previous Page"
          >
            ⬅️
          </button>
        )}

        {/* Book Container */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xl p-1 sm:p-4 hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] transition-all duration-500">
          <HTMLFlipBook
            width={bookSize.width}
            height={bookSize.height}
            ref={bookRef}
            showCover={true}
            className="rounded-xl transition-all duration-700 ease-in-out"
            flippingTime={1100}
            usePortrait={true}
            startPage={0}
            onFlip={(e) => setCurrentPage(e.data)}
          >
            {pages.map((page, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden"
                style={{
                  boxShadow:
                    "inset 0 0 40px rgba(0,0,0,0.15), 0 0 10px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={page.src}
                  alt={page.label}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.98) contrast(1.05)" }}
                />
                <div className="absolute bottom-3 right-4 text-gray-600 text-xs font-semibold bg-white/80 px-2 py-1 rounded-md shadow-sm">
                  {page.label}
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        {/* Next Button */}
        {currentPage < totalPages - 1 && (
          <button
            onClick={nextPage}
            className="absolute right-2 sm:right-4 md:right-[-4rem] bg-gray-200 hover:bg-gray-300 text-gray-800 text-2xl w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md transition-all flex items-center justify-center z-10"
            title="Next Page"
          >
            ➡️
          </button>
        )}
      </div>

      {/* PDF Download Button */}
      <a
        href={pdfFile}
        download
        className="mt-10 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      >
        <span className="text-xl">📥</span> Download PDF
      </a>

      <p className="mt-6 text-gray-500 text-sm text-center">
        Swipe or use arrows to flip pages 📖
      </p>
    </div>
  );
};

export default BookSlider;
