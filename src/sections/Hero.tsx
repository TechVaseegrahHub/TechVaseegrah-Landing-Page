"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Globe, AppWindow, Palette, Package  } from "lucide-react"

const animationVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
}

const featuresData = [
  {
    icon: Globe,
    title: "Web Development",
    description: "We build fast, modern websites with React, Shopify, and WordPress from online stores to custom web apps.",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
    iconBgColor: "bg-purple-100",
  },
  {
    icon: AppWindow,
    title: "SaaS Solutions",
    description: "We create SaaS products that are secure, easy to use, and built to grow with your business.",
    borderColor: "border-pink-500",
    textColor: "text-pink-600",
    iconBgColor: "bg-pink-100",
  },
  {
    icon: Palette,
    title: "Branding & Logo Design",
    description: "We design custom logos and brand assets that make your business stand out.",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
  },
  {
    icon: Package,
    title: "Digital Products",
    description: "We build digital products like plugins and themes to help your business grow.",
    borderColor: "border-sky-500",
    textColor: "text-sky-600",
    iconBgColor: "bg-sky-100",
  },
]

// --- FeatureCard reverted to its original structure as requested ---
const FeatureCard = ({ feature }: { feature: (typeof featuresData)[0] }) => {
  const Icon = feature.icon
  return (
    <div
      className={`p-5 bg-white border-2 ${feature.borderColor} rounded-xl ...`}
    >
      <div className={`w-10 h-7 ... mb-1`}>
        <Icon className={feature.textColor} size={20} />
      </div>
      <h3 className={`text-lg font-semibold ... mb-1`}>{feature.title}</h3>
      <p className="text-gray-600 leading-normal text-sm">{feature.description}</p>
    </div>
  )
}

export default function Hero() {
  const staticText = "Automate Your"
  const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={heroRef} className="bg-[radial-gradient(ellipse_at_bottom_left,_#fff,_#f0fdf4_100%)] min-h-screen ">
      {/* Main Hero Section */}
      {/* Vertical padding is adjusted for screens smaller than lg */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-10 lg:pb-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          {/* Content is centered on mobile/tablet, then left-aligned on desktop */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Font size is smaller on mobile/tablet, then original size on desktop */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              <span>{staticText}</span>
              <br />
              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={animatedWords[currentWordIndex]}
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.5 },
                    }}
                    className="absolute w-full text-primary"
                  >
                    {animatedWords[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </h1>

            {/* Font size is smaller on mobile/tablet, centered, then original size on desktop */}
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Boost your business with smart websites, AI, and software that improve efficiency, productivity, and growth
            </p>

            {/* Buttons are centered on mobile/tablet, then left-aligned on desktop */}
            <div className=" flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#1B9D4A] text-white hover:bg-blue-700 transition-colors shadow-lg shadow-[#1B9D4A]/30 px-6 py-3 rounded-lg font-semibold">
                Start your project
              </button>
            </div>
          </div>

          {/* Right Illustration */}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-7">
          {/* Font size is smaller on mobile/tablet, then original size on desktop */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 ">Build. Test. Deploy</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}