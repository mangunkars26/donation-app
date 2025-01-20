"use client";

import HeroSection from "../components/landing/HeroSection";
import ChallengesSection from "../components/landing/ChallengesSection";
import GoalsSection from "../components/landing/GoalsSection";
import AchievementsSection from "../components/landing/AchievementsSection";
import DonationCallSection from "../components/landing/DonationCallSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import FinalCallSection from "../components/landing/FinalCallSection";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ChallengesSection />
      <GoalsSection />
      <AchievementsSection />
      <BenefitsSection />
      <FinalCallSection />
      <DonationCallSection />
    </div>
  );
}
