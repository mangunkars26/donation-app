"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  return (
    <section className="bg-orange-600 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight">
            Apa yang Sudah Kami Capai?
          </h3>
          <p className="text-xl md:text-2xl text-white mb-8 font-poppins">
            Dengan dukungan sebelumnya,{" "}
            <span className="font-semibold text-yellow-200">Alhamdulillah</span>:
          </p>
          <div className="space-y-6 text-lg md:text-xl text-white font-poppins">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-orange-700 rounded-lg p-4 md:p-6 shadow-lg"
              >
                <div 
                  className="flex items-start text-left"
                  dangerouslySetInnerHTML={{ 
                    __html: `✨ ${achievement}` 
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const achievements = [
  "<span class='font-semibold text-yellow-100'>Anak-anak yang dulu belum bisa membaca</span>, kini telah lancar membaca Iqro.",
  "<span class='font-semibold text-yellow-100'>Santri sudah mampu menghafal</span> lebih dari 10 hadits dan 20 doa harian.",
  "<span class='font-semibold text-yellow-100'>Kegiatan Sabtu kreatif</span> membantu anak-anak lebih mandiri dan percaya diri."
];