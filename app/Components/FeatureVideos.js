// import React from "react";

// const FeatureVideos = ({ videoSrcArray, headingArray, textArray }) => {
//   return (
//     <div className="max-w-screen-lg mx-auto p-4">
//       <h1 className="text-4xl md:text-6xl text-primary font-bold text-center mb-8">
//         Featured Videos
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {videoSrcArray.map((videoSrc, index) => (
//           <div
//             key={index}
//             className="flex flex-col justify-center items-center text-center neumorphism hover-zoom-animation p-4"
//           >
//             <iframe
//               width="100%"
//               height="215"
//               src={videoSrc}
//               title={`Video ${index + 1}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//               className="mb-4"
//             ></iframe>
//             <h2 className="font-bold p-2">{headingArray[index]}</h2>
//             <p className="p-2">{textArray[index]}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeatureVideos;

import React, { useState } from "react";

const FeatureVideos = ({
  videoSrcArray = [
    "https://www.youtube.com/embed/EsjiOF2ruZA?si=rp2CzgKwZccAx-OE",
    " https://www.youtube.com/embed/nkrx2yS8gmw?si=6oyD2Lc80TRxJ83d",
    "https://www.youtube.com/embed/LdUg-PJiWPA?si=MnomcaR5_LLd9cPq",
    "https://www.youtube.com/embed/jG9Rg0SsYpA?si=054gB_RbG3Gfwpcg",
  ],
  headingArray = [
    "Enforcement of Section 114B of Income Tax Ordinance, 2001 to Enforce Filing of Returns",
    " How to Become filer in Pakistan | Active Filer Process in Pakistan 2024 | FBR ALT Complete Process",
    "What is Tax on Salary Income | How to Calculate Tax on Salary | Calculate Withholding Tax on Salary        ",
    " Income Tax Understanding Two Quick Tips | Income Tax Basic concept | FBR | IRIS",
  ],
  textArray = [
    "Discover proven strategies to accelerate your business growth and maximize profitability.",
    "Learn how digital transformation can revolutionize your operations and customer experience.",
    "Master the art of financial planning with our comprehensive guide to wealth management."
  ]
}) => {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/3 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/2 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1 className="text-5xl lg:text-7xl text-primary font-bold mb-6 relative">
              Featured Videos
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
            </h1>
          </div>
          <p className="text-gray-600 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of expert insights, tutorials, and success stories
            that will transform your understanding and drive your success.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {videoSrcArray.map((videoSrc, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              {/* Video Container */}
              <div className="relative overflow-hidden bg-black rounded-t-3xl">
                <div className="aspect-video relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src={playingVideo === index ? videoSrc + "&autoplay=1" : videoSrc}
                    title={`Video ${index + 1}: ${headingArray[index]}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                  ></iframe>

                  {/* Play overlay */}
                  <div
                    className={`absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${playingVideo === index ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    onClick={() => setPlayingVideo(playingVideo === index ? null : index)}
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white">
                      <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video number indicator */}
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                  {index + 1}
                </div>

                {/* Duration/Live indicator */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  HD
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative z-20">
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {headingArray[index]}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {textArray[index]}
                </p>

                {/* Action buttons */}
                <div className="flex items-center justify-between">
                  <button
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium"
                    onClick={() => setPlayingVideo(playingVideo === index ? null : index)}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    <span>Watch Now</span>
                  </button>

                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <button className="hover:text-primary transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </button>
                    <button className="hover:text-primary transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover effect indicator */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ${hoveredVideo === index ? 'w-full' : 'w-0'
                }`}></div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default FeatureVideos;