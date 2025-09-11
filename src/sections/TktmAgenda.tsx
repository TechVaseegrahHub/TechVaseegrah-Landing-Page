// "use client";

// // import { motion, useScroll, useTransform } from "framer-motion";
// import { motion, useScroll, useTransform} from "framer-motion";
// import { useRef } from "react";
// import { useMemo } from "react";

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
//   { title: "One-to-One consultation with Vijaya Mahadevan", time: "15 min/person" },
// ];

// export default function TktmAgenda() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"],
//   });

//   // Green line progress for trunk
//   const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   //  Precompute arcProgress for each item
//   // const arcProgressArray = agenda.map((_, index) => {
//   //   const dotStart = index / agenda.length;
//   //   const dotEnd = (index + 1) / agenda.length;
//   //   return useTransform(scrollYProgress, [dotStart, dotEnd], [0, 1]);
//   // });

//     const arcProgressArray = useMemo(() => {
//     return agenda.map((_, index) => {
//       const dotStart = index / agenda.length;
//       const dotEnd = (index + 1) / agenda.length;
//       return useTransform(scrollYProgress, [dotStart, dotEnd], [0, 1]);
//     });
//   }, [scrollYProgress]);


//   return (
//     <section ref={containerRef} className="relative container mx-auto px-4 py-20">
//       {/* Event Intro */}
// <div className="text-center mb-16">
//   <h3 className="text-2xl font-bold text-green-700 mb-2">
//     தோள் கொடுப்போம் தொழில் முனைந்திட
//   </h3>
//   <h4 className="text-xl font-semibold mb-2">
//     Conference for Aspiring Entrepreneurs
//   </h4>
//   <p className="text-gray-700">
//     Presented by : <span className="font-semibold text-xl text-yellow-600">Vaseegrah Veda</span> &{" "}
//     <span className="font-semibold text-xl text-green-600">Tech Vaseegrah</span>
//   </p>
//   <p className="text-gray-600 mt-1">📍 Event Venue: Our office address</p>
//   <p className="text-gray-600 mt-1">🗓️ Every Saturday | ⏰ 9am - 2pm</p>
// </div>

//       <h2 className="text-4xl font-bold mb-16 text-center">
//         📌 Program <span className="text-green-600">Agenda</span>
//       </h2>

//       <div className="relative flex flex-col space-y-24">
//         {/* Gray base trunk */}
//         <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gray-300 rounded-full" />

//         {/* Green overlay trunk */}
//         <motion.div
//           className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-green-500 rounded-full origin-top"
//           style={{ height: lineProgress }}
//         />

//         {agenda.map((item, index) => {
//           const isLeft = index % 2 === 0;
//           // const dotStart = index / agenda.length;
//           // const dotEnd = (index + 1) / agenda.length;
//           const arcProgress = arcProgressArray[index];

//           // For arc green overlay (only starts when trunk reaches dot)
//           // const arcProgress = useTransform(scrollYProgress, [dotStart, dotEnd], [0, 1]);
//             const arcOffset = useTransform(arcProgress, (val) => 1 - val);

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
//                   <div className="relative bg-white shadow-md rounded-lg p-5 w-72 border-l-4 border-gray-300">
//                     <h4 className="text-base font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//                     {/* Arc (gray base + green overlay, dot → card) */}
//                     <svg
//                       className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
//                       width="110"
//                       height="60"

//                       viewBox="0 0 110 60"
//                       fill="none"
//                     >
//                       {/* Gray fixed arc */}
//                       <path
//                         d="M110 30 Q55 60 0 30"
//                         stroke="#d1d5db"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                       />
//                       {/* Green overlay arc */}
//                       {/* <motion.path
//                         d="M110 30 Q55 60 0 30"
//                         stroke="#16a34a"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         style={{ pathLength: arcProgress }}
//                       /> */}

//                       <motion.path
//   d="M110 30 Q55 60 0 30"
//   stroke="#16a34a"
//   strokeWidth="6"
//   strokeLinecap="round"
//   style={{
//     pathLength: arcProgress,
//     pathOffset: arcOffset,
//   }}
//   initial={{ pathLength: 0 }}
//   animate={{ pathLength: 1 }}
//   transition={{ duration: 0.6 }}
// />

//                     </svg>
//                   </div>
//                 </motion.div>
//               ) : (
//                 <div className="w-5/12" />
//               )}

//               {/* Dot */}
//               <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 bg-white z-20 border-gray-300" />

//               {/* RIGHT card */}
//               {!isLeft ? (
//                 <motion.div
//                   className="w-5/12 flex justify-start"
//                   initial={{ opacity: 0, x: 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="relative bg-white shadow-md rounded-lg p-5 w-72 border-r-4 border-gray-300">
//                     <h4 className="text-base font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{item.time}</p>

//                     {/* Arc (gray base + green overlay, dot → card) */}
//                     <svg
//                       className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
//                       width="110"
//                       height="60"
//                       viewBox="0 0 110 60"
//                       fill="none"
//                     >
//                       {/* Gray fixed arc */}
//                       <path
//                         d="M0 30 Q55 60 110 30"
//                         stroke="#d1d5db"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                       />
//                       {/* Green overlay arc */}
//                       {/* <motion.path
//                         d="M0 30 Q55 60 110 30"
//                         stroke="#16a34a"
//                         strokeWidth="6"
//                         strokeLinecap="round"
//                         style={{ pathLength: arcProgress }}
//                       /> */}

//                       <motion.path
//   d="M0 30 Q55 60 110 30"
//   stroke="#16a34a"
//   strokeWidth="6"
//   strokeLinecap="round"
//   style={{
//     pathLength: arcProgress,
//     pathOffset:arcOffset,
//   }}
//   initial={{ pathLength: 0 }}
//   animate={{ pathLength: 1 }}
//   transition={{ duration: 0.6 }}
// />

//                     </svg>
//                   </div>
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

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

// Define the type for a single agenda item
interface AgendaItem {
  title: string;
  time: string;
}

// Define the props for the new AgendaItemComponent
interface AgendaItemProps {
  item: AgendaItem;
  index: number;
  isLeft: boolean;
  scrollYProgress: MotionValue<number>;
  agendaLength: number;
}

// Data for the agenda timeline
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

/**
 * NEW: AgendaItemComponent
 * This component renders a single item in the timeline.
 * By moving the logic here, we can use hooks correctly at the top level.
 */
function AgendaItemComponent({ item, index, isLeft, scrollYProgress, agendaLength }: AgendaItemProps) {
  // This is the exact point in the scroll progress (from 0.0 to 1.0) where
  // the green line will be perfectly aligned with the center of the dot.
  const dotPosition = index / agendaLength;

  // ---- TIMING FOR THE ARC "FLOW" ANIMATION ----
  const arcStart = dotPosition;
  const arcEnd = dotPosition + 0.03;
  const arcProgress = useTransform(scrollYProgress, [arcStart, arcEnd], [0, 1]);

  // ---- TIMING FOR THE DOT COLOR CHANGE ----
  const checkPoint = dotPosition - 0.005;
  const dotColor = useTransform(scrollYProgress, [checkPoint, dotPosition], ["#d1d5db", "#16a34a"]);

  return (
    <div className="relative flex justify-between items-center w-full">
      {/* LEFT CARD */}
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
            <svg
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
              width="110" height="60" viewBox="0 0 110 60" fill="none"
            >
              <path d="M0 30 Q55 60 110 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
              <motion.path
                d="M0 30 Q55 60 110 30"
                stroke="#16a34a" strokeWidth="6" strokeLinecap="round"
                style={{ pathLength: arcProgress }}
              />
            </svg>
          </div>
        </motion.div>
      ) : (
        <div className="w-5/12" />
      )}

      {/* Central Dot */}
      <motion.div
        style={{ borderColor: dotColor }}
        className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 bg-white z-20"
      />

      {/* RIGHT CARD */}
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
            <svg
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
              width="110" height="60" viewBox="0 0 110 60" fill="none"
            >
              <path d="M110 30 Q55 60 0 30" stroke="#d1d5db" strokeWidth="6" strokeLinecap="round" />
              <motion.path
                d="M110 30 Q55 60 0 30"
                stroke="#16a34a" strokeWidth="6" strokeLinecap="round"
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
}

export default function TktmAgenda() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative container mx-auto px-4 py-20">
      {/* Event Introduction Header */}
      <div className="text-center mb-16">
        <h3 className="text-2xl font-bold text-green-700 mb-2">
          தோள் கொடுப்போம் தொழில் முனைந்திட
        </h3>
        <h4 className="text-xl font-semibold mb-2">
          Conference for Aspiring Entrepreneurs
        </h4>
        <p className="text-gray-700">
          Presented by :{" "}
          <span className="font-semibold text-xl text-yellow-600">Vaseegrah Veda</span> &{" "}
          <span className="font-semibold text-xl text-green-600">Tech Vaseegrah</span>
        </p>
        <p className="text-gray-600 mt-1">📍 Event Venue: Our office address</p>
        <p className="text-gray-600 mt-1">🗓️ Every Saturday | ⏰ 9am - 2pm</p>
      </div>

      <h2 className="text-4xl font-bold mb-16 text-center">
        📌 Program <span className="text-green-600">Agenda</span>
      </h2>

      <div className="relative flex flex-col space-y-24">
        {/* The gray base line for the timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gray-300 rounded-full" />

        {/* The green animated overlay line */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-green-500 rounded-full origin-top"
          style={{ height: lineProgress }}
        />

        {/* MAPPING to the new component */}
        {agenda.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <AgendaItemComponent
              key={index}
              item={item}
              index={index}
              isLeft={isLeft}
              scrollYProgress={scrollYProgress}
              agendaLength={agenda.length}
            />
          );
        })}
      </div>
    </section>
  );
}