"use client";

import bulbImage from "@/assets/job.png";
import internCallImage from "@/assets/team.png";
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
      className="bg-gradient-to-b from-white -[#D2DCFF] pt-20 mt-16 overflow-x-clip">
      
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container">
          
          <div className="section-heading relative">

            <motion.div  
                variants={heroChildVariant} 
                className="flex justify-center mb-8">
                    
            <Tag>Join the Internship</Tag>
            </motion.div>
          
          <motion.h2            
           variants={heroChildVariant}
           className="section-title">
            Turn Knowledge <br className="hidden md:block" /> into Action.
          </motion.h2>
          
          <motion.p
           variants={heroChildVariant}
           className="section-description mt-5">
           Intern with Us and Gain Hands On Experience on Real World Projects
          </motion.p>
          
          {/* ✅ Use Next.js Image for better performance */}
          <motion.div
            variants={heroChildVariant}
            className="absolute -left-[300px] -top-[20px]"
            style={{ translateY }}>
            <Image
              src={bulbImage}
              alt="Bulb img"
              height={200}
              width={200}
              priority
            />
          </motion.div>

          <motion.div
            variants={heroChildVariant}
            className="absolute -right-[331px] -bottom-[10px]"
            style={{ translateY }}>
            <Image
              src={internCallImage}
              alt="Team img"
              height={280}
              width={280}
              priority
            />
          </motion.div>
        </div>

        <div className="flex gap-2 mt-10 justify-center">
        <motion.form
  variants={heroChildVariant}
  className="mt-15 flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md mx-auto px-4"
>
  <input
    type="email"
    placeholder="Your@mail.com"
    className="h-12 w-full bg-white/90 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] outline-none border border-gray-300"
  />

  <button
    className="btn btn-primary px-6 py-3 text-sm sm:text-base"
    type="submit"
  >
    Join
  </button>
</motion.form>


        </div>
      </motion.div>
    </section>
  );
};