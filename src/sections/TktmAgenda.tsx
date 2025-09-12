






// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// // --- INTERFACES & DATA ---
// interface AgendaItem {
//   title: string;
//   time: string;
// }

// interface AgendaItemProps {
//   item: AgendaItem;
//   index: number;
//   isLeft: boolean;
//   scrollYProgress: MotionValue<number>;
//   agendaLength: number;
// }

// const agenda: AgendaItem[] = [
//   { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
//   { title: "Business owner introduction (1 minute/person, Hi-Tea served)", time: "30 mins" },
//   { title: "Business Registration / Licencing", time: "30 mins" },
//   { title: "Branding and Marketing", time: "30 mins" },
//   { title: "Web Development", time: "30 mins" },
//   { title: "WhatsApp Business Ideas", time: "30 mins" },
//   { title: "Instagram Business Ideas", time: "30 mins" },
//   { title: "Store of the future", time: "30 mins" },
//   { title: "CipherGate Employee Management", time: "30 mins" },
//   { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 min/person" },
// ];


// // --- RESPONSIVE CHILD COMPONENT ---
// // This component now has a dedicated mobile layout and a desktop layout.
// const AgendaItemComponent: React.FC<AgendaItemProps> = ({ item, index, isLeft, scrollYProgress, agendaLength }) => {
//   const startBuffer = 0.05;
//   const progressRange = 1 - startBuffer * 2;
  
//   const currentDotPosition = startBuffer + (index / (agendaLength - 1)) * progressRange;
//   const prevDotPosition = startBuffer + ((index - 1) / (agendaLength - 1)) * progressRange;

//   const animationStart = index === 0 ? 0 : prevDotPosition;
//   const animationEnd = currentDotPosition;

//   const arcProgress = useTransform(scrollYProgress, [animationStart, animationEnd], [0, 1]);
//   const colorChangeStart = (animationStart + animationEnd) / 2;
//   const dotColor = useTransform(scrollYProgress, [colorChangeStart, animationEnd], ["#d1d5db", "#16a34a"]);

//   return (
//     <div className="relative flex md:justify-between items-center w-full">
//       {/* 
//         This div is a flexible spacer that is empty on the left for right-aligned cards 
//         on desktop, but takes no space on mobile.
//       */}
//       {isLeft ? <div className="hidden md:block w-5/12"></div> : null}

//       {/* --- RESPONSIVE DOT --- */}
//       {/* On mobile: left-6. On desktop: md:left-1/2 */}
//       <motion.div 
//         style={{ borderColor: dotColor }} 
//         className="absolute top-4 left-6 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 bg-white z-20 md:left-1/2"
//       />

//       {/* --- CARD CONTAINER --- */}
//       {/* On mobile: full width with padding. On desktop: 5/12 width. */}
//       <motion.div
//         className="w-full pl-12 md:pl-0 md:w-5/12"
//         initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4 }}
//         viewport={{ once: true }}
//       >
//         <div className="relative bg-white shadow-md rounded-lg p-4 md:p-5 w-full md:w-auto border-l-4 md:border-l-0 md:border-b-4 border-gray-300">
//           <h4 className="text-base md:text-base font-semibold">{item.title}</h4>
//           <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//           {/* --- DESKTOP-ONLY ARCS --- */}
//           {/* These SVGs are hidden on mobile and only appear on medium screens and up */}
//           {isLeft ? (
//             <svg className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full hidden md:block" width="110" height="60" viewBox="0 0 110 60" fill="none">
//               <path d="M0 30 Q55 60 110 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
//               <motion.path d="M0 30 Q55 60 110 30" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: arcProgress }} />
//             </svg>
//           ) : (
//             <svg className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full hidden md:block" width="110" height="60" viewBox="0 0 110 60" fill="none">
//               <path d="M110 30 Q55 60 0 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
//               <motion.path d="M110 30 Q55 60 0 30" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: arcProgress }} />
//             </svg>
//           )}
//         </div>
//       </motion.div>

//       {/* 
//         This div is a flexible spacer that is empty on the right for left-aligned cards
//         on desktop, but takes no space on mobile.
//       */}
//       {!isLeft ? <div className="hidden md:block w-5/12"></div> : null}
//     </div>
//   );
// };


// // --- MAIN PARENT COMPONENT ---
// const TktmAgenda: React.FC = () => {
//   const timelineRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: timelineRef,
//     offset: ["start center", "end end"],
//   });

//   const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section className="relative container mx-auto px-4 py-20">
//       <div className="text-center mb-16">
//         <h3 className="text-2xl font-bold text-green-700 mb-2">
//           தோள் கொடுப்போம் தொழில் முனைந்திட
//         </h3>
//         {/* ... other header content ... */}
//       </div>

//       <h2 className="text-4xl font-bold mb-16 text-center">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>

//       <div ref={timelineRef} className="relative flex flex-col space-y-16 md:space-y-24">
        
//         {/* --- RESPONSIVE TIMELINE TRACK --- */}
//         {/* On mobile: left-6. On desktop: md:left-1/2 */}
//         <div className="absolute top-5 bottom-5 w-1 bg-gray-300 rounded-full left-6 -translate-x-1/2 md:left-1/2">
//           {/* Animated green line */}
//           <motion.div
//             className="h-full w-full bg-green-500 rounded-full origin-top"
//             style={{ scaleY: lineScale }}
//           />
//         </div>

//         {/* Render the structural items */}
//         {agenda.map((item, index) => (
//           <AgendaItemComponent
//             key={index}
//             item={item}
//             index={index}
//             isLeft={index % 2 === 0}
//             scrollYProgress={scrollYProgress}
//             agendaLength={agenda.length}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TktmAgenda;

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// // --- INTERFACES & DATA ---
// interface AgendaItem {
//   title: string;
//   time: string;
// }

// interface AgendaItemProps {
//   item: AgendaItem;
//   index: number;
//   isLeft: boolean;
//   scrollYProgress: MotionValue<number>;
//   agendaLength: number;
// }

// const agenda: AgendaItem[] = [
//   { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
//   { title: "Business owner introduction (1 minute/person, Hi-Tea served)", time: "30 mins" },
//   { title: "Business Registration / Licencing", time: "30 mins" },
//   { title: "Branding and Marketing", time: "30 mins" },
//   { title: "Web Development", time: "30 mins" },
//   { title: "WhatsApp Business Ideas", time: "30 mins" },
//   { title: "Instagram Business Ideas", time: "30 mins" },
//   { title: "Store of the future", time: "30 mins" },
//   { title: "CipherGate Employee Management", time: "30 mins" },
//   { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 min/person" },
// ];


// // --- CORRECTED RESPONSIVE CHILD COMPONENT ---
// const AgendaItemComponent: React.FC<AgendaItemProps> = ({ item, index, isLeft, scrollYProgress, agendaLength }) => {
//   const startBuffer = 0.05;
//   const progressRange = 1 - startBuffer * 2;
  
//   const currentDotPosition = startBuffer + (index / (agendaLength - 1)) * progressRange;
//   const prevDotPosition = startBuffer + ((index - 1) / (agendaLength - 1)) * progressRange;

//   const animationStart = index === 0 ? 0 : prevDotPosition;
//   const animationEnd = currentDotPosition;

//   const arcProgress = useTransform(scrollYProgress, [animationStart, animationEnd], [0, 1]);
//   const colorChangeStart = (animationStart + animationEnd) / 2;
//   const dotColor = useTransform(scrollYProgress, [colorChangeStart, animationEnd], ["#d1d5db", "#16a34a"]);

//   return (
//     // FIX 1: Added margin-bottom (`mb-16`) for consistent spacing on all screen sizes.
//     // `last:mb-0` removes the margin from the final item to prevent extra space at the end.
//     <div className={`relative flex items-center w-full md:justify-between mb-16 last:mb-0 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
      
//       {/* --- CARD CONTAINER --- */}
//       <motion.div
//         className="w-full pl-12 md:w-5/12 md:pl-0"
//         initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <div className="relative bg-white shadow-md rounded-lg p-4 md:p-5 w-full border-l-4 md:border-l-0 md:border-b-4 border-gray-300">
//           <h4 className="text-base md:text-lg font-semibold">{item.title}</h4>
//           <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//           {/* --- DESKTOP-ONLY ARCS --- */}
//           {isLeft ? (
//             <svg className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full hidden md:block" width="110" height="60" viewBox="0 0 110 60" fill="none">
//               <path d="M0 30 Q55 60 110 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
//               <motion.path d="M0 30 Q55 60 110 30" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: arcProgress }} />
//             </svg>
//           ) : (
//             <svg className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full hidden md:block" width="110" height="60" viewBox="0 0 110 60" fill="none">
//               <path d="M110 30 Q55 60 0 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
//               <motion.path d="M110 30 Q55 60 0 30" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: arcProgress }} />
//             </svg>
//           )}
//         </div>
//       </motion.div>

//       {/* --- FLEXIBLE SPACER for Desktop --- */}
//       <div className="hidden md:block w-5/12"></div>

//       {/* --- RESPONSIVE DOT --- */}
//       {/* FIX 2: Changed `top-4` to `top-1/2 -translate-y-1/2` to perfectly center the dot vertically. */}
//       <motion.div 
//         style={{ borderColor: dotColor }} 
//         className="absolute top-1/2 left-6 -translate-y-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 bg-white z-20 md:left-1/2"
//       />
//     </div>
//   );
// };


// // --- MAIN PARENT COMPONENT ---
// const TktmAgenda: React.FC = () => {
//   const timelineRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: timelineRef,
//     offset: ["start center", "end end"],
//   });

//   const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section className="relative container mx-auto px-4 py-20">
//       <div className="text-center mb-16">
//         <h3 className="text-2xl font-bold text-green-700 mb-2">
//           தோள் கொடுப்போம் தொழில் முனைந்திட
//         </h3>
//       </div>

//       <h2 className="text-4xl font-bold mb-16 text-center">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>
      
//       {/* FIX 3: Removed the `space-y-*` classes. Spacing is now handled by the child component. */}
//       <div ref={timelineRef} className="relative flex flex-col">
        
//         {/* --- RESPONSIVE TIMELINE TRACK --- */}
//         <div className="absolute top-5 bottom-5 w-1 bg-gray-300 rounded-full left-6 -translate-x-1/2 md:left-1/2">
//           <motion.div
//             className="h-full w-full bg-green-500 rounded-full origin-top"
//             style={{ scaleY: lineScale }}
//           />
//         </div>

//         {/* Render the agenda items */}
//         {agenda.map((item, index) => (
//           <AgendaItemComponent
//             key={index}
//             item={item}
//             index={index}
//             isLeft={index % 2 === 0}
//             scrollYProgress={scrollYProgress}
//             agendaLength={agenda.length}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TktmAgenda;



// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// // --- INTERFACES & DATA ---
// interface AgendaItem {
//   title: string;
//   time: string;
// }

// interface AgendaItemProps {
//   item: AgendaItem;
//   index: number;
//   isLeft: boolean;
//   scrollYProgress: MotionValue<number>;
//   agendaLength: number;
// }

// const agenda: AgendaItem[] = [
//   { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
//   { title: "Business owner introduction (1 minute/person, Hi-Tea served)", time: "30 mins" },
//   { title: "Business Registration / Licencing", time: "30 mins" },
//   { title: "Branding and Marketing", time: "30 mins" },
//   { title: "Web Development", time: "30 mins" },
//   { title: "WhatsApp Business Ideas", time: "30 mins" },
//   { title: "Instagram Business Ideas", time: "30 mins" },
//   { title: "Store of the future", time: "30 mins" },
//   { title: "CipherGate Employee Management", time: "30 mins" },
//   { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 min/person" },
// ];


// // --- RESPONSIVE CHILD COMPONENT WITH GLOW EFFECT ---
// const AgendaItemComponent: React.FC<AgendaItemProps> = ({ item, index, isLeft, scrollYProgress, agendaLength }) => {
//   const startBuffer = 0.05;
//   const progressRange = 1 - startBuffer * 2;
  
//   const currentDotPosition = startBuffer + (index / (agendaLength - 1)) * progressRange;
//   const prevDotPosition = startBuffer + ((index - 1) / (agendaLength - 1)) * progressRange;

//   const animationStart = index === 0 ? 0 : prevDotPosition;
//   const animationEnd = currentDotPosition;

//   const arcProgress = useTransform(scrollYProgress, [animationStart, animationEnd], [0, 1]);
//   const dotColor = useTransform(scrollYProgress, [(animationStart + animationEnd) / 2, animationEnd], ["#d1d5db", "#16a34a"]);

//   // --- NEW: GLOW EFFECT LOGIC ---
//   // Define a small window around the dot's position where the glow will be active.
//   const glowWindow = 0.04; // Controls the size of the glow area. Adjust as needed.
//   const glowStart = Math.max(0, currentDotPosition - glowWindow);
//   const glowEnd = Math.min(1, currentDotPosition + glowWindow);
  
//   // Transform scroll progress into a box-shadow value.
//   // The shadow is strongest at `currentDotPosition` and fades out on either side.
//   const cardGlow = useTransform(
//     scrollYProgress,
//     [glowStart, currentDotPosition, glowEnd],
//     [
//       "0px 0px 0px 0px rgba(34, 197, 94, 0)",    // No glow
//       "0px 0px 20px 5px rgba(34, 197, 94, 0.5)",  // Peak glow (green)
//       "0px 0px 0px 0px rgba(34, 197, 94, 0)"     // No glow
//     ],
//     { clamp: true } // Ensures the animation doesn't exceed the defined range
//   );

//   return (
//     <div className={`relative flex items-center w-full md:justify-between mb-16 last:mb-0 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
      
//       <motion.div
//         className="w-full pl-12 md:w-5/12 md:pl-0"
//         initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         {/* The inner div is now a motion component to apply the dynamic style */}
//         <motion.div
//           className="relative bg-white shadow-md rounded-lg p-4 md:p-5 w-full border-l-4 md:border-l-0 md:border-b-4 border-gray-300"
//           style={{ boxShadow: cardGlow }} // Apply the glow effect here
//         >
//           <h4 className="text-base md:text-lg font-semibold">{item.title}</h4>
//           <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//           {/* --- DESKTOP-ONLY ARCS --- */}
//           {isLeft ? (
//             <svg className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full hidden md:block" width="110" height="60" viewBox="0 0 110 60" fill="none">
//               <path d="M0 30 Q55 60 110 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
//               <motion.path d="M0 30 Q55 60 110 30" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: arcProgress }} />
//             </svg>
//           ) : (
//             <svg className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full hidden md:block" width="110" height="60" viewBox="0 0 110 60" fill="none">
//               <path d="M110 30 Q55 60 0 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
//               <motion.path d="M110 30 Q55 60 0 30" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: arcProgress }} />
//             </svg>
//           )}
//         </motion.div>
//       </motion.div>

//       <div className="hidden md:block w-5/12"></div>

//       <motion.div 
//         style={{ borderColor: dotColor }} 
//         className="absolute top-1/2 left-6 -translate-y-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 bg-white z-20 md:left-1/2"
//       />
//     </div>
//   );
// };


// // --- MAIN PARENT COMPONENT ---
// const TktmAgenda: React.FC = () => {
//   const timelineRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: timelineRef,
//     offset: ["start center", "end end"],
//   });

//   const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section className="relative container mx-auto px-4 py-20">
//       <div className="text-center mb-16">
//         <h3 className="text-2xl font-bold text-green-700 mb-2">
//           தோள் கொடுப்போம் தொழில் முனைந்திட
//         </h3>
//       </div>

//       <h2 className="text-4xl font-bold mb-16 text-center">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>
      
//       <div ref={timelineRef} className="relative flex flex-col">
        
//         <div className="absolute top-5 bottom-5 w-1 bg-gray-300 rounded-full left-6 -translate-x-1/2 md:left-1/2">
//           <motion.div
//             className="h-full w-full bg-green-500 rounded-full origin-top"
//             style={{ scaleY: lineScale }}
//           />
//         </div>

//         {agenda.map((item, index) => (
//           <AgendaItemComponent
//             key={index}
//             item={item}
//             index={index}
//             isLeft={index % 2 === 0}
//             scrollYProgress={scrollYProgress}
//             agendaLength={agenda.length}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TktmAgenda;


"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// --- INTERFACES & DATA ---
interface AgendaItem {
  title: string;
  time: string;
}

interface AgendaItemProps {
  item: AgendaItem;
  index: number;
  isLeft: boolean;
  scrollYProgress: MotionValue<number>;
  agendaLength: number;
}

const agenda: AgendaItem[] = [
  { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
  { title: "Business owner introduction (1 minute/person, Hi-Tea served)", time: "30 mins" },
  { title: "Business Registration / Licencing", time: "30 mins" },
  { title: "Branding and Marketing", time: "30 mins" },
  { title: "Web Development", time: "30 mins" },
  { title: "WhatsApp Business Ideas", time: "30 mins" },
  { title: "Instagram Business Ideas", time: "30 mins" },
  { title: "Store of the future", time: "30 mins" },
  { title: "CipherGate Employee Management", time: "30 mins" },
  { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 min/person" },
];


// --- FINAL RESPONSIVE CHILD COMPONENT ---
const AgendaItemComponent: React.FC<AgendaItemProps> = ({ item, index, isLeft, scrollYProgress, agendaLength }) => {
  const startBuffer = 0.05;
  const progressRange = 1 - startBuffer * 2;
  
  const currentDotPosition = startBuffer + (index / (agendaLength - 1)) * progressRange;
  const prevDotPosition = startBuffer + ((index - 1) / (agendaLength - 1)) * progressRange;

  const animationStart = index === 0 ? 0 : prevDotPosition;
  const animationEnd = currentDotPosition;

  // Animation for the connecting arc on desktop
  const arcProgress = useTransform(scrollYProgress, [animationStart, animationEnd], [0, 1]);
  
  // Animation for the dot's border color
  const colorChangeStart = (animationStart + animationEnd) / 2;
  const dotColor = useTransform(scrollYProgress, [colorChangeStart, animationEnd], ["#d1d5db", "#16a34a"]);

  // Animation for the card's glow effect on mobile
  const glowWindow = 0.04; 
  const glowStart = Math.max(0, currentDotPosition - glowWindow);
  const glowEnd = Math.min(1, currentDotPosition + glowWindow);
  const cardGlow = useTransform(
    scrollYProgress,
    [glowStart, currentDotPosition, glowEnd],
    [
      "0px 0px 0px 0px rgba(34, 197, 94, 0)",    // No glow
      "0px 0px 20px 5px rgba(34, 197, 94, 0.5)",  // Peak glow (green)
      "0px 0px 0px 0px rgba(34, 197, 94, 0)"     // No glow
    ],
    { clamp: true }
  );

  return (
    <div className={`relative flex items-center w-full md:justify-between mb-16 last:mb-0 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
      
      <motion.div
        className="w-full pl-12 md:w-5/12 md:pl-0"
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className="relative bg-white shadow-md rounded-lg p-4 md:p-5 w-full border-l-4 md:border-l-0 md:border-b-4 border-gray-300"
          style={{ boxShadow: cardGlow }}
        >
          <h4 className="text-base md:text-lg font-semibold">{item.title}</h4>
          <p className="text-sm text-green-700 mt-2">{item.time}</p>

          {/* --- DESKTOP-ONLY ARCS --- */}
          {isLeft ? (
            <svg className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full hidden md:block" width="110" height="60" viewBox="0 0 110 60" fill="none">
              <path d="M0 30 Q55 60 110 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
              <motion.path d="M0 30 Q55 60 110 30" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: arcProgress }} />
            </svg>
          ) : (
            <svg className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full hidden md:block" width="110" height="60" viewBox="0 0 110 60" fill="none">
              <path d="M110 30 Q55 60 0 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
              <motion.path d="M110 30 Q55 60 0 30" stroke="#16a34a" strokeWidth="6" strokeLinecap="round" style={{ pathLength: arcProgress }} />
            </svg>
          )}
        </motion.div>
      </motion.div>

      {/* Flexible spacer for desktop view */}
      <div className="hidden md:block w-5/12"></div>

      {/* The timeline dot */}
      <motion.div 
        style={{ borderColor: dotColor }} 
        className="absolute top-1/2 left-6 -translate-y-1/2 -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 bg-white z-20 md:left-1/2"
      />
    </div>
  );
};


// --- MAIN PARENT COMPONENT ---
const TktmAgenda: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end end"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative container mx-auto px-4 py-20">
            {/* --- NEW HEADER SECTION --- */}
      <div className="text-center mb-16 flex flex-col items-center space-y-4">
        <h3 className="text-3xl md:text-4xl font-bold text-green-700">
          தோள் கொடுப்போம் தொழில் முனைந்திட
        </h3>
        <p className="text-xl md:text-2xl font-bold text-gray-800">
          Conference for Aspiring Entrepreneurs
        </p>
        <p className="text-md text-gray-600">
          Presented by : 
          <span className="font-semibold text-xl text-yellow-600"> Vaseegrah Veda</span> & 
          <span className="font-semibold text-xl text-green-600"> Tech Vaseegrah</span>
        </p>
        <div className="text-md text-gray-700">
          <p>📍 Event Venue: Our office address</p>
        </div>
        <div className="text-md text-gray-700 flex items-center space-x-4">
          <span>🗓️ Every Saturday</span>
          <span className="text-gray-400">|</span>
          <span>⏰ 9am - 2pm</span>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-16 text-center">
        📌 Program <span className="text-green-600">Agenda</span>
      </h2>
      
      <div ref={timelineRef} className="relative flex flex-col">
        
        {/* The main timeline track */}
        <div className="absolute top-5 bottom-5 w-1 bg-gray-300 rounded-full left-6 -translate-x-1/2 md:left-1/2">
          <motion.div
            className="h-full w-full bg-green-500 rounded-full origin-top"
            style={{ scaleY: lineScale }}
          />
        </div>

        {/* Render all agenda items */}
        {agenda.map((item, index) => (
          <AgendaItemComponent
            key={index}
            item={item}
            index={index}
            isLeft={index % 2 === 0}
            scrollYProgress={scrollYProgress}
            agendaLength={agenda.length}
          />
        ))}
      </div>
    </section>
  );
};

export default TktmAgenda;