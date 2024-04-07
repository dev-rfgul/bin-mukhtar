import React from "react";

const Blogs = ({ imgSrcArray, headingArray, textArray }) => {
  return (
    <div>
      <div className="section bg-red">
        <h1 className="text-6xl text-primary font-bold text-center">
          Recent Blogs
        </h1>
        <div className="row flex flex-wrap">
          {imgSrcArray.map((imgSrc, index) => (
            <div
              key={index}
              className="col3 flex flex-col justify-center items-center text-center neumorphism "
            >
              {index < 9 && ( // Only render the heading for the first row
                <h1 className="font-bold p-4">{headingArray[index]}</h1>
              )}
              <img src={imgSrc} alt={`Blog ${index + 1}`} />
              <p className="p-4">{textArray[index]}</p>
            </div>
          ))}
        </div>
          {/* <div className="row flex flex-wrap">
            {imgSrcArray.map((imgSrc, index) => (
              <div
                key={index}
                className="col3 flex flex-col justify-center items-center text-center neumorphism "
              >
                {index < 9 && ( // Only render the heading for the first row
                  <h1 className="font-bold p-4">{headingArray[index]}</h1>
                )}
                <img src={imgSrc} alt={`Blog ${index + 1}`} />
                <p className="p-4">{textArray[index]}</p>
              </div>
            ))}
          </div>
          <div className="row flex flex-wrap">
            {imgSrcArray.map((imgSrc, index) => (
              <div
                key={index}
                className="col3 flex flex-col justify-center items-center text-center neumorphism "
              >
                {index < 9 && ( // Only render the heading for the first row
                  <h1 className="font-bold p-4">{headingArray[index]}</h1>
                )}
                <img src={imgSrc} alt={`Blog ${index + 1}`} />
                <p className="p-4">{textArray[index]}</p>
              </div>
            ))}
          </div> */}
      </div>
    </div>
  );
};

export default Blogs;
