"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Book, Users } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-green-700 mb-10">
            Manfaat dari <span className="text-[#4F46E5]">Sedekah Anda</span>
          </h3>
          <ul className="space-y-6">
            {[
              {
                icon: <Heart className="w-8 h-8 text-green-700" />,
                text: "Memberikan <span className='font-semibold'>lingkungan belajar yang layak</span> dan nyaman.",
              },
              {
                icon: <Book className="w-8 h-8 text-green-700" />,
                text: "Menambah <span className='font-semibold'>kapasitas sekolah</span> untuk menampung lebih banyak anak.",
              },
              {
                icon: <Users className="w-8 h-8 text-green-700" />,
                text: "Mendukung <span className='font-semibold'>generasi Qur’ani</span> yang cinta Al-Qur’an dan siap menjadi pemimpin masa depan.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start justify-center p-4 border border-gray-200 rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-md">
                <div className="mr-4">{item.icon}</div>
                <div className="text-lg text-gray-800" dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}