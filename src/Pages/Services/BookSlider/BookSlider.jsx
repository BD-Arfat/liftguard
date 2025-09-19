import React from "react";

const BookSlider = () => {
  return (
    <div
      className="bg-fixed bg-cover py-12 px-4 rounded-2xl mx-4 md:mx-12 shadow-xl"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/7a/fa/0b/7afa0ba65edb517acc7267fb0c0fcbac.jpg')",
      }}
    >
      <div className="text-center">
        {/* Background overlay */}
        <div className="bg-black/60 rounded-2xl p-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white mb-10">
            Our Brochure
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* First Image */}
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co.com/ZRK83V0W/Whats-App-Image-2025-09-19-at-21-05-23-60002715.jpg"
                alt="Image 1"
                className="w-full md:w-96 md:h-[32rem] object-cover rounded-xl shadow-lg border-4 border-[#0F766E] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              />
            </div>

            {/* Second Image */}
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co.com/JFr9sdXm/Whats-App-Image-2025-09-19-at-21-05-25-aa371a00.jpg"
                alt="Image 2"
                className="w-full md:w-96 md:h-[32rem] object-cover rounded-xl shadow-lg border-4 border-[#0F766E] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-10">
            <a
              href="/brochure.pdf" // এখানে আপনার PDF ফাইলের লিঙ্ক দিন
              download
              className="inline-block bg-[#0F766E] text-white font-semibold px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-110 hover:bg-[#115e55]"
            >
              📥 Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSlider;

// book slider er moto kore bananu code 👇👇👇👇

// const bookRef = useRef();

//   const nextPage = () => {
//     bookRef.current.pageFlip().flipNext();
//   };

//   const prevPage = () => {
//     bookRef.current.pageFlip().flipPrev();
//   };

//   return (
//     <div
//       className="bg-fixed bg-cover py-16 px-4 rounded-2xl mx-4 md:mx-12 shadow-xl"
//       style={{
//         backgroundImage:
//           "url('https://i.pinimg.com/736x/7a/fa/0b/7afa0ba65edb517acc7267fb0c0fcbac.jpg')",
//       }}
//     >
//       <div className="text-center">
//         <div className="bg-black/60 rounded-2xl p-10 relative">
//           {/* Heading */}
//           <h2 className="text-3xl md:text-5xl font-bold font-oswald text-white mb-12">
//             Our Brochure
//           </h2>

//           {/* Flip Book Container */}
//           <div className="flex items-center justify-center relative">
//             {/* Left Arrow */}
//             <button
//               onClick={prevPage}
//               className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-white bg-[#0F766E]/80 hover:bg-[#0F766E] p-4 rounded-full shadow-lg z-10"
//             >
//               <FaArrowLeft size={24} />
//             </button>

//             {/* FlipBook */}
//             <HTMLFlipBook
//               width={350}
//               height={500}
//               size="stretch"
//               minWidth={250}
//               maxWidth={400}
//               minHeight={350}
//               maxHeight={550}
//               maxShadowOpacity={0.5}
//               showCover={true}
//               className="shadow-2xl"
//               ref={bookRef}
//               flipOnTouch={false} // drag disable
//               flipOnClick={false} // click on page disable
//             >
//               {/* Page 1 */}
//               <div className="flex items-center justify-center bg-white rounded-xl overflow-hidden">
//                 <img
//                   src="https://i.ibb.co.com/ZRK83V0W/Whats-App-Image-2025-09-19-at-21-05-23-60002715.jpg"
//                   alt="Page 1"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Page 2 */}
//               <div className="flex items-center justify-center bg-white rounded-xl overflow-hidden">
//                 <img
//                   src="https://i.ibb.co.com/JFr9sdXm/Whats-App-Image-2025-09-19-at-21-05-25-aa371a00.jpg"
//                   alt="Page 2"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </HTMLFlipBook>

//             {/* Right Arrow */}
//             <button
//               onClick={nextPage}
//               className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-white bg-[#0F766E]/80 hover:bg-[#0F766E] p-4 rounded-full shadow-lg z-10"
//             >
//               <FaArrowRight size={24} />
//             </button>
//           </div>

//           {/* Download Button */}
//           <div className="mt-12">
//             <a
//               href="/brochure.pdf"
//               download
//               className="inline-block bg-[#0F766E] text-white font-semibold px-6 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-110 hover:bg-[#115e55]"
//             >
//               📥 Download PDF
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );