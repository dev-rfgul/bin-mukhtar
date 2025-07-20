// import React from "react";

// const Blogs = ({ imgSrcArray, headingArray, textArray }) => {
//   return (
//     <div>
//       <div className="section bg-red">
//         <h1 className="text-6xl text-primary font-bold text-center">
//           Recent Blogs
//         </h1>
//         <div className="row flex flex-wrap">
//           {imgSrcArray.map((imgSrc, index) => (
//             <div
//               key={index}
//               className="col3 flex flex-col justify-center items-center text-center neumorphism "
//             >
//               {index < 9 && ( // Only render the heading for the first row
//                 <h1 className="font-bold p-4">{headingArray[index]}</h1>
//               )}
//               <img src={imgSrc} alt={`Blog ${index + 1}`} />
//               <p className="p-4">{textArray[index]}</p>
//             </div>
//           ))}
//         </div>
//           {/* <div className="row flex flex-wrap">
//             {imgSrcArray.map((imgSrc, index) => (
//               <div
//                 key={index}
//                 className="col3 flex flex-col justify-center items-center text-center neumorphism "
//               >
//                 {index < 9 && ( // Only render the heading for the first row
//                   <h1 className="font-bold p-4">{headingArray[index]}</h1>
//                 )}
//                 <img src={imgSrc} alt={`Blog ${index + 1}`} />
//                 <p className="p-4">{textArray[index]}</p>
//               </div>
//             ))}
//           </div>
//           <div className="row flex flex-wrap">
//             {imgSrcArray.map((imgSrc, index) => (
//               <div
//                 key={index}
//                 className="col3 flex flex-col justify-center items-center text-center neumorphism "
//               >
//                 {index < 9 && ( // Only render the heading for the first row
//                   <h1 className="font-bold p-4">{headingArray[index]}</h1>
//                 )}
//                 <img src={imgSrc} alt={`Blog ${index + 1}`} />
//                 <p className="p-4">{textArray[index]}</p>
//               </div>
//             ))}
//           </div> */}
//       </div>
//     </div>
//   );
// };

// export default Blogs;

import React, { useState } from "react";

const Blogs = ({ 
  imgSrcArray = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ],
  headingArray = [
    "Tax Planning Strategies for Small Businesses",
    "Understanding Your Tax Deductions",
    "Corporate Tax Updates 2025",
    "GST Registration Made Simple",
    "International Tax Compliance",
    "Year-End Tax Preparation Tips"
  ],
  textArray = [
    "Discover effective tax planning strategies that can help your small business save money and stay compliant with current regulations.",
    "Learn about the various tax deductions available to individuals and how to maximize your tax savings legally and effectively.",
    "Stay updated with the latest corporate tax changes and how they might affect your business operations and planning.",
    "A comprehensive guide to GST registration process, requirements, and benefits for your business growth and compliance.",
    "Navigate the complex world of international taxation with expert guidance on compliance and optimization strategies.",
    "Essential tips and checklist for year-end tax preparation to ensure you're ready for the upcoming tax season."
  ]
}) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-secondary py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h1 className="text-4xl lg:text-6xl text-primary font-bold mb-4 relative">
              Recent Blogs
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
            </h1>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Stay informed with our latest insights, tips, and updates on tax matters, 
            business regulations, and financial planning strategies.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imgSrcArray.map((imgSrc, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
              
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img 
                  src={imgSrc} 
                  alt={`Blog ${index + 1}`} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Read time badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-gray-700">5 min read</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative z-20">
                {/* Blog Category */}
                <div className="mb-3">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    Tax Advisory
                  </span>
                </div>

                {/* Blog Heading */}
                <h2 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {headingArray[index]}
                </h2>

                {/* Blog Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {textArray[index]}
                </p>

                {/* Blog Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>Jan {index + 15}, 2025</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{150 + index * 25} views</span>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center space-x-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-300 group/btn">
                    <span>Read More</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>

                  {/* Share button */}
                  <button className="p-2 text-gray-400 hover:text-primary rounded-full hover:bg-primary/5 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover effect indicator */}
              <div className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500 ${
                hoveredCard === index ? 'w-full' : 'w-0'
              }`}></div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <button className="bg-primary text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
            <span>View All Blogs</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;