"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import anime from "animejs";
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

export default function Home() {
  const hasAnimatedRef = useRef(false);

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
              translateX: ['16rem', '0rem'],
              rotate: ['-.25turn', '0turn'],
              duration: 2000,
              easing: 'easeOutQuad',
              loop: false, 
            });

            observer.unobserve(entry.target);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.4, // Starts when 40% of the element is visible
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
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden lg:h-screen">
          <div className="absolute inset-0 z-0 h-full w-full">
            <iframe
              src="https://streamable.com/e/x7zmzb?autoplay=1&muted=1&loop=1&controls=0&logo=0"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; loop"
              className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
              style={{ objectFit: 'cover' }}
            ></iframe>
          </div>
          <div className="container relative z-10 mx-auto flex h-full flex-col justify-start px-4 pt-16">
            <div className="grid max-w-5xl gap-6">
              <h1
                data-aos="fade-up"
                className="font-headline text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl lg:leading-snug"
              >
                Designing spaces that reflect you.
              </h1>
              <p 
                data-aos="fade-up" data-aos-delay="150"
                className="mt-4 max-w-5xl text-lg text-muted-foreground leading-relaxed md:text-left">
                Complete interior design and full finishing services in Sohag — design, execution, furnishing, and turnkey delivery.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row max-w-5xl mx-auto">
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-card py-20 md:py-32">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:items-center">
            <div className="lg:order-2">
              <div className="mb-12 text-right">
                <h2 data-aos="fade-up" className="font-headline text-3xl font-bold text-primary md:text-4xl">
                  A Trustworthy Partner for Your Dream Space
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
                  <Card key={index} data-aos="fade-up" data-aos-delay={index * 100} className="overflow-hidden rounded-lg bg-background text-right shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-inner md:ml-auto md:mr-0">
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
            <div className="lg:order-1 flex items-center justify-center" data-aos="fade-right">
              <Image
                src="https://i.postimg.cc/W4qfB7bS/abajwrh-faynal-bdwn-khlfyh.png"
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
            <div className="mt-16 text-center">
              <h3 data-aos="fade-up" className="mb-4 font-headline text-2xl font-bold text-primary">
                Want your space to be our next transformation?
              </h3>
              <div data-aos="fade-up" data-aos-delay="150">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="#contact">Start Your Project</Link>
                </Button>
              </div>
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
                     <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="hover:underline">
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

      <footer className="bg-primary py-6 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Home Stylist. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
