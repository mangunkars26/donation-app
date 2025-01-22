"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GoalsSection() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Mari Bersama Mewujudkan Sekolah yang Lebih Layak
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Melalui proyek renovasi ini, kami ingin:
          </p>
        </motion.div>

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
              className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-center">
                <span className="mr-4 text-2xl text-blue-600">
                  {index + 1}
                </span>
                <p className="text-gray-700">{item}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-blue-100 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">
            Informasi Penting
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4 text-green-600">💰</div>
              <h4 className="font-bold text-gray-800 mb-2">Total Dana</h4>
              <p className="text-gray-600">Rp 35.000.000,-</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4 text-orange-600">🕰️</div>
              <h4 className="font-bold text-gray-800 mb-2">Target Penyelesaian</h4>
              <p className="text-gray-600">April 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}