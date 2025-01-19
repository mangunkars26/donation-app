"use client";

import React, { useState } from "react";
import { Building, Puzzle, BookOpen } from "lucide-react";

interface DonationNeed {
  title: string;
  target: string;
  progress: number;
  icon: TSX.Element;
  description: string;
}

export default function DonationNeedsSection() {
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);

  const donationNeeds: DonationNeed[] = [
    {
      title: "Renovasi Ruang Kelas",
      target: "Rp 20.000.000",
      progress: 65,
      icon: <Building className="w-12 h-12 text-blue-500" />,
      description: "Bantu kami menciptakan lingkungan belajar yang nyaman dan aman.",
    },
    {
      title: "Fasilitas Bermain",
      target: "Rp 10.000.000",
      progress: 40,
      icon: <Puzzle className="w-12 h-12 text-green-500" />,
      description: "Dukung kreativitas anak melalui sarana bermain yang mendidik.",
    },
    {
      title: "Perpustakaan Mini",
      target: "Rp 5.000.000",
      progress: 25,
      icon: <BookOpen className="w-12 h-12 text-purple-500" />,
      description: "Sediakan buku-buku inspiratif untuk generasi Qurani.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Kebutuhan Donasi Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {donationNeeds.map((need, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg transform transition-all ${
                selectedDonation === index ? "scale-105 border-2 border-blue-500" : "hover:scale-105"
              }`}
              onClick={() => setSelectedDonation(index)}
            >
              {need.icon}
              <h3 className="text-xl font-semibold mt-4">{need.title}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${need.progress}%` }}
                ></div>
              </div>
              <p className="text-gray-600 mt-2">{need.description}</p>
              <div className="mt-4 flex justify-between">
                <span className="font-bold text-gray-700">Target:</span>
                <span className="text-blue-600">{need.target}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}