import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-purple-900 to-purple-950 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 font-poppins">
            Tentang Kami
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-white/90"
          >
            <div className="backdrop-blur-sm bg-purple-800/10 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg font-poppins leading-relaxed">
                <p>
                  <span className="font-semibold text-yellow-200">
                    Yayasan Pondok Pesantren Keluarga Al-Qur'an
                  </span>{" "}
                  lahir dari tekad untuk membangun generasi Qur'ani melalui pendidikan dan pembinaan. Berawal dari merintis pondok tahfidz kecil di Desa Ketaon, Boyolali, kami terus berikhtiar menjadi pusat pembelajaran yang membawa manfaat luas bagi umat.
                </p>
                
                <p>
                  Dengan semangat gotong royong dan kedermawanan, lahan wakaf serta bangunan pendukung pun berhasil didirikan. Kini, Yayasan kami telah menjadi rumah bagi{" "}
                  <span className="font-semibold text-yellow-200">
                    lebih dari 50 santri
                  </span>
                  , mendidik mereka dengan nilai-nilai Al-Qur'an sejak usia dini.
                </p>

                <p className="text-yellow-100 font-medium">
                  Setiap dukungan dari Anda adalah langkah nyata dalam melanjutkan perjuangan ini. Bersama, kita wujudkan generasi masa depan yang mencintai Al-Qur'an.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Optional decorative elements */}
          <div className="absolute -top-10 left-0 w-full overflow-hidden">
            <div className="w-48 h-48 bg-yellow-200/5 rounded-full blur-3xl absolute -left-24"></div>
            <div className="w-48 h-48 bg-purple-300/5 rounded-full blur-3xl absolute -right-24"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
