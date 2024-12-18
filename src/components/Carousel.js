"use client";

import Image from "next/image";
import { useState } from "react";

const CustomCarousel = ({ images }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % images.length);
    const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Slides */}
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((img, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <Image src={img} alt={`Slide ${index}`} className="w-full h-64 object-cover" />
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full"
            >
                &#8594;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 flex space-x-2 justify-center w-full">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 w-2 rounded-full ${current === index ? "bg-gray-800" : "bg-gray-300"} cursor-pointer`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CustomCarousel;
