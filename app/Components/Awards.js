// // featured videos, blogs  are being displayed form this component.

// import React from "react";
// import "../styling/awards.css";
// import Link from "next/link";
// const Awards = ({
//   heading,
//   imgSrcArray,
//   headingArray,
//   textArray,
//   imgHeight,
//   bacol,
//   buttonText,
//   routePath,
// }) => {
//   return (
//     <div>
//       <h1 className="text-6xl text-primary font-bold text-center  mt-6">
//         {heading}
//       </h1>
//       <div className={bacol}>
//         <div className="row flex flex-grow">
//           {imgSrcArray.map((imgSrc, index) => (
//             <div
//               key={index}
//               className="col3 flex flex-col text-center items-center neumorphism hover-zoom-animation award-container cursor-pointer "
//             >
//               <img
//                 className={imgHeight}
//                 src={imgSrc}
//                 alt={`Award ${index + 1}`}
//               />
//               <h1 className="font-bold p-4">{headingArray[index]}</h1>
//               <p className="p-4">{textArray[index]}</p>
//               <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
//                 {buttonText}
//                 {routePath && routePath.map((path, index) => (
//                 <Link key={index} href={path} onClick={() => setNavbar(!navbar)}>
//                     <div>
//                         <img src={imgSrcArray[index]} alt={headingArray[index]} style={{ height: imgHeight }} />
//                         <h2>{headingArray[index]}</h2>
//                         <p>{textArray[index]}</p>
//                     </div>
//                 </Link>
//             ))}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Awards;


import React from "react";
import Link from "next/link";

const Awards = ({
  heading,
  imgSrcArray,
  headingArray,
  textArray,
  imgHeight,
  bacol,
  buttonText,
  routePath,
}) => {
  // Check if routePath is defined
  if (!routePath || routePath.length === 0) {
    return null; // or some other fallback content
  }

  return (
    <div className="  mx-auto p-4">
      <h1 className="text-4xl md:text-6xl text-primary font-bold text-center mt-6">
        {heading}
      </h1>
      <div className={`${bacol} p-4`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imgSrcArray.map((imgSrc, index) => (
            <div
              key={index}
              className="flex flex-col text-center items-center neumorphism hover-zoom-animation award-container cursor-pointer p-4"
            >
              <img
                className={`w-full md:w-auto ${imgHeight} mb-4`}
                src={imgSrc}
                alt={`Award ${index + 1}`}
              />
              <h2 className="font-bold p-2">{headingArray[index]}</h2>
              <p className="p-2">{textArray[index]}</p>
              <Link
                className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out mt-4"
                href={routePath[index]}
              >
                {buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
