import React from "react";

const CardTemplate = ({
  Heading,
  imgSrcArray,
  videoSrc,
  headingArray,
  textArray,
  imgSize,
  rowsNo,
}) => {
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const rows = chunkArray(imgSrcArray, rowsNo);

  return (
    <div>
      <h1 className="margin text-6xl text-primary font-bold text-center">
        {Heading}
      </h1>
      <div className="section">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row flex flex-grow">
            {row.map((imgSrc, index) => (
              <div
                key={index}
                className="col3 flex flex-col text-center items-center neumorphism hover-zoom-animation"
              >
                <img
                  className={imgSize}
                  src={imgSrc}
                  alt={`Award ${rowIndex * rowsNo + index + 1}`}
                />
                {headingArray[rowIndex * rowsNo + index] && (
                  <h1 className="font-bold p-4">
                    {headingArray[rowIndex * rowsNo + index]}
                  </h1>
                )}
                {textArray[rowIndex * rowsNo + index] && (
                  <p className="">{textArray[rowIndex * rowsNo + index]}</p>
                )}
                <button className="p-2">Read more</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTemplate;
