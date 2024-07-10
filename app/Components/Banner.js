// import React from "react";
// import "../styling/banner.css"; // Adjusted import path
// const Banner = ({
//   imagePosition,
//   heading,
//   secondaryHeading,
//   thirdHeading,
//   paragraph,
//   paragraph2,
//   buttonText,
//   imgSrc,
// }) => {
//   return (
//     <>
//       <div className="section ">
//         <div className="row  bg-secondary p-9 ">
//           {imagePosition === "left" && (
//             <div className="col3  p-5">
//               <img className="min-h-full  img" src={imgSrc} alt="Image" />
//             </div>
//           )}
//           <div className="col7 text-5xl p-5">
//             <span className="text-5xl text-primary font-bold text heading1">
//               {heading}
//             </span>
//             <br></br>
//             <span className="text-black-100 text text-4xl ">
//               {secondaryHeading} <br></br>
//             </span>
//             <span className="text-3xl text">{thirdHeading}</span>
//             <br></br>
//             <span>
//               {" "}
//               <p className="text-lg text">
//                 {" "}
//                 {paragraph} <br></br>
//                 {paragraph2}{" "}
//               </p>{" "}
//             </span>
//             <div className="">
//               <button className=" button glow-button text-2xl font-bold hover:shadow hover:text-white bg-primary text-white p-2 rounded-lg mt-4 ">
//                 <a
//                   href="https://wa.me/923180481998?text=Hello , I am "
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {buttonText}
//                 </a>
//               </button>
//             </div>
//           </div>
//           {imagePosition === "right" && (
//             <div className="col3  p-5 mt-11">
//               <img className="min-h-full" src={imgSrc} alt="Image" />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;



import React from "react";

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
    <div className="w-full m-0 p-0">
      <div className="  flex flex-wrap items-center bg-secondary pl-16 pr-16">
        {imagePosition === "left" && (
          <div className="w-full md:w-1/3 p-5">
            <img className="w-full h-auto" src={imgSrc} alt="Banner" />
          </div>
        )}
        <div className="w-full md:w-2/3 p-5">
          <span className="block text-5xl text-primary font-bold mb-2">
            {heading}
          </span>
          <span className="block text-4xl text-black-100 mb-2">
            {secondaryHeading}
          </span>
          <span className="block  mb-2">{thirdHeading}</span>
          <p className="text-lg mb-4">
            {paragraph} <br />
            {paragraph2}
          </p>
          <div>
            
            <button className="button glow-button text-2xl font-bold hover:shadow hover:text-white bg-primary text-white p-2 rounded-lg mt-4">
              <a
                href="https://wa.me/923180481998?text=Hello , I am "
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonText}
              </a>
            </button>
          </div>
        </div>
        {imagePosition === "right" && (
          <div className="w-full md:w-1/3 p-5 mt-11 md:mt-0">
            <img className="w-full h-auto" src={imgSrc} alt="Banner" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
