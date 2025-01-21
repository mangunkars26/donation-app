"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="bg-gradient-to-b from-orange-600 to-orange-700 py-8 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-poppins leading-tight px-2">
            Apa yang Sudah Kami Capai?
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 font-poppins px-2">
            Dengan dukungan sebelumnya,{" "}
            <span className="font-semibold text-yellow-200">Alhamdulillah</span>:
          </p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-orange-800/70 backdrop-blur rounded-xl p-4 md:p-6 shadow-lg mx-2 md:mx-0 hover:bg-orange-800 transition-all duration-300"
              >
                <div className="flex gap-3 items-start text-left">
                  <span className="text-yellow-200 text-xl mt-1 flex-shrink-0">✨</span>
                  <p className="text-base sm:text-lg md:text-xl text-white font-poppins">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const achievements = [
  "Anak-anak yang dulu belum bisa membaca, kini telah lancar membaca Iqro.",
  "Santri sudah mampu menghafal lebih dari 10 hadits dan 20 doa harian.",
  "Kegiatan Sabtu kreatif membantu anak-anak lebih mandiri dan percaya diri."
];