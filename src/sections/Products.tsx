"use client"

import { useRef, useState, useEffect } from "react"
import Tag from "@/components/Tag"
import FeatureCard from "@/components/FeaturesCard"
import Image, { type StaticImageData } from "next/image"
import avatar1 from "@/assets/go.png"
import avatar2 from "@/assets/instaxbot.png"
import avatar3 from "@/assets/f3-icon.png"
import avatar4 from "@/assets/bill-icon.png"
import { motion, useInView, useDragControls, AnimatePresence } from "framer-motion"

interface ProductCard {
  id: string
  title: string
  description: string
  avatar: StaticImageData
  learnMoreLink: string
}

const features = [
  "Smart SaaS solutions",
  "Next-gen business apps",
  "One-Click Export",
  "NanoTasks",
  "Cloud Native",
  "Live Updates",
  "Multi-Tenant Support",
]

const productCards: ProductCard[] = [
  {
    id: "gowhats",
    title: "GoWhats",
    description:
      "Simplify customer connections with GoWhats! Manage orders, automate messages, and offer real-time support using our powerful WhatsApp API—streamlining communication and boosting efficiency.",
    avatar: avatar1,
    learnMoreLink: "https://gowhats.vercel.app",
  },
  {
    id: "f3engine",
    title: "F3 Engine",
    description:
      "F3 Engine simplifies e-commerce with automated printing, packing, tracking, and inventory management. Streamline order dispatch, boost efficiency, and enhance customer satisfaction—focus on growth, not manual tasks!",
    avatar: avatar3,
    learnMoreLink: "https://f3engine.com",
  },
  {
    id: "instaxbot",
    title: "InstaX Bot",
    description:
      "InstaXBot AI-powered Instagram automation handles direct message replies and comment responses, saving you time and boosting customer engagement. Streamline your social media communication effortlessly!",
    avatar: avatar2,
    learnMoreLink: "#",
  },
  {
    id: "billzzy",
    title: "Billzzy",
    description:
      "Billzzy automates invoicing with AI, generating bills and tracking payments. It provides smart financial insights while reducing admin work through powerful, seamless automation for freelancers and small businesses.",
    avatar: avatar4,
    learnMoreLink: "https://billzzy.com",
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const dragControls = useDragControls()
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })
  const [isMounted, setIsMounted] = useState(false)
  const [tappedIndex, setTappedIndex] = useState<number | null>(null)
  const [startIndex, setStartIndex] = useState(0)
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({})
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCard, setSelectedCard] = useState<ProductCard | null>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [screenHeight, setScreenHeight] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null)

  const handleTouch = (index: number) => {
    setTappedIndex(index)
    setTimeout(() => setTappedIndex(null), 300)
  }

  useEffect(() => {
    setIsMounted(true)
    const checkMobile = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setIsMobile(width < 768)
      setIsSmallMobile(width < 375)
      setScreenHeight(height)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const handleNavigation = (direction: "prev" | "next") => {
    // Fix to ensure all cards are navigable
    const cardsPerView = isMobile ? 1 : 3
    const maxIndex = productCards.length - cardsPerView
    
    // Set slide direction for animation
    setSlideDirection(direction === "prev" ? "right" : "left")
    
    setStartIndex((prev) => {
      if (direction === "next") return Math.min(prev + 1, maxIndex)
      return Math.max(prev - 1, 0)
    })
  }

  const handleCardClick = (card: ProductCard) => {
    if (!isDragging) {
      setSelectedCard(card)
    }
  }

  const closeProductDetails = () => {
    setSelectedCard(null)
  }

  const handleImageError = (id: string) => {
    setImageError((prev) => ({ ...prev, [id]: true }))
  }

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false)
    if (Math.abs(info.offset.x) > 50) {
      if (info.offset.x > 0 && startIndex > 0) {
        handleNavigation("prev")
      } else if (info.offset.x < 0 && startIndex < productCards.length - (isMobile ? 1 : 3)) {
        handleNavigation("next")
      }
    }
  }

  const handleDragStart = () => {
    setIsDragging(true)
  }

  // Calculate optimal card height for mobile
  const getCardHeight = () => {
    if (!isMounted) return "auto";
    
    if (isSmallMobile) {
      // For very small screens
      return "auto";
    } else if (isMobile) {
      // For mobile screens, calculate based on screen height
      const baseHeight = screenHeight * 0.6; // 60% of screen height
      return `${Math.min(Math.max(baseHeight, 400), 500)}px`;
    } else {
      // For desktop, use original heights
      return "600px";
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  const featuresContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  const navButtonVariants = {
    initial: { opacity: 0.7, scale: 1 },
    hover: { opacity: 1, scale: 1.05 },
    tap: { scale: 0.95 },
  }

  const cardContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  // New card container sliding animation variants
  const slidingContainerVariants = {
    initial: { opacity: 1, x: 0 },
    slideLeft: {
      x: [0, -20, 0],
      transition: { 
        duration: 0.5,
        ease: [0.3, 0.86, 0.45, 0.95] // Custom easing for smoother animation
      }
    },
    slideRight: {
      x: [0, 20, 0],
      transition: { 
        duration: 0.5, 
        ease: [0.3, 0.86, 0.45, 0.95] // Custom easing for smoother animation
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  // Determine which cards to show
  const visibleCards = isMobile
    ? productCards.slice(startIndex, startIndex + 1)
    : productCards.slice(startIndex, startIndex + 3)

  // Boolean to check if we're at the last possible position
  const isLastPosition = startIndex >= productCards.length - (isMobile ? 1 : 3)

  // Calculate card height
  const cardHeight = getCardHeight();

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div variants={tagVariants}>
            <Tag>Products</Tag>
          </motion.div>
          <motion.h2 className="section-title mt-5 " variants={headerVariants}>
            Our Major Products for <br className="hidden md:block" /> E‑commerce Industry
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons - only show on desktop */}
          {!isMobile && (
            <>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10">
                <motion.button
                  onClick={() => handleNavigation("prev")}
                  className={`w-10 h-10 flex items-center justify-center ${
                    startIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  disabled={startIndex === 0}
                  variants={navButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  aria-label="Previous product"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </motion.button>
              </div>

              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-8 z-10">
                <motion.button
                  onClick={() => handleNavigation("next")}
                  className={`w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center ${
                    isLastPosition
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={isLastPosition}
                  variants={navButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  aria-label="Next product"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </motion.button>
              </div>
            </>
          )}

          {/* Cards container with improved desktop sliding animation */}
          <motion.div
            ref={cardsContainerRef}
            className={`flex justify-center pb-8 gap-4 md:gap-6 overflow-hidden ${isMobile ? 'touch-pan-x cursor-grab active:cursor-grabbing' : ''}`}
            role="region"
            aria-label="Product carousel"
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={cardContainerVariants}
            drag={isMobile ? "x" : false}
            dragControls={dragControls}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileTap={isMobile ? { cursor: "grabbing" } : undefined}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={`card-group-${startIndex}`}
                className="flex gap-4 md:gap-6"
                initial="initial"
                animate={slideDirection === "left" ? "slideLeft" : slideDirection === "right" ? "slideRight" : "initial"}
                variants={slidingContainerVariants}
                onAnimationComplete={() => setSlideDirection(null)}
              >
                {visibleCards.map((card, index) => (
                  <motion.div
                    key={`${card.id}-${startIndex + index}`}
                    className={`flex-shrink-0 ${
                      isMobile
                        ? "w-full max-w-[360px] mx-auto"
                        : "w-[320px] md:w-[340px] lg:w-[360px]"
                    }`}
                    variants={cardVariants}
                  >
                    <div onClick={() => handleCardClick(card)} className="cursor-pointer">
                      <FeatureCard
                        title={card.title}
                        description={card.description}
                        button={card.learnMoreLink}
                        className={`z-10 pt-4 md:pt-6 w-full group rounded-2xl hover:border-blue-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow duration-300 ease-in-out card-height`}
                      >
                        <motion.div
                          className="aspect-video flex items-center justify-center"
                          initial={{ y: 0 }}
                          animate={tappedIndex === index ? { y: -16 } : { y: 0 }}
                          whileHover={{ y: -16 }}
                          onTouchStart={() => handleTouch(index)}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <Image
                            src={imageError[card.id] ? "/placeholder.svg" : card.avatar || "/placeholder.svg"}
                            alt={`Avatar for ${card.title}`}
                            width={isSmallMobile ? 80 : 110}
                            height={isSmallMobile ? 80 : 110}
                            loading="lazy"
                            className="border-0 outline-none transition-transform duration-300 ease-in-out group-hover:scale-110"
                            onError={() => handleImageError(card.id)}
                          />
                        </motion.div>
                      </FeatureCard>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Mobile pagination indicator with improved tap targets */}
          {isMounted && isMobile && (
            <div className="flex justify-center mt-4">
              <div className="flex gap-5">
                {productCards.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-3 h-3 rounded-full ${startIndex === idx ? 'bg-blue-600' : 'bg-gray-300'} 
                    touch-manipulation cursor-pointer`}
                    aria-label={startIndex === idx ? "Current product" : `Product ${idx + 1}`}
                    onClick={() => setStartIndex(idx)}
                    style={{ padding: "6px", margin: "-6px" }}
                  />
                ))}
              </div>
            </div>
          )}

          <motion.div
            className={`mt-10 md:mt-12 flex flex-wrap gap-2 md:gap-3 justify-center`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={featuresContainerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                variants={featureVariants}
                custom={index}
                className="bg-neutral-100 border border-white/10 inline-flex px-2 md:px-5 py-1 md:py-2 rounded-2xl gap-2 md:gap-3 items-center transition-none"
              >
                <span className="bg-blue-800 text-white w-4 h-4 md:w-5 md:h-5 rounded-full inline-flex items-center justify-center text-base md:text-lg">
                  &#10038;
                </span>
                <span className="font-medium text-sm md:text-lg">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <style jsx global>{`
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .product-card {
            box-shadow: none;
            border: none;
          }
        `}</style>
      </div>
    </section>
  )
}