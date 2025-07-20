"use client";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
};

export default useSmoothScroll;
