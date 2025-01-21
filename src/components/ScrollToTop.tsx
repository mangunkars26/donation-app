import React, { useState, useEffect } from "react";


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    //fungsi untuk gulir ke atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    //fungsi untuk memantau scrolling
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    return (
        <div>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="fixed z-50 bottom-10 right-10 bg-white/10 backdrop-blur-lg rounded-full p-3 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </div>
            )}
        </div>
    )
};

export default ScrollToTop;