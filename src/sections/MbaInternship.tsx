"use client";
import rocketImage from "@/assets/01.png";
import aiImage from "@/assets/books.png";
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

export const MbaInternship = () => {
  const sectionRef = useRef(null);
  const heroBannerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });

  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
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
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <motion.div variants={heroVariant} initial="start" animate={isInView ? "end" : "start"} className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <motion.div variants={heroChildVariant} className="tag mb-8">
            MBA Business Program 
            </motion.div>
          </div>
          <div className="w-full flex justify-center">
          <motion.h2 variants={heroChildVariant} className="section-title mt-3 w-auto whitespace-nowrap">
           MBA Program for <br/>Entrepreneurs &amp; Students
          </motion.h2>
          </div>
          <motion.p variants={heroChildVariant} className="section-description mt-5" >
          Our MBA Business Program equips aspiring entrepreneurs 
          and students with real-world business skills, financial 
          expertise, and leadership, bridging theory and practical 
          execution for industry readiness.

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

          <MotionImage
            variants={heroChildVariant}
            src={rocketImage}
            alt="Rocket Lanuch"
            height={300}
            width={300}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          />
          <MotionImage
            variants={heroChildVariant}
            src={aiImage}
            alt="AI Scanner "
            height={290}
            width={290}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
          />        
        </div>
      </motion.div>
    </section>
  );
};