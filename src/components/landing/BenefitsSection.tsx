"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Book, Users } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="bg-orange-500 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-5xl font-extrabold text-white mb-12">
            Manfaat dari <span className="text-purple-900">Sedekah Anda</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-16 h-16 text-purple-600 mx-auto mb-4" />,
                title: "Lingkungan Belajar",
                text: "Memberikan <span className='font-semibold'>lingkungan belajar yang layak</span> dan nyaman.",
              },
              {
                icon: <Book className="w-16 h-16 text-purple-600 mx-auto mb-4" />,
                title: "Kapasitas Sekolah",
                text: "Menambah <span className='font-semibold'>kapasitas sekolah</span> untuk menampung lebih banyak anak.",
              },
              {
                icon: <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />,
                title: "Generasi Qur'ani",
                text: "Mendukung <span className='font-semibold'>generasi Qur'ani</span> yang cinta Al-Qur'an dan siap menjadi pemimpin masa depan.",
              },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
                <h4 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <p 
                  className="text-xl text-white" 
                  dangerouslySetInnerHTML={{ __html: item.text }} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}