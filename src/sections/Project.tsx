"use client";

import rocketImage from "@/assets/rocket-launch.png";
import aiImage from "@/assets/stock-up.png";
import Image from "next/image";
import { motion, Variants, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion(Image); 

// Framer Motion Variants
const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: "blur(0px)",
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Project = () => {
  const sectionRef = useRef(null);
  const heroBannerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });

  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start end", "end start"],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);
  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(sectionScrollYProgress, [0, 1], [150, -150]);

  return (
    // Responsive padding for mobile, while keeping overflow-clip
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-green-50 to-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-x-clip"
    >
      <motion.div 
        ref={heroBannerRef}
        variants={heroVariant} 
        initial="start" 
        animate={isInView ? "end" : "start"} 
        className="container" // Reverted to original container class
      >
        {/* Reverted to original heading structure to preserve desktop layout */}
        <div className="section-heading">
          <div className="flex justify-center">
            <motion.div variants={heroChildVariant} className="tag">
            OUR PRODUCTS SUITES
            </motion.div>
          </div>
          {/* Kept responsive text sizes, which adapt without changing layout */}
          <motion.h2 variants={heroChildVariant} className="section-title mt-5 ">
          Powerful solutions for <span className="text-green-700">E-commerce Industry</span>.
          </motion.h2>
          <motion.p variants={heroChildVariant} className="section-description mt-5 ">
            Select a platform, provide your business details, and start using powerful tools to manage your brand, products, and services with ease. 
          </motion.p>
        </div>
        
        <div className="relative">
  
          {/* Blurry glow effect */}
          <motion.div
            className="absolute bg-blue- inset-5 blur-[50px] -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
          ></motion.div>

          <motion.div
            className="absolute inset-0 bg-blue- blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
          ></motion.div>

          {/* Images are hidden on mobile and appear on medium screens up, with original desktop styling */}
          <MotionImage
            variants={heroChildVariant}
            src={rocketImage}
            alt="Rocket Launch"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          />
          <MotionImage
            variants={heroChildVariant}
            src={aiImage}
            alt="AI Scanner"
            height={310}
            width={310}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
          />        
        </div>
      </motion.div>
    </section>
  );
};