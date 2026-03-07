"use client";

import JobBoard from "../../components/career/JobBoard";
import BlogSection from "../../components/layout/BlogSection";


export default function career() {
  return (
    <div className="bg-background">
        <BlogSection
            tag="Career"
            title="Be Part Of Our Mission"
            description="I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double-click me to add your own content and make changes to the font."
            component={<JobBoard/>}
        />
    </div>
  );
}
