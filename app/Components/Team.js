import React, { useState, useEffect } from "react";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate the number counter
          let start = 0;
          const end = 100;
          const increment = end / 60; // 60 frames for smooth animation
          const timer = setInterval(() => {
            start += increment;
            setAnimatedNumber(Math.floor(start));
            if (start >= end) {
              clearInterval(timer);
              setAnimatedNumber(end);
            }
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('team-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const teamStats = [
    { number: "100+", label: "Expert Professionals", icon: "👥" },
    { number: "15+", label: "Years Experience", icon: "📊" },
    { number: "5000+", label: "Happy Clients", icon: "😊" },
    { number: "24/7", label: "Support Available", icon: "🕒" }
  ];

  const expertise = [
    "Tax Planning", "Business Consulting", "Financial Advisory", 
    "Audit Services", "Legal Compliance", "Investment Planning"
  ];

  return (
    <div id="team-section" className="relative min-h-screen  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400 rounded-full animate-float"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: (Math.random() * 10 + 10) + 's'
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-8">
            <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-300 font-medium">Our Professional Team</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-emerald-300 bg-clip-text text-transparent">
              Team of More Than
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-blue-300 to-purple-400 bg-clip-text text-transparent text-8xl lg:text-9xl animate-pulse">
              {animatedNumber}+
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-emerald-300 bg-clip-text text-transparent">
              Talented Professionals
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our qualified team of certified tax professionals, financial advisors, and business consultants 
            is ready to provide you with comprehensive support for all your financial needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative text-center">
                <div className="text-4xl mb-3 animate-bounce">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Team Section */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left: Team Image with Effects */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <img 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700" 
                src="./images/team.png"
                alt="Professional Tax Team" 
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-4 shadow-2xl ">
                <div className="text-white font-bold text-lg">Expert Team</div>
                <div className="text-emerald-200 text-sm">Always Ready</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">Available 24/7</div>
                <div className="text-blue-300 text-sm">Professional Support</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Success is Our 
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> Mission</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              With over 100 dedicated professionals, we combine years of experience with cutting-edge 
              technology to deliver exceptional results for every client.
            </p>

            {/* Expertise Tags */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-200">Our Expertise Includes:</h3>
              <div className="flex flex-wrap gap-3">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm hover:bg-blue-500/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-xl rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <a
                  href="https://wa.me/923180481998?text=Hello, I want to connect with your expert team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center space-x-3"
                >
                  <span>Connect With Our Team</span>
                  <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </a>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-2 border border-white/20 rounded-xl animate-ping"></div>
                </div>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Proven Track Record</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Always Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Trusted Results</span>
            </div>
          </div>
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
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.3;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Team;