"use client";

import internImage from "@/assets/Hybrid.png";
import jobImage from "@/assets/te.png";
import Image from "next/image";
import { motion, Variants, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Tag from "@/components/Tag";
import Link from "next/link";

{/* Framer motion variants */}
const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant: Variants = {
  start: { y: 30, opacity: 0, filter: 'blur(0px)' },
  end: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const AboutTitle = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
 
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container">
          
          <div className="section-heading relative">
          
          <motion.div  
              variants={heroChildVariant} 
              className="flex justify-center mb-6">
        
              <Tag>About Us</Tag>
          
          </motion.div>
          
          <motion.h2            
           variants={heroChildVariant}
           className="section-title">
            We build digital solutions
          </motion.h2>
          
          <motion.p
           variants={heroChildVariant}
           className="section-description mt-5">
    We&apos;re a team of passionate developers, designers, and strategists dedicated to transforming ideas into
    powerful digital experiences.
          </motion.p>
          
          <motion.img
            variants={heroChildVariant}
            src={internImage.src}
            alt="Star Image"
            height={250}
            width={250}
            className="absolute -left-[310px] -top-[10px]"
            style={{
              translateY,
            }}/>
          
          <motion.img
            variants={heroChildVariant}
            src={jobImage.src}
            alt="Spring Image"
            height={300}
            width={300}
            className="absolute -right-[331px] -bottom-[10px]"
            style={{
              translateY,
            }}/>
        
          </div>


      </motion.div>
    </section>
  );
};