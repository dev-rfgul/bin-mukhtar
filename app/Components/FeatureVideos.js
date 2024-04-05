

import React from "react";

const FeatureVideos = ({ videoSrcArray, headingArray, textArray }) => {
  return (
    <div>
        <h1 className="text-6xl text-primary font-bold text-center">
          Featured Videos
        </h1>
      <div className="section ">
        <div className="row flex flex-grow">
          {videoSrcArray.map((videoSrc, index) => (
           <div
           key={index}
           className="col3 flex flex-col justify-center items-center text-center neumorphism hover-zoom-animation"
         >
         
              <iframe
                width="220"
                height="215"
                src={videoSrc}
                title={`Video ${index + 1}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <h1 className="font-bold p-4">{headingArray[index]}</h1>
              <p className="p-4">{textArray[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureVideos;
