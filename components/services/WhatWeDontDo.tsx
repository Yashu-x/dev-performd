import Image from "next/image";
import { FC } from "react";

interface ListItemProps {
  text: string;
}

const Icon = () => (
  <div className="bg-primary rounded-lg px-2 items-center">
    <Image
      src={'/icon.png'}
      width={"20px"}
      height={"20px"}
      className=""
    />
  </div>
);

const ListItem: FC<ListItemProps> = ({ text }) => (
  <div className="flex items-start gap-3">
    <Icon />
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </div>
);

export default function WhatWeDontDo() {
  const listText =
    "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.";

  return (
    <section className="bg-teal-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-2xl md:text-3xl mb-8">
          What We <span className="text-black">DON'T DO</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-xl shadow-inner"></div>

          {/* List Items */}
          <div className="flex flex-col gap-6">
            <ListItem text={listText} />
            <ListItem text={listText} />
            <ListItem text={listText} />
            <ListItem text={listText} />
          </div>
        </div>
      </div>
    </section>
  );
};
