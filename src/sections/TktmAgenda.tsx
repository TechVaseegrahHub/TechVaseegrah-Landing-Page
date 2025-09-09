// "use client";

// import { motion } from "framer-motion";

// const agenda = [
//   { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
//   { title: "Business owner introduction (1 minute/person, Hi-Tea served)", time: "30 mins" },
//   { title: "Business Registration / Licencing", time: "30 mins" },
//   { title: "Branding and Marketing", time: "30 mins" },
//   { title: "Web Development", time: "30 mins" },
//   { title: "WhatsApp Business Ideas", time: "30 mins" },
//   { title: "Instagram Business Ideas", time: "30 mins" },
//   { title: "Store of the future", time: "30 mins" },
//   { title: "CipherGate Employee Management", time: "30 mins" },
//   { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 mins per person" },
// ];

// export default function ProgramAgenda() {
//   return (
//     <div className="relative container mx-auto px-4 py-6">
//       <h2 className="text-xl font-bold text-center mb-6">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>

//       <div className="relative flex flex-col space-y-16">
//         {/* Vertical timeline line */}
//         <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-green-600"></div>

//         {agenda.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           return (
//             <div key={index} className="relative flex justify-between items-center w-full">
//               {/* Left card */}
//               {isLeft ? (
//                 <motion.div
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                   className="w-5/12 flex justify-end"
//                 >
//                   <div className="bg-white shadow-md rounded-xl p-4 w-64 text-right">
//                     <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
//                     <p className="text-xs text-gray-600 mt-1">{item.time}</p>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12"></div>
//               )}

//               {/* Dot that fits into the line */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex justify-center">
//                 <div className="w-5 h-5 bg-green-600 rounded-full border-2 border-green-600"></div>
//               </div>

//               {/* Right card */}
//               {!isLeft ? (
//                 <motion.div
//                   initial={{ opacity: 0, x: 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                   className="w-5/12 flex justify-start"
//                 >
//                   <div className="bg-white shadow-md rounded-xl p-4 w-64 text-left">
//                     <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
//                     <p className="text-xs text-gray-600 mt-1">{item.time}</p>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12"></div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



//   "use client";

// import { motion } from "framer-motion";

// const agenda = [
//   { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
//   { title: "Business owner introduction (1 minute/person, Hi-Tea served)", time: "30 mins" },
//   { title: "Business Registration / Licencing", time: "30 mins" },
//   { title: "Branding and Marketing", time: "30 mins" },
//   { title: "Web Development", time: "30 mins" },
//   { title: "WhatsApp Business Ideas", time: "30 mins" },
//   { title: "Instagram Business Ideas", time: "30 mins" },
//   { title: "Store of the future", time: "30 mins" },
//   { title: "CipherGate Employee Management", time: "30 mins" },
//   { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 mins per person" },
// ];


// export default function ProgramAgenda() {
//   return (
    
//     <div className="relative container mx-auto px-4 py-10">
//       <h2 className="text-2xl font-bold text-center mb-10">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>

//       <div className="relative flex flex-col space-y-16">
//         {/* Center vertical line (thicker) */}
//         <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-2 bg-green-600"></div>

//         {agenda.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           return (
//             <div key={index} className="relative flex justify-between items-center w-full">
//               {/* Left card */}
//               {isLeft ? (
//                 <motion.div
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                   className="w-5/12 flex justify-end"
//                 >
//                   <div className="relative bg-white shadow-md rounded-lg p-5 border-l-4 border-green-500 w-72">
//                     <h4 className="text-base font-semibold text-gray-800">{item.title}</h4>
//                     <p className="text-sm text-green-600 font-medium mt-2">{item.time}</p>

//                     {/* Small green dot on RIGHT edge */}
//                     <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <svg
//   className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
//   width="110"
//   height="60"
//   viewBox="0 0 110 60"
//   fill="none"
// >
//   <path
//     d="M0 30 Q55 60 110 30"
//     stroke="#16a34a"
//     strokeWidth="6"   // thicker line
//     fill="none"
//     strokeLinecap="round"
//   />
// </svg>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12"></div>
//               )}

//               {/* Main timeline dot (bigger) */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
//                 <div className="w-7 h-7 bg-green-600 rounded-full border-2 border-green-600"></div>
//               </div>

//               {/* Right card */}
// {!isLeft ? (
//   <motion.div
//     initial={{ opacity: 0, x: 40 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.4 }}
//     viewport={{ once: true }}
//     className="w-5/12 flex justify-start"
//   >
//     <div className="relative bg-white shadow-md rounded-lg p-5 border-r-4 border-green-500 w-72">
//       <h4 className="text-base font-semibold text-gray-800">{item.title}</h4>
//       <p className="text-sm text-green-600 font-medium mt-2">{item.time}</p>

//       {/* Small green dot on LEFT edge */}
//       <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
//         <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//       </div>
//       {/* Smile arc RIGHT (aligned to small dot) */}
// <svg
//   className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
//   width="90"
//   height="60"
//   viewBox="0 0 90 60"
//   fill="none"
// >
//   <path
//     d="M90 30 Q45 60 0 30"
//     stroke="#16a34a"
//     strokeWidth="6"
//     fill="none"
//     strokeLinecap="round"
//   />
// </svg>

//     </div>
//   </motion.div>
// ) : (
//   <div className="w-5/12"></div>
// )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const agenda = [
//   { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
//   { title: "Business owner introduction (1 minute/person, Hi-Tea served)", time: "30 mins" },
//   { title: "Business Registration / Licencing", time: "30 mins" },
//   { title: "Branding and Marketing", time: "30 mins" },
//   { title: "Finance & Loan Support", time: "30 mins" },
//   { title: "Government Benefits & Subsidies", time: "30 mins" },
//   { title: "Networking & Closing", time: "30 mins" },
// ];

// export default function TktmAgenda() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   // Green line progress
//   const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <section ref={containerRef} className="relative container mx-auto px-4 py-20">
//       <h2 className="text-4xl font-bold mb-16 text-center">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>

//       <div className="relative flex flex-col space-y-24">
//         {/* Gray base line */}
//         <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gray-300 rounded-full" />

//         {/* Animated green line */}
//         <motion.div
//           className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-green-500 rounded-full origin-top"
//           style={{ height: lineProgress }}
//         />

//         {agenda.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           const dotStart = index / agenda.length;
//           const dotEnd = (index + 1) / agenda.length;

//           // Dot highlight
//           const dotColor = useTransform(scrollYProgress, [dotStart, dotEnd], ["#d1d5db", "#16a34a"]);

//           // Arc stroke animation
//           const arcProgress = useTransform(scrollYProgress, [dotStart, dotEnd], [0, 1]);

//           // Card border highlight
//           const borderColor = useTransform(scrollYProgress, [dotStart, dotEnd], ["#d1d5db", "#16a34a"]);

//           return (
//             <div key={index} className="relative flex justify-between items-center w-full">
//               {/* LEFT card */}
//               {isLeft ? (
//                 <motion.div
//                   className="w-5/12 flex justify-end"
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="relative bg-white shadow-md rounded-lg p-5 w-72"
//                     style={{ borderLeftWidth: 4, borderColor }}
//                   >
//                     <h4 className="text-base font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//                     {/* Small dot + arc */}
//                     <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <motion.svg
//                       className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
//                       width="110"
//                       height="60"
//                       viewBox="0 0 110 60"
//                       fill="none"
//                     >
//                       <motion.path
//                         d="M0 30 Q55 60 110 30"
//                         stroke="#16a34a"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         style={{ pathLength: arcProgress }}
//                       />
//                     </motion.svg>
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12" />
//               )}

//               {/* CENTER dot */}
//               <motion.div
//                 className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 bg-white z-20"
//                 style={{ borderColor: dotColor }}
//               />

//               {/* RIGHT card */}
//               {!isLeft ? (
//                 <motion.div
//                   className="w-5/12 flex justify-start"
//                   initial={{ opacity: 0, x: 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="relative bg-white shadow-md rounded-lg p-5 w-72"
//                     style={{ borderRightWidth: 4, borderColor }}
//                   >
//                     <h4 className="text-base font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//                     {/* Small dot + arc */}
//                     <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <motion.svg
//                       className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
//                       width="110"
//                       height="60"
//                       viewBox="0 0 110 60"
//                       fill="none"
//                     >
//                       <motion.path
//                         d="M110 30 Q55 60 0 30"
//                         stroke="#16a34a"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         style={{ pathLength: arcProgress }}
//                       />
//                     </motion.svg>
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12" />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const agenda = [
//   { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
//   { title: "Business owner introduction 1 minute/person (Hi-Tea served)", time: "30 mins" },
//   { title: "Business Registration / Licencing", time: "30 mins" },
//   { title: "Branding and Marketing", time: "30 mins" },
//   { title: "Web Development", time: "30 mins" },
//   { title: "WhatsApp Business Ideas", time: "30 mins" },
//   { title: "Instagram Business Ideas", time: "30 mins" },
//   { title: "Store of the Future", time: "30 mins" },
//   { title: "CipherGate Employee Management", time: "30 mins" },
//   { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 mins / person" },
// ];

// export default function TktmAgenda() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   // Green line progress
//   const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <section ref={containerRef} className="relative container mx-auto px-4 py-20">
//       <h2 className="text-4xl font-bold mb-16 text-center">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>

//       <div className="relative flex flex-col space-y-24">
//         {/* Gray base line */}
//         <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gray-300 rounded-full" />

//         {/* Animated green line */}
//         <motion.div
//           className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-green-500 rounded-full origin-top"
//           style={{ height: lineProgress }}
//         />

//         {agenda.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           const dotStart = index / agenda.length;
//           const dotEnd = (index + 1) / agenda.length;

//           // Dot highlight
//           const dotColor = useTransform(scrollYProgress, [dotStart, dotEnd], ["#d1d5db", "#16a34a"]);

//           // Arc stroke animation
//           const arcProgress = useTransform(scrollYProgress, [dotStart, dotEnd], [0, 1]);

//           // Card border highlight
//           const borderColor = useTransform(scrollYProgress, [dotStart, dotEnd], ["#d1d5db", "#16a34a"]);

//           return (
//             <div key={index} className="relative flex justify-between items-center w-full">
//               {/* LEFT card */}
//               {isLeft ? (
//                 <motion.div
//                   className="w-5/12 flex justify-end"
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="relative bg-white shadow-md rounded-lg p-5 w-72"
//                     style={{ borderLeftWidth: 4, borderColor }}
//                   >
//                     <h4 className="text-base font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//                     {/* Small dot + arc */}
//                     <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <motion.svg
//                       className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
//                       width="110"
//                       height="60"
//                       viewBox="0 0 110 60"
//                       fill="none"
//                     >
//                       <motion.path
//                         d="M0 30 Q55 60 110 30"
//                         stroke="#16a34a"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         style={{ pathLength: arcProgress }}
//                       />
//                     </motion.svg>
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12" />
//               )}

//               {/* CENTER dot */}
//               <motion.div
//                 className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 bg-white z-20"
//                 style={{ borderColor: dotColor }}
//               />

//               {/* RIGHT card */}
//               {!isLeft ? (
//                 <motion.div
//                   className="w-5/12 flex justify-start"
//                   initial={{ opacity: 0, x: 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="relative bg-white shadow-md rounded-lg p-5 w-72"
//                     style={{ borderRightWidth: 4, borderColor }}
//                   >
//                     <h4 className="text-base font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//                     {/* Small dot + arc */}
//                     <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <motion.svg
//                       className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
//                       width="110"
//                       height="60"
//                       viewBox="0 0 110 60"
//                       fill="none"
//                     >
//                       <motion.path
//                         d="M110 30 Q55 60 0 30"
//                         stroke="#16a34a"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         style={{ pathLength: arcProgress }}
//                       />
//                     </motion.svg>
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12" />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const agenda = [
//   { title: "Registration / Journey of Vaseegrah Veda (audio infotainment)", time: "30 mins" },
//   { title: "Business owner introduction 1 minute/person (Hi-Tea served)", time: "30 mins" },
//   { title: "Business Registration / Licencing", time: "30 mins" },
//   { title: "Branding and Marketing", time: "30 mins" },
//   { title: "Web Development", time: "30 mins" },
//   { title: "WhatsApp Business Ideas", time: "30 mins" },
//   { title: "Instagram Business Ideas", time: "30 mins" },
//   { title: "Store of the Future", time: "30 mins" },
//   { title: "CipherGate Employee Management", time: "30 mins" },
//   { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 mins / person" },
// ];

// export default function TktmAgenda() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   // Green line progress
//   const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <section ref={containerRef} className="relative container mx-auto px-4 py-20">
//       {/* Header Block */}
//       <div className="text-center mb-16">
//         <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
//           தோள் கொடுப்போம் தொழில் முனைந்திட
//         </h1>
//         <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
//           Conference for Aspiring Entrepreneurs
//         </h2>
//         <p className="text-gray-600 mb-2">
//           Presented by <span className="font-semibold">Vaseegrah Veda & Tech Vaseegrah</span>
//         </p>
//         <p className="text-gray-600">📍 Venue: Our Office Address</p>
//         <p className="text-gray-600">📅 Every Saturday | ⏰ 9:00 AM – 2:00 PM</p>
//       </div>

//       {/* Agenda Heading */}
//       <h2 className="text-4xl font-bold mb-16 text-center">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>

//       {/* Timeline Agenda */}
//       <div className="relative flex flex-col space-y-24">
//         {/* Gray base line */}
//         <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gray-300 rounded-full" />

//         {/* Animated green line */}
//         <motion.div
//           className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-green-500 rounded-full origin-top"
//           style={{ height: lineProgress }}
//         />

//         {agenda.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           const dotStart = index / agenda.length;
//           const dotEnd = (index + 1) / agenda.length;

//           // Dot highlight
//           const dotColor = useTransform(scrollYProgress, [dotStart, dotEnd], ["#d1d5db", "#16a34a"]);

//           // Arc stroke animation
//           const arcProgress = useTransform(scrollYProgress, [dotStart, dotEnd], [0, 1]);

//           // Card border highlight
//           const borderColor = useTransform(scrollYProgress, [dotStart, dotEnd], ["#d1d5db", "#16a34a"]);

//           return (
//             <div key={index} className="relative flex justify-between items-center w-full">
//               {/* LEFT card */}
//               {isLeft ? (
//                 <motion.div
//                   className="w-5/12 flex justify-end"
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="relative bg-white shadow-md rounded-lg p-5 w-72"
//                     style={{ borderLeftWidth: 4, borderColor }}
//                   >
//                     <h4 className="text-base font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//                     {/* Small dot + arc */}
//                     <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <motion.svg
//                       className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
//                       width="110"
//                       height="60"
//                       viewBox="0 0 110 60"
//                       fill="none"
//                     >
//                       <motion.path
//                         d="M0 30 Q55 60 110 30"
//                         stroke="#16a34a"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         style={{ pathLength: arcProgress }}
//                       />
//                     </motion.svg>
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12" />
//               )}

//               {/* CENTER dot */}
//               <motion.div
//                 className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 bg-white z-20"
//                 style={{ borderColor: dotColor }}
//               />

//               {/* RIGHT card */}
//               {!isLeft ? (
//                 <motion.div
//                   className="w-5/12 flex justify-start"
//                   initial={{ opacity: 0, x: 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <motion.div
//                     className="relative bg-white shadow-md rounded-lg p-5 w-72"
//                     style={{ borderRightWidth: 4, borderColor }}
//                   >
//                     <h4 className="text-base font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//                     {/* Small dot + arc */}
//                     <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <motion.svg
//                       className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
//                       width="110"
//                       height="60"
//                       viewBox="0 0 110 60"
//                       fill="none"
//                     >
//                       <motion.path
//                         d="M110 30 Q55 60 0 30"
//                         stroke="#16a34a"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         style={{ pathLength: arcProgress }}
//                       />
//                     </motion.svg>
//                   </motion.div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12" />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client";

// import { motion, useScroll, useTransform } from "framer-motion";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const agenda = [
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

export default function TktmAgenda() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Green line progress for trunk
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative container mx-auto px-4 py-20">
      {/* Event Intro */}
<div className="text-center mb-16">
  <h3 className="text-2xl font-bold text-green-700 mb-2">
    தோள் கொடுப்போம் தொழில் முனைந்திட
  </h3>
  <h4 className="text-xl font-semibold mb-2">
    Conference for Aspiring Entrepreneurs
  </h4>
  <p className="text-gray-700">
    Presented by : <span className="font-semibold text-xl text-yellow-600">Vaseegrah Veda</span> &{" "}
    <span className="font-semibold text-xl text-green-600">Tech Vaseegrah</span>
  </p>
  <p className="text-gray-600 mt-1">📍 Event Venue: Our office address</p>
  <p className="text-gray-600 mt-1">🗓️ Every Saturday | ⏰ 9am - 2pm</p>
</div>

      <h2 className="text-4xl font-bold mb-16 text-center">
        📌 Program <span className="text-green-600">Agenda</span>
      </h2>

      <div className="relative flex flex-col space-y-24">
        {/* Gray base trunk */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gray-300 rounded-full" />

        {/* Green overlay trunk */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-green-500 rounded-full origin-top"
          style={{ height: lineProgress }}
        />

        {agenda.map((item, index) => {
          const isLeft = index % 2 === 0;
          const dotStart = index / agenda.length;
          const dotEnd = (index + 1) / agenda.length;

          // For arc green overlay (only starts when trunk reaches dot)
          const arcProgress = useTransform(scrollYProgress, [dotStart, dotEnd], [0, 1]);

          return (
            <div key={index} className="relative flex justify-between items-center w-full">
              {/* LEFT card */}
              {isLeft ? (
                <motion.div
                  className="w-5/12 flex justify-end"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-white shadow-md rounded-lg p-5 w-72 border-l-4 border-gray-300">
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.time}</p>

                    {/* Arc (gray base + green overlay, dot → card) */}
                    <svg
                      className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
                      width="110"
                      height="60"
                      viewBox="0 0 110 60"
                      fill="none"
                    >
                      {/* Gray fixed arc */}
                      <path
                        d="M110 30 Q55 60 0 30"
                        stroke="#d1d5db"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      {/* Green overlay arc */}
                      <motion.path
                        d="M110 30 Q55 60 0 30"
                        stroke="#16a34a"
                        strokeWidth="6"
                        strokeLinecap="round"
                        style={{ pathLength: arcProgress }}
                      />
                    </svg>
                  </div>
                </motion.div>
              ) : (
                <div className="w-5/12" />
              )}

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 bg-white z-20 border-gray-300" />

              {/* RIGHT card */}
              {!isLeft ? (
                <motion.div
                  className="w-5/12 flex justify-start"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-white shadow-md rounded-lg p-5 w-72 border-r-4 border-gray-300">
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-2">{item.time}</p>

                    {/* Arc (gray base + green overlay, dot → card) */}
                    <svg
                      className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
                      width="110"
                      height="60"
                      viewBox="0 0 110 60"
                      fill="none"
                    >
                      {/* Gray fixed arc */}
                      <path
                        d="M0 30 Q55 60 110 30"
                        stroke="#d1d5db"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      {/* Green overlay arc */}
                      <motion.path
                        d="M0 30 Q55 60 110 30"
                        stroke="#16a34a"
                        strokeWidth="6"
                        strokeLinecap="round"
                        style={{ pathLength: arcProgress }}
                      />
                    </svg>
                  </div>
                </motion.div>
              ) : (
                <div className="w-5/12" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
