
// import React from "react";

// const BlogPost = (blogHeading, blogsImg, boldText, firstPara, lastPara) => {
//   return (
//     <div>
//       <div className="card-container">
//         <hr className="border-gray-400 mt-5" />
//         <h1 className="text-center text-5xl font-bold">{blogHeading}</h1>{" "}
//         <hr className="border-gray-400" />
//         <div className="text-center">
//           <img
//             className="mx-auto w-full mt-8 mb-4 p-14  object-cover rounded-lg shadow-lg"
//             src={blogsImg}
//             alt={blogHeading}
//           />
//         </div>
//         <div className="container mx-auto mt-9 p-9 prose lg:prose-xl">
//           <p className="mt-5 p-11 text-justify  ">
//             <span className="text-red-600 font-bold text-3xl">{boldText}</span>
//             {firstPara}
//             <br></br>
//             <br></br>
//             {lastPara}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;



'use client'


import React from 'react'

const BlogPost = (
    { blogHeading, blogsImg, boldText, firstPara, lastPara }
) => {
    return (
        <div>
          <div className="card-container">
            <hr className="border-gray-400  mt-14 " />
            <h1 className="text-center text-5xl mt-14 font-bold">{blogHeading}</h1>{" "}
            <hr className="border-gray-400" />
            <div className="text-center">
              <img
                className="mx-auto w-1/2 mt-8 mb-4 p-14  object-cover rounded-lg shadow-lg"
                src={blogsImg}
                alt={blogHeading}
              />
            </div>
            <div className="container mx-auto mt-9 p-9 prose lg:prose-xl">
              <p className="mt-5 p-11 text-justify  ">
                <span className="text-red-600 font-bold text-3xl">{boldText}</span>
                {firstPara}
                <br></br>
                <br></br>
                {lastPara}
              </p>
            </div>
          </div>
        </div>
      );
}

export default BlogPost
