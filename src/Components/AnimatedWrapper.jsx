import React, { useState, useEffect, useRef } from "react";

// Animated Wrapper Component
export default function AnimatedWrapper({ 
    children, 
    animation = "fade-up", 
    delay = 0, 
    threshold = 0.3,
    rootMargin = "0px 0px -50px 0px",
    className = ""
}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
                    setIsVisible(true);
                }
            },
            {
                threshold: threshold,
                rootMargin: rootMargin
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
    }, [threshold, rootMargin]);

    const getDelayClass = (delayTime) => {
        if (delayTime === 100) return "delay-100";
        if (delayTime === 200) return "delay-200";
        if (delayTime === 300) return "delay-300";
        if (delayTime === 400) return "delay-400";
        if (delayTime === 500) return "delay-500";
        return "";
    };

    return (
        <>
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }

                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }

                @keyframes rotateIn {
                    from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
                    to { opacity: 1; transform: rotate(0deg) scale(1); }
                }

                @keyframes slideInFromBottom {
                    from { opacity: 0; transform: translateY(100px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-fade-down {
                    animation: fadeInDown 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-fade-left {
                    animation: fadeInLeft 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-fade-right {
                    animation: fadeInRight 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-scale-in {
                    animation: scaleIn 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-rotate-in {
                    animation: rotateIn 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-slide-up {
                    animation: slideInFromBottom 0.8s ease-out forwards;
                    opacity: 0;
                }

                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
            `}</style>

            <div 
                ref={elementRef}
                className={`${isVisible ? `animate-${animation} ${getDelayClass(delay)}` : ""} ${className}`}
            >
                {children}
            </div>
        </>
    );
}
