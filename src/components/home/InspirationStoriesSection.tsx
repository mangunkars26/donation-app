"use client";

import React, { useState } from "react";

interface Story {
  name: string;
  age: number;
  quote: string;
  image: string;
}

export default function InspirationStoriesSection() {
  const [activeStory, setActiveStory] = useState<number>(0);

  const stories: Story[] = [
    {
      name: "Ahmad",
      age: 10,
      quote: "Saya bisa membaca Al-Quran berkat dukungan para donatur",
      image: "/path/to/ahmad-image.jpg",
    },
    {
      name: "Siti",
      age: 9,
      quote: "Sekarang saya lebih percaya diri menghafalkan surat-surat pendek",
      image: "/path/to/siti-image.jpg",
    },
  ];

  return (
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Cerita Inspiratif Anak-Anak Kami</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <img
              src={stories[activeStory].image}
              alt={stories[activeStory].name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <blockquote className="italic text-xl mb-4">
              "{stories[activeStory].quote}"
            </blockquote>
            <p className="font-semibold text-lg">
              {stories[activeStory].name}, Usia {stories[activeStory].age}
            </p>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-3 h-3 rounded-full ${
                  activeStory === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}