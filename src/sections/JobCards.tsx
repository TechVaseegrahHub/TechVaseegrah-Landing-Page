"use client";

import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useInView, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation"; // ✅ Detects page change

const cardData = [
  {
    image: "/assets/images/Code.png",
    title: "Web Development",
    description: "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/Laptop.png",
    title: "Web App Development",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/0014.png",
    title: "UI/UX Designer",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    image: "/assets/images/Big-Data.png",
    title: "Data Science / Machine Learning",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

export const JobCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentCardWidth, setCurrentCardWidth] = useState(320);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  const pathname = usePathname(); // ✅ Detects page navigation

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView, pathname]); // ✅ Re-trigger animation on page change

  // ✅ Heading Animation (Bottom-to-Top)
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: "easeInOut" },
    }),
  };

  // ✅ JobCards Animation (Right-to-Left with Staggered Effect)
  const jobCardsVariants = {
    hidden: { opacity: 0, x: 100 }, // Start from right
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + i * 0.2, duration: 0.9, ease: "easeInOut" },
    }),
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCurrentCardWidth(320);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <motion.div className="container" ref={ref} key={pathname} initial="hidden" animate={controls}>
        <div className="section-heading md:text-5xl lg:text-6xl text-center">

          {/* ✅ Tag - Animates first */}
          <motion.div custom={0} initial="hidden" animate={controls} variants={fadeInUpVariants} className="flex justify-center">
            <Tag>Internships</Tag>
          </motion.div>

          {/* ✅ Heading - Animates second */}
          <motion.h2 custom={1} initial="hidden" animate={controls} variants={fadeInUpVariants} className="section-title mt-3">
            Start Your Career with Tech Vaseegrah!
          </motion.h2>

          {/* ✅ Subheading - Animates third */}
          <motion.p custom={2} initial="hidden" animate={controls} variants={fadeInUpVariants} className="section-description mt-3">
            Interns gain practical skills by working on real-world projects alongside experienced professionals,
            enhancing their knowledge and preparing them for future careers.
          </motion.p>

          {/* ✅ JobCards - Right-to-Left Animation */}
          <motion.div className="mt-20 flex justify-center"> {/* ✅ Reduced margin-top */}
            <motion.div
              ref={containerRef}
              className="flex flex-nowrap gap-4 md:gap-8 px-4 md:px-0"
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: -(currentCardWidth * (cardData.length - 1)), right: 0 }}
              dragElastic={0.1}
              whileTap={{ cursor: isMobile ? "grabbing" : "auto" }}
              style={{ x: useMotionValue(0) }}
            >
              {cardData.map(({ image, title, description, color }, cardIndex) => (
                <motion.div
                  key={title}
                  custom={cardIndex}
                  initial="hidden"
                  animate={controls}
                  variants={jobCardsVariants} // ✅ Added stagger effect per card
                  className="relative z-0 p-8 md:p-10 group rounded-2xl"
                  style={{
                    width: currentCardWidth,
                    flexShrink: 0,
                    margin: isMobile ? "0 auto" : undefined, // Center align in mobile
                  }}
                >
                  {/* ✅ Background Effect */}
                  <div className={twMerge("absolute inset-0 rounded-2xl bg-opacity-40 -z-10 blur-2xl opacity-0 group-hover:opacity-50 transition duration-300",
                    color === "lime" && "bg-lime-500",
                    color === "cyan" && "bg-cyan-500",
                    color === "violet" && "bg-violet-500"
                  )}></div>

                  {/* ✅ Card Styling */}
                  <div className="absolute inset-0 bg-white -z-10 rounded-2xl border border-white/30 shadow-lg"></div>

                  <div className="flex justify-center -mt-20">
                    <div className="inline-flex relative">
                      <img src={image || "/placeholder.svg"} alt="Pill img" className="size-32 group-hover:-translate-y-6 transition duration-300"/>
                    </div>
                  </div>
                  <h3 className="section-title text-2xl mt-8">{title}</h3>
                  <p className="section-description mt-3">{description}</p>
                  <div className="flex justify-center mt-1">
                    <button className="btn-primary btn text-[15px] mt-3">Apply</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
