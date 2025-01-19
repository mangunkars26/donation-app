"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FinalCallSection() {
  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl text-gray-800 mb-6">
            “<span className="font-semibold text-[#4F46E5]">Sedekah tidaklah mengurangi harta.</span>” (HR. Muslim)
          </p>
          <button className="bg-[#4F46E5] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#4338CA] transition-all transform hover:scale-105">
            Donasi Sekarang
          </button>
          <p className="text-xl text-gray-600 mt-4">
            Dukungan Anda, sekecil apa pun, adalah <span className="font-semibold text-[#4F46E5]">investasi akhirat</span> yang tidak terputus.
          </p>
          <p className="text-xl text-gray-600">
            <span className="font-semibold text-[#4F46E5]">Jazakumullah Khairan Katsiran.</span> Semoga Allah melipatgandakan pahala Anda. Aamiin.
          </p>
        </motion.div>
      </div>
    </section>
  );
}