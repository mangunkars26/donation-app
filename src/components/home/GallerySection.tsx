"use client";

import React from "react";
import { Play } from "lucide-react";

interface GallerySectionProps {
  galleryImages: string[];
  openGallery: (image: string) => void;
}

export default function GallerySection({ galleryImages, openGallery }: GallerySectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Galeri Kegiatan</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openGallery(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}