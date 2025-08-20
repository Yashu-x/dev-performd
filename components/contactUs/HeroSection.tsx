import React from "react";

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-r from-white/25 to-primary 
                 text-center px-4 sm:px-6 md:px-12 py-12 
                 bg-[url('/images/background.png')] 
                 bg-opacity-25 bg-cover bg-center bg-no-repeat"
    >
      {/* Contact Us Badge */}
      <div className="bg-secondary rounded-full inline-block px-4 sm:px-6 py-2 
                      text-primary font-semibold text-base sm:text-base">
        Contact Us
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold py-4 leading-snug">
        Grow Your Business With Sri Lanka's Top Digital <br className="hidden sm:block" /> 
        Marketing And Technology Company.
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-2xl font-bold text-primary mt-2">
        Digital Marketing And Software Development.
      </p>

      {/* Description */}
      <p className="text-sm sm:text-lg text-gray-600 mt-4 max-w-xl md:max-w-3xl mx-auto leading-relaxed">
        Few Agencies Deliver Both Digital Marketing And Technology <br className="hidden sm:block" />
        Solutions to Drive Your Business Forward — But You’ve Just <br className="hidden sm:block" />
        Found One That Does.
      </p>

      {/* CTA Button */}
      <button className="bg-primary text-white font-medium mt-6 px-5 sm:px-6 py-3 rounded-md 
                         hover:bg-primary/90 transition">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm sm:text-lg">Schedule a Call</span>
        </div>
      </button>
    </section>
  );
}
