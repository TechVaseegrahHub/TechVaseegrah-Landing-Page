// "use client";

// import { motion, Variants, useScroll, useSpring, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";

// const heroVariant: Variants = {
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

// export const TktmHead = () => {
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
//       className="bg-gradient-to-b from-green-50 to-white pt-20 pb-24 overflow-x-clip"
//     >
//       <motion.div
//         variants={heroVariant}
//         initial="start"
//         animate={isInView ? "end" : "start"}
//         className="container"
//       >
//         <div className="section-heading">
//           {/* Badge */}
//           {/* <div className="flex justify-center">
//             <motion.div
//               variants={heroChildVariant}
//               className="inline-block bg-green-100 text-green-800 px-6 py-2 rounded-full text-lg font-semibold mb-6 shadow"
//             >
//                 லட்சம் தொழில்முனைவோரை உருவாக்கும் லட்சியம் 
//             </motion.div>
//           </div> */}
//           <div className="flex justify-center">
//   <motion.div
//     variants={heroChildVariant}
//     className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow"
//   >
//     லட்சம் தொழில்முனைவோரை உருவாக்கும் லட்சியம்
//   </motion.div>
// </div>


//           {/* Title */}
//           <motion.h2 variants={heroChildVariant} className="section-title mt-5 text-center">
//             <span className="text-green-700">தோள் கொடுப்போம் </span>தொழில் முனைந்திட
//           </motion.h2>

//           {/* Description */}
//           <motion.p
//             variants={heroChildVariant}
//             className="section-description mt-5 mb-8 max-w-3xl mx-auto text-center"
//           >
//             என் ஐம்பதாவது வயதில், விவசாயம் சார்ந்த சுயப்பராமரிப்புப் பொருட்களைத் தயாரிக்கத் தொடங்கினேன். இது சமூக வலைத்தளங்கள் வழியாக பலருக்கு ஊக்கமளித்தது. "தோள் கொடுப்போம் தொழில் முனைந்திட" என்ற என்னுடைய இந்த பயணம், ஒரு லட்சம் தொழில்முனைவோரை உருவாக்கும் லட்சியத்தோடு இன்று தொடர்கிறது.
//           </motion.p>
//         </div>

//         {/* Optional animated glow background */}
//         <div className="relative">
//           <motion.div
//             className="absolute inset-5 bg-green-200 blur-[50px] -z-10 rounded-full"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

"use client";
import { motion, Variants, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const heroVariant: Variants = {
  start: {},
  end: { transition: { staggerChildren: 0.3 } },
};

const heroChildVariant: Variants = {
  start: { y: 30, opacity: 0, filter: "blur(5px)" },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const TktmHead = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });

  // Scroll zoom animation
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.08]), {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-green-50 to-white pt-20 pb-24 overflow-x-clip"
    >
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        {/* Tagline Badge */}
        {/* <motion.div
          variants={heroChildVariant}
          className="inline-block bg-green-100 text-green-800 px-4 py-1 text-sm font-medium rounded-full mb-6"
        >
          லட்சம் தொழில்முனைவோரை உருவாக்கும் லட்சியம்
        </motion.div> */}
        <motion.div
  variants={heroChildVariant}
  className="inline-block bg-green-300 text-black px-4 py-1 text-sm font-medium rounded-full mb-6"
>
  லட்சம் தொழில்முனைவோரை உருவாக்கும் லட்சியம்
</motion.div>

        
        {/* Two-Line Heading */}
<motion.h2
  variants={heroChildVariant}
  className="mt-6 text-center font-extrabold leading-tight"
>
  {/* Black line */}
  <span className="block text-black text-3xl sm:text-4xl md:text-5xl">
    தோள் கொடுப்போம்
  </span>

  {/* Green line */}
  <span className="block text-green-700 text-3xl sm:text-4xl md:text-5xl mt-2">
     தொழில் முனைந்திட
  </span>
</motion.h2>


        {/* Description */}
        <motion.p
          variants={heroChildVariant}
          className="mt-10 text-gray-800 max-w-2xl mx-auto text-lg leading-relaxed"
        >
         2017 ஆம் ஆண்டு, என் ஐம்பதாவது வயதில், விவசாயம் சார்ந்த சுயப்பராமரிப்புப் பொருட்களைத்
         தயாரிக்கும் சிறு முயற்சியைத் தொடங்கினேன். இதன் விளைவாக, “தோள் கொடுப்போம் தொழில்
         முனைந்திட” என்ற என்னுடைய இந்த பயணம், ஒரு லட்சம் தொழில்முனைவோரை உருவாக்கும் லட்சியத்தோடு
         தொடர்கிறது...
        </motion.p>

      </motion.div>

      {/* Background Glow Effects */}
      <div className="relative">
        <motion.div
          className="absolute inset-5 bg-blue-400 blur-[50px] -z-10 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "backInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-blue-300 blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
        />
      </div>
    </section>
  );
};
