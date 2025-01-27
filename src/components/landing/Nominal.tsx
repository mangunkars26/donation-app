"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ImportantInfoSection() {
  return (
    <div className="bg-purple-800 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-center text-5xl font-bold tracking-tight">
Untuk Itu Kami Membutuhkan Dana Sebesar         </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-900 rounded-xl p-8 text-center border border-purple-900 hover:bg-purple-900 transition-colors">
              <div className="text-6xl mb-6 opacity-80">💰</div>
              {/* <h3 className="text-2xl font-semibold mb-4">Total Dana</h3> */}
              <p className="text-4xl font-bold text-emerald-400">
                Rp 35.000.000,-
              </p>
            </div>

            <div className="bg-purple-900 rounded-xl p-8 text-center border border-purple-900 hover:bg-purple-900 transition-colors">
              <div className="text-6xl mb-6 opacity-80">🕰️</div>
              <h3 className="text-2xl font-semibold mb-4">Target Selesai</h3>
              <p className="text-4xl font-bold text-emerald-400">
                April 2025
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}