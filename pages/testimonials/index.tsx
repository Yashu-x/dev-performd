"use client";

import TestimonialsGrid from "../../components/testimonials/TestimonialsGrid";
import BlogSection from "../../components/layout/BlogSection";
import HireUsBanner from "../../components/testimonials/HireUsBanner";


export default function Testimonials() {
  return (
    <div className="bg-background">
        <BlogSection
            tag="Testimonials"
            title="What Our Client Says"
            description="I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double-click me to add your own content and make changes to the font."
            component={<TestimonialsGrid />}
        />
        <HireUsBanner/>
    </div>
  );
}
