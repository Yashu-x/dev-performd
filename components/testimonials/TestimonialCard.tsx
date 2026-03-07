import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  title: string;
  text: string;
  stars: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  text,
  stars,
  image,
}) => {
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white text-gray-800 relative hover:shadow-lg transition flex flex-col h-full">
      {/* Quote mark */}
      <div className="text-5xl text-gray-300 leading-none text-left mb-2">“</div>

      {/* Main text grows to fill space */}
      <p className="text-base text-left flex-grow">{text}</p>

      {/* Footer stays at bottom */}
      <div className="flex mt-3 justify-between items-center pt-4">
        <div className="flex items-center gap-3">
          <img
            src={image || "https://via.placeholder.com/40"}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{title}</p>
          </div>
        </div>
        <div className="flex m-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
