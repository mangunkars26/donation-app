"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-gray-800 mb-4"
        >
          Dukung <span className="text-[#4F46E5]">Pembangunan</span> PAUD-TKIT Keluarga Al-Qur'an
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-600 mb-8"
        >
          Untuk <span className="font-semibold text-[#4F46E5]">Generasi Qur'ani</span> yang Lebih Baik
        </motion.p>
        {/* <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#4F46E5] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#4338CA] transition-all transform hover:scale-105 shadow-lg"
        >
          Donasi Sekarang
        </motion.button> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <Image
            src="/images/image1.jpg" // Ganti dengan path gambar Anda
            alt="Hero Image"
            width={800}
            height={400}
            className="rounded-2xl shadow-2xl mx-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}