import mongoose, { Document, Schema } from "mongoose";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface CoreValue {
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  quote: string;
  image: string;
  role: string;
}

export interface AboutUsDocument extends Document {
  title: string;
  description: string;
  team: TeamMember[];
  coreValues: CoreValue[];
  images: string[];
  testimonials: Testimonial[];
  isDeleted: boolean;
  deletedAt?: Date;
}

const TeamMemberSchema = new Schema<TeamMember>({
  name: String,
  role: String,
  image: String,
  bio: String,
});

const CoreValueSchema = new Schema<CoreValue>({
  title: String,
  description: String,
});

const TestimonialSchema = new Schema<Testimonial>({
  name: String,
  quote: String,
  image: String,
  role: String,
});

const AboutUsSchema = new Schema<AboutUsDocument>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    team: [TeamMemberSchema],
    coreValues: [CoreValueSchema],
    images: [String],
    testimonials: [TestimonialSchema],
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.AboutUsContent ||
  mongoose.model<AboutUsDocument>("AboutUsContent", AboutUsSchema);