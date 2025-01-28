"use client";
import productImage from "@/assets/a-group-photo.jpeg";
import pyramidImage from "@/assets/01.png";
import tubeImage from "@/assets/Startup.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const InternMain = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
          <div className="tag">Internship</div>
          </div>
          <h2 className="section-title mt-5">
          Develop your skills with Tech Vaseegrah!
          </h2>
          <p className=" section-description mt-5 ">
          We offer internships to empower students 
          with industrial-level experience and hands-on 
          learning in cutting-edge technologies. Gain mentorship 
          from industry experts, work on real-world projects, and 
          bridge academic learning with practical skills for a 
          successful career in software and IT.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={302}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={268}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
