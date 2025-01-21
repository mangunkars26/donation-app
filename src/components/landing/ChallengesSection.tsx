"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { AlertTriangle, Sparkles, ArrowRight } from "lucide-react";

const challenges = [
  {
    title: "Ruang Kelas Sempit",
    desc: "dan kurang memadai untuk aktivitas belajar optimal",
    icon: AlertTriangle
  },
  {
    title: "Atap Bocor",
    desc: "yang mengganggu proses pembelajaran saat hujan",
    icon: AlertTriangle
  },
  {
    title: "Fasilitas Minim",
    desc: "untuk mendukung pengembangan kreativitas anak",
    icon: AlertTriangle
  }
];

export default function ChallengesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#6A0DAD] py-24 overflow-hidden opacity-0 transition-all duration-700"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-50" 
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #8A2BE2 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, #7B68EE 0%, transparent 40%)
          `
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Section */}
          <div ref={imageRef} className="w-full md:w-1/2 opacity-0 transition-all duration-700 image-container">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl">
                <Image
                  src="/images/image2.jpg"
                  alt="Tantangan yang Dihadapi"
                  width={600}
                  height={400}
                  className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/60 via-[#6A0DAD]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 flex items-center gap-2 hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">Lihat Detail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div 
            ref={contentRef} 
            className="w-full md:w-1/2 space-y-8 opacity-0 transition-all duration-700 text-container"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8E3C]/10 border border-[#FF8E3C]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#FF8E3C]" />
                <span className="text-[#FF8E3C] font-medium">Tantangan Kami</span>
              </div>

              <h3 className="text-5xl font-bold text-[#FF8E3C] leading-tight">
                Tahukah Anda?
              </h3>

              <p className="text-xl text-white leading-relaxed">
                Di PAUD-TKIT Keluarga Al-Quran, anak-anak dari desa sekitar belajar menghafal Al-Quran, hadits, dan doa-doa harian, sambil tetap mendapatkan pendidikan umum yang berkualitas. Namun, mereka menghadapi tantangan besar:
              </p>
            </div>

            {/* Challenges Cards */}
            <div className="space-y-4">
              {challenges.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF8E3C]/15"
                >
                  <div className="p-2 rounded-lg bg-[#FF8E3C] text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#FF8E3C] font-semibold text-lg mb-1 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/80 group-hover:text-white transition-colors">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white ml-auto transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}