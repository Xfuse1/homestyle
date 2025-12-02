
import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  const projectImages = PlaceHolderImages.filter(
    (img) => img.id.startsWith("project-") && !img.id.includes("before") && !img.id.includes("after")
  );
  const beforeAfterImages = {
    before: PlaceHolderImages.find((img) => img.id === "project-before-1"),
    after: PlaceHolderImages.find((img) => img.id === "project-after-1"),
  };

  const services = [
    {
      icon: <LayoutGrid className="h-10 w-10 text-accent" />,
      title: "Interior Design",
      description: "2D & 3D visualization to bring your vision to life before execution.",
    },
    {
      icon: <Construction className="h-10 w-10 text-accent" />,
      title: "Full Finishing & Contracting",
      description: "Complete execution from plumbing and electrical to painting and flooring.",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Engineering Supervision",
      description: "Dedicated project management to ensure quality and timely delivery.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-accent" />,
      title: "Furniture & Decor Styling",
      description: "Sourcing and styling furniture, lighting, and decor to complete your space.",
    },
  ];

  const processSteps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Consultation & Site Visit",
    },
    {
      icon: <DraftingCompass className="h-8 w-8 text-accent" />,
      title: "2D/3D Design Proposals",
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-accent" />,
      title: "Materials Selection & Approval",
    },
    {
      icon: <Wrench className="h-8 w-8 text-accent" />,
      title: "Execution & Final Handover",
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
          <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 pb-10 text-center md:pt-32 lg:pt-40">
            <div className="grid gap-6">
              <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl lg:text-6xl" dir="ltr">
                We design a space that reflects you… and deliver it turnkey.
              </h1>
              <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                Complete interior design and full finishing services in Sohag — design, execution, furnishing, and turnkey delivery.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="#contact">Book a Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#projects">View Our Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                  A Trustworthy Partner for Your Dream Space
                </h2>
                <p className="text-lg text-muted-foreground">
                  Home Stylist is a premier interior design and full finishing studio based in Sohag. We specialize in transforming spaces from concept to reality, handling every detail with precision and care. Our services cover everything from initial 2D/3D designs and engineering supervision to complete turnkey delivery, ensuring a seamless and stress-free experience for our clients.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm dark:bg-card">
                    {step.icon}
                    <h3 className="font-semibold text-primary">{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white py-20 dark:bg-black/10 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-headline text-3xl font-bold text-primary md:text-4xl">Our Services</h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
              We offer a complete suite of services to manage your project from start to finish.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card key={index} className="transform-gpu text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
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
              <h2 className="mb-4 font-headline text-3xl font-bold text-primary md:text-4xl">
                Selected Interiors & Finishing Projects
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
                Explore some of our transformations and see the quality we deliver.
              </p>
            </div>
            {beforeAfterImages.before && beforeAfterImages.after && (
               <div className="mb-16">
                  <h3 className="text-center font-headline text-2xl font-bold text-primary mb-8">Apartment Transformation</h3>
                  <BeforeAfterSlider
                    before={beforeAfterImages.before}
                    after={beforeAfterImages.after}
                  />
               </div>
            )}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projectImages.map((project) => (
                <Card key={project.id} className="overflow-hidden">
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
                        {project.description}
                      </h3>
                      <p className="text-sm text-muted-foreground">Design & Execution</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-16 text-center">
              <h3 className="mb-4 font-headline text-2xl font-bold text-primary">
                Want your space to be our next transformation?
              </h3>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="bg-white py-20 dark:bg-black/10 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
                  Book Your Free Consultation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Tell us a bit about your project and we’ll get back to you to schedule a free consultation and site visit.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>Working Hours: Sat - Thu, 9am - 6pm</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>Location: Sohag, Egypt</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <WhatsappIcon className="h-5 w-5 text-accent" />
                     <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Chat on WhatsApp
                     </a>
                  </div>
                </div>
              </div>
              <Card className="p-6 shadow-lg">
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
