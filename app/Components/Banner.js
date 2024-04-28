import React from "react";
import "../styling/banner.css"; // Adjusted import path
const Banner = ({
  imagePosition,
  heading,
  secondaryHeading,
  thirdHeading,
  paragraph,
  paragraph2,
  buttonText,
  imgSrc,
}) => {
  return (
    <>
      <div className="section ">
        <div className="row  bg-secondary p-9 ">
          {imagePosition === "left" && (
            <div className="col3  p-5">
              <img className="min-h-full img" src={imgSrc} alt="Image" />
            </div>
          )}
          <div className="col7 text-5xl p-5">
            <span className="text-5xl text-primary font-bold text heading1">
              {heading}
            </span>
            <br></br>
            <span className="text-black-100 text text-4xl ">
              {secondaryHeading} <br></br>
            </span>
            <span className="text-3xl text">{thirdHeading}</span>
            <br></br>
            <span>
              {" "}
              <p className="text-lg text">
                {" "}
                {paragraph} <br></br>
                {paragraph2}{" "}
              </p>{" "}
            </span>
            <div className="">
              <button className=" button glow-button text-2xl font-bold hover:shadow hover:text-white bg-primary text-white p-2 rounded-lg mt-4 ">
                <a
                  href="https://wa.me/923329296026?text=Hello , I am "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {buttonText}
                
                </a>
              </button>

              
            </div>
          </div>
          {imagePosition === "right" && (
            <div className="col3  p-5">
              <img className="min-h-full" src={imgSrc} alt="Image" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
