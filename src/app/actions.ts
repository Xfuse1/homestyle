"use server";
// This file is no longer used for form submission but is kept for potential future use.
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
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

  console.log("Form submitted successfully:", validatedFields.data);

  return {
    message: "Thank you! Your request has been submitted successfully.",
    errors: {},
  };
}
