"use server";

import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  projectType: z.string(),
  location: z.string().optional(),
  message: z.string().optional(),
});

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed.",
    };
  }

  // In a real application, you would send this data to your backend,
  // save it to a database, or send an email.
  console.log("Form submitted successfully:", validatedFields.data);

  return {
    message: "Thank you! Your request has been submitted successfully.",
    errors: {},
  };
}
