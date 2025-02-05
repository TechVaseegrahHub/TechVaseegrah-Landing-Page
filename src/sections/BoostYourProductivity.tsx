"use client";
import productImage from "@/assets/bill-z.jpeg";
import stockupImage from "@/assets/stock-up.png";
import rockectImage from "@/assets/startup-rocket.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const BoostYourProductivity = () => {
  const sectionRef = useRef(null);
  const billZ = useRef<HTMLDivElement>(null);

  // Scroll progress for the section
  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll progress for the billZ image
  const { scrollYProgress: billZScrollYProgress } = useScroll({
    target: billZ,
    offset: ["start end", "end start"],
  });

  // Transformations for the section
  const translateY = useTransform(sectionScrollYProgress, [0, 1], [150, -150]);

  // Transformations for the billZ image
  const rotateX = useTransform(billZScrollYProgress, [0, 1], [50, 10]);
  const opacity = useTransform(billZScrollYProgress, [0, 1], [1, 1]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <motion.div
            ref={billZ}
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
              src={productImage}
              alt="Bill Z"
              className="mt-10"
            />
          </motion.div>

          <motion.img
            src={stockupImage.src}
            alt="Stock Up"
            height={262}
            width={302}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={rockectImage.src}
            alt="Rocket Startup"
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