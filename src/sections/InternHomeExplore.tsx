"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/02.png";
import springImage from "@/assets/9.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const InternHomeExplore = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Exciting Internship Opportunities</h2>
          <p className="section-description mt-5">
          Benefit from expert mentorship, 
          cutting-edge tech exposure, and 
          networking opportunities to jumpstart 
          your professional journey.

          </p>
          <motion.img
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
            src={springImage.src}
            alt="Spring Image"
            height={148}
            width={168}
            className="absolute -right-[331px] -bottom-[30px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Explore</button>
        
        </div>
      </div>
    </section>
  );
};