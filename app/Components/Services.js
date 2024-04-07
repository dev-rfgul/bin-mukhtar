{/*import React from "react";

const Services = ({ imgSrcArray, headingArray, textArray }) => {
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const rows = chunkArray(imgSrcArray, 3);

  return (
    <div>
      <div className="section bg-">
        <h1 className=" margin text-6xl text-primary font-bold text-center ">
          What Services We Offer
        </h1>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row flex flex-grow ">
            {row.map((imgSrc, index) => (
              <div
                key={index}
                className="col3 flex flex-col text-center items-center neumorphism hover-zoom-animation"
              >
                <img
                  className="w-1/3"
                  src={imgSrc}
                  alt={`Award ${rowIndex * 3 + index + 1}`}
                />
                <h1 className="font-bold p-4">
                  {headingArray[rowIndex * 3 + index]}
                </h1>
                <p className="p-4">{textArray[rowIndex * 3 + index]}</p>
                <button>Read more</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
*/}