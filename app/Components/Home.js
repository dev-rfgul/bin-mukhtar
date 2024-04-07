import React from "react";

const Home = ({
  imagePosition,
  heading,
  secondaryHeading,
  thirdHeading,
  paragraph,
  paragraph2,
  buttonText,
  buttonText2,
  imgSrc,
}) => {
  return (
    <>
      <div className="section">
        <div className="row  bg-secondary p-9">
          {imagePosition === "left" && (
            <div className="col3  p-5">
              <img className="min-h-full" src={imgSrc} alt="Image" />
            </div>
          )}
          <div className="col7 text-5xl p-5">
            <span className="text-5xl text-red font-bold">{heading}</span>
            <br></br>
            <span className="text-black -100">
              {secondaryHeading} <br></br>
            </span>
            <span className="text-3xl">{thirdHeading}</span>
            <br></br>
            <span>
              {" "}
              <p className="text-lg">
                {" "}
                {paragraph} <br></br>
                {paragraph2}{" "}
              </p>{" "}
            </span>
            <div className="">
              <button className=" button glow-button text-2xl font-bold hover:shadow hover:text-white bg-primary text-white p-2 rounded-lg mt-4 ">
                {" "}
                {buttonText}
                {buttonText2}
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

export default Home;
