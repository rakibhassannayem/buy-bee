"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";

const bannerImages = [
  "https://plus.unsplash.com/premium_photo-1677995700883-30df169c7517?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1758525223565-2ee93c6328d9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {bannerImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-full w-full overflow-hidden group">
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="object-cover h-[300px] sm:h-[400px] lg:h-[450px] w-full brightness-90"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 md:px-24 bg-gradient-to-r from-black/60 to-transparent text-white">
                
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-pink-500">
                  Up to 15% off <br className="hidden sm:block" /> Voucher 
                </h2>
                <Button 
                  size="lg" 
                  className="bg-primary text-white hover:bg-primary/90 font-semibold px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
