// "use client";

// import { useRef } from "react";
// import { motion, useInView, Variants } from "framer-motion";

// const sectionVariant: Variants = {
//   start: { opacity: 0, y: 20 },
//   end: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
//   },
// };

// export const SmartBiz = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

//   return (
//     <section ref={sectionRef} className="py-24 md:py-32 relative bg-white">
//       <div className="absolute inset-0 -z-0 h-full w-full]"></div>
      
//       <motion.div 
//         variants={sectionVariant} 
//         initial="start" 
//         animate={isInView ? "end" : "start"} 
//         className="container relative z-10"
//       >
//         <div className="flex items-center justify-center">
//           <p className="section-title text-4xl md:text-5xl lg:text-6xl text-center bg-black bg-clip-text text-transparent">
//             Transforming small businesses into{" "}
//             <span className="relative group">
//               {/* 1. THE FLUID PULSE: Applying our new custom animation */}
//               <span className="inline-block bg-gradient-to-b from-primary to-green-700 bg-clip-text text-transparent animate-fluid-pulse">
//                 Smart biz
//               </span>

//               {/* Polished video reveal */}
//               <div className="absolute bottom-full left-1/2 mb-4 w-[220px] h-auto -translate-x-1/2 p-1  rounded-2xl transition-all duration-300 ease-in-out pointer-events-none
//                            opacity-0 scale-90 -translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-0 blur-md group-hover:blur-0">
//                 <video
//                   src="/assets/incredible.mp4"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-full object-cover rounded-[14px]"
//                 />
//               </div>
//             </span>
//           </p>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const sectionVariant: Variants = {
  start: { opacity: 0, y: 20 },
  end: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  },
};

export const SmartBiz = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative bg-white">
      <div className="absolute inset-0 -z-0 h-full w-full"></div>
      
      <motion.div 
        variants={sectionVariant} 
        initial="start" 
        animate={isInView ? "end" : "start"} 
        className="container relative z-10"
      >
        <div className="flex items-center justify-center">
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl text-center bg-black bg-clip-text text-transparent">
            Transforming small businesses into{" "}
            <span className="relative group">
              {/* Fluid pulse effect */}
              <span className="inline-block bg-gradient-to-b from-primary to-green-700 bg-clip-text text-transparent animate-fluid-pulse">
                Smart biz
              </span>

              {/* Polished video reveal */}
              <div className="absolute bottom-full left-1/2 mb-4 w-[220px] h-auto -translate-x-1/2 p-1 rounded-2xl transition-all duration-300 ease-in-out pointer-events-none
                              opacity-0 scale-90 -translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-0 blur-md group-hover:blur-0">
                <video
                  src="/assets/incredible.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
            </span>
          </h2>
        </div>
      </motion.div>
    </section>
  );
};
