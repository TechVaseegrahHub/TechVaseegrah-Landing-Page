"use client";
import cogImage from "@/assets/3.png";
import cylinderImage from "@/assets/0018.png";
import noodleImage from "@/assets/0017.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export default function Hero() {
  const staticText = "Automate your";
  const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Change the word every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [animatedWords.length]);

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            {/* Tagline */}
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-light">
              Tech Vaseegrah
            </div>

            {/* Static + Animated Words */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 min-w-[120px]">
              {staticText}{" "}
              <motion.span
                key={animatedWords[currentWordIndex]} // Ensure each word has a unique key for animation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001E80]"
              >
                {animatedWords[currentWordIndex]}
              </motion.span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Transform your business with cutting-edge website
              development, artificial intelligence, and software solutions
              that enhance productivity, drive growth,
              and ensure exceptional efficiency and success.
            </p>

            {/* Buttons */}
            <div className="flex gap-1 items-center mt-[40px]">
              <button className="btn btn-primary">Contact us</button>
            </div>
          </div>

          {/* Images */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 10,
              }}
            />
            <Image
              src={cylinderImage}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={noodleImage}
              width={220}
              alt="Noodle image"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
