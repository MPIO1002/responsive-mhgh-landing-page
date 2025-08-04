"use client";
import React, { useState, useEffect } from "react";

const features = [
    { id: 1, img: "/feature_1.jpeg" },
    { id: 2, img: "/feature_2.jpeg" },
    { id: 3, img: "/feature_3.jpeg" },
    { id: 4, img: "/feature_4.jpeg" },
    { id: 5, img: "/feature_5.jpeg" }
];

const FeatureSection = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    // Auto change feature every 5 seconds
    useEffect(() => {
        if (features.length <= 1) return;
        const interval = setInterval(() => {
            setActiveIdx(prevIdx => (prevIdx + 1) % features.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setActiveIdx((prevIdx) => (prevIdx - 1 + features.length) % features.length);
    };

    const handleNext = () => {
        setActiveIdx((prevIdx) => (prevIdx + 1) % features.length);
    };

    return (
        <section className="relative w-full flex flex-col items-center justify-center py-10">
            {/* Title */}
            <div className="w-full flex flex-col items-center z-10 mb-0">
                <div className="hidden md:flex justify-center mb-0">
                    <img 
                        src="/featureLabel.png" 
                        alt="Feature Label Desktop" 
                        width={400} 
                        height={100} 
                        className="w-auto h-20 md:h-14 xl:h-28 min-[1800px]:h-32" 
                        loading="lazy" 
                    />
                </div>
                <div className="flex md:hidden justify-center mb-0">
                    <img 
                        src="/featureMobileLabel.png" 
                        alt="Feature Label Mobile" 
                        width={200} 
                        height={50} 
                        className="w-auto h-12" 
                        loading="lazy" 
                    />
                </div>
            </div>

            {/* 3D Carousel Container */}
            <div className="relative w-full max-w-6xl min-[1800px]:max-w-7xl mx-auto">
                <div className="relative h-64 md:h-80 xl:h-96 2xl:h-[28rem] min-[1800px]:h-[32rem] overflow-hidden rounded-xl">
                    {/* Desktop & Tablet: 3D Carousel */}
                    <div className="hidden md:flex w-full h-full items-center justify-center relative xl:mt-8">
                        {/* Left Image */}
                        <div className="absolute left-8 z-10 w-1/3 h-full flex items-center justify-center">
                            <div className="w-3/4 h-3/4 max-w-xs">
                                <img
                                    src={features[(activeIdx - 1 + features.length) % features.length].img}
                                    alt={`Feature ${features[(activeIdx - 1 + features.length) % features.length].id}`}
                                    className="w-full h-full object-contain rounded-lg brightness-50 transition-all duration-500 transform scale-90"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="absolute right-8 z-10 w-1/3 h-full flex items-center justify-center">
                            <div className="w-3/4 h-3/4 max-w-xs">
                                <img
                                    src={features[(activeIdx + 1) % features.length].img}
                                    alt={`Feature ${features[(activeIdx + 1) % features.length].id}`}
                                    className="w-full h-full object-contain rounded-lg brightness-50 transition-all duration-500 transform scale-90"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Center Image - Overlapping */}
                        <div className="absolute inset-0 z-30 flex items-center justify-center">
                            <div className="w-1/2 h-4/5 max-w-lg">
                                <img
                                    src={features[activeIdx].img}
                                    alt={`Feature ${features[activeIdx].id}`}
                                    className="w-full h-full object-contain rounded-xl transition-all duration-500 transform scale-110"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile: Single Center Image */}
                    <div className="flex md:hidden w-full h-full items-center justify-center">
                        <div className="w-3/4 h-4/5 max-w-sm">
                            <img
                                src={features[activeIdx].img}
                                alt={`Feature ${features[activeIdx].id}`}
                                className="w-full h-full object-contain rounded-xl transition-all duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button 
                        onClick={handlePrev}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-transparent border-none cursor-pointer hover:scale-110 transition-transform duration-200"
                    >
                        <img 
                            src="/arrow.png" 
                            alt="Previous" 
                            width={40} 
                            height={40} 
                            className="w-8 h-8 md:w-12 md:h-12 xl:w-14 xl:h-14 min-[1800px]:w-16 min-[1800px]:h-16" 
                            loading="lazy" 
                        />
                    </button>

                    <button 
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-transparent border-none cursor-pointer hover:scale-110 transition-transform duration-200 rotate-180"
                    >
                        <img 
                            src="/arrow.png" 
                            alt="Next" 
                            width={40} 
                            height={40} 
                            className="w-8 h-8 md:w-12 md:h-12 xl:w-14 xl:h-14 min-[1800px]:w-16 min-[1800px]:h-16" 
                            loading="lazy" 
                        />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-3 mt-0 xl:mt-8">
                    {features.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIdx(idx)}
                            className="p-0 bg-transparent border-none cursor-pointer hover:scale-110 transition-transform duration-200"
                        >
                            <img
                                src={activeIdx === idx ? "/paginationActive.svg" : "/pagination.svg"}
                                alt={activeIdx === idx ? "Active" : "Inactive"}
                                width={25}
                                height={25}
                                className="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 min-[1800px]:w-8 min-[1800px]:h-8 transition-all duration-300"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
