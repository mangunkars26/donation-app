"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export default function AchievementsSection() {
  const achievements = [
    {
      before: "Anak-anak Belum bisa baca Qur'an",
      after: "Mahir baca Qur'an dengan tajwid yang baik"
    },
    {
      before: "Belum hafal doa-doa harian",
      after: "Hafal 20 doa harian dengan lancar"
    },
    {
      before: "Anak-anak kurang percaya diri",
      after: "Tumbuh percaya diri melalui kegiatan kreatif"
    },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-900 to-orange-700 py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-orange-200 to-orange-100 bg-clip-text text-transparent">
                Apa Yang Telah Kami Capai?
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-orange-300 max-w-3xl mx-auto"
            >
              Alhamdulillah
            </motion.p>
          </div>

          {/* Achievement Cards */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="transform-gpu will-change-transform"
              >
                <div className="bg-gradient-to-r from-orange-800/80 to-orange-900/80 backdrop-blur-xl rounded-3xl p-8 border border-orange-700/50 shadow-2xl relative overflow-hidden group">
                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative">
                    {/* Before State */}
                    <div className="flex items-start md:items-center gap-6 text-white group-hover:translate-x-2 transition-transform duration-300">
                      <div className="bg-red-500/10 rounded-2xl p-3 backdrop-blur-sm border border-red-500/20">
                        <X className="w-8 h-8 text-red-400" />
                      </div>
                      <p className="text-lg md:text-xl font-medium text-orange-200/90">
                        {achievement.before}
                      </p>
                    </div>

                    {/* Arrow for larger screens */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                      <ArrowRight className="w-8 h-8 text-orange-400/50" />
                    </div>
                    
                    {/* After State */}
                    <div className="flex items-start md:items-center gap-6 text-white group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <div className="bg-green-500/10 rounded-2xl p-3 backdrop-blur-sm border border-green-500/20">
                        <Check className="w-8 h-8 text-green-400" />
                      </div>
                      <p className="text-lg md:text-xl font-medium text-white">
                        {achievement.after}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}