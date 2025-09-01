"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import roadmap1 from "@/assets/roadmap1.png";
import roadmap2 from "@/assets/roadmap2.png";

export default function WebRoadmap() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Roadmap 1 fades out earlier & quicker
  const roadmap1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 1, 0]);

  // Roadmap 2 fades in almost immediately after roadmap1
  const roadmap2Opacity = useTransform(scrollYProgress, [0.32, 0.45, 1], [0, 1, 1]);
  const roadmap2Y = useTransform(scrollYProgress, [0.32, 0.45], [100, 0]);

  return (
    <section ref={ref} className="relative bg-white mb-20 md:mb-24">
      <div className="h-[210vh] relative">
        {/* Sticky Title */}
        <div className="sticky top-0 py-10 text-center bg-white z-30">
          <h2 className="text-5xl font-bold text-green-600">Our Roadmap</h2>
        </div>

        {/* Roadmap 1 */}
        <motion.div
          style={{ opacity: roadmap1Opacity }}
          className="sticky top-20 flex items-center justify-center h-screen z-10"
        >
          <img
            src={roadmap1.src}
            alt="Roadmap 1"
            className="w-[950px] max-w-[95%] rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Roadmap 2 */}
        <motion.div
          style={{ opacity: roadmap2Opacity, y: roadmap2Y }}
          className="sticky top-20 flex items-center justify-center h-screen z-20"
        >
          <img
            src={roadmap2.src}
            alt="Roadmap 2"
            className="w-[950px] max-w-[95%] rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
