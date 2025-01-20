"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlertTriangle, Sparkles, ArrowRight } from "lucide-react";

export default function ChallengesSection() {
  return (
    <section className="relative bg-[#6A0DAD] py-24 overflow-hidden">
      {/* Complex Background Pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `
          radial-gradient(circle at 20% 30%, #8A2BE2 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, #7B68EE 0%, transparent 40%)
        `
      }}>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [20, -20],
              x: [10, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className={`absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#FF8E3C]/10 to-white/10 blur-xl`}
            style={{
              top: `${20 + i * 30}%`,
              left: `${20 + i * 25}%`
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* Image Section with Complex Frame */}
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Decorative Frames */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 0.98, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-gradient-to-tr from-[#FF8E3C]/30 to-white/30 rounded-[2rem] blur-md group-hover:from-[#FF8E3C]/40"
              />
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  scale: [1, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-gradient-to-bl from-white/30 to-[#FF8E3C]/30 rounded-[2rem] blur-md group-hover:to-[#FF8E3C]/40"
              />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl">
                <Image
                  src="/images/image2.jpg"
                  alt="Tantangan yang Dihadapi"
                  width={600}
                  height={400}
                  className="w-full h-auto transform transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6A0DAD]/60 via-[#6A0DAD]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 flex items-center gap-2"
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">Lihat Detail</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8E3C]/10 border border-[#FF8E3C]/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-[#FF8E3C]" />
                <span className="text-[#FF8E3C] font-medium">Tantangan Kami</span>
              </motion.div>

              <h3 className="text-5xl font-bold text-[#FF8E3C] leading-tight">
                Tahukah Anda?
              </h3>

              <p className="text-xl text-white leading-relaxed">
                Di PAUD-TKIT Keluarga Al-Qur'an, anak-anak dari desa sekitar belajar menghafal Al-Qur'an, hadits, dan doa-doa harian, sambil tetap mendapatkan pendidikan umum yang berkualitas. Namun, mereka menghadapi tantangan besar:
              </p>
            </div>

            {/* Challenges Cards */}
            <motion.div className="space-y-4">
              {[
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
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 142, 60, 0.15)" }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300"
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
