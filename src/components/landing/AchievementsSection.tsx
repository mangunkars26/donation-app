"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      before: "Belum bisa baca Qur'an",
      after: "Sudah mahir baca Qur'an"
    },
    {
      before: "Belum hafal doa harian",
      after: "Sudah hafal 20 doa harian"
    },
    {
      before: "Belum percaya diri",
      after: "Menjadi lebih percaya diri"
    },
  ];

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
          
          <div className="space-y-4 md:space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-orange-800/70 backdrop-blur rounded-xl p-4 md:p-6 shadow-lg mx-2 md:mx-0"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-white">
                  <div className="flex items-center gap-3 w-full sm:w-1/2">
                    <X className="w-9 h-9 text-red-400 flex-shrink-0" />
                    <p className="text-lg sm:text-lg font-poppins text-left">
                      {achievement.before}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full sm:w-1/2">
                    <Check className="w-9 h-9 text-green-400 flex-shrink-0" />
                    <p className="text-lg sm:text-lg font-poppins text-left">
                      {achievement.after}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}