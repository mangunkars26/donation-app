"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GoalsSection() {
  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Mari Bersama Mewujudkan <span className="text-[#4F46E5]">Sekolah yang Lebih Layak</span>
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Melalui proyek renovasi ini, kami ingin:
            </p>
            <ul className="space-y-4 text-xl">
              {[
                "1️⃣ <span className='font-semibold'>Merenovasi ruang belajar</span> agar lebih nyaman dan aman.",
                "2️⃣ <span className='font-semibold'>Menambah ruang kelas baru</span> untuk menampung lebih banyak siswa.",
                "3️⃣ <span className='font-semibold'>Memperbaiki fasilitas bermain</span> indoor dan outdoor.",
                "4️⃣ <span className='font-semibold'>Menghadirkan gerbang sekolah</span> yang lebih kokoh dan aman.",
              ].map((item, index) => (
                <li key={index} className="text-gray-600" dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
            <div className="mt-6 text-xl">
              <p className="text-gray-600">
                💰 <strong>Total Dana yang Dibutuhkan:</strong> <span className="font-semibold text-[#4F46E5]">Rp 35.000.000,-</span>
              </p>
              <p className="text-gray-600">
                🕰️ <strong>Target Penyelesaian:</strong> <span className="font-semibold text-[#4F46E5]">April 2025</span>.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <Image
              src="/images/image3.jpg" // Ganti dengan path gambar Anda
              alt="Tujuan Proyek"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}