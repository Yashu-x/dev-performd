import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double-click me to add your own content and make changes to the font.",
    stars: 5,
    image: "https://picsum.photos/300/200?2",
  },
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me.",
    stars: 5,
    image: "https://picsum.photos/300/200?2",
  },
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me.",
    stars: 5,
    image: "https://picsum.photos/300/200?1",
  },
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me.",
    stars: 4,
    image: "https://picsum.photos/300/200?2",
  },
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me.",
    stars: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me.",
    stars: 5,
    image: "https://picsum.photos/300/200?2",
  },
  {
    name: "Peter Braun",
    title: "Business Owner",
    text: "I'm a paragraph. Click here to add your own text and edit me.",
    stars: 5,
    image: "https://picsum.photos/300/200?2",
  },
];

const TestimonialsGrid: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;