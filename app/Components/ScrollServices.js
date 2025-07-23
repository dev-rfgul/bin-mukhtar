import React, { useState, useEffect, useRef } from 'react'

const ScrollServices = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const scrollTimeoutRef = useRef(null);
    const lastScrollTimeRef = useRef(0);

 
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

    // Add scroll progress state for smooth transitions
    const [scrollProgress, setScrollProgress] = useState(0);

    // Controlled scroll handler with smooth progress tracking
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const sectionHeight = sectionRef.current.offsetHeight;

            // Only calculate when the section is in view
            if (rect.top <= 0 && rect.bottom >= viewportHeight) {
                const scrolledDistance = Math.abs(rect.top);
                const totalScrollDistance = sectionHeight - viewportHeight;
                
                // Calculate overall progress (0 to 1)
                const overallProgress = Math.min(1, Math.max(0, scrolledDistance / totalScrollDistance));
                
                // Calculate which cards are currently active and transition progress
                const totalCards = cards.length;
                const progressPerCard = 1 / totalCards; // Remove -1 to give each card equal space
                
                // Find current card index and local progress within that card
                let newCardIndex = Math.floor(overallProgress * totalCards);
                let localProgress = (overallProgress * totalCards) % 1;
                
                // Handle edge cases
                if (overallProgress >= 1 || newCardIndex >= totalCards) {
                    newCardIndex = totalCards - 1;
                    localProgress = 1;
                }
                
                setCurrentCardIndex(newCardIndex);
                setScrollProgress(localProgress);
                setIsInViewport(true);
            } else if (rect.top > 0) {
                // Section hasn't been reached yet
                setCurrentCardIndex(0);
                setScrollProgress(0);
                setIsInViewport(false);
            } else if (rect.bottom < viewportHeight) {
                // Section has been completely scrolled past
                setCurrentCardIndex(cards.length - 1);
                setScrollProgress(1);
                setIsInViewport(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [cards.length]);

    return (
        <div className="relative">
            {/* Header Section */}
            <div className="py-12 md:py-20 px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6 md:mb-8">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                        <span className="text-blue-300 text-xs md:text-sm font-medium tracking-wide">OUR SERVICES</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 md:mb-8">
                        <span className="bg-gradient-to-r from-white via-blue-200 to-emerald-300 bg-clip-text text-transparent">
                            Comprehensive Business
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
                        Scroll down to explore our premium services designed to accelerate your business growth
                        and ensure complete compliance with industry standards.
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-8 md:mt-12 flex justify-center">
                        <div className="flex space-x-2">
                            {cards.map((_, index) => {
                                let barHeight = 'h-6 md:h-8';
                                let barColor = 'bg-white/20';
                                
                                if (index < currentCardIndex) {
                                    barColor = 'bg-emerald-400';
                                } else if (index === currentCardIndex) {
                                    barColor = scrollProgress > 0.5 ? 'bg-emerald-400/70' : 'bg-emerald-400';
                                } else if (index === currentCardIndex + 1 && scrollProgress > 0.5) {
                                    barColor = 'bg-emerald-400/50';
                                }
                                
                                return (
                                    <div key={index} className="relative">
                                        <div
                                            className={`w-2 ${barHeight} rounded-full transition-all duration-500 ${barColor}`}
                                        />
                                        {/* Progress fill for current transition */}
                                        {index === currentCardIndex && scrollProgress > 0 && (
                                            <div 
                                                className="absolute bottom-0 left-0 w-2 bg-blue-400 rounded-full transition-all duration-300"
                                                style={{ height: `${scrollProgress * 32}px` }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Cards Section */}
            <div
                ref={sectionRef}
                className="relative"
                style={{ height: `${cards.length * 100}vh` }}
            >
                <div className="sticky top-0 h-screen overflow-hidden">
                    <div className="relative h-full">
                        {/* Background animation elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-10 md:top-20 left-10 md:left-20 w-48 h-48 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
                            <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-40 h-40 md:w-80 md:h-80 bg-emerald-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[600px] md:h-[600px] bg-purple-500 rounded-full blur-3xl opacity-5 animate-pulse delay-500"></div>
                        </div>

                        {/* Cards Container */}
                        <div className="relative z-10 h-full flex items-center justify-center px-3 md:px-6">
                            <div className="w-full max-w-6xl mx-auto relative h-full">
                                {cards.map((card, index) => {
                                    // Determine visibility and positioning for each card
                                    let cardOpacity = 0;
                                    let cardTransform = '';
                                    let cardZIndex = 0;
                                    
                                    if (index === currentCardIndex) {
                                        // Current card - moves up as scroll progresses
                                        cardOpacity = 1 - scrollProgress * 0.3;
                                        cardTransform = `translateY(-${scrollProgress * 50}%) scale(${1 - scrollProgress * 0.05})`;
                                        cardZIndex = 10;
                                    } else if (index === currentCardIndex + 1 && currentCardIndex < cards.length - 1) {
                                        // Next card - slides up from bottom (only if not the last card)
                                        cardOpacity = scrollProgress;
                                        cardTransform = `translateY(${(1 - scrollProgress) * 100}%) scale(${0.95 + scrollProgress * 0.05})`;
                                        cardZIndex = 15;
                                    } else if (index < currentCardIndex) {
                                        // Previous cards - hidden above
                                        cardOpacity = 0;
                                        cardTransform = 'translateY(-100%) scale(0.95)';
                                        cardZIndex = 5;
                                    } else {
                                        // Future cards - hidden below
                                        cardOpacity = 0;
                                        cardTransform = 'translateY(100%) scale(0.95)';
                                        cardZIndex = 5;
                                    }
                                    
                                    // Special handling for the last card
                                    if (index === cards.length - 1 && currentCardIndex === cards.length - 1) {
                                        cardOpacity = 1;
                                        cardTransform = 'translateY(0%) scale(1)';
                                        cardZIndex = 20;
                                    }
                                    
                                    return (
                                        <div
                                            key={index}
                                            ref={el => cardRefs.current[index] = el}
                                            className="absolute inset-0 transition-all duration-300 ease-out"
                                            style={{
                                                opacity: cardOpacity,
                                                transform: cardTransform,
                                                zIndex: cardZIndex
                                            }}
                                        >
                                            <div className="h-full flex items-center justify-center">
                                                <div
                                                    className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] max-h-[500px] md:max-h-[600px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
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
                                                        <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20">
                                                            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                                                                <span className="text-white font-semibold text-xs md:text-sm">{card.badge}</span>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Card number indicator */}
                                                    <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20">
                                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                                                            <span className="text-white font-bold text-sm md:text-lg">{index + 1}</span>
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="relative z-10 h-full flex items-center p-4 md:p-8 lg:p-12">
                                                        {card.content}
                                                    </div>

                                                    {/* Animated border */}
                                                    <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-2xl md:rounded-3xl animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Side navigation dots - Hidden on mobile */}
                        <div className="hidden md:block absolute right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-30">
                            <div className="flex flex-col space-y-4">
                                {cards.map((_, index) => {
                                    let dotState = 'inactive';
                                    if (index === currentCardIndex) {
                                        dotState = scrollProgress < 0.5 ? 'active' : 'transitioning';
                                    } else if (index === currentCardIndex + 1 && scrollProgress > 0.5) {
                                        dotState = 'active';
                                    } else if (index < currentCardIndex || (index === currentCardIndex && scrollProgress >= 1)) {
                                        dotState = 'completed';
                                    }
                                    
                                    return (
                                        <div
                                            key={index}
                                            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                                                dotState === 'active'
                                                    ? 'bg-emerald-400 border-emerald-400 scale-125'
                                                    : dotState === 'completed'
                                                        ? 'bg-emerald-400/50 border-emerald-400/50'
                                                        : dotState === 'transitioning'
                                                            ? 'bg-emerald-400/70 border-emerald-400/70 scale-110'
                                                            : 'bg-transparent border-white/30 hover:border-white/50'
                                                }`}
                                            onClick={() => {
                                                setCurrentCardIndex(index);
                                                setScrollProgress(0);
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {/* Card title overlay */}
                        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-30">
                            <div className="bg-black/50 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                                <div className="text-white/60 text-xs md:text-sm mb-1">
                                    Service {currentCardIndex + 1} of {cards.length}
                                    {scrollProgress > 0.1 && currentCardIndex < cards.length - 1 && (
                                        <span className="ml-2 text-emerald-400">
                                            → {Math.round(scrollProgress * 100)}% to next
                                        </span>
                                    )}
                                </div>
                                <div className="text-white font-bold text-sm md:text-lg">
                                    {scrollProgress > 0.5 && currentCardIndex < cards.length - 1
                                        ? cards[currentCardIndex + 1]?.title
                                        : cards[currentCardIndex]?.title}
                                </div>
                            </div>
                        </div>

                        {/* Progress bar for current transition */}
                        {scrollProgress > 0 && currentCardIndex < cards.length - 1 && (
                            <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-30">
                                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                    <div className="w-24 md:w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full transition-all duration-300"
                                            style={{ width: `${scrollProgress * 100}%` }}
                                        />
                                    </div>
                                    <div className="text-white/60 text-xs mt-2 text-center">
                                        Transition Progress
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Scroll hint */}
                        {currentCardIndex < cards.length - 1 && (
                            <div className="absolute bottom-4 md:bottom-8 right-1/2 transform translate-x-1/2 z-20">
                                <div className="flex flex-col items-center text-white/60 animate-bounce">
                                    <span className="text-xs md:text-sm mb-2">
                                        {scrollProgress > 0.5 ? 'Continue scrolling' : 'Keep scrolling'}
                                    </span>
                                    <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
                                        <div className="w-1 h-2 md:h-3 bg-white/50 rounded-full animate-pulse mt-1 md:mt-2"></div>
                                        {/* Scroll progress indicator inside the scroll hint */}
                                        <div 
                                            className="absolute bottom-0 left-0 right-0 bg-emerald-400/30 transition-all duration-300 rounded-full"
                                            style={{ height: `${scrollProgress * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .scroll-indicator {
                    position: fixed;
                    top: 50%;
                    right: 1rem;
                    transform: translateY(-50%);
                    z-index: 50;
                }
                
                @media (min-width: 768px) {
                    .scroll-indicator {
                        right: 2rem;
                    }
                }
                
                /* Smooth scrolling for the entire page */
                html {
                    scroll-behavior: smooth;
                }
                
                /* Custom scrollbar for webkit browsers */
                ::-webkit-scrollbar {
                    width: 6px;
                }
                
                @media (min-width: 768px) {
                    ::-webkit-scrollbar {
                        width: 8px;
                    }
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
                
                /* Prevent horizontal scroll on mobile */
                body {
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    )
}

export default ScrollServices