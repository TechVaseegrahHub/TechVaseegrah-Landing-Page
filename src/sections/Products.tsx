"use client"

import { useRef } from "react"
import FeatureCard from "@/components/FeaturesCard"
import { motion, useInView } from "framer-motion"

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

// --- SWIPER STYLES ---
import "swiper/css"
import "swiper/css/pagination"

interface ProductCard {
  id: string
  title: string
  description: string
  logoUrl: string
  learnMoreLink: string
}

const productCards: ProductCard[] = [
  {
    id: "billzzy",
    title: "Billzzy",
    description:
      "Billzzy automates invoicing with AI, generating bills and tracking payments. It provides smart financial insights while reducing admin work.",
    logoUrl: "/billzzy-logo.png",
    learnMoreLink: "https://billzzy.com",
  },
  {
    id: "f3engine",
    title: "F3 Engine",
    description:
      "F3 Engine simplifies e-commerce with automated printing, packing, tracking, and inventory management, letting you focus on growth.",
    logoUrl: "/f3-icon.png",
    learnMoreLink: "https://f3engine.com",
  },
  {
    id: "gowhats",
    title: "GoWhats",
    description:
      "Simplify customer connections with GoWhats! Manage orders, automate messages, and offer real-time support using our powerful WhatsApp API.",
    logoUrl: "/gowhatswordmark.png",
    learnMoreLink: "https://gowhats.vercel.app",
  },
  {
    id: "instaxbot",
    title: "InstaX Bot",
    description:
      "InstaXBot AI-powered Instagram automation handles direct message replies and comment responses, saving you time and boosting engagement.",
    logoUrl: "/insta-x-bot.png",
    learnMoreLink: "#",
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50/30 overflow-hidden" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="w-full pb-16 sm:pb-18 lg:pb-20"
            breakpoints={{
              480: {
                slidesPerView: 1.1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 24,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 36,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {productCards.map((card, index) => (
              <SwiperSlide key={card.id} className="h-auto">
                <motion.div
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.4 + index * 0.1,
                  }}
                >
                  <FeatureCard
                    title={card.title}
                    description={card.description}
                    button={card.learnMoreLink}
                    className="group h-full hover:border-blue-200/80 hover:shadow-xl hover:shadow-blue-900/8 transition-all duration-300 ease-in-out hover:-translate-y-2"
                  >
                    <motion.div
                      className="w-full h-full flex items-center justify-center"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img
                        src={card.logoUrl || "/placeholder.svg"}
                        alt={`${card.title} logo`}
                        className="transition-all duration-300 ease-in-out group-hover:scale-105 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain drop-shadow-sm"
                      />
                    </motion.div>
                  </FeatureCard>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-pagination-bullet {
          background-color: #e5e7eb;
          width: 14px;
          height: 14px;
          opacity: 0.5;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin: 0 8px;
          border-radius: 50%;
          cursor: pointer;
          position: relative;
        }
        .swiper-pagination-bullet::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          background: transparent;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb;
          opacity: 1;
          transform: scale(1.4);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
        .swiper-pagination-bullet:hover {
          opacity: 0.8;
          transform: scale(1.2);
          background-color: #9ca3af;
        }
        .swiper-pagination-bullet:hover::before {
          background: rgba(156, 163, 175, 0.1);
        }
        .swiper-pagination-bullet-active:hover {
          background-color: #1d4ed8;
          transform: scale(1.4);
        }
        @media (min-width: 640px) {
          .swiper-pagination {
            margin-top: 2.5rem;
          }
          .swiper-pagination-bullet {
            width: 16px;
            height: 16px;
            margin: 0 10px;
          }
        }
        @media (min-width: 1024px) {
          .swiper-pagination-bullet {
            width: 18px;
            height: 18px;
            margin: 0 12px;
          }
        }
        @media (min-width: 1280px) {
          .swiper-pagination-bullet {
            width: 24px;
            height: 24px;
            margin: 0 16px;
          }
        }
        @media (min-width: 1536px) {
          .swiper-pagination-bullet {
            width: 26px;
            height: 26px;
            margin: 0 18px;
          }
        }
      `}</style>
    </section>
  )
}
