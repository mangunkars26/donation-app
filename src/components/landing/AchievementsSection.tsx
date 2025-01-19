"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-700 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h3 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Apa yang Sudah Kami Capai?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Dengan dukungan sebelumnya, <span className="font-semibold">Alhamdulillah</span>:
          </p>
          <ul className="space-y-6">
            {[
              "Anak-anak yang dulu belum bisa membaca, kini telah lancar membaca Iqro.",
              "Santri sudah mampu menghafal lebih dari 10 hadits dan 20 doa harian.",
              "Kegiatan Sabtu kreatif membantu anak-anak lebih mandiri dan percaya diri.",
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-center text-lg bg-white bg-opacity-20 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
                <CheckCircle className="w-6 h-6 text-yellow-300 mr-2" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-400 text-gray-800 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
            >
              Bergabunglah Bersama Kami
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}