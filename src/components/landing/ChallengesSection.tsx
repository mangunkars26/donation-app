"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlertTriangle } from "lucide-react"; // Menggunakan ikon AlertTriangle dari lucide-react

export default function ChallengesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <Image
                src="/images/image2.jpg" // Ganti dengan path gambar Anda
                alt="Tantangan yang Dihadapi"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Tahukah Anda?
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Di PAUD-TKIT Keluarga Al-Qur’an, anak-anak dari desa sekitar belajar menghafal Al-Qur’an, hadits, dan doa-doa harian, sambil tetap mendapatkan pendidikan umum yang berkualitas. Namun, mereka menghadapi tantangan besar:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-4 text-xl">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-semibold">Ruang kelas yang sempit</span> dan kurang memadai.
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-semibold">Atap yang sering bocor</span> saat hujan.
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-semibold">Minimnya fasilitas bermain</span> yang mendukung kreativitas.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}