"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    };

    const animateElement = (element: HTMLElement) => {
      element.classList.add('animate-fade-in');
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const refs = [tagRef, titleRef, descRef, buttonRef, imageRef];
          refs.forEach((ref, index) => {
            if (ref.current) {
              setTimeout(() => {
                animateElement(ref.current!);
              }, index * 200);
            }
          });
          observer.disconnect();
        }
      });
    }, observerOptions);

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-[#FF8E3C] via-[#FF6B35] to-[#FF5722] flex items-center py-8 md:py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#854D8E]/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div 
              ref={tagRef}
              className="opacity-0 inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
            >
              <span className="text-white/90 mt-4 text-sm font-medium">
                ✨ Mari Bergabung Bersama Kami
              </span>
            </div>

            <h1 
              ref={titleRef}
              className="opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Dukung</span>{" "}
              <span className="text-[#854D8E] drop-shadow-lg">Pembangunan</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-white">PAUD-TKIT</span>{" "}
              <span className="relative">
                <span className="text-[#854D8E] drop-shadow-lg">Keluarga Al-Quran</span>
                <svg 
                  className="absolute top-full left-0 w-full h-2 text-[#854D8E]" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 Q50,100 100,0" fill="none" stroke="currentColor" strokeWidth="8"/>
                </svg>
              </span>
            </h1>

            <p 
              ref={descRef}
              className="opacity-0 text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Untuk{" "}
              <span className="font-semibold text-[#854D8E]">
                Generasi Qurani
              </span>{" "}
              yang Lebih Baik di Masa Depan
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <button 
                ref={buttonRef}
                onClick={() => {
                  document.getElementById("donation-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="opacity-0 bg-[#854D8E] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                <span>Donasi Sekarang</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div 
            ref={imageRef}
            className="opacity-0 relative mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-[4/3] sm:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#854D8E]/20 to-white/20 rounded-[2rem] sm:rounded-[3rem] rotate-6 transform backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-[#854D8E]/20 to-white/20 rounded-[2rem] sm:rounded-[3rem] -rotate-6 transform backdrop-blur-sm"></div>
              
              <div className="relative h-full bg-white/10 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="/images/hero-fix.jpeg"
                  alt="PAUD-TKIT Building"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 hover:scale-110"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

