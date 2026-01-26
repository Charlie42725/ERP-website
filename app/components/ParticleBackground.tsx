"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    targetAlpha: number; // For flickering/breathing
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Configuration matching user specs
        const particleCount = 80; // Denser but manageable
        const connectionDistance = 180; // Connection range
        const mouseRadius = 250;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.05, // Ultra slow drift
                    vy: (Math.random() - 0.5) * 0.05,
                    size: Math.random() * 4 + 2, // 2px - 6px
                    alpha: Math.random() * 0.5 + 0.1, // 0.1 - 0.6 start
                    targetAlpha: Math.random() * 0.5 + 0.1,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Set Glow Effect Global Style (Performance optimization: set once if possible, or per particle)
            // Note: Canvas shadowBlur can be expensive. We use it sparingly or globally.
            // Let's rely on semi-transparent fills for performance, and maybe distinct drawing passes.

            // Pass 1: Draw Lines (Background Layer)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                // Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * 0.3; // Max 0.3 opacity
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`; // Cyan lines
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Pass 2: Update & Draw Particles (Foreground "Stars")
            particles.forEach((p) => {
                // 1. Movement & Drift
                p.x += p.vx;
                p.y += p.vy;

                // 2. Boundary Wrap (Endless Space feel)
                if (p.x < -50) p.x = canvas.width + 50;
                if (p.x > canvas.width + 50) p.x = -50;
                if (p.y < -50) p.y = canvas.height + 50;
                if (p.y > canvas.height + 50) p.y = -50;

                // 3. Mouse Interaction: "Gather/Attract" + Slight Turbulence
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseRadius) {
                    const force = (mouseRadius - distance) / mouseRadius; // 0 to 1
                    // Gentle Attraction
                    p.x += (dx / distance) * force * 0.8;
                    p.y += (dy / distance) * force * 0.8;
                }

                // 4. Alpha Breathing (Twinkle)
                if (Math.random() < 0.05) {
                    p.targetAlpha = Math.random() * 0.5 + 0.1;
                }
                p.alpha += (p.targetAlpha - p.alpha) * 0.05;

                // 5. Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                // Add Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = "rgba(34, 211, 238, 0.8)";
                ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`; // Cyan
                ctx.fill();

                // Reset shadow for next operations if needed (though we only draw dots now)
                ctx.shadowBlur = 0;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        }

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
