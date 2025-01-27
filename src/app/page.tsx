"use client";

import HeroSection from "../components/landing/HeroSection";
import ChallengesSection from "../components/landing/ChallengesSection";
import GoalsSection from "../components/landing/GoalsSection";
import AchievementsSection from "../components/landing/AchievementsSection";
import DonationCallSection from "../components/landing/DonationCallSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import FinalCallSection from "../components/landing/FinalCallSection";
import Navbar from "@/components/Navbar";
import YouTubeSection from "@/components/landing/YoutubeSection";
import ScrollToTop from "@/components/ScrollToTop";
import AboutSection from "@/components/landing/AboutSection";
import Nominal from "@/components/landing/Nominal";

import Contact from "@/components/landing/Contact";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <YouTubeSection />
      <AboutSection />
      <ChallengesSection />
      <GoalsSection />
      <Nominal /> 
      <AchievementsSection />
      <BenefitsSection />
      <FinalCallSection />
      <DonationCallSection />
      <ScrollToTop />
      <Contact />
    </div>
  );
}
