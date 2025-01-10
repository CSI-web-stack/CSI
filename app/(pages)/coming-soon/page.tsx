import Footer from "@/app/sharecomponents/Footer";
import Navbar from "@/app/sharecomponents/Navbar";
import HeroSection from "@/app/sharecomponents/homeHeroSection/HeroSection";
import HeroSection_CS from "@/app/sharecomponents/homeHeroSection/HeroSection_CS";
import React from "react";

export default function page() {
  return (
    <div className="text-black w-screen overflow-hidden relative">
      <Navbar />
      <div className=" z-20">
        <HeroSection_CS />
      </div>
      <div className=" z-30">
        <Footer />
      </div>
    </div>
  );
}
