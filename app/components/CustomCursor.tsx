"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
    const [isPointer, setIsPointer] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Use ref for direct DOM manipulation to ensure high performance syncing
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Update ref positions directly for zero lag
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') !== null ||
                target.closest('a') !== null ||
                target.closest('[role="button"]') !== null
            );
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    // Hide on mobile/touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            {/* Main Cursor Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: `translate(-100px, -100px)`, // Initial off-screen
                }}
            >
                <div
                    className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-200 ease-out
            ${isClicking ? "scale-75" : "scale-100"}
            ${isPointer ? "w-2 h-2" : "w-1.5 h-1.5"}
          `}
                />
            </div>

            {/* Outer Ring - Now synced perfectly */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    transform: `translate(-100px, -100px)`, // Initial off-screen
                }}
            >
                <div
                    className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400 transition-all duration-200 ease-out
                ${isClicking ? "scale-90 opacity-80" : "scale-100 opacity-100"}
                ${isPointer
                            ? "w-12 h-12 bg-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.5)] border-cyan-300"
                            : "w-8 h-8 bg-transparent shadow-none border-cyan-400/40"
                        }
            `}
                />
            </div>

            <style jsx global>{`
        @media (pointer: fine) {
          body, a, button, input, textarea {
            cursor: none !important;
          }
        }
      `}</style>
        </>
    );
}
