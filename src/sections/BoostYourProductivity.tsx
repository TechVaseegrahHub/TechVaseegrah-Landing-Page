// "use client";
// import productImage from "@/assets/bill-z.png";
// import stockupImage from "@/assets/stock-up.png";
// import rockectImage from "@/assets/startup-rocket.png";
// import Image from "next/image";
// import { motion, Variants, useScroll, useSpring, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";

// const MotionImage = motion(Image); // Motion-wrapped Image component
// const heroVariant: Variants = { // Framer Motion Variants
//   start: {},
//   end: {
//     transition: {
//       staggerChildren: 0.4,
//     },
//   },
// };

// const heroChildVariant: Variants = {
//   start: {
//     y: 30,
//     opacity: 0,
//     filter: "blur(0px)",
//   },
//   end: {
//     y: 0,
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// export const BoostYourProductivity = () => {
//   const sectionRef = useRef(null);
//   const heroBannerRef = useRef<HTMLDivElement>(null);

//   const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });

//   const { scrollYProgress } = useScroll({
//     target: heroBannerRef,
//     offset: ["start 1080px", "50% start"],
//   });

//   const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);
//   const scale = useSpring(scrollYTransform, {
//     stiffness: 300,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const { scrollYProgress: sectionScrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(sectionScrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
//     >
//       <motion.div variants={heroVariant} initial="start" animate={isInView ? "end" : "start"} className="container">
//         <div className="section-heading">
//           <div className="flex justify-center">
//             <motion.div variants={heroChildVariant} className="tag">
//               Boost your productivity
//             </motion.div>
//           </div>
//           <motion.h2 variants={heroChildVariant} className="section-title mt-5">
//             A more effective way to track progress
//           </motion.h2>
//           <motion.p variants={heroChildVariant} className="section-description mt-5">
//             Effortlessly turn your ideas into a fully functional, responsive,
//             SaaS website in just minutes with this template.
//           </motion.p>
//         </div>

//         <div className="relative">
//           <motion.div
//             className="mt-10"
//             initial={{ y: 120, opacity: 0, filter: "blur(0px)" }}
//             animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//             transition={{ duration: 1.5, delay: 0.5, ease: "backInOut" }}
//             ref={heroBannerRef}
//             style={{ scale }}
//           >
//             <Image src={productImage} alt="Bill Z" className="mt-10" />
//           </motion.div>

//           {/* Blurry glow effect */}
//           <motion.div
//             className="absolute bg-blue- inset-5 blur-[50px] -z-10"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
//           ></motion.div>

//           <motion.div
//             className="absolute inset-0 bg-blue- blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
//             initial={{ scale: 0.4, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
//           ></motion.div>

//           <MotionImage
//             variants={heroChildVariant}
//             src={stockupImage}
//             alt="Stock Up"
//             height={300}
//             width={300}
//             className="hidden md:block absolute -right-36 -top-32"
//             style={{ translateY }}/>
          
//           <MotionImage
//             variants={heroChildVariant}
//             src={rockectImage}
//             alt="Rocket Startup"
//             height={300}
//             width={300}
//             className="hidden md:block absolute bottom-24 -left-36"
//             style={{ translateY }}/>
//         </div>
//       </motion.div>
//     </section>
//   );
// };







// "use client";
// import productImage from "@/assets/bill-z.png";
// import stockupImage from "@/assets/stock-up.png";
// import rockectImage from "@/assets/startup-rocket.png";
// import Image from "next/image";
// import { motion, Variants, useScroll, useSpring, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";

// const MotionImage = motion(Image); // Motion-wrapped Image component
// const heroVariant = { // Framer Motion Variants
//   start: {},
//   end: {
//     transition: {
//       staggerChildren: 0.4,
//     },
//   },
// };

// const heroChildVariant = {
//   start: {
//     y: 30,
//     opacity: 0,
//     filter: "blur(0px)",
//   },
//   end: {
//     y: 0,
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

// export const BoostYourProductivity = () => {
//   const sectionRef = useRef(null);
//   const heroBannerRef = useRef(null);

//   const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });

//   const { scrollYProgress } = useScroll({
//     target: heroBannerRef,
//     offset: ["start 1080px", "50% start"],
//   });

//   const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);
//   const scale = useSpring(scrollYTransform, {
//     stiffness: 300,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const { scrollYProgress: sectionScrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(sectionScrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
//     >
//       <motion.div variants={heroVariant} initial="start" animate={isInView ? "end" : "start"} className="container">
//         <div className="section-heading text-center">
//           <div className="flex justify-center">
//             <motion.div variants={heroChildVariant} className="tag" style={{ color: "#4CAF50" }}>
//               Boost your productivity
//             </motion.div>
//           </div>
//           <motion.h2 variants={heroChildVariant} className="section-title mt-5 text-4xl font-bold" style={{ color: "#4CAF50" }}>
//             A more effective way to track progress
//           </motion.h2>
//           <motion.p variants={heroChildVariant} className="section-description mt-5 text-lg" style={{ color: "#8CB43F" }}>
//             Effortlessly turn your ideas into a fully functional, responsive,
//             SaaS website in just minutes with this template.
//           </motion.p>
//         </div>

//         <div className="relative">
//           <motion.div
//             className="mt-10"
//             initial={{ y: 120, opacity: 0, filter: "blur(0px)" }}
//             animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//             transition={{ duration: 1.5, delay: 0.5, ease: "backInOut" }}
//             ref={heroBannerRef}
//             style={{ scale }}
//           >
//             <Image src={productImage} alt="Bill Z" className="mt-10" />
//           </motion.div>

//           {/* Blurry glow effect */}
//           <motion.div
//             className="absolute bg-blue- inset-5 blur-[50px] -z-10"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
//           ></motion.div>

//           <motion.div
//             className="absolute inset-0 bg-blue- blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
//             initial={{ scale: 0.4, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
//           ></motion.div>

//           <MotionImage
//             variants={heroChildVariant}
//             src={stockupImage}
//             alt="Stock Up"
//             height={300}
//             width={300}
//             className="hidden md:block absolute -right-36 -top-32"
//             style={{ translateY }}
//           />
          
//           <MotionImage
//             variants={heroChildVariant}
//             src={rockectImage}
//             alt="Rocket Startup"
//             height={300}
//             width={300}
//             className="hidden md:block absolute bottom-24 -left-36"
//             style={{ translateY }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };







"use client";
import productImage from "@/assets/bill-z.png";
import stockupImage from "@/assets/stock-up.png";
import rockectImage from "@/assets/startup-rocket.png";
import Image from "next/image";
import { motion, Variants, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion(Image);
const heroVariant = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant = {
  start: {
    y: 30,
    opacity: 0,
    filter: "blur(0px)",
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const TECH_GREEN = "#006400";
const BLACK_TEXT = "#000000";

export const BoostYourProductivity = () => {
  const sectionRef = useRef(null);
  const heroBannerRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });

  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);
  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(sectionScrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[ #55ce67ff] to-[ #0fb24eff] py-24 overflow-x-clip"
    >
      <motion.div variants={heroVariant} initial="start" animate={isInView ? "end" : "start"} className="container">
        <div className="section-heading text-center">
          <div className="flex justify-center">
            <motion.div variants={heroChildVariant} className="tag" style={{ color: TECH_GREEN }}>
              Boost your productivity
            </motion.div>
          </div>
          <motion.h2 variants={heroChildVariant} className="section-title mt-5 text-4xl font-bold" style={{ color: TECH_GREEN }}>
            A more effective way to track progress
          </motion.h2>
          <motion.p variants={heroChildVariant} className="section-description mt-5 text-lg" style={{ color: BLACK_TEXT }}>
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            className="mt-10"
            initial={{ y: 120, opacity: 0, filter: "blur(0px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "backInOut" }}
            ref={heroBannerRef}
            style={{ scale }}
          >
            <Image src={productImage} alt="Bill Z" className="mt-10" />
          </motion.div>

          {/* Blurry glow effect */}
          <motion.div
            className="absolute bg-blue- inset-5 blur-[50px] -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
          ></motion.div>

          <motion.div
            className="absolute inset-0 bg-blue- blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
          ></motion.div>

          <MotionImage
            variants={heroChildVariant}
            src={stockupImage}
            alt="Stock Up"
            height={300}
            width={300}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY }}
          />
          
          <MotionImage
            variants={heroChildVariant}
            src={rockectImage}
            alt="Rocket Startup"
            height={300}
            width={300}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY }}
          />
        </div>
      </motion.div>
    </section>
  );
};