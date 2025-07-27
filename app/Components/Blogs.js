
import React, { useState } from "react";
import Link from "next/link";

const Blogs = ({ 
  imgSrcArray = [
    "/images/blog-1.jpg",
    "/images/blog-2.jpg", 
    "/images/blog-5.jpg",
    "/images/blog-9.jpg"
  ],
  headingArray = [
    "FBR's New Directive: A Step Towards Transparent Taxation in Pakistan",
    "How Freelancers Can File Their Income Tax Returns?",
    "Are You Required to File a Tax Return in Pakistan?",
    "A Guide on How to Run a Leather Export Business"
  ],
  textArray = [
    "The Federal Board of Revenue (FBR) of Pakistan is entering a new era of tax transparency and compliance with its latest directive, SRO 1771(I)/2023.",
    "Learn the step-by-step process for freelancers to file their income tax returns in Pakistan and stay compliant with FBR regulations.",
    "Understand the requirements and thresholds for filing tax returns in Pakistan and ensure you meet all legal obligations.",
    "Essential tips and strategies for starting and running a successful leather export business in Pakistan's growing market."
  ],
  routePaths = ["/1stBlog", "/2ndBlog", "/3rdBlog", "/4thBlog"]
}) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className=" py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h1 className="text-4xl lg:text-6xl text-white   font-bold mb-4 relative">
              Recent Blogs
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
            </h1>
          </div>
          <p className="text-gray-100 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Stay informed with our latest insights, tips, and updates on tax matters, 
            business regulations, and financial planning strategies.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {imgSrcArray.map((imgSrc, index) => (
            <Link 
              key={index}
              href={routePaths[index]}
              className="block group"
            >
              <article
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group overflow-hidden relative cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden z-20">
                  <img 
                    src={imgSrc} 
                    alt={`Blog ${index + 1}`} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                  
                  {/* Read time badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 z-30">
                    <span className="text-sm font-medium text-gray-700">5 min read</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-30">
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
                    <div className="inline-flex items-center space-x-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-300 group/btn">
                      <span>Read More</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>

                    {/* Share button */}
                    <button 
                      className="p-2 text-gray-400 hover:text-primary rounded-full hover:bg-primary/5 transition-all duration-300"
                      onClick={(e) => e.preventDefault()} // Prevent link navigation when clicking share
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-600 transition-all duration-500 ${
                  hoveredCard === index ? 'w-full' : 'w-0'
                }`}></div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <Link href="/blogs">
            <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer">
              <span>View All Blogs</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;