"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: string; // e.g., "animate-in fade-in slide-in-from-bottom-8"
    duration?: number;
    delay?: number;
}

export default function ScrollAnimation({
    children,
    className = "",
    animation = "animate-in fade-in slide-in-from-bottom-12",
    duration = 700,
    delay = 0,
}: ScrollAnimationProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: "50px", // Trigger slightly before it enters fully
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`${className} transition-opacity duration-${duration} ${isVisible ? `opacity-100 ${animation}` : "opacity-0"
                }`}
            style={{
                animationDuration: `${duration}ms`,
                animationDelay: `${delay}ms`,
                animationFillMode: "forwards",
            }}
        >
            {children}
        </div>
    );
}
