"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AlertTriangle, Sparkles, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Challenge {
  title: string;
  desc: string;
  icon: React.ElementType;
  image: string;
  alt: string;
}

const challenges: Challenge[] = [
  {
    title: "Ruang Kelas Sempit",
    desc: "dan kurang memadai untuk aktivitas belajar optimal",
    icon: AlertTriangle,
    image: "/images/kelas.jpeg",
    alt: "Kondisi ruang kelas yang sempit"
  },
  {
    title: "Atap Sering Bocor Ketika Hujan",
    desc: "yang mengganggu proses pembelajaran",
    icon: AlertTriangle,
    image: "/images/about.jpg",
    alt: "Kondisi atap yang bocor"
  },
  {
    title: "Fasilitas Bermain Minim",
    desc: "untuk mendukung pengembangan kreativitas anak",
    icon: AlertTriangle,
    image: "/images/mainan-rusak.jpeg",
    alt: "Fasilitas bermain yang terbatas"
  }
];

export default function ChallengesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
    setCurrentIndex(0);
  };

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % challenges.length;
    setSelectedImage(challenges[nextIndex].image);
    setCurrentIndex(nextIndex);
  };

  const goToPrevImage = () => {
    const prevIndex = (currentIndex - 1 + challenges.length) % challenges.length;
    setSelectedImage(challenges[prevIndex].image);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

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
        <div className="space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-8">
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
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-semibold max-w-3xl mx-auto">
              Anak-anak dari desa sekitar belajar Al-Quran, menghafal Quran, hadis, dan doa-doa harian, sambil mendapat pendidikan yang berkualitas. Namun, mereka menghadapi tantangan:
            </p>
          </div>

          {/* Challenges Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-[#FF8E3C]/15"
              >
                {/* Image Container */}
                <div 
                  className="relative h-48 w-full overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(item.image, index)}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD] via-transparent to-transparent opacity-70" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-[#FF8E3C] to-[#FF6B3C] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-[#FF8E3C] font-semibold text-lg group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-semibold text-center max-w-3xl mx-auto">
            Melalui proyek renovasi ini, kami ingin memperbaiki ruang kelas, atap, dan fasilitas bermain anak-anak agar lebih nyaman dan aman.
          </p>
        </div>
      </div>

      {/* Modal for Full-Screen Image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          >
            <div className="relative max-w-4xl w-full h-[80vh] p-4">
              {/* Navigation Buttons */}
              <button
                onClick={goToPrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={selectedImage}
                  alt="Full-Screen Image"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {challenges.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}