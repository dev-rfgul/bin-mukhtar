import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Star, Play, Pause, ExternalLink, Sparkles } from "lucide-react";

const Testimonials = ({ buttonText = "View All Services" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonialData = [
    {
      id: 1,
      name: "Individual NTN Registration",
      text: "Just register your Individual NTN in 3 simple steps. Register, Upload, Pay.",
      icon: "🏛️",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      rating: 4.9,
      completionTime: "24 hours"
    },
    {
      id: 2,
      name: "Tax Filing",
      text: "No appointments, no documents, File your taxes within minutes.",
      icon: "📋",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      rating: 4.8,
      completionTime: "30 minutes"
    },
    {
      id: 3,
      name: "Business NTN Registration",
      text: "The simplest and quickest way to start your business in Pakistan.",
      icon: "🏢",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      rating: 5.0,
      completionTime: "2-3 days"
    },
    {
      id: 4,
      name: "Sales Tax Registration",
      text: "GST Registration was never this easy, Register your sales tax with Befiler Now.",
      icon: "💼",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      rating: 4.7,
      completionTime: "3-5 days"
    },
    {
      id: 5,
      name: "Business Tax Filing",
      text: "Stop worrying about your taxes, Befiler team of experts got you covered.",
      icon: "📊",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      rating: 4.9,
      completionTime: "1-2 days"
    },
  ];

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
      setIsTransitioning(false);
    }, 150);
  }, [testimonialData.length]);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 150);
  }, [testimonialData.length]);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, nextSlide]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen  py-16 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                          radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Premium Services
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Experience seamless business solutions with our expert team
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <div
              className={`flex transition-all duration-700 ease-out ${isTransitioning ? 'opacity-75 scale-95' : 'opacity-100 scale-100'}`}
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
              {testimonialData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div
                    className={`relative bg-gradient-to-br ${testimonial.bgGradient} rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 transition-all duration-500 ${hoveredCard === index ? 'transform scale-105' : ''
                      }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <div className="text-8xl">{testimonial.icon}</div>
                    </div>

                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                      {/* Service Icon */}
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${testimonial.gradient} rounded-2xl text-white text-3xl mb-8 shadow-lg`}>
                        {testimonial.icon}
                      </div>

                      {/* Service Name */}
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {testimonial.name}
                      </h3>

                      {/* Service Description */}
                      <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                        {testimonial.text}
                      </p>

                      {/* Service Stats */}
                      <div className="flex items-center justify-center gap-8 mb-8">
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${i < Math.floor(testimonial.rating)
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="font-semibold text-gray-700">{testimonial.rating}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="font-medium">{testimonial.completionTime}</span>
                        </div>
                      </div>

                      {/* WhatsApp Button */}
                      <button className={`group bg-gradient-to-r ${testimonial.gradient} hover:shadow-2xl text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3`}>
                        <a
                          href="https://wa.me/923180481998?text=Hello , I am interested in your services"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                          <span className="text-lg">Get Started on WhatsApp</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mb-12">
          {/* Dot Indicators */}
          <div className="flex gap-3">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            ) : (
              <Play className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
            )}
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 inline-flex items-center gap-3">
            <span className="relative z-10">{buttonText}</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-gray-200 rounded-full h-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / testimonialData.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-sm text-gray-500">
            {currentIndex + 1} of {testimonialData.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;