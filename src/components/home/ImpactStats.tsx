"use client";

import React from "react";
import { Heart, Book, Users } from "lucide-react";

export default function ImpactStats() {
  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <Heart className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">500+</h3>
            <p className="text-center text-gray-600">Santri Terdaftar</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <Book className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">50+</h3>
            <p className="text-center text-gray-600">Pengajar Berpengalaman</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">1000+</h3>
            <p className="text-center text-gray-600">Donatur Aktif</p>
          </div>
        </div>
      </div>
    </section>
  );
}