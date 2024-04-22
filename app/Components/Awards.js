import React from "react";

import "../styling/awards.css";

const Awards = ({
  heading,
  imgSrcArray,
  headingArray,
  textArray,
  imgHeight,
  bacol,
}) => {
  return (
    <div>
      <h1 className="text-6xl text-primary font-bold text-center  mt-6">
        {heading}
      </h1>
      <div className={bacol}>
        <div className="row flex flex-grow">
          {imgSrcArray.map((imgSrc, index) => (
            <div
              key={index}
              className="col3 flex flex-col text-center items-center neumorphism hover-zoom-animation award-container cursor-pointer "
            >
              <img
                className={imgHeight}
                src={imgSrc}
                alt={`Award ${index + 1}`}
              />
              <h1 className="font-bold p-4">{headingArray[index]}</h1>
              <p className="p-4">{textArray[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
