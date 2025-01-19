"use client";

import HeroSection from "../components/landing/HeroSection";
import ChallengesSection from "../components/landing/ChallengesSection";
import GoalsSection from "../components/landing/GoalsSection";
import AchievementsSection from "../components/landing/AchievementsSection";
import DonationCallSection from "../components/landing/DonationCallSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import FinalCallSection from "../components/landing/FinalCallSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ChallengesSection />
      <GoalsSection />
      <AchievementsSection />
      <DonationCallSection />
      <BenefitsSection />
      <FinalCallSection />
    </div>
  );
}

// import React, { useState } from "react";
// import HeroSlider from "../components/home/HeroSlider";
// import ImpactStats from "../components/home/ImpactStats";
// import DonationNeedsSection from "../components/home/DonationNeedsSection";
// import InspirationStoriesSection from "../components/home/InspirationStoriesSection";
// import GallerySection from "../components/home/GallerySection";
// import YouTubeSection from "../components/home/YouTubeSection";
// import GalleryModal from "../components/home/GalleryModal";
// import CallToAction from "../components/home/CallToAction";
// import AboutProjectSection from "@/components/home/AboutProjectSection";

// export default function Home() {
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");

//   const galleryImages = [
//     "/api/placeholder/400/300",
//     "/api/placeholder/400/300",
//     "/api/placeholder/400/300",
//     "/api/placeholder/400/300",
//     "/api/placeholder/400/300",
//     "/api/placeholder/400/300",
//   ];

//   const heroSlides = [
//     {
//       image: "/images/image1.jpg",
//       title: "Membangun Generasi Qurani",
//       description: "Dukung pembangunan PAUD-TKIT Keluarga Al-Quran",
//     },
//     {
//       image: "/images/image2.jpg",
//       title: "Lingkungan Belajar yang Nyaman",
//       description: "Bantu kami mewujudkan fasilitas yang lebih baik",
//     },
//   ];

//   const openGallery = (image) => {
//     setSelectedImage(image);
//     setIsGalleryOpen(true);
//   };

//   const closeGallery = () => {
//     setIsGalleryOpen(false);
//   };

//   return (
//     <div className="min-h-screen">
//       <HeroSlider slides={heroSlides} />
//       <AboutProjectSection />
//       <ImpactStats />
//       <DonationNeedsSection />
//       <InspirationStoriesSection />
//       <GallerySection galleryImages={galleryImages} openGallery={openGallery} />
//       <YouTubeSection />
//       <GalleryModal isOpen={isGalleryOpen} onClose={closeGallery} selectedImage={selectedImage} />
//       <CallToAction />
//     </div>
//   );
// }