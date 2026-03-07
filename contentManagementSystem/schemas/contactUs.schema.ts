import { z } from "zod";

export const OfficeSchema = z.object({
  name: z.string(),
  address: z.string(),
  phone: z.string(),
  email: z.string().email(),
  mapUrl: z.string().url(),
});

export const FAQSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const ContactUsSchema = z.object({
  heroTitle: z.string(),
  heroSubtitle: z.string(),
  contactEmail: z.string().email(),
  contactPhone: z.string(),
  contactAddress: z.string(),
  offices: z.array(OfficeSchema),
  faqs: z.array(FAQSchema),
});