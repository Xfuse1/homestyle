"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const contactSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  location: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const WHATSAPP_NUMBER = "201029518786"; // Your WhatsApp number

export default function ContactForm() {
  const { t } = useLanguage();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      location: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const handleWhatsAppSubmit = (values: ContactFormValues) => {
    const text = `
      New Consultation Request:
      -------------------------
      Full Name: ${values.fullName}
      Phone: ${values.phone}
      Location: ${values.location || 'Not provided'}
      Message: ${values.message || 'Not provided'}
    `;

    const encodedText = encodeURIComponent(text.trim().replace(/\s+/g, ' '));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is ready to be sent.",
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleWhatsAppSubmit)} className="space-y-6">
        <div data-aos="fade-up" data-aos-delay="100">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form_full_name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form_full_name_placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form_phone')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form_phone_placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form_location')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form_location_placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form_message')}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t('form_message_placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {t('form_submit_button')}
          </Button>
        </div>
      </form>
    </Form>
  );
}
