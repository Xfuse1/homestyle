"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Slider } from "@/components/ui/slider";
import { Grip } from "lucide-react";

interface BeforeAfterSliderProps {
  before: ImagePlaceholder;
  after: ImagePlaceholder;
}

export default function BeforeAfterSlider({
  before,
  after,
}: BeforeAfterSliderProps) {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
      <div className="relative aspect-[3/2] w-full">
        {/* Before Image */}
        <Image
          src={before.imageUrl}
          alt={before.description}
          fill
          priority
          data-ai-hint={before.imageHint}
          className="object-cover select-none"
        />

        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderValue}%` }}
        >
          <Image
            src={after.imageUrl}
            alt={after.description}
            fill
            priority
            data-ai-hint={after.imageHint}
            className="object-cover object-left select-none"
            style={{ minWidth: '100%', height: '100%', maxWidth: 'none' }}
          />
        </div>
        
        {/* Slider control */}
        <div 
          className="absolute top-0 bottom-0 z-10 w-1 bg-white/50 cursor-ew-resize -translate-x-1/2 backdrop-blur-sm" 
          style={{ left: `${sliderValue}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
             <Grip className="w-6 h-6 text-primary"/>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
         <Slider
           defaultValue={[50]}
           max={100}
           step={0.1}
           onValueChange={(value) => setSliderValue(value[0])}
           className="w-full"
         />
      </div>
    </div>
  );
}
