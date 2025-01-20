"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, DollarSign, User, MapPin } from "lucide-react";



const DONATION_PRESETS = [
  { value: 50000, label: "Rp 50K", description: "Dukung Buku Pelajaran" },
  { value: 100000, label: "Rp 100K", description: "Fasilitas Bermain" },
  { value: 250000, label: "Rp 250K", description: "Renovasi Ruang Kelas" },
  { value: 500000, label: "Rp 500K", description: "Pengembangan Kurikulum" },
];

const DonationCallSection: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");


  const handleDonationSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    setSelectedAmount(value ? parseInt(value, 10) : null);
  };

  const handleSubmitDonation = () => {
    if (!selectedAmount || !name || !city) {
      alert("Mohon lengkapi semua informasi");
      return;
    }

    const message = `🤲 Donasi Amal Jariyah\n` +
      `Nama: ${name}\n` +
      `Kota: ${city}\n` +
      `Nominal: Rp ${selectedAmount.toLocaleString()}`;

    const whatsappUrl = `https://wa.me/6281392171858?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


  return (
    <section id="donation-section" className="bg-gradient-to-br from-orange-500 to-orange-600 py-20 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-5xl font-extrabold text-center mb-8 text-purple-300">
            Wujudkan Amal Jariyah Anda
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className ="text-2xl font-semibold mb-4 flex items-center">
                <DollarSign className="mr-2" /> Pilih Nominal Donasi
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {DONATION_PRESETS.map((preset) => (
                  <motion.div
                    key={preset.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDonationSelect(preset.value)}
                    className={`
                      cursor-pointer p-4 rounded-xl text-center transition-all
                      ${selectedAmount === preset.value
                        ? "bg-orange-600 text-white"
                        : "bg-white/10 hover:bg-white/20"}
                    `}
                  >
                    <div className="font-bold text-xl">{preset.label}</div>
                    <div className="text-sm opacity-70">{preset.description}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nominal Lain"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="
                      w-full p-3 rounded-xl bg-white/10 
                      border border-white/20 focus:border-orange-400
                      text-white placeholder-white/50
                    "
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">Rp</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <User  className="mr-2" /> Informasi Donatur
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="
                      w-full p-3 rounded-xl bg-white/10 
                      border border-white/20 focus:border-orange-400
                      text-white placeholder-white/50
                    "
                  />
                  <User  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50" />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Kota Asal"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="
                      w-full p-3 rounded-xl bg-white/10 
                      border border-white/20 focus:border-orange-400
                      text-white placeholder-white/50
                    "
                  />
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50" />
                </div>
              </div>
            </div>
          </div>

          <motion.button
            onClick={handleSubmitDonation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full mt-6 p-4 bg-orange-600 text-white 
              rounded-xl font-bold hover:bg-orange-700 
              transition-all flex items-center justify-center
            "
          >
            <Heart className="mr-2" /> Kirim Donasi
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationCallSection;