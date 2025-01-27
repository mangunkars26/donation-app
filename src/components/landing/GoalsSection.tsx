"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GoalsSection() {
  return (
    <div className="bg-orange-700 py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-200 mb-6">
            Mari Bersama Mewujudkan Sekolah yang Lebih Layak
          </h2>
          <p className="text-orange-200 text-lg max-w-2xl mx-auto">
            Melalui proyek renovasi ini, kami ingin:
          </p>
        </motion.div>

        {/* Goals List */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {[
            "Merenovasi ruang belajar agar lebih nyaman dan aman.",
            "Menambah ruang kelas baru untuk menampung lebih banyak siswa.",
            "Memperbaiki fasilitas bermain indoor dan outdoor.",
            "Menghadirkan gerbang sekolah yang lebih kokoh dan aman.",
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-orange-400 shadow-md rounded-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all hover:border-orange-700"
            >
              <div className="flex items-center">
                <span className="mr-4 text-2xl text-orange-600">
                  {index + 1}
                </span>
                <p className="text-orange-800 font-semibold">{item}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </div>
  );
}