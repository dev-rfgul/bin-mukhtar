import React from "react";

const Awards = ({
  heading = "Awards",
  imgSrcArray = [
    "./images/awards_1.png",
    "./images/awards_2.png",
    "./images/awards_3.png",
    "./images/awards_4.png",
  ],
  headingArray = [
    "Won 2023 Startup",
    "Rated 4.6 Stars",
    "Online E-file Provider",
    "Safe & Secure",
  ],
  textArray = [
    "of the year award, from PDA Pakistan Digital Awards",
    "12,000+ reviews and 4.6 rating by satisfied customers",
    "who has completed sandbox testing with FBR-IRIS",
    "your information is private and secure on our site",
  ],
  bacol = "bg-white",

}) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-16 right-16 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 left-16 w-56 h-56 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/2 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1 className="text-5xl lg:text-7xl text-primary font-bold mb-6 relative">
              {heading}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
            </h1>
          </div>
          <p className="text-gray-600 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
            Recognized for excellence and innovation in our industry. These accolades reflect our 
            commitment to delivering outstanding results and exceptional service.
          </p>
        </div>

        {/* Awards Grid */}
        <div className={`${bacol} relative z-10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {imgSrcArray.map((imgSrc, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                {/* Award Image Section */}
                <div className="relative p-8 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center min-h-[200px]">
                  <div className="relative">
                    <img
                      className={`w-full max-w-full h-auto object-contain filter drop-shadow-lg`}
                      src={imgSrc}
                      alt={`Award ${index + 1}: ${headingArray[index]}`}
                    />
                  </div>

                  {/* Award rank indicator */}
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Award year/badge */}
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    2023
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {headingArray[index]}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {textArray[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600 font-medium text-sm">Awards Won</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-gray-600 font-medium text-sm">Years Running</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600 font-medium text-sm">Success Rate</div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">12K+</div>
            <div className="text-gray-600 font-medium text-sm">Happy Clients</div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-3xl p-10 shadow-xl max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-600 italic mb-6 leading-relaxed">
              "This company's commitment to excellence is evident in every interaction. 
              Their award-winning service has transformed our business operations completely."
            </blockquote>
            <div className="text-gray-800 font-semibold">Sarah Johnson</div>
            <div className="text-gray-500 text-sm">CEO, Tech Innovations Inc.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;