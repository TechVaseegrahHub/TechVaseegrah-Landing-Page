"use client";
import aiRobotImage from "@/assets/ai-robot.png";
import cloudImage from "@/assets/cloud-computing.png";
import networkImage from "@/assets/network-neural.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const staticText = "Automate your ";
  const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Change the word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [animatedWords.length]);

    // Scroll-based transformations
    const heroRef = useRef(null);
    const { scrollYProgress }=useScroll({
    target: heroRef,
    offset:["start end", "end start"],});
    
    const translateY=useTransform(scrollYProgress, [0,1], [150, -150]);
  
    return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
           
          {/* Tagline */}
          {/* <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-light">
                  Tech Vaseegrah
              </div>*/}

            {/* Static + Animated Words */}
            <h1 className="text-5xl md:text-7xl font-bold 
                           tracking-tighter bg-gradient-to-b
                          from-black to-[#001E80] 
                           text-transparent bg-clip-text 
                           mt-6 min-w-[120px]">
             
            {staticText}{" "}
              <motion.span
                key={animatedWords[currentWordIndex]} // Ensure each word has a unique key for animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001E80]"
              >
                {animatedWords[currentWordIndex]}
              </motion.span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
               Transform your business with cutting-edge 
               website development, artificial intelligence, 
               and software solutions that enhance productivity, 
               drive growth, and ensure exceptional efficiency 
               and success.
            </p>

            {/* Buttons */}
            <div className="flex gap-1 items-center mt-[40px]">
              <button className="btn btn-primary">Contact us</button>
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
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease:"easeInOut",
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
                rotate:30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};