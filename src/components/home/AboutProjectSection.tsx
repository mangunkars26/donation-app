"use client";

import React from "react";
import { Check, Heart, Book, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutProjectSection() {
  return (
    <section className="bg-gradient-to-br from-[#FF9A9E] to-[#FAD0C4] py-20">
      <div className="container mx-auto px-4">
        {/* Judul Section dengan Animasi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Dukung Pembangunan PAUD-TKIT Keluarga Al-Qur'an
          </h2>
          <p className="text-xl text-white/90">
            Untuk Generasi Qur'ani yang Lebih Baik
          </p>
        </motion.div>

        {/* Tantangan yang Dihadapi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          <div className="w-full md:w-1/2">
            <Image
              src="/images/challenge.jpg" // Ganti dengan path gambar Anda
              alt="Tantangan yang Dihadapi"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6">Tahukah Anda?</h3>
            <p className="text-lg text-white/90 mb-6">
              Di PAUD-TKIT Keluarga Al-Qur’an, anak-anak dari desa sekitar belajar menghafal Al-Qur’an, hadits, dan doa-doa harian, sambil tetap mendapatkan pendidikan umum yang berkualitas. Namun, mereka menghadapi tantangan besar:
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li>Ruang kelas yang sempit dan kurang memadai.</li>
              <li>Atap yang sering bocor saat hujan.</li>
              <li>Minimnya fasilitas bermain yang mendukung kreativitas.</li>
            </ul>
          </div>
        </motion.div>

        {/* Tujuan Proyek */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-white mb-6">
              Mari Bersama Mewujudkan Sekolah yang Lebih Layak
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Melalui proyek renovasi ini, kami ingin:
            </p>
            <ul className="space-y-4">
              {[
                "Merenovasi ruang belajar agar lebih nyaman dan aman.",
                "Menambah ruang kelas baru untuk menampung lebih banyak siswa.",
                "Memperbaiki fasilitas bermain indoor dan outdoor.",
                "Menghadirkan gerbang sekolah yang lebih kokoh dan aman.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FF6F61] mr-2">{index + 1}️⃣</span>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-white/90">
                💰 <strong>Total Dana yang Dibutuhkan:</strong> Rp 35.000.000,-
              </p>
              <p className="text-white/90">
                🕰️ <strong>Target Penyelesaian:</strong> April 2025.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <Image
              src="/images/goal.jpg" // Ganti dengan path gambar Anda
              alt="Tujuan Proyek"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Pencapaian */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          <div className="w-full md:w-1/2">
            <video
              src="/videos/achievement.mp4" // Ganti dengan path video Anda
              controls
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Apa yang Sudah Kami Capai?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Dengan dukungan sebelumnya, Alhamdulillah:
            </p>
            <ul className="space-y-4">
              {[
                "Anak-anak yang dulu belum bisa membaca, kini telah lancar membaca Iqro.",
                "Santri sudah mampu menghafal lebih dari 10 hadits dan 20 doa harian.",
                "Kegiatan Sabtu kreatif membantu anak-anak lebih mandiri dan percaya diri.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-[#FF6F61] mr-2" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Ajakan Donasi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Jadikan Amal Jariyah Anda Berkah untuk Generasi Qur’ani
          </h3>
          <div className="space-y-4 mb-6">
            {[
              "💡 Rp 50.000 bisa membantu membeli material bangunan.",
              "💡 Rp 200.000 bisa mendukung renovasi ruang belajar.",
              "💡 Rp 500.000+ bisa membantu pengadaan fasilitas bermain untuk anak-anak.",
            ].map((item, index) => (
              <p key={index} className="text-white/90">
                {item}
              </p>
            ))}
          </div>
          <div className="mb-6">
            <p className="text-white/90">
              📤 <strong>Transfer Donasi Anda ke:</strong> BSI 5040301016 a.n. YYS Pondok Pesantren Keluarga Al-Qur’an
            </p>
            <p className="text-white/90">
              📞 <strong>Konfirmasi Transfer:</strong> 0813-9217-1858 (Admin PAUD-TKIT)
            </p>
          </div>
          <button className="bg-white text-[#FF6F61] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2">
            Donasi Sekarang <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}