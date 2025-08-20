import Image from "next/image";
import React from "react";

const contactInfo = [
  {
    name:"Sales Team",
    detail:"Looking to scale with digital marketing or build a stellar product?",
    email:"Hello@Atdigital.io"
  },
  {
    name:"Sales Team",
    detail:"Looking to scale with digital marketing or build a stellar product?",
    email:"Hello@Atdigital.io"
  },
  {
    name:"Sales Team",
    email:"Hello@Atdigital.io"
  }
]

export default function ContactInfo() {
  return (
    <div className="flex-1 bg-primary p-6 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-white">Hi! We Are Always Here To Help You.</h2>
      
      <div className="space-y-3">
        {contactInfo.map((info,index)=>(
          <div className="bg-teal-500 p-4 rounded shadow">
            <div className="flex flex-row items-center gap-4">
              <Image
                src={"/icon.png"}
                width={45}
                height={45}
              />
              <div className="w-56">
                <h3 className="font-medium text-white">{info.name}</h3>
                <p className="text-sm text-white">{info.detail}</p>
                <a href="mailto:hello@atdigital.io" className="text-white">{info.email}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


