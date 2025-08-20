"use client";

import HeroSection from "../../components/aboutUs/HeroSection";
import Reviews from "../../components/aboutUs/Reviews";
import Services from "../../components/aboutUs/Services";
import StatSection from "../../components/aboutUs/StatSection";
import TeamInfo from "../../components/aboutUs/TeamInfo";
import Content from "../../components/aboutUs/Content";
import CoreValues from "../../components/aboutUs/CoreValues";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center pl-6 md:pl-0 pr-6 md:pr-0 text-center bg-background">
        <HeroSection />
        <Services />
        <StatSection />
        <TeamInfo />
        <Reviews />
        <Content />
        <CoreValues />
      </main>
    </>
  );
}
