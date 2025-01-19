"use client";

import React from "react";

export default function YouTubeSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Video Kegiatan Kami</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}