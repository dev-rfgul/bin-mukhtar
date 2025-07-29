import React, { useState, useEffect } from "react";

const Awards = ({
  heading = "Awards & Recognition",
  imgSrcArray = [
    "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://plus.unsplash.com/premium_photo-1676618539992-21c7d3b6df0f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  headingArray = [
    "Won  Startup of the Year",
    "4.6 Star Rating Excellence",
    "Certified E-file Provider",
    "Security Excellence Award",
  ],
  textArray = [
    "Recognized as startup of the year by Pakistan Digital Awards for innovation in tax consulting",
    "Achieved 4.6/5 rating from 12,000+ reviews by our satisfied and happy customers",
    "Successfully completed sandbox testing with FBR-IRIS as authorized e-filing provider",
    "Awarded for maintaining highest security standards to keep your information private and secure",
  ],
  bacol = "transparent",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('awards-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const awardStats = [
    { number: "50+", label: "Awards Won", },
    { number: "5+", label: "Years of Excellence",  },
    { number: "98%", label: "Success Rate",  },
    { number: "12K+", label: "Happy Clients", }
  ];

  const testimonials = [
    {
      text: "Their award-winning service has transformed our business operations completely. The expertise and professionalism are unmatched in the industry.",
      author: "Sarah Johnson",
      position: "CEO, Tech Innovations Inc.",
      rating: 5
    },
    {
      text: "Working with this team has been exceptional. Their recognized excellence in tax consulting saved us significant time and money.",
      author: "Ahmed Hassan", 
      position: "CFO, Global Enterprises",
      rating: 5
    }
  ];

  return (
    <div id="awards-section" className="relative min-h-screen  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-8">
            <span className=" text-blue-300 font-medium">Excellence & Recognition</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="bg-white bg-clip-text text-transparent animate-gradient">
              {heading}
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Recognized for excellence and innovation in tax consulting. These prestigious awards 
            reflect our unwavering commitment to delivering outstanding results.
          </p>
        </div>

        {/* Awards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {imgSrcArray.map((imgSrc, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 transform transition-all duration-500 group-hover:scale-105 group-hover:border-yellow-400/50">
                {/* Award Image Section */}
                <div className="relative p-8 bg-gradient-to-br from-yellow-500/10 to-blue-500/10 flex items-center justify-center min-h-[240px]">
                  <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                    <img
                      className="w-32 h-32 object-cover rounded-2xl shadow-2xl"
                      src={imgSrc}
                      alt={`Award ${index + 1}: ${headingArray[index]}`}
                    />
                  </div>         
                  {/* Award year badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    2023
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-gradient-to-br from-white/5 to-white/10">
                  <h2 className="text-xl font-bold text-white mb-4 text-center leading-tight">
                    {headingArray[index]}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {textArray[index]}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {awardStats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="text-3xl mb-2 animate-bounce">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
            What Our <span className="bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text text-transparent">Award-Winning</span> Service Means
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-2xl text-yellow-400 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg text-gray-200 italic mb-6 leading-relaxed text-center">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="text-center border-t border-white/10 pt-6">
                    <div className="text-white font-semibold text-lg">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4  bg-gradient-to-r from-emerald-600 to-blue-600 text-black font-bold text-xl rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 active:scale-95">
            <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <a
              href="https://wa.me/923180481998?text=Hello, I want to experience your award-winning service"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex text-white items-center space-x-3"
            >
              <span>Experience Award-Winning Service</span>
              <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </a>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-2 border border-black/20 rounded-xl animate-ping"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 0.3;
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Awards;