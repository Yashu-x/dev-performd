"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/Icon.png";

export default function Content() {
  return (
    <div className="w-full bg-primary px-5 py-10 md:py-0">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
        
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 capitalize">
            Grow Your Business <br /> with Strategic <br /> Marketing
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            As much as we help our clients reach their fullest business potential, we want to do
            our part to help our planet flourish every day. We may not be a behemoth, but we care
            and have taken the first steps. This is not a journey we have embarked on our own but
            with our clients too.
          </p>
        </div>

        {/* Right graphic placeholder */}
        <div className="flex-1 flex justify-center">
          <Image
            src={logo}
            width={400}
            height={400}
            alt="Logo"
            className="opacity-70 w-64 sm:w-80 lg:w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
