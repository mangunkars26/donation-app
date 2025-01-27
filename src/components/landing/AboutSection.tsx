import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="relative bg-gradient-to-b from-orange-700 to-orange-800 py-16 md:py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="w-72 h-72 bg-yellow-200/5 rounded-full blur-3xl absolute -left-24 top-0"></div>
        <div className="w-72 h-72 bg-purple-300/5 rounded-full blur-3xl absolute -right-24 bottom-0"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-12 text-center font-poppins"
          >
            Tentang Kami
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <motion.div
              variants={itemVariants}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <Image
                src="/images/about.jpg" // Pastikan untuk mengganti dengan path gambar yang sesuai
                alt="Pondok Pesantren Keluarga Al-Qur'an"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              variants={itemVariants}
              className="order-1 md:order-2"
            >
              <div className="backdrop-blur-sm bg-orange-800/10 rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="space-y-6 text-base md:text-lg font-poppins leading-relaxed text-white/90">
                  <p>
                    <span className="font-semibold text-yellow-200">
                      Yayasan Pondok Pesantren Keluarga Al-Qur&apos;an
                    </span>{" "}
                    lahir dari tekad untuk membangun generasi Qur&apos;ani melalui pendidikan dan pembinaan. Berawal dari merintis pondok tahfidz kecil di Desa Ketaon, Boyolali, kami terus berikhtiar menjadi pusat pembelajaran yang membawa manfaat luas bagi umat.
                  </p>
                  
                  <p>
                    Dengan semangat gotong royong dan kedermawanan, lahan wakaf serta bangunan pendukung pun berhasil didirikan. Kini, Yayasan kami telah menjadi rumah bagi{" "}
                    <span className="font-semibold text-yellow-200">
                      lebih dari 50 santri
                    </span>
                    , mendidik mereka dengan nilai-nilai Al-Qur&apos;an sejak usia dini.
                  </p>

                  <p className="text-yellow-100 font-medium">
                    Setiap dukungan dari Anda adalah langkah nyata dalam melanjutkan perjuangan ini. Bersama, kita wujudkan generasi masa depan yang mencintai Al-Qur&apos;an.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;