import mongoose, { Document, Schema } from "mongoose";

interface JobOpening {
  title: string;
  category: string;
  description: string;
  location: string;
  salary: string;
  tags: string[];
  isActive: boolean;
}

export interface CareerDocument extends Document {
  heroTag: string;
  heroTitle: string;
  heroDescription: string;
  jobOpenings: JobOpening[];
  categories: string[];
  isDeleted: boolean;
  deletedAt?: Date;
}

const JobOpeningSchema = new Schema<JobOpening>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    tags: { type: [String], default: [] },
    isActive: { type: Boolean, default: true },
  },
  { _id: true }
);

const CareerSchema = new Schema<CareerDocument>(
  {
    heroTag: { type: String, required: true },
    heroTitle: { type: String, required: true },
    heroDescription: { type: String, required: true },
    jobOpenings: { type: [JobOpeningSchema], default: [] },
    categories: { type: [String], default: [] },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export default mongoose.models.CareerContent ||
  mongoose.model<CareerDocument>("CareerContent", CareerSchema);
