import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

const ScrollServices = () => {
    const router = useRouter();
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    const scrollTimeoutRef = useRef(null);
    const lastScrollTimeRef = useRef(0);

 
    const cards = [
        {
            title: 'NTN Registration – Salaried',
            subtitle: 'Essential tax registration for salaried individuals',
            backgroundImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Most Popular',
            price: 'RS: 400',
            time: '1-2 Working Days',
            category: 'Income Tax return',
            whatsappMessage: 'Hello, I am interested in *NTN Registration – Salaried* (RS: 400). I would like to proceed with the registration.',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                        NTN Registration – Salaried
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold text-emerald-400">RS: 400</span>
                        <span className="text-lg text-white/80">• 1-2 Working Days</span>
                    </div>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        Quick and affordable NTN registration service for salaried individuals. Get your tax registration completed hassle-free.
                    </p>
                    <div className="space-y-2 mb-6">
                        <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">Requirements:</p>
                        <ul className="space-y-1.5 text-sm text-white/90">
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Color copy of CNIC</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Latest paid electricity bill</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Phone Number & Email address</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: 'Private Limited Company Registration',
            subtitle: 'Complete company formation with SECP',
            backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Essential',
            price: 'RS: 12,000',
            time: '2-3 Working Days',
            category: "Company's Registration",
            whatsappMessage: 'Hello, I am interested in *Private Limited Company Registration* (RS: 12,000). I would like to start my company registration process.',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                        Private Limited Company Registration
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold text-emerald-400">RS: 12,000</span>
                        <span className="text-lg text-white/80">• 2-3 Working Days</span>
                    </div>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        Professional company registration with SECP. Complete setup with all legal documentation and compliance requirements.
                    </p>
                    <div className="space-y-2 mb-6">
                        <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">Requirements:</p>
                        <ul className="space-y-1.5 text-sm text-white/90">
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Three proposed company names</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>CNIC copies of directors</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>NTN of directors/subscribers</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Registered address details</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: 'GST Registration',
            subtitle: 'Sales tax registration for your business',
            backgroundImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Required',
            price: 'RS: 15,000',
            time: '2-3 Working Days',
            category: 'Sales Tax Registration',
            whatsappMessage: 'Hello, I am interested in *GST Registration* (RS: 15,000 for non-manufacturers). Please provide more details about the registration process.',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                        GST Registration
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold text-emerald-400">RS: 15,000</span>
                        <span className="text-lg text-white/80">• 2-3 Working Days</span>
                    </div>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        Complete GST registration service including documentation, biometric verification, and compliance setup.
                    </p>
                    <div className="space-y-2 mb-6">
                        <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">Requirements:</p>
                        <ul className="space-y-1.5 text-sm text-white/90">
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Bank Account Certificate</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>GPS-tagged business premises photos</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Utility bills & CNIC copies</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Biometric Verification</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: 'Annual Income Tax Filing – Salaried',
            subtitle: 'Professional tax return filing for individuals',
            backgroundImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Annual',
            price: 'Minimum: 2,650',
            time: '4-5 Working Days',
            category: 'Income Tax return',
            whatsappMessage: 'Hello, I am interested in *Annual Income Tax Filing – Salaried* (Minimum Fee: RS 2,650). I need help filing my annual tax return.',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                        Annual Income Tax Filing
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold text-emerald-400">Min: RS 2,650</span>
                        <span className="text-lg text-white/80">• 4-5 Working Days</span>
                    </div>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        Expert annual tax return filing service for salaried individuals with complete documentation and compliance.
                    </p>
                    <div className="space-y-2 mb-6">
                        <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">Requirements:</p>
                        <ul className="space-y-1.5 text-sm text-white/90">
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Annual Salary certificate</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Other income sources (if any)</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Annual expenses & asset details</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Investment & disposal records</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: 'NTN Registration – Business',
            subtitle: 'Tax registration for business entities',
            backgroundImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Popular',
            price: 'RS: 2,500',
            time: '1-2 Working Days',
            category: 'Income Tax return',
            whatsappMessage: 'Hello, I am interested in *NTN Registration – Business* (RS: 2,500). I would like to register my business for tax purposes.',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                        NTN Registration – Business
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold text-emerald-400">RS: 2,500</span>
                        <span className="text-lg text-white/80">• 1-2 Working Days</span>
                    </div>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        Fast and reliable NTN registration for business entities with complete documentation support.
                    </p>
                    <div className="space-y-2 mb-6">
                        <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">Requirements:</p>
                        <ul className="space-y-1.5 text-sm text-white/90">
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Color copy of CNIC</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Office premises documents</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Letter head & utility bills</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Contact details</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: 'Monthly Sales Tax Return Filing',
            subtitle: 'Regular compliance for GST registered businesses',
            backgroundImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
            badge: 'Monthly',
            price: 'Minimum: 5,000',
            time: '3-4 Working Days',
            category: 'Sales Tax Registration',
            whatsappMessage: 'Hello, I am interested in *Monthly Sales Tax Return Filing* service (Minimum Fee: RS 5,000). I need assistance with my sales tax compliance.',
            content: (
                <div className="max-w-2xl">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                        Monthly Sales Tax Filing
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold text-emerald-400">Min: RS 5,000</span>
                        <span className="text-lg text-white/80">• 3-4 Working Days</span>
                    </div>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                        Professional monthly Federal/Provincial sales tax return filing service ensuring timely compliance.
                    </p>
                    <div className="space-y-2 mb-6">
                        <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide">Requirements:</p>
                        <ul className="space-y-1.5 text-sm text-white/90">
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Sales invoice copies</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Purchase invoice copies</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Bank statements</li>
                            <li className="flex items-start"><span className="text-emerald-400 mr-2">✓</span>Other supporting documents</li>
                        </ul>
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
                                        // Current card - moves up as scroll progresses, stays more visible
                                        cardOpacity = 1 - scrollProgress * 0.5; // Increased visibility during transition
                                        cardTransform = `translateY(-${scrollProgress * 40}%) scale(${1 - scrollProgress * 0.08})`;
                                        cardZIndex = 10;
                                    } else if (index === currentCardIndex + 1 && currentCardIndex < cards.length - 1) {
                                        // Next card - slides up from bottom with better overlap (only if not the last card)
                                        cardOpacity = scrollProgress * 0.9; // Start showing earlier
                                        cardTransform = `translateY(${(1 - scrollProgress) * 80}%) scale(${0.92 + scrollProgress * 0.08})`; // Closer starting position
                                        cardZIndex = 15;
                                    } else if (index < currentCardIndex) {
                                        // Previous cards - hidden above
                                        cardOpacity = 0;
                                        cardTransform = 'translateY(-100%) scale(0.92)';
                                        cardZIndex = 5;
                                    } else {
                                        // Future cards - hidden below
                                        cardOpacity = 0;
                                        cardTransform = 'translateY(100%) scale(0.92)';
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
                                            className="absolute inset-0 transition-all duration-150 ease-out"
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
                                                    <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-8 lg:p-12">
                                                        {card.content}
                                                        
                                                        {/* Action Buttons */}
                                                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                                            <a
                                                                href={`https://wa.me/923180481998?text=${encodeURIComponent(card.whatsappMessage)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="bg-green-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2"
                                                            >
                                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                                                </svg>
                                                                WhatsApp
                                                            </a>
                                                            <button
                                                                onClick={() => {
                                                                    const params = new URLSearchParams({ search: card.title });
                                                                    router.push(`/Services?${params.toString()}`);
                                                                }}
                                                                className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                                            >
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                                View Details
                                                            </button>
                                                        </div>
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