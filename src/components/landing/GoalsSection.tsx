"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GoalsSection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-700 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Bersama Kita Wujudkan Sekolah Impian
          </h2>
          <p className="text-teal-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Dengan dukungan Anda, kami bertekad untuk menciptakan lingkungan belajar yang lebih baik dan lebih layak untuk semua siswa.
          </p>
        </motion.div>

        {/* Goals List */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {[
            "Merenovasi ruang belajar agar lebih nyaman dan aman.",
            "Menambah ruang kelas baru untuk menampung lebih banyak siswa.",
            "Memperbaiki fasilitas bermain indoor dan outdoor.",
            "Menghadirkan gerbang sekolah yang lebih kokoh dan aman.",
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-teal-600 text-white flex items-center justify-center rounded-full text-lg font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-teal-900 text-lg font-medium leading-snug">
                    {item}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
