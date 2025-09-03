import React from 'react';

const Video = () => {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Watch Our Latest Video
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6 max-w-xl mx-auto">
          Stay updated with our latest insights and tutorials through this featured video.
        </p>

        {/* Responsive Video */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

       
      </div>
    </section>
  );
};

export default Video;
