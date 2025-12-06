"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Building,
  CheckCircle,
  Construction,
  DraftingCompass,
  LayoutGrid,
  MapPin,
  MessageSquare,
  Paintbrush,
  Phone,
  ShoppingBag,
  Users,
  Wrench,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import Header from "@/components/header";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import BeforeAfterSlider from "@/components/before-after-slider";
import ContactForm from "@/components/contact-form";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import SpotlightCard from "@/components/spotlight-card";
import { cn } from "@/lib/utils";
import anime from "animejs/lib/anime.es.js";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const hasAnimatedRef = useRef(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const el = document.querySelector(".sofa-hero");
    if (!el) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
  
            anime({
              targets: ".sofa-hero",
              opacity: [0.5, 1],
              translateX: ["16rem", "0rem"],
              rotate: ["-.75turn", "0turn"],
              duration: 2000,
              easing: "easeInOutQuad",
              loop: false,
            });
  
            observer.unobserve(entry.target);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.4,
      }
    );
  
    observer.observe(el);
  
    return () => observer.disconnect();
  }, []);

  const projectImages = PlaceHolderImages.filter(
    (img) => img.id.startsWith("project-") && !img.id.includes("before") && !img.id.includes("after")
  );
  
  const services = [
    {
      icon: (
        <LayoutGrid className="h-10 w-10 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
      ),
      title: "Interior Design",
      description: "2D & 3D visualization to bring your vision to life before execution.",
    },
    {
      icon: (
        <Construction className="h-10 w-10 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
      ),
      title: "Full Finishing & Contracting",
      description: "Complete execution from plumbing and electrical to painting and flooring.",
    },
    {
      icon: (
        <Users className="h-10 w-10 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
      ),
      title: "Engineering Supervision",
      description: "Dedicated project management to ensure quality and timely delivery.",
    },
    {
      icon: (
        <ShoppingBag className="h-10 w-10 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
      ),
      title: "Furniture & Decor Styling",
      description: "Sourcing and styling furniture, lighting, and decor to complete your space.",
    },
  ];

  const processSteps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Consultation",
      description: "We start with a free consultation to understand your needs and vision.",
    },
    {
      icon: <DraftingCompass className="h-8 w-8 text-accent" />,
      title: "Design",
      description: "Our team creates detailed 2D/3D designs for your approval.",
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-accent" />,
      title: "Execution",
      description: "We manage all finishing work with precision and high-quality materials.",
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Handover",
      description: "We deliver your dream space, ready for you to enjoy.",
    },
  ];

  return (
    <div className={cn("flex min-h-dvh flex-col bg-background", lang === 'ar' && 'font-arabic')}>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative w-full overflow-hidden bg-background">
          <div className="container mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            {/* Text Column */}
            <div className={cn("space-y-6 text-center md:text-left", lang === 'ar' ? 'md:text-right' : '')}>
              <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl lg:text-6xl" data-aos="fade-right">
                {t("hero_title")}
              </h1>
              <p className="text-lg text-muted-foreground" data-aos="fade-right" data-aos-delay="100">
                {t("hero_subtitle")}
              </p>
              <div data-aos="fade-right" data-aos-delay="200">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="#projects">{t('explore_work')}</Link>
                </Button>
              </div>
            </div>

            {/* Video Column */}
            <div className="mt-12 flex w-full justify-center md:mt-0" data-aos="fade-left" dir="ltr">
              <div className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-3xl bg-[#f6f3ea] md:aspect-video">
                <video
                  src="https://bbzjxcjfmeoiojjnfvfa.supabase.co/storage/v1/object/sign/sara%20wep/vedio.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MTllODRmNS02YWU3LTRjYTYtYWZiMS0yMDQyMjE1ZmY2ODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzYXJhIHdlcC92ZWRpby5tcDQiLCJpYXQiOjE3NjQ3NzMxODgsImV4cCI6MzE1NTM2NDc3MzE4OH0.4ynzLqxO98tuEoRX3pdkzEdui8458tVASwJQhta8Sk8"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 left-1/2 z-0 h-full w-[130%] -translate-x-1/2 object-cover"
                ></video>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-card py-20 md:py-32">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:items-center">
            <div className={cn(lang === 'ar' ? 'lg:order-2' : '')}>
              <div className={cn("mb-12", lang === 'ar' ? 'text-right' : 'text-left')}>
                <h2 data-aos="fade-up" className="font-headline text-3xl font-bold text-primary md:text-4xl">
                  {t("about_title")}
                </h2>
                <p data-aos="fade-up" data-aos-delay="150" className="mt-4 text-lg text-muted-foreground">
                  Home Stylist is a premier interior design and full finishing
                  studio based in Sohag. We specialize in transforming spaces
                  from concept to reality, handling every detail with precision
                  and care.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {processSteps.map((step, index) => (
                  <Card key={index} data-aos="fade-up" data-aos-delay={index * 100} className={cn("overflow-hidden rounded-lg bg-background shadow-lg transition-all duration-300 hover:-translate-y-2", lang === 'ar' ? 'text-right' : 'text-left')}>
                    <CardContent className="p-8">
                      <div className={cn("relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-inner", lang === 'ar' ? 'mx-auto md:ml-auto md:mr-0' : 'mx-auto md:mr-auto md:ml-0')}>
                        {step.icon}
                      </div>
                      <h3 className="font-headline text-xl font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className={cn("flex items-center justify-center", lang === 'ar' ? 'lg:order-1' : '')} data-aos="fade-right">
              <Image
                src="https://i.postimg.cc/W4qfB7bS/اباجوره_فاينال_بدون_خلفيه.png"
                alt="Elegant floor lamp"
                width={800}
                height={1200}
                className="sofa-hero rounded-lg max-w-md w-full"
                data-ai-hint="floor lamp"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white py-20 dark:bg-black/10 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 data-aos="fade-up" className="mb-4 font-headline text-3xl font-bold text-primary md:text-4xl">Our Services</h2>
            <p data-aos="fade-up" data-aos-delay="150" className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              We offer a complete suite of services to manage your project from start to finish.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group transform-gpu text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <CardHeader>
                    {service.icon}
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle className="font-headline text-xl font-bold text-primary">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 data-aos="fade-up" className="mb-4 font-headline text-3xl font-bold text-primary md:text-4xl">
                Selected Interiors & Finishing Projects
              </h2>
              <p data-aos="fade-up" data-aos-delay="150" className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
                Explore some of our transformations and see the quality we deliver.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projectImages.map((project, index) => (
                <Card key={project.id} data-aos="fade-up" data-aos-delay={index * 100} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-w-4 aspect-h-3">
                      <Image
                        src={project.imageUrl}
                        alt={project.description}
                        width={600}
                        height={450}
                        data-ai-hint={project.imageHint}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-headline text-lg font-bold text-primary">
                        {project.title || project.id.replace('project-', 'Project ')}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="bg-white py-20 dark:bg-black/10 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 data-aos="fade-right" className="font-headline text-3xl font-bold text-primary md:text-4xl">
                  Book Your Free Consultation
                </h2>
                <p data-aos="fade-right" data-aos-delay="150" className="text-lg text-muted-foreground">
                  Tell us a bit about your project and we’ll get back to you to schedule a free consultation and site visit.
                </p>
                <div className="space-y-4 pt-4">
                  <div data-aos="fade-right" data-aos-delay="200" className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>Working Hours: Sat - Thu, 9am - 6pm</span>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="250" className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>Location: Sohag, Egypt</span>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="300" className="flex items-center gap-3">
                     <WhatsappIcon className="h-5 w-5 text-accent" />
                     <a href="https://wa.me/201029518786" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Chat on WhatsApp
                     </a>
                  </div>
                </div>
              </div>
              <Card className="p-6 shadow-lg" data-aos="fade-left">
                <CardContent className="p-0">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
          <div className="flex justify-center gap-6">
            <Link href="https://www.instagram.com/homestylist6/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-80">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61581922792330" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-opacity hover:opacity-80">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://wa.me/201029518786" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="transition-opacity hover:opacity-80">
              <WhatsappIcon className="h-6 w-6" />
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Home Stylist. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
