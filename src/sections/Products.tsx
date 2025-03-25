"use client"
import Tag from "@/components/Tag"
import FeatureCard from "@/components/FeaturesCard"
import Image from "next/image"
import avatar1 from "@/assets/Whatsapp.png"
import avatar2 from "@/assets/Instagram.png"
import avatar3 from "@/assets/f3.jpg"
import Avatar from "@/components/Avatar"
import { motion, type Variants, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
]

const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}

const heroChildVariant: Variants = {
  start: { 
    y: 30, 
    opacity: 0, 
    filter: "blur(0px)" 
  },
  
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    },
  },
};

const featureCardVariant: Variants = {
  hidden: { x: 150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, delay: 0.5, ease: "backInOut" },
  },
}

const featureListVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 1.5 + index * 0.2, ease: "easeInOut" },
  }),
}

export default function Products() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })
  const [isHeroComplete, setHeroComplete] = useState(false)

  return (
    <section className="py-20" ref={sectionRef}>
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container"
        onAnimationComplete={() => setHeroComplete(true)}
      >
        <motion.div variants={heroChildVariant} className="flex justify-center">
          <Tag>Products</Tag>
        </motion.div>

        <motion.h2 
              variants={heroChildVariant} 
              className="section-title mt-5 text-center"
        >
          Our Major Products for <br /> Ecommerce Industry
        </motion.h2>

        {/* 🔥 Product Cards (Effects Intact) */}
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {[
            {
              title: "GoWhats",
              description:
                "Simplify customer connections with GoWhats! Manage orders, automate messages, and offer real-time support using our powerful WhatsApp API—streamlining communication and boosting efficiency.",
              avatar: avatar1,
              
              
            },
            {
              title: "F3 Engine",
              description:
                "F3 Engine simplifies e-commerce with automated printing, packing, tracking, and inventory management. Streamline order dispatch, boost efficiency, and enhance customer satisfaction—focus on growth, not manual tasks!",
              avatar: avatar3,
               
            },
            {
              title: "Instamatic",
              description:
                "Instamatic's AI-powered Instagram automation automates direct message replies and instant comment responses, saving you time and boosting customer engagement. Streamline your social media communication effortlessly!",
              avatar: avatar2,
             
            },
          ].map((card, index) => {
            const [isTapped, setIsTapped] = useState(false)

            return (
              <motion.div
                key={card.title}
                variants={featureCardVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <FeatureCard
                  title={card.title}
                  description={card.description}
                  className="md:col-span-2 lg:col-span-1 group hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-shadow duration-300 ease-in-out"
                >
                  <AnimatePresence>
                    <motion.div
                      className="aspect-video flex items-center justify-center"
                      initial={{ y: 0 }}
                      animate={isTapped ? { y: -24 } : { y: 0 }}
                      whileHover={{ y: -24 }} // Desktop Hover
                      onTouchStart={() => {
                        setIsTapped(true)
                        setTimeout(() => setIsTapped(false), 1000) // Reset effect after 1s
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Avatar className="z-10">
                        <Image
                          src={card.avatar || "/placeholder.svg"}
                          alt={`Avatar for ${card.title}`}
                          width={120}
                          height={120}
                        />
                      </Avatar>
                    </motion.div>
                  </AnimatePresence>
                </FeatureCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* 🔥 Feature List - No Shadow Hover Effect */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              variants={featureListVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              className="bg-neutral-100 border border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center transition-none"
            >
              <span className="bg-blue-800 text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-lg">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}