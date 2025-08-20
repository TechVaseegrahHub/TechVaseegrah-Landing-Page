"use client";
import React, { useState, useRef } from "react"; // Added useState for BlurImage
import { cn } from "@/lib/utilss";
import { motion } from "framer-motion";
import Image, { ImageProps, StaticImageData } from "next/image";
import Link from "next/link";

export interface ProjectCardType {
  src: StaticImageData;
  title: string;
  category: string;
  link: string;
}

interface ProjectCarouselProps {
  items: ProjectCardType[];
}

const BlurImage = ({ src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className, "object-cover absolute z-10 inset-0")}
      onLoad={() => setLoading(false)}
      src={src}
      alt={alt || "Card background"}
      fill
      loading="lazy"
      {...rest}
    />
  );
};

// Renamed the component for clarity
export const ProjectCarousel = ({ items }: ProjectCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
      >
        <div className="flex flex-row justify-start gap-4 md:gap-6 px-4 md:px-8">
          {items.map((card, index) => (
            <motion.div
              key={card.title + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" } }}
              className="flex-shrink-0"
            >
              <Link
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl bg-gray-100 h-80 w-64 md:h-[32rem] md:w-80 overflow-hidden relative group"
              >
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
                <div className="relative z-40 p-6 md:p-8">
                  <p className="text-white text-sm md:text-base font-medium font-sans text-left">
                    {card.category}
                  </p>
                  <p className="text-white text-xl md:text-2xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
                    {card.title}
                  </p>
                </div>
                <BlurImage 
                  src={card.src} 
                  alt={card.title} 
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-20"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};