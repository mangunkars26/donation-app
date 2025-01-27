"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Mail, 
  MessageCircle,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";

export default function ContactSection() {
  const whatsappNumber = "+62 812-3456-7890";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s+/g, '')}`;

  const socialLinks = [
    { 
      icon: Instagram, 
      link: "https://www.instagram.com/paudtkit.keluargaalquran",
      color: "text-gray-200"
    },
    { 
      icon: Facebook, 
      link: "https://www.facebook.com/share/12CcRWGRihL/",
      color: "text-gray-200"
    },
    { 
      icon: Youtube, 
      link: "https://m.youtube.com/@PaudTKKeluargaAlQuran",
      color: "text-gray-200"
    }
  ];

  return (
    <section id="contact" className="bg-purple-800 py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-200 mb-8">
            Lokasi & Kontak Kami
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        {/* Address Section */}
        <div className="flex items-center space-x-2">
          <MapPin className="w-12 h-12 text-blue-500 flex-shrink-0" />
          <div>
            <p className="text-gray-200 text-lg">Yayasan Pondok Pesantren Keluarga Al Quran</p>
            <p className="text-gray-200 text-lg">
              Pundung, Ketaon, Banyudono, Boyolali, Jawa Tengah
            </p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-center space-x-2">
          <Phone className="w-12 h-12 text-green-500 flex-shrink-0" />
          <p className="text-gray-200 text-lg">08977731995</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 pt-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} hover:scale-110 transition-transform`}
            >
              <social.icon className="w-8 h-8" />
            </a>
          ))}
        </div>

        {/* Contact Us Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="mr-3" />
          Hubungi Kami
        </a>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.371103968732!2d110.67026617446622!3d-7.534442092478773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6d930511299b%3A0xc03d1e9a43a1d32b!2sYayasan%20Pondok%20Pesantren%20Keluarga%20Al%20Quran!5e0!3m2!1sid!2sid!4v1737815098790!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>

        </motion.div>
      </div>
    </section>
  );
}