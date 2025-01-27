"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { AlertTriangle, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const challenges = [
  {
    title: "Ruang Kelas Sempit",
    desc: "dan kurang memadai untuk aktivitas belajar optimal",
    icon: AlertTriangle
  },
  {
    title: "Atap Sering Bocor Ketika Hujan",
    desc: "yang mengganggu proses pembelajaran",
    icon: AlertTriangle
  },
  {
    title: "Fasilitas Bermain Minim",
    desc: "untuk mendukung pengembangan kreativitas anak",
    icon: AlertTriangle
  }
];

export default function ChallengesSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [sectionRef, imageRef, contentRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="challenges"
      ref={sectionRef}
      aria-label="Challenges We Face"
      className="relative bg-gradient-to-br from-[#6A0DAD] to-[#4A0082] py-24 overflow-hidden opacity-0 transition-all duration-700"
    >
      {/* Background Gradients */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #8A2BE2 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #7B68EE 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #9400D3 0%, transparent 60%)
          `
        }}
      />

      <div className="container relative mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
          {/* Image Section */}
          <div ref={imageRef} className="w-full md:w-1/2 opacity-0 transition-all duration-1000 transform translate-x-[-20px]">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-[0_0_30px_rgba(106,13,173,0.3)]">
                <Image
                  src="/images/image2.jpg"
                  alt="Tantangan yang Dihadapi"
                  width={600}
                  height={400}
                  className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/80 via-[#6A0DAD]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div 
            ref={contentRef} 
            className="w-full md:w-1/2 space-y-10 opacity-0 transition-all duration-1000 transform translate-x-[20px]"
          >
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FF8E3C]/15 border border-[#FF8E3C]/30 backdrop-blur-sm hover:bg-[#FF8E3C]/20 transition-colors duration-300">
                <Sparkles className="w-5 h-5 text-[#FF8E3C]" />
                <span className="text-[#FF8E3C] font-semibold tracking-wide">Tahukah Anda?</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Di <span className="text-[#FF8E3C]">PAUD-TKIT Keluarga Al Quran</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-semibold">
                Anak-anak dari desa sekitar belajar Al-Quran, menghafal Quran, hadis, dan doa-doa harian, sambil mendapat pendidikan yang berkualitas. Namun, mereka menghadapi tantangan:
              </p>

              {/* Challenges List */}
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group flex items-start gap-4 p-5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8E3C]/15 cursor-pointer"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#FF8E3C] to-[#FF6B3C] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#FF8E3C] font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-white/80 group-hover:text-white transition-colors">
                        {item.desc}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Closing Statement */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-semibold">
                Melalui proyek renovasi ini, kami ingin memperbaiki ruang kelas, atap, dan fasilitas bermain anak-anak agar lebih nyaman dan aman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}