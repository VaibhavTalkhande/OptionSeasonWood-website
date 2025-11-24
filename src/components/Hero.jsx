import React, { useState, useEffect } from "react";
import img1 from "../assets/gallery/1.jpeg";
import img2 from "../assets/gallery/2.jpeg";
import img3 from "../assets/gallery/3.jpeg";
import img4 from "../assets/gallery/4.jpeg";
import img5 from "../assets/gallery/5.jpeg";
import img6 from "../assets/gallery/6.jpeg";

const images = [img1, img2, img3, img4, img5, img6];


const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen ">
      {/* Images */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="h-screen w-screen object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        ❯
      </button>

      {/* Dots */}
      
    </div>
  );
};

export default Hero;
