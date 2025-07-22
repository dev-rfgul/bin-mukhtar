import React, { useState, useEffect, useRef } from 'react'
import ScrollStack from '../../src/components/lightswind/scroll-stack';

const ScrollServices = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    const cards = [
        {
            title: 'Tax Planning & Compliance',
            subtitle: 'Strategic tax solutions to optimize your business growth and ensure full compliance',
            backgroundImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Essential',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                        Tax Planning & Compliance
                    </h3>
                    <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
                        Comprehensive tax strategies designed to minimize your tax liability while ensuring full compliance with ever-changing regulations.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Income Tax
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Corporate Tax
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            GST/VAT
                        </span>
                    </div>
                    <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                        Learn More
                    </button>
                </div>
            ),
        },
        {
            title: 'Business Registration & Setup',
            subtitle: 'Complete business formation services from concept to operation',
            backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Popular',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                        Business Registration & Setup
                    </h3>
                    <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
                        Streamlined business registration process with expert guidance through all legal requirements and documentation.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Company Registration
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            License Acquisition
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Compliance Setup
                        </span>
                    </div>
                    <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                        Start Registration
                    </button>
                </div>
            ),
        },
        {
            title: 'Financial Advisory & Consulting',
            subtitle: 'Expert financial guidance to accelerate your business success',
            backgroundImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Premium',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                        Financial Advisory & Consulting
                    </h3>
                    <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
                        Strategic financial planning and advisory services to optimize cash flow, investments, and long-term growth strategies.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Financial Planning
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Investment Advisory
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Risk Management
                        </span>
                    </div>
                    <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                        Get Consultation
                    </button>
                </div>
            ),
        },
        {
            title: 'Audit & Assurance Services',
            subtitle: 'Comprehensive audit solutions ensuring accuracy and compliance',
            backgroundImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Certified',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                        Audit & Assurance Services
                    </h3>
                    <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
                        Professional audit and assurance services providing stakeholders with confidence in your financial reporting and internal controls.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Financial Audits
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Internal Audits
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Compliance Reviews
                        </span>
                    </div>
                    <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                        Schedule Audit
                    </button>
                </div>
            ),
        },
        {
            title: '24/7 Support & Consultation',
            subtitle: 'Round-the-clock expert support for all your business needs',
            backgroundImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Always Available',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                        24/7 Support & Consultation
                    </h3>
                    <p className="text-lg sm:text-xl text-white/90 mb-6 leading-relaxed">
                        Dedicated support team available around the clock to address your urgent business questions and provide expert guidance when you need it most.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Phone Support
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Online Chat
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                            Emergency Help
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                            Contact Support
                        </button>
                        <a 
                            href="https://wa.me/923180481998?text=Hello, I need urgent assistance"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-center"
                        >
                            WhatsApp Now
                        </a>
                    </div>
                </div>
            ),
        },
    ];

    // Intersection Observer to detect when component enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                // We'll handle the viewport logic in the scroll handler
                // This is just for initial setup
                if (entry.isIntersecting) {
                    setIsInViewport(true);
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Handle scroll to show cards sequentially
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const sectionHeight = sectionRef.current.offsetHeight;
            
            // Only calculate when the section is in view and being scrolled through
            if (rect.top <= 0 && rect.bottom >= viewportHeight) {
                // Calculate how much of the section has been scrolled through
                const scrolledDistance = Math.abs(rect.top);
                const totalScrollDistance = sectionHeight - viewportHeight;
                
                // Calculate progress (0 to 1)
                let progress = scrolledDistance / totalScrollDistance;
                progress = Math.min(1, Math.max(0, progress*1.5));

                // Map progress to card index
                const totalCards = cards.length;
                let newCardIndex = Math.floor(progress * totalCards);
                
                // Ensure we don't exceed the last card index
                newCardIndex = Math.min(newCardIndex, totalCards - 1);
                
                setCurrentCardIndex(newCardIndex);
                setIsInViewport(true);
            } else if (rect.top > 0) {
                // Section hasn't been reached yet
                setCurrentCardIndex(0);
                setIsInViewport(false);
            } else if (rect.bottom < viewportHeight) {
                // Section has been completely scrolled past
                setCurrentCardIndex(cards.length - 1);
                setIsInViewport(false);
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Initial calculation
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [cards.length]);

    return (
        <div className="relative">
            {/* Header Section */}
            <div className=" py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-8">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-blue-300 text-sm font-medium tracking-wide">OUR SERVICES</span>
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
                        <span className="bg-gradient-to-r from-white via-blue-200 to-emerald-300 bg-clip-text text-transparent">
                            Comprehensive Business
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h1>
                    
                    <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                        Scroll down to explore our premium services designed to accelerate your business growth 
                        and ensure complete compliance with industry standards.
                    </p>
                    
                    {/* Progress indicator */}
                    <div className="mt-12 flex justify-center">
                        <div className="flex space-x-2">
                            {cards.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-8 rounded-full transition-all duration-500 ${
                                        index <= currentCardIndex 
                                            ? 'bg-emerald-400' 
                                            : 'bg-white/20'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Cards Section */}
            <div 
                ref={sectionRef}
                className="relative"
                style={{ height: `${cards.length * 150}vh` }}
            >
                <div className="sticky top-0 h-screen overflow-hidden">
                    <div className="relative h-full ">
                        {/* Background animation elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
                            <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
                        </div>

                        {/* Debug info (remove in production) */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
                            Card: {currentCardIndex + 1}/{cards.length}
                        </div>

                        {/* Cards Container */}
                        <div className="relative z-10 h-full flex items-center justify-center px-6">
                            <div className="w-full max-w-6xl mx-auto">
                                {cards.map((card, index) => (
                                    <div
                                        key={index}
                                        ref={el => cardRefs.current[index] = el}
                                        className={`absolute inset-0 transition-all duration-1000 ease-out ${
                                            index === currentCardIndex 
                                                ? 'opacity-100 translate-y-0 scale-100' 
                                                : index < currentCardIndex
                                                    ? 'opacity-0 -translate-y-20 scale-95'
                                                    : 'opacity-0 translate-y-20 scale-95'
                                        }`}
                                        style={{
                                            transitionDelay: `${index === currentCardIndex ? '0ms' : '200ms'}`
                                        }}
                                    >
                                        <div className="h-full flex items-center justify-center">
                                            <div 
                                                className="relative w-full max-w-5xl h-[80vh] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                                                style={{
                                                    backgroundImage: `url('${card.backgroundImage}')`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                }}
                                            >
                                                {/* Background overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                                                
                                                {/* Badge */}
                                                {card.badge && (
                                                    <div className="absolute top-6 right-6 z-20">
                                                        <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                                            <span className="text-white font-semibold text-sm">{card.badge}</span>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Card number indicator */}
                                                <div className="absolute top-6 left-6 z-20">
                                                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="relative z-10 h-full flex items-center p-8 lg:p-12">
                                                    {card.content}
                                                </div>

                                                {/* Animated border */}
                                                <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-3xl animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Side navigation dots */}
                        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
                            <div className="flex flex-col space-y-4">
                                {cards.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                                            index === currentCardIndex
                                                ? 'bg-emerald-400 border-emerald-400 scale-125'
                                                : index < currentCardIndex
                                                    ? 'bg-emerald-400/50 border-emerald-400/50'
                                                    : 'bg-transparent border-white/30 hover:border-white/50'
                                        }`}
                                        onClick={() => setCurrentCardIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Card title overlay */}
                        <div className="absolute bottom-8 left-8 z-20">
                            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                <div className="text-white/60 text-sm mb-1">Service {currentCardIndex + 1} of {cards.length}</div>
                                <div className="text-white font-bold text-lg">{cards[currentCardIndex]?.title}</div>
                            </div>
                        </div>

                        {/* Scroll hint */}
                        {currentCardIndex < cards.length - 1 && (
                            <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 z-20">
                                <div className="flex flex-col items-center text-white/60 animate-bounce">
                                    <span className="text-sm mb-2">Keep scrolling</span>
                                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                                        <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse mt-2"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full backdrop-blur-sm mb-8">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-emerald-300 text-sm font-medium tracking-wide">READY TO START?</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                        Choose the service that best fits your needs or contact us for a custom solution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                            Schedule Consultation
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-4 rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                            View All Services
                        </button>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .scroll-indicator {
                    position: fixed;
                    top: 50%;
                    right: 2rem;
                    transform: translateY(-50%);
                    z-index: 50;
                }
                
                @media (max-width: 768px) {
                    .scroll-indicator {
                        right: 1rem;
                    }
                }
                
                /* Smooth scrolling for the entire page */
                html {
                    scroll-behavior: smooth;
                }
                
                /* Custom scrollbar for webkit browsers */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                
                ::-webkit-scrollbar-track {
                    background: rgba(15, 23, 42, 0.3);
                }
                
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #3b82f6, #10b981);
                    border-radius: 4px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #2563eb, #059669);
                }
            `}</style>
        </div>
    )
}

export default ScrollServices

