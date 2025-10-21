import React, { useState, useEffect } from "react";

const images = [
  { url: "https://i.ibb.co.com/ZpzJ8fL0/Whats-App-Image-2025-10-14-at-22-28-27-30e607b7.jpg", category: "Load Test", title: "Load Testing Equipment" },
  { url: "https://i.ibb.co.com/DDF7pTnX/Whats-App-Image-2025-10-14-at-22-22-07-ce839648.jpg", category: "Load Test", title: "Load Testing Equipment" },
  { url: "https://i.ibb.co.com/fd64gm4N/Whats-App-Image-2025-10-09-at-16-16-02-995baacc.jpg", category: "Load Test", title: "Heavy Load Testing" },
  { url: "https://i.ibb.co.com/zVTTyNCx/Whats-App-Image-2025-10-16-at-10-45-16-c050a350.jpg", category: "Load Test", title: "Industrial Load Test" },
  { url: "https://i.ibb.co.com/yFwZp82v/Whats-App-Image-2025-10-16-at-10-08-14-c2a69578.jpg", category: "Load Test", title: "Crane Load Testing" },
  { url: "https://i.ibb.co.com/35zyyFTx/Whats-App-Image-2025-10-16-at-10-08-17-8cfea002.jpg", category: "Load Test", title: "Crane Load Testing" },
  { url: "https://safetyzenbd.com/wp-content/uploads/2025/08/Load-Test-Service-11.webp", category: "Load Test", title: "Safety Load Testing" },
  { url: "https://www.mornlift.com/wp-content/uploads/2019/02/Lifting-up.jpg", category: "Lift", title: "Lifting Operations" },
  { url: "https://www.hndfcrane.com/wp-content/uploads/test-load.png", category: "Lift", title: "Equipment Inspection" },
  { url: "https://www.hndfcrane.com/wp-content/uploads/EOT-crane-load-test.png", category: "Lift", title: "NDT Services" },
  { url: "https://www.hydrowates.com/assets/images/content/load_test-crane.jpg", category: "Lift", title: "NDT Services" },
  { url: "https://5.imimg.com/data5/SELLER/Default/2022/9/BJ/JC/SW/98261933/eot-crane-load-test-service-500x500.jpeg", category: "Lift", title: "NDT Services" },
];

const categories = ["All", "Load Test", "Inspection", "Lift"];

const OurGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // প্রতি পেজে কতগুলো ইমেজ দেখাবে

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  // Reset pagination when category changes
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSelectedIndex(null);
    setCurrentPage(1);
  };

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  // Lightbox Navigation
  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#0F766E] via-emerald-600 to-teal-700 bg-clip-text text-transparent">
              Our
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#0F766E] to-emerald-600 text-white shadow-xl"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:text-white shadow-lg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {paginatedImages.length === 0 ? (
          <div className="text-center py-16 text-gray-600 text-xl font-medium">
            No images available
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer hover:-translate-y-2 transition-all"
                onClick={() => setSelectedIndex(startIndex + index)}
              >
                <div className="relative aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                      imageLoaded[index] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(index)}
                    loading="lazy"
                  />
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full bg-[#0F766E]/80 text-white hover:bg-[#0F766E] disabled:opacity-40"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageClick(i + 1)}
                className={`w-10 h-10 rounded-full font-semibold ${
                  currentPage === i + 1
                    ? "bg-[#0F766E] text-white"
                    : "bg-white/70 text-gray-700 hover:bg-[#0F766E]/30"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full bg-[#0F766E]/80 text-white hover:bg-[#0F766E] disabled:opacity-40"
            >
              Next
            </button>
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
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0F766E]/40 text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-[#0F766E]/60 z-10"
            >
              ←
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0F766E]/40 text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-[#0F766E]/60 z-10"
            >
              →
            </button>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-4 right-4 w-10 h-10 bg-red-500/80 text-white rounded-full flex items-center justify-center font-bold hover:bg-red-500 transition-all z-10"
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
                <span className="inline-block px-3 py-1 bg-[#0F766E]/60 text-white text-sm rounded-full">
                  {filteredImages[selectedIndex].category}
                </span>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0F766E]/60 text-white px-4 py-2 rounded-full text-sm">
              {selectedIndex + 1} of {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurGallery;
