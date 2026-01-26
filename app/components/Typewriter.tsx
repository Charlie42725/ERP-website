"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    startDelay?: number;
}

export default function Typewriter({
    text,
    delay = 0,
    speed = 100,
    className = "",
    startDelay = 0
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex++;
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started]);

    return (
        <span className={className}>
            {displayedText}
            {/* Optional Cursor Effect - removed for cleaner look, or can be added back */}
        </span>
    );
}
