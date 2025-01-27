"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCallSection = () => {
  const motionConfig = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-[#E5E7EB] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          {...motionConfig}
          className="space-y-6 text-center"
        >
          <div className="space-y-4">
            <p className="text-2xl text-gray-800">
              <span className="font-semibold text-[#4F46E5] text-4xl block mb-2 leading-relaxed">
                إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلا مِنْ ثَلاثَةٍ : إِلا مِنْ صَدَقَةٍ جَارِيَةٍ ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ
              </span>
              <span className="block mt-2">
                (HR. Muslim)
              </span>
            </p>
            <p className="text-xl text-gray-700">
              "Jika manusia mati, maka terputuslah amalnya kecuali tiga perkara: (1) sedekah jariyah, (2) ilmu yang diambil manfaatnya, (3) anak shalih yang selalu mendoakan orang tuanya." (HR. Muslim, no. 1631)
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xl text-gray-600">
              Dukungan Anda, sekecil apa pun, adalah{" "}
              <span className="font-semibold text-[#4F46E5]">
                investasi akhirat
              </span>{" "}
              yang tidak terputus.
            </p>
            <p className="text-xl text-gray-600">
              <span className="font-semibold text-[#4F46E5]">
                Jazakumullah Khairan Katsiran.
              </span>{" "}
              Semoga Allah melipatgandakan pahala Anda. Aamiin.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCallSection;