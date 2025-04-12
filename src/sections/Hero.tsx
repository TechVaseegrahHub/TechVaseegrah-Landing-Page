"use client"
import aiRobotImage from "@/assets/ai-robot.png"
import cloudImage from "@/assets/cloud-computing.png"
import networkImage from "@/assets/network-neural.png"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const animationVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
}

export default function Hero() {
  const staticText = "Automate Your"
  const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Change the word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length)
    }, 4000) // Increased duration for a more subtle change
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
      className="pt-8 pb-20  md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip text-center md:text-left"
    >
      <div className="container ">
        <div className="md:flex items-center flex flex-col md:flex-row">
          <div className="md:w-[478px] w-full">
            {/* Static + Animated Words */}
          
          {/*  <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Tech Vaseegrah
            </div>  */}
          
            <h1 className="text-5xl font-semibold md:text-7xl px-35 tracking-tighter mt-20 min-w-[120px]">
              <span className="bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
                {staticText}
              </span>
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
                    className="absolute w-full text-[#001E80] word-animation"
                  >
                    {animatedWords[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-[90%] mx-auto md:mx-0 md:max-w-full">
              Transform your business with cutting-edge website 
              development, artificial intelligence, and software
              solutions that enhance productivity, drive growth, 
              and ensure exceptional efficiency and success.
            </p>

            {/* CONTACT BUTTON 
            <div className="mt-[40px] flex justify-center md:justify-start">
              <button className="group relative inline-flex items-center 
                                rounded-lg gap-2 px-7 py-3 text-bm 
                                font-medium bg-black text-[#ffffff] 
                                transition-colors duration-300 
                                ease-in-out hover:text-white">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 rounded-lg bg-[#2950DA] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-[400ms] ease-in-out"></span>
              <ArrowUpRight
                  size={18}
                  className="relative z-10 text-white  transition-colors duration-300 ease-in-out"
            />
              </button>
            </div>*/}
          
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
              width={250}
              height={250}
              alt="Cloud Computer"
              className="hidden md:block bottom-[470px] right-[900px] md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={networkImage.src}
              width={250}
              height={250}
              alt="Network Neural"
              className="hidden lg:block absolute top-[524px] right-[900px] rotate-[30deg]"
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