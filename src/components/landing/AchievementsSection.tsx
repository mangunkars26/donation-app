"use client";

import React from "react";
import { motion } from "framer-motion"; // Pastikan ini diimpor

export default function AchievementsSection() {
  return (
    <section className="bg-orange-500 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-5xl font-bold text-white mb-6 font-poppins">
            Apa yang Sudah Kami Capai?
          </h3>
          <p className="text-2xl text-white mb-6 font-poppins">
            Dengan dukungan sebelumnya, <span className="font-semibold text-purple-300">Alhamdulillah</span>:
          </p>
          <ul className="space-y-4 text-xl text-purple-200 font-poppins">
            {[
              "✅ <span className='font-semibold'>Anak-anak yang dulu belum bisa membaca</span>, kini telah lancar membaca Iqro.",
              "✅ <span className='font-semibold'>Santri sudah mampu menghafal</span> lebih dari 10 hadits dan 20 doa harian.",
              "✅ <span className='font-semibold'>Kegiatan Sabtu kreatif</span> membantu anak-anak lebih mandiri dan percaya diri.",
            ].map((item, index) => (
              <li key={index} className="flex items-start justify-center" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}