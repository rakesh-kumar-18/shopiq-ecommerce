"use client";

import { useState } from "react";
import Image from "next/image";

const ProductImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="min-w-full">
                        <Image
                            src={img}
                            alt={`Product ${index}`}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full z-10"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full z-10"
            >
                &#8594;
            </button>

            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full cursor-pointer ${currentIndex === index ? "bg-gray-800" : "bg-gray-300"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ProductImageCarousel;
