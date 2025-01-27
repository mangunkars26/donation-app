"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Book, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  }
};

const cardVariants = {
  initial: { 
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
  },
  hover: { 
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const benefits = [
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
];

export default function BenefitsSection() {
  return (
    <section className="bg-purple-700 py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-5xl font-extrabold text-white mb-12 bg-clip-text"
          >
            Manfaat dari{" "}
            <span className="text-purple-300 inline-block">
              Sedekah Anda
            </span>
          </motion.h3>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm text-center transform-gpu will-change-transform"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitFontSmoothing: "subpixel-antialiased"
                }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item.icon}
                </motion.div>
                
                <h4 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                
                <p 
                  className="text-xl text-white leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}