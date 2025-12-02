"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinkItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => {
        const Wrapper = isMobile ? SheetClose : 'div';
        return (
          <Wrapper key={link.href}>
            <Link href={link.href} className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              isMobile && "block w-full p-4 text-lg"
            )}>
              {link.label}
            </Link>
          </Wrapper>
        )
      })}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="#home" className="font-headline text-2xl font-bold text-primary">
          Home Stylist
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLinkItems />
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Book Consultation</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] bg-background">
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation links for the website.
              </SheetDescription>
              <nav className="mt-8 flex flex-col items-center gap-4">
                <NavLinkItems isMobile />
                <SheetClose asChild>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
                    <Link href="#contact">Book Consultation</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
