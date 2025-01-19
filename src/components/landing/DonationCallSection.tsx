"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function DonationCallSection() {
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonationClick = () => {
    const message = `Bismillah, saya ingin donasi dengan nilai Rp ${donationAmount}...`;
    const whatsappUrl = `https://wa.me/6281392171858?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-green-400 to-green-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Jadikan <span className="text-yellow-300">Amal Jariyah</span> Anda Berkah untuk Generasi Qur’ani
          </h3>
          <div className="space-y-4 mb-6 text-xl">
            {[
              "💡 <span className='font-semibold'>Rp 20.000</span> bisa membantu membeli material bangunan.",
              "💡 <span className='font-semibold'>Rp 50.000</span> bisa mendukung renovasi ruang belajar.",
              "💡 <span className='font-semibold'>Rp 100.000</span> bisa membantu pengadaan fasilitas bermain untuk anak-anak.",
              "💡 <span className='font-semibold'>Rp 500.000</span> bisa membantu pengadaan buku dan alat belajar.",
              "💡 <span className='font-semibold'>Isi Sendiri</span> untuk donasi sesuai keinginan Anda.",
            ].map((item, index) => (
              <motion.p
                key={index}
                className="text-white transition-transform transform hover:scale-105"
                dangerouslySetInnerHTML={{ __html: item }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
          <div className="mb-6 text-xl">
            <p className="text-white">Pilih Jumlah Donasi Anda:</p>
            <div className="flex flex-col items-center mb-4">
              {["20000", "50000", "100000", "500000", "custom"].map((amount) => (
                <label key={amount} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="donation"
                    value={amount}
                    onChange={(e) => setDonationAmount(e.target.value === "custom" ? prompt("Masukkan jumlah donasi:") : e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-white font-semibold">
                    {amount === "custom" ? "Isi Sendiri" : `Rp ${amount}`}
                  </span>
                </label>
              ))}
            </div>
            <p className="text-white">
              📤 <strong>Transfer Donasi Anda ke:</strong> <span className="font-semibold text-yellow-300">BSI 5040301016</span> a.n. YYS Pondok Pesantren Keluarga Al-Qur’an
            </p>
            <p className="text-white">
              📞 <strong>Konfirmasi Transfer:</strong> <span className="font-semibold text-yellow-300">0813-9217-1858</span> (Admin PAUD-TKIT)
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDonationClick}
            className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-all transform shadow-lg"
          >
            <Heart className="inline-block mr-2" /> Donasi Sekarang
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}