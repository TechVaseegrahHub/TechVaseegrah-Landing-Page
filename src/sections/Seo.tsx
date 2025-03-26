"use client";
import rocketImage from "@/assets/email-marketing.png";
import aiImage from "@/assets/rocket-2.png";
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

export const Seo = () => {
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
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24  overflow-x-clip"
    >
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container"
      >
        <div className="section-heading">
          <div className="flex justify-center">
            <motion.div variants={heroChildVariant} className="tag mb-6">
              Search Engine Optimization
            </motion.div>
          </div>
          <div className="w-full flex justify-center">
            <motion.h2
              variants={heroChildVariant}
              className="section-title mt-3 w-auto whitespace-normal md:whitespace-nowrap md:text-5xl"
            >
              Professional SEO Services <br /> for Driving Traffic, Leads, & Sales
            </motion.h2>
          </div>
          <motion.p variants={heroChildVariant} className="section-description mt-5">
            SEO boosts your business&apos;s online visibility, ensuring it appears at the top
            of search results when potential customers look for products or services you offer.
            This targeted traffic increases engagement and drives revenue.
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
            alt="Rocket Launch"
            height={220}
            width={220}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          />
          <MotionImage
            variants={heroChildVariant}
            src={aiImage}
            alt="AI Scanner"
            height={220}
            width={220}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
          />
        </div>
      </motion.div>
    </section>
  );
};