"use client";

import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-emerald-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Mari Bergabung dalam Kebaikan</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          "Sedekah tidaklah mengurangi harta." (HR. Muslim)
        </p>
        <button className="bg-white text-emerald-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
          Donasi Sekarang
        </button>
      </div>
    </section>
  );
}