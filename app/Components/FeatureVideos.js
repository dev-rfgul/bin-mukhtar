

// import React from "react";

// const FeatureVideos = ({ videoSrcArray, headingArray, textArray }) => {
//   return (
//     <div>
//         <h1 className="text-6xl text-primary font-bold text-center">
//           Featured Videos
//         </h1>
//       <div className="section ">
//         <div className="row flex flex-grow">
//           {videoSrcArray.map((videoSrc, index) => (
//            <div
//            key={index}
//            className="col3 flex flex-col justify-center items-center text-center neumorphism hover-zoom-animation"
//          >
         
//               <iframe
//                 width="220"
//                 height="215"
//                 src={videoSrc}
//                 title={`Video ${index + 1}`}
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerpolicy="strict-origin-when-cross-origin"
//                 allowfullscreen
//               ></iframe>
//               <h1 className="font-bold p-4">{headingArray[index]}</h1>
//               <p className="p-4">{textArray[index]}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureVideos;



import React from "react";

const FeatureVideos = ({ videoSrcArray, headingArray, textArray }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-4xl md:text-6xl text-primary font-bold text-center mb-8">
        Featured Videos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoSrcArray.map((videoSrc, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center neumorphism hover-zoom-animation p-4"
          >
            <iframe
              width="100%"
              height="215"
              src={videoSrc}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="mb-4"
            ></iframe>
            <h2 className="font-bold p-2">{headingArray[index]}</h2>
            <p className="p-2">{textArray[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureVideos;
