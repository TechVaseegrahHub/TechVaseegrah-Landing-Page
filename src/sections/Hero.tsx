"use client"
import aiRobotImage from "@/assets/ai-robot.png"
import cloudImage from "@/assets/cloud-computing.png"
import networkImage from "@/assets/network-neural.png"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const animationVariants = [
  {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
  },
  {
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 90, opacity: 0 },
  },
  {
    initial: { filter: "blur(10px)", opacity: 0 },
    animate: { filter: "blur(0px)", opacity: 1 },
    exit: { filter: "blur(10px)", opacity: 0 },
  },
]

export default function Hero() {
  const staticText = "Automate"
  const staticText2 = "Your"
  const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentAnimation, setCurrentAnimation] = useState(0)

  // Change the word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length)
      setCurrentAnimation(Math.floor(Math.random() * animationVariants.length))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Scroll-based transformations
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20  md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container ">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            {/* Static + Animated Words */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6 min-w-[120px]">
              <span className="bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                {staticText}
                <br />
                {staticText2}
              </span>
              <br />
              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={animatedWords[currentWordIndex]}
                    initial={animationVariants[currentAnimation].initial}
                    animate={animationVariants[currentAnimation].animate}
                    exit={animationVariants[currentAnimation].exit}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                    }}
                    className="absolute w-full text-[#001E80]"
                  >
                    {animatedWords[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-[90%] md:max-w-full">              Transform your business with cutting-edge website development, artificial intelligence, and software
              solutions that enhance productivity, drive growth, and ensure exceptional efficiency and success.
            </p>

            {/* Contact Button */}
            <div className="mt-[40px]">
              <button className="group relative inline-flex items-center rounded-lg gap-2 px-7 py-3 text-bm font-medium bg-black text-[#ffffff] transition-colors duration-300 ease-in-out hover:text-white">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 rounded-lg bg-[#2950DA] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-[400ms] ease-in-out"></span>
                <ArrowUpRight
                  size={18}
                  className="relative z-10 text-white  transition-colors duration-300 ease-in-out"
                />
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={aiRobotImage.src}
              alt="Ai Robot"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cloudImage.src}
              width={220}
              height={220}
              alt="Cloud Computer"
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={networkImage.src}
              width={220}
              alt="Network Neural"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

