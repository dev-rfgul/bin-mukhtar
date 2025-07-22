import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, } from "framer-motion";
import { cn } from "../lib/utils";
import { Card, CardContent } from "../ui/card";
import { Calendar } from "lucide-react";
const DEFAULT_EVENTS = [
    {
        year: "2023",
        title: "Major Achievement",
        subtitle: "Organization Name",
        description: "Description of the achievement or milestone reached during this time period.",
    },
    {
        year: "2022",
        title: "Important Milestone",
        subtitle: "Organization Name",
        description: "Details about this significant milestone and its impact.",
    },
    {
        year: "2021",
        title: "Key Event",
        subtitle: "Organization Name",
        description: "Information about this key event in the timeline.",
    },
];
export const ScrollTimeline = ({ events = DEFAULT_EVENTS, title = "Timeline", subtitle = "Scroll to explore the journey", animationOrder = "sequential", cardAlignment = "alternating", lineColor = "bg-primary/30", activeColor = "bg-primary", progressIndicator = true, cardVariant = "default", cardEffect = "none", parallaxIntensity = 0.2, progressLineWidth = 2, progressLineCap = "round", dateFormat = "badge", revealAnimation = "fade", className = "", connectorStyle = "line", perspective = false, darkMode = false, smoothScroll = true, }) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const timelineRefs = useRef([]);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            const newIndex = Math.floor(v * events.length);
            if (newIndex !== activeIndex &&
                newIndex >= 0 &&
                newIndex < events.length) {
                setActiveIndex(newIndex);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, events.length, activeIndex]);
    const getCardVariants = (index) => {
        const baseDelay = animationOrder === "simultaneous"
            ? 0
            : animationOrder === "staggered"
                ? index * 0.2
                : index * 0.3;
        const initialStates = {
            fade: { opacity: 0, y: 20 },
            slide: {
                x: cardAlignment === "left"
                    ? -100
                    : cardAlignment === "right"
                        ? 100
                        : index % 2 === 0
                            ? -100
                            : 100,
                opacity: 0,
            },
            scale: { scale: 0.8, opacity: 0 },
            flip: { rotateY: 90, opacity: 0 },
            none: { opacity: 1 },
        };
        return {
            initial: initialStates[revealAnimation],
            whileInView: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotateY: 0,
                transition: {
                    duration: 0.7,
                    delay: baseDelay,
                    ease: [0.25, 0.1, 0.25, 1.0],
                },
            },
            viewport: { once: false, margin: "-100px" },
        };
    };
    const getConnectorClasses = () => {
        const baseClasses = cn("absolute left-1/2 transform -translate-x-1/2", lineColor);
        const widthStyle = `w-[${progressLineWidth}px]`;
        switch (connectorStyle) {
            case "dots":
                return cn(baseClasses, "w-1 rounded-full");
            case "dashed":
                return cn(baseClasses, widthStyle, `[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]`);
            case "line":
            default:
                return cn(baseClasses, widthStyle);
        }
    };
    const getCardClasses = (index) => {
        const baseClasses = "relative z-30 rounded-lg transition-all duration-300";
        const variantClasses = {
            default: "bg-card border shadow-sm",
            elevated: "bg-card border border-border/40 shadow-md",
            outlined: "bg-card/50 backdrop-blur border-2 border-primary/20",
            filled: "bg-primary/10 border border-primary/30",
        };
        const effectClasses = {
            none: "",
            glow: "hover:shadow-[0_0_15px_rgba(var(--primary-rgb)/0.5)]",
            shadow: "hover:shadow-lg hover:-translate-y-1",
            bounce: "hover:scale-[1.03] hover:shadow-md active:scale-[0.97]",
        };
        const alignmentClassesDesktop = cardAlignment === "alternating"
            ? index % 2 === 0
                ? "lg:mr-[calc(50%+20px)]"
                : "lg:ml-[calc(50%+20px)]"
            : cardAlignment === "left"
                ? "lg:mr-auto lg:ml-0"
                : "lg:ml-auto lg:mr-0";
        const perspectiveClass = perspective
            ? "transform transition-transform hover:rotate-y-1 hover:rotate-x-1"
            : "";
        return cn(baseClasses, variantClasses[cardVariant], effectClasses[cardEffect], alignmentClassesDesktop, "w-full lg:w-[calc(50%-40px)]");
    };
    return (_jsxs("div", { ref: scrollRef, className: cn("relative min-h-screen w-full overflow-hidden", darkMode ? "bg-background text-foreground" : "", className), children: [_jsxs("div", { className: "text-center py-16 px-4", children: [_jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-4", children: title }), _jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: subtitle })] }), _jsx("div", { className: "relative max-w-6xl mx-auto px-4 pb-24", children: _jsxs("div", { className: "relative mx-auto", children: [_jsx("div", { className: cn(getConnectorClasses(), "h-full absolute top-0 z-10") }), progressIndicator && (_jsxs(_Fragment, { children: [_jsx(motion.div, { className: "absolute top-0 z-10", style: {
                                        height: progressHeight,
                                        width: progressLineWidth,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                                        background: `linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)`,
                                        // Enhanced shadow for a constant glow effect along the path
                                        boxShadow: `
                    0 0 15px rgba(99,102,241,0.5),
                    0 0 25px rgba(168,85,247,0.3)
                  `,
                                    } }), _jsx(motion.div, { className: "absolute z-20", style: {
                                        top: progressHeight,
                                        left: "50%",
                                        translateX: "-50%",
                                        translateY: "-50%", // Center the comet on the line's end point
                                    }, children: _jsx(motion.div, { className: "w-5 h-5 rounded-full" // Size of the comet core
                                        , style: {
                                            background: "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                                            // Intense, layered glow effect for the comet
                                            boxShadow: `
                      0 0 15px 4px rgba(168, 85, 247, 0.6),
                      0 0 25px 8px rgba(99, 102, 241, 0.4),
                      0 0 40px 15px rgba(34, 211, 238, 0.2)
                    `,
                                        }, animate: {
                                            scale: [1, 1.3, 1],
                                        }, transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        } }) })] })), _jsx("div", { className: "relative z-20", children: events.map((event, index) => {
                                const yOffset = useTransform(smoothProgress, [0, 1], [parallaxIntensity * 100, -parallaxIntensity * 100]);
                                return (_jsxs("div", { ref: (el) => {
                                        timelineRefs.current[index] = el;
                                    }, className: cn("relative flex items-center mb-20 py-4", "flex-col lg:flex-row", cardAlignment === "alternating"
                                        ? index % 2 === 0
                                            ? "lg:justify-start"
                                            : "lg:flex-row-reverse lg:justify-start"
                                        : cardAlignment === "left"
                                            ? "lg:justify-start"
                                            : "lg:flex-row-reverse lg:justify-start"), children: [_jsx("div", { className: cn("absolute top-1/2 transform -translate-y-1/2 z-30", "left-1/2 -translate-x-1/2"), children: _jsx(motion.div, { className: cn("w-6 h-6 rounded-full border-4 bg-background flex items-center justify-center", index <= activeIndex
                                                    ? "border-primary"
                                                    : "border bg-card"), animate: index <= activeIndex
                                                    ? {
                                                        scale: [1, 1.3, 1],
                                                        boxShadow: [
                                                            "0 0 0px rgba(99,102,241,0)",
                                                            "0 0 12px rgba(99,102,241,0.6)",
                                                            "0 0 0px rgba(99,102,241,0)",
                                                        ],
                                                    }
                                                    : {}, transition: {
                                                    duration: 0.8,
                                                    repeat: Infinity,
                                                    repeatDelay: 4,
                                                    ease: "easeInOut",
                                                } }) }), _jsx(motion.div, { className: cn(getCardClasses(index), "mt-12 lg:mt-0"), variants: getCardVariants(index), initial: "initial", whileInView: "whileInView", viewport: { once: false, margin: "-100px" }, style: parallaxIntensity > 0 ? { y: yOffset } : undefined, children: _jsx(Card, { className: "bg-background border", children: _jsxs(CardContent, { className: "p-6", children: [dateFormat === "badge" ? (_jsxs("div", { className: "flex items-center mb-2", children: [event.icon || (_jsx(Calendar, { className: "h-4 w-4 mr-2 text-primary" })), _jsx("span", { className: cn("text-sm font-bold", event.color
                                                                        ? `text-${event.color}`
                                                                        : "text-primary"), children: event.year })] })) : (_jsx("p", { className: "text-lg font-bold text-primary mb-2", children: event.year })), _jsx("h3", { className: "text-xl font-bold mb-1", children: event.title }), event.subtitle && (_jsx("p", { className: "text-muted-foreground font-medium mb-2", children: event.subtitle })), _jsx("p", { className: "text-muted-foreground", children: event.description })] }) }) })] }, event.id || index));
                            }) })] }) })] }));
};
