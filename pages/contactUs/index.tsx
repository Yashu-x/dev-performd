"use client";
import Offices from "../../components/contactUs/Offices";
import ContactSection from "../../components/contactUs/ContactSection";
import HeroSection from "../../components/contactUs/HeroSection";
import FAQSection from "../../components/contactUs/FAQSection";

export default function contactUs() {
  return (
    <div className="bg-background">
      <HeroSection />
      <ContactSection />
      <Offices />
      <FAQSection />
    </div>
  );
}
