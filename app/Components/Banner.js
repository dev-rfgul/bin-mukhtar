import React from "react";

const Banner = ({
  imagePosition = "right",
  heading = "Expert Tax Solutions",
  secondaryHeading = "Maximize Your Returns",
  thirdHeading = "Professional • Reliable • Results-Driven",
  paragraph = "Navigate complex tax regulations with confidence. Our certified professionals deliver personalized strategies that save you money and ensure compliance.",
  paragraph2 = "From individual returns to business consulting, we're your trusted partner in financial success.",
  buttonText = "Get Free Consultation",
  imgSrc = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}) => {
  return (
    <div className="w-full m-0 pb-20 overflow-hidden">
      {/* Background with gradient and animated particles */}
      <div className="relative min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 opacity-30 rotate-45 animate-bounce delay-100"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-emerald-400 opacity-20 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 opacity-40 animate-bounce delay-500"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-wrap items-center min-h-screen">
            {/* Left side content */}
            {imagePosition === "right" && (
              <div className="w-full lg:w-3/5 pr-0 lg:pr-12 mb-12 lg:mb-0">
                <div className="space-y-8 animate-fade-in">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-blue-300 text-sm font-medium">Certified Tax Professionals</span>
                  </div>

                  {/* Main heading with gradient text */}
                  <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-300 bg-clip-text text-transparent animate-gradient">
                      {heading}
                    </span>
                  </h1>

                  {/* Secondary heading */}
                  <h2 className="text-3xl lg:text-4xl font-bold text-blue-100 opacity-90">
                    {secondaryHeading}
                  </h2>

                  {/* Third heading with icons */}
                  <div className="flex items-center space-x-2 text-emerald-300 font-semibold">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>{thirdHeading}</span>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  </div>

                  {/* Paragraphs with enhanced typography */}
                  <div className="space-y-4 text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                    <p className="opacity-90">{paragraph}</p>
                    <p className="opacity-80">{paragraph2}</p>
                  </div>

                  {/* Enhanced CTA button */}
                  <div className="pt-6">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-xl rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <a
                        href="https://wa.me/923180481998?text=Hello, I need expert tax consultation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 flex items-center space-x-3"
                      >
                        <span>{buttonText}</span>
                        <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </a>
                      
                      {/* Ripple effect on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-2 border border-white/20 rounded-xl animate-ping"></div>
                      </div>
                    </button>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex items-center space-x-8 pt-8 opacity-70">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">500+ Clients</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">15+ Years</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Right side image */}
            {imagePosition === "right" && (
              <div className="w-full lg:w-2/5 relative">
                <div className="relative">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                  
                  {/* Main image container */}
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-4 backdrop-blur-sm border border-white/10">
                    <img 
                      className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700" 
                      src={imgSrc} 
                      alt="Professional Tax Consultant" 
                    />
                    
                    {/* Floating stats card */}
                    <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 z-50">
                      <div className="text-2xl font-bold text-white z-0">₹2.5M+</div>
                      <div className="text-emerald-300 text-sm">Tax Savings Delivered</div>
                    </div>

                    {/* Floating certification badge */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full p-4 shadow-2xl animate-bounce">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Custom CSS animations */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Banner;