"use client";
// import bulbImage from "@/assets/job.png";
// import interncallImage from "@/assets/team.png";
import Image from "next/image";
import { motion, Variants, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Tag from "@/components/Tag";

// Framer motion variants
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

export const SeoCall = () => {
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
      className="bg-gradient-to-b from-white -[#D2DCFF] pt-20 overflow-x-clip">
      
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container">
          
          <div className="section-heading relative">


            <motion.div  
                variants={heroChildVariant} 
                className="flex justify-center mb-8">
                    
            <Tag>Boost Your Visibility</Tag>
            </motion.div>
          
          <motion.h2            
           variants={heroChildVariant}
           className="section-title">
            Let&apos;s Rank Higher

          </motion.h2>
          
          <motion.p
           variants={heroChildVariant}
           className="section-description mt-5">
             Request a fully custom proposal for your business to get started!
          </motion.p>
          
      {/*
          <motion.img
            variants={heroChildVariant}
            src={bulbImage.src}
            alt="Bulb img"
            height={200}
            width={200}
            className="absolute -left-[300px] -top-[20px]"
            style={{
              translateY,
            }}
          /> 
          
          <motion.img
            variants={heroChildVariant}
            src={interncallImage.src}
            alt="Team img"
            height={280}
            width={280}
            className="absolute -right-[331px] -bottom-[10px]"
            style={{
              translateY,
            }}
          />   */}

        </div>
          <div className="flex gap-2 mt-10 justify-center">
                <motion.form
                variants={heroChildVariant} 
                className="mt-15 flex flex-col 
                           gap-2.5 max-w-sm 
                           mx-auto sm:flex-row">
             <input 
               type="email" 
               placeholder="Enter your website" 
               className="h-12  bg-white/90 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1"/>
            
            <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Get SEO Proposal
            </button>
        </motion.form>         
        </div>
      </motion.div>
    </section>
  );
};