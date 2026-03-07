import { z } from "zod";

export const TeamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  image: z.string().url(),
  bio: z.string(),
});

export const CoreValueSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const TestimonialSchema = z.object({
  name: z.string(),
  quote: z.string(),
  image: z.string().url(),
  role: z.string()
});

export const AboutUsSchema = z.object({
  title: z.string(),
  description: z.string(),
  team: z.array(TeamMemberSchema),
  coreValues: z.array(CoreValueSchema),
  images: z.array(z.string().url()),
  testimonials: z.array(TestimonialSchema),
});