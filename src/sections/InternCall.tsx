"use client";
import starImage from "@/assets/intern.png";
import springImage from "@/assets/9.png";
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


export const InternCall = () => {
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
      className="bg-gradient-to-b from-white -[#D2DCFF] py-20 overflow-x-clip">
      
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container">
          
          <div className="section-heading relative">


            <motion.div  
                variants={heroChildVariant} 
                className="flex justify-center mb-8">
                    
            <Tag>Kickstart Your Future.</Tag>
            </motion.div>
          
          <motion.h2            
           variants={heroChildVariant}
           className="section-title">
            Launch Your Career.
          </motion.h2>
          
          <motion.p
           variants={heroChildVariant}
           className="section-description mt-5">
           Intern with Us and Gain Hands On Experience on Real World Projects!
          </motion.p>
          
          <motion.img
            variants={heroChildVariant}
            src={starImage.src}
            alt="Star Image"
            height={300}
            width={300}
            className="absolute -left-[350px] -top-[100px]"
            style={{
              translateY,
            }}
          />
          
          <motion.img
            variants={heroChildVariant}
            src={springImage.src}
            alt="Spring Image"
            height={148}
            width={168}
            className="absolute -right-[331px] -bottom-[10px]"
            style={{
              translateY,
            }}
          />
        </div>

          <div className="flex gap-2 mt-10 justify-center">
                <motion.form
                variants={heroChildVariant} 
                className="mt-10 flex flex-col 
                           gap-2.5 max-w-sm 
                           mx-auto sm:flex-row">
             <input 
               type="email" 
               placeholder="Your@mail.com" 
               className="h-12 bg-white/90 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1"/>
            
            <button className="btn btn-primary">
                Kick Start
            </button>
        </motion.form> 
      
        
          </div>
      </motion.div>
    </section>
  );
};




