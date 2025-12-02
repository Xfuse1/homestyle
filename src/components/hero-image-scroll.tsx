"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function HeroImageScroll() {
  const heroImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("hero-")
  );
  
  // Duplicate the array for a seamless loop
  const imageRow = [...heroImages, ...heroImages];

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute bottom-0 h-1/2 w-full lg:right-0 lg:top-0 lg:h-full lg:w-3/4">
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="flex h-auto w-max animate-scroll">
            {imageRow.map((img, index) => (
              <div
                key={`${img.id}-${index}`}
                className="relative mx-4 h-[250px] w-[350px] shrink-0 md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px]"
              >
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  fill
                  style={{ objectFit: 'contain' }}
                  data-ai-hint={img.imageHint}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 350px, (max-width: 1024px) 450px, 600px"
                  priority={index < heroImages.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
