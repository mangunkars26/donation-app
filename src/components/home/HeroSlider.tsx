"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority={currentSlide === index}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-4xl">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
              <p className="text-xl mb-8 animate-fade-in-delay">{slide.description}</p>
              <button className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 transition-all transform hover:scale-105">
                Donasi Sekarang
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}