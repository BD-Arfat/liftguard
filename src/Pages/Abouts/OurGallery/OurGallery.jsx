import React, { useState, useEffect } from "react";

const images = [
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-8.webp", category: "Load Test", title: "Load Testing Equipment" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-9.webp", category: "Load Test", title: "Heavy Load Testing" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-1-scaled.webp", category: "Load Test", title: "Industrial Load Test" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-10.webp", category: "Load Test", title: "Crane Load Testing" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-11.webp", category: "Load Test", title: "Safety Load Testing" },
  { url: "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg", category: "Lift", title: "Lifting Operations" },
  { url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800", category: "Inspection", title: "Equipment Inspection" },
  { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800", category: "Inspection", title: "NDT Services" },
];

const categories = ["All", "Load Test", "Inspection", "Lift"];

const OurGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#0F766E] rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6">
            <span className="w-2 h-2 bg-[#0F766E] rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600">Our Work Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0F766E] via-emerald-600 to-teal-700 bg-clip-text text-transparent">
              Our
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F766E] to-amber-500 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of <span className="font-semibold text-[#0F766E]">professional services</span> and <span className="font-semibold text-amber-600">successful projects</span>
          </p>
        </div>

        {/* Category Filter */}
        <div  className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(null);
              }}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#0F766E] to-emerald-600 text-white shadow-xl"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:text-white shadow-lg"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-xl font-medium text-gray-600">
              No images available in this category
            </p>
          </div>
        ) : (
          <div data-aos="zoom-out-up" className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onClick={() => setSelectedIndex(index)}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                      imageLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    loading="lazy"
                  />
                  
                  {/* Loading Skeleton */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-[#0F766E]/90 backdrop-blur-sm text-white rounded-full">
                      {img.category}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <button className="px-6 py-3 bg-white/90 backdrop-blur-sm text-[#0F766E] rounded-2xl font-semibold shadow-lg hover:bg-white transition-colors duration-200">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                      </span>
                    </button>
                  </div>

                  {/* Title at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && filteredImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-5xl w-full">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0F766E]/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-[#0F766E]/60 transition-all duration-200 z-10"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0F766E]/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-[#0F766E]/60 transition-all duration-200 z-10"
            >
              →
            </button>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center font-bold hover:bg-red-500 transition-all duration-200 z-10"
            >
              ×
            </button>

            {/* Main Image */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <img
                src={filteredImages[selectedIndex].url}
                alt={filteredImages[selectedIndex].title}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />
              
              {/* Image Info */}
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {filteredImages[selectedIndex].title}
                </h3>
                <span className="inline-block px-3 py-1 bg-[#0F766E]/60 backdrop-blur-sm text-white text-sm rounded-full">
                  {filteredImages[selectedIndex].category}
                </span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0F766E]/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedIndex + 1} of {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurGallery;
