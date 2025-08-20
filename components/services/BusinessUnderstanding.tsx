import Image from "next/image";
import { FC } from "react";

interface CardProps {
  title: string;
  text: string;
}

const Icon = () => (
  <div className="bg-primary rounded-lg px-2 items-center">
    <Image
      src={'/icon.png'}
      width={"45px"}
      height={"45px"}
      className=""
    />
  </div>
);

const Card: FC<CardProps> = ({ title, text }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 border border-primary">
    <div className="flex items-start gap-2">
      <Icon />
      <div className="flex flex-col">
        <h3 className="font-semibold text-lg pb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  </div>
);

export default function BusinessUnderstanding() {
  const text =
    "I'm a Paragraph. Click Here To Add Your Own Text And Edit Me. It's Easy. Just Click “Edit Text” Or Double Click Me To Add Your Own Content And Make Changes To The This Is A Great Space To Write A Long Text About Your Company And Your Services. You Can Use This Space To Go Into A Little More Detail About Your Own Company.";

  // Data array for cards
  const cards: CardProps[] = [
    { title: "Understanding Your Business Is #1, And Start With It.", text },
    { title: "Research Your Market & Competitors Deeply.", text },
    { title: "Align SEO Goals With Real Business KPIs.", text },
    { title: "Build A Roadmap & Execute Iteratively.", text },
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-center font-bold text-2xl md:text-3xl">
        Don’t leave to chance. Work with the top <br />
        <span className="text-primary">SEO company in Sri Lanka</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
