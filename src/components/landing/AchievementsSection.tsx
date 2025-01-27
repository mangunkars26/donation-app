"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

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
    <section className="bg-gradient-to-br from-orange-900 to-orange-700 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
Apa Yang Telah Kami Capai?</h2>
          <p className="text-xl md:text-2xl font-bold text-orange-300 mb-12 max-w-3xl mx-auto">
Alhamdulillah</p>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-orange-800/60 backdrop-blur-lg rounded-2xl p-6 border border-orange-700 shadow-2xl hover:bg-orange-800/80 transition-all"
              >
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="flex items-center gap-5 text-white">
                    <X className="w-12 h-12 text-red-500 bg-red-500/20 rounded-full p-2" />
                    <p className="text-lg md:text-xl font-medium text-orange-300">
                      {achievement.before}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-5 text-white">
                    <Check className="w-12 h-12 text-green-500 bg-green-500/20 rounded-full p-2" />
                    <p className="text-lg md:text-xl font-medium text-orange-100">
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