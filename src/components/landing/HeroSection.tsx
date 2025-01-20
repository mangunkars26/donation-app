"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FF8E3C] via-[#FF6B35] to-[#FF5722] flex items-center py-8 md:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#854D8E]/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4"
            >
              <span className="text-white/90 text-sm font-medium">✨ Mari Bergabung Bersama Kami</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">Dukung</span>{" "}
              <span className="text-[#854D8E] drop-shadow-lg">Pembangunan</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-white">PAUD-TKIT</span>{" "}
              <span className="relative">
                <span className="text-[#854D8E] drop-shadow-lg">Keluarga Al-Qur'an</span>
                <svg className="absolute top-full left-0 w-full h-2 text-[#854D8E]" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 Q50,100 100,0" fill="none" stroke="currentColor" strokeWidth="8"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Untuk{" "}
              <span className="font-semibold text-[#854D8E]">
                Generasi Qur'ani
              </span>{" "}
              yang Lebih Baik di Masa Depan
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#854D8E" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#854D8E] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>Donasi Sekarang</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/20 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Pelajari Selengkapnya
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-[4/3] sm:aspect-square">
              {/* Decorative Frame Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#854D8E]/20 to-white/20 rounded-[2rem] sm:rounded-[3rem] rotate-6 transform backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-[#854D8E]/20 to-white/20 rounded-[2rem] sm:rounded-[3rem] -rotate-6 transform backdrop-blur-sm"></div>
              
              {/* Main Image Container */}
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
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -bottom-4 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-tr from-[#854D8E]/30 to-white/30 rounded-full backdrop-blur-sm border border-white/20"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 -top-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-[#854D8E]/30 to-white/30 rounded-full backdrop-blur-sm border border-white/20"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}