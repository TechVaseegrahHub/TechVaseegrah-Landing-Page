"use client"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image, { type ImageProps, type StaticImageData } from "next/image"
import Link from "next/link"

export interface ProjectCardType {
  src: string | StaticImageData // Updated to accept string for placeholder images
  title: string
  category: string
  link: string
}

interface ProjectCarouselProps {
  items: ProjectCardType[]
}

const BlurImage = ({ src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true)
  return (
    <Image
      className={cn(
        "transition-all duration-500 ease-out object-cover absolute inset-0", // Improved transition timing
        isLoading ? "blur-sm scale-110" : "blur-0 scale-100", // Added subtle scale effect
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src || "/placeholder.svg"}
      alt={alt || "Card background"}
      fill
      loading="lazy"
      {...rest}
    />
  )
}

export const ProjectCarousel = ({ items = [] }: ProjectCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null)

  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 md:py-24">
        <p className="text-gray-500 dark:text-gray-400 text-lg">No projects to display</p>
      </div>
    )
  }

  return (
    <div className="relative w-full pb-16 md:pb-24">
      <div
        className="flex w-full overflow-x-auto overscroll-x-auto py-8 scroll-smooth [scrollbar-width:none] [-webkit-scrollbar:none] [-ms-overflow-style:none]"
        ref={carouselRef}
      >
        <div className="flex flex-row gap-4 md:gap-6 mx-auto px-6 sm:px-8 lg:px-12 justify-center min-w-full">
          {items.map((card, index) => (
            <motion.div
              key={card.title + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                },
              }}
              className="flex-shrink-0"
            >
              <Link
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-white dark:bg-gray-900 h-72 w-56 md:h-96 md:w-72 overflow-hidden relative group transition-all duration-200 ease-out hover:scale-[1.02] border border-gray-100 dark:border-gray-800"
              >
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-30 pointer-events-none" />

                <div className="relative z-40 p-5 md:p-6 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="inline-flex items-center px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-gray-600 text-xs font-medium tracking-wide shadow-sm">
                      {card.category}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-white text-lg md:text-xl font-medium max-w-xs text-left leading-snug">
                      {card.title}
                    </h3>

                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17l9.2-9.2M17 17V7H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <BlurImage src={card.src} alt={card.title} className="z-10" />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-200 z-20" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
