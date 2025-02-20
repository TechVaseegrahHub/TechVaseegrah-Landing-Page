"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants, useInView } from "framer-motion";


const heroVariant: Variants = {
  start: { y: 30, opacity: 0, filter: "blur(0px)" },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition:{ duration: 1.5, delay: 0.5, ease: "backInOut" }
  },
}



export const SmartBiz = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="py-1 relative mb-10">
      <motion.div variants={heroVariant} initial="start" animate={isInView ? "end" : "start"} className="container">
        <div className="flex items-center justify-center">
          <p className=" section-title text-5xl  text-black/40 text-center">
            Transforming small businesses into{" "}
            <span className="relative">
              <span className="group inline-block">
                <span className="bg-[#001E80] bg-clip-text text-transparent animate-pulse">
                  Smart biz
                </span>
                <video
                  src="/assets/incredible.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                />
              </span>
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};
