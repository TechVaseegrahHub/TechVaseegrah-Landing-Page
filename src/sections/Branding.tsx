"use client";

import rightSide from "@/assets/analytics.png";
import leftSide from "@/assets/idea.png";
import Image from "next/image";
import { motion, Variants, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion(Image);     //Motion-wrapped Image component

const heroVariant: Variants = {         // Framer Motion Variants
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

export const Branding = () => {
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
      className="bg-gradient-to-b from-green-50 to-[#FFFFFF]  pt-24 pb-24 overflow-x-clip"
    >
      <motion.div variants={heroVariant} initial="start" animate={isInView ? "end" : "start"} className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <motion.div variants={heroChildVariant} className="tag ">
           DIGITAL PRESENCE
            </motion.div>
          </div>
          <motion.h2 variants={heroChildVariant} className="text-2xl md:text-3xl lg:text-5xl font-bold mt-3 md:mt-5 mb-2 md:mb-3 section-title">
          Branding & <span className="text-green-700">Consultation</span>
          </motion.h2>
          <motion.p variants={heroChildVariant} className="section-description mt-5 mb-8">
          At Tech Vaseegrah, we believe your brand is your voice, your story, 
          and your value. Our Branding & Consultation services help you build a 
          strong identity, connect with your audience, and grow with purpose.
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
            src={rightSide}
            alt="Team"
            height={200}
            width={200}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}/>
          
          <MotionImage
            variants={heroChildVariant}
            src={leftSide}
            alt="Branding"
            height={240}
            width={240}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}/>
        </div>
      </motion.div>
    </section>
  );
};