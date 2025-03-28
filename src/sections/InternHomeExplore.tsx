"use client";

import internImage from "@/assets/intern.png";
import jobImage from "@/assets/job.png";
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

export const InternHomeExplore = () => {
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
        
              <Tag>Career Boost</Tag>
          
          </motion.div>
          
          <motion.h2            
           variants={heroChildVariant}
           className="section-title">
           Exciting Internship Opportunities
          </motion.h2>
          
          <motion.p
           variants={heroChildVariant}
           className="section-description mt-5">
            Benefit from expert mentorship, 
            cutting-edge tech exposure, and 
            networking opportunities to jumpstart 
            your professional journey.
          </motion.p>
          
          <motion.img
            variants={heroChildVariant}
            src={internImage.src}
            alt="Star Image"
            height={300}
            width={300}
            className="absolute -left-[350px] -top-[100px]"
            style={{
              translateY,
            }}/>
          
          <motion.img
            variants={heroChildVariant}
            src={jobImage.src}
            alt="Spring Image"
            height={200}
            width={200}
            className="absolute -right-[331px] -bottom-[10px]"
            style={{
              translateY,
            }}/>
        
          </div>

          <div className="flex gap-2 mt-10 justify-center ">
         <Link href="/internship">
         <motion.button variants={heroChildVariant} className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight active:bg-opacity-70 active:text-opacity-90 transition-all duration-200">
            Explore
          </motion.button>
         </Link>
        </div>
      </motion.div>
    </section>
  );
};