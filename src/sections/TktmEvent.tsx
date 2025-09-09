// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const testimonials = [
//   {
//     text: "We found and hired two great contractors on Overpass that have completed our team and helped us take our sales efforts to the next level.",
//     name: "Dawn Session",
//     role: "Call Center Manager at Nano Hearing Aids",
//     video: "/assets/VideoNum-01.mp4",
//   },
//   {
//     text: "Overpass helped us scale our sales team quickly with great talent. Highly recommend!",
//     name: "Michael Thompson",
//     role: "Sales Director at BrightTech",
//     video: "/assets/VideoNum-02.mp4",
//   },
//   {
//     text: "Our sales doubled within a few months thanks to the amazing people we found here.",
//     name: "Sophia Lee",
//     role: "Growth Manager at CloudSoft",
//     video: "/assets/VideoNum-03.mp4",
//   },
// ];

// export default function TktmEvent() {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((index + 1) % testimonials.length);
//   const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

//   // Auto-rotate every 12 seconds
//   useEffect(() => {
//     const interval = setInterval(next, 12000);
//     return () => clearInterval(interval);
//   }, [index]);

//   const t = testimonials[index];

//   return (
//     <section className="relative w-full py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
//         {/* Left: Video */}
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full md:w-1/2 flex justify-center"
//         >
//           <video
//             src={t.video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="rounded-2xl shadow-2xl max-h-[400px] w-full object-cover"
//           />
//         </motion.div>

//         {/* Right: Text */}
//         <motion.div
//           key={t.text}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full md:w-1/2 text-gray-900 relative"
//         >
//           <h3 className="text-green-600 text-sm uppercase font-semibold tracking-wider mb-4">
//             Testimonials
//           </h3>
//           <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
//             "{t.text}"
//           </p>
//           <p className="font-bold text-lg text-green-700">{t.name}</p>
//           <p className="text-gray-600 text-sm">{t.role}</p>

//           {/* Navigation Buttons */}
//           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
//             <button
//               onClick={prev}
//               className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
//             >
//               <ChevronUp size={18} />
//             </button>
//             <button
//               onClick={next}
//               className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
//             >
//               <ChevronDown size={18} />
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Decorative circle accent */}
//       <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-green-200 opacity-40 rounded-full blur-2xl" />
//     </section>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const testimonials = [
//   {
//     text: "We found and hired two great contractors on Overpass that have completed our team and helped us take our sales efforts to the next level.",
//     name: "Dawn Session",
//     role: "Call Center Manager at Nano Hearing Aids",
//     video: "/assets/VideoNum-01.mp4",
//   },
//   {
//     text: "Overpass helped us scale our sales team quickly with great talent. Highly recommend!",
//     name: "Michael Thompson",
//     role: "Sales Director at BrightTech",
//     video: "/assets/VideoNum-02.mp4",
//   },
//   {
//     text: "Our sales doubled within a few months thanks to the amazing people we found here.",
//     name: "Sophia Lee",
//     role: "Growth Manager at CloudSoft",
//     video: "/assets/VideoNum-03.mp4",
//   },
// ];

// export default function TktmEvent() {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((index + 1) % testimonials.length);
//   const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

//   // Auto-rotate every 12 seconds
//   useEffect(() => {
//     const interval = setInterval(next, 12000);
//     return () => clearInterval(interval);
//   }, [index]);

//   const t = testimonials[index];

//   return (
//     <section className="relative w-full py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
//         {/* Left: Video with vertical folding transition */}
//         <motion.div
//           key={index}
//           initial={{ rotateX: 90, opacity: 0 }}
//           animate={{ rotateX: 0, opacity: 1 }}
//           exit={{ rotateX: -90, opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="w-full md:w-1/2 flex justify-center"
//           style={{ perspective: "1200px" }}
//         >
//           <motion.video
//             key={t.video}
//             src={t.video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="rounded-2xl shadow-2xl max-h-[400px] w-full object-cover"
//             initial={{ rotateX: 90 }}
//             animate={{ rotateX: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//           />
//         </motion.div>

//         {/* Right: Text */}
//         <motion.div
//           key={t.text}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full md:w-1/2 text-gray-900 relative"
//         >
//           <h3 className="text-green-600 text-sm uppercase font-semibold tracking-wider mb-4">
//             Testimonials
//           </h3>
//           <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
//             "{t.text}"
//           </p>
//           <p className="font-bold text-lg text-green-700">{t.name}</p>
//           <p className="text-gray-600 text-sm">{t.role}</p>

//           {/* Navigation Buttons */}
//           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
//             <button
//               onClick={prev}
//               className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
//             >
//               <ChevronUp size={18} />
//             </button>
//             <button
//               onClick={next}
//               className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
//             >
//               <ChevronDown size={18} />
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Decorative circle accent */}
//       <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-green-200 opacity-40 rounded-full blur-2xl" />
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    text: "Vasseegrah Veda, a pure herbal factory, recently attended a startup event at SRM University Chennai. They showcased their natural products and connected with aspiring entrepreneurs. The event was a great opportunity for networking and exploring potential collaborations within the startup ecosystem",
    name: "Loaction",
    role: "SRM University Ramapuram-Chennai",
    video: "/assets/VideoNum-01.mp4",
  },
  {
    text: "Overpass helped us scale our sales team quickly with great talent. Highly recommend!",
    name: "Michael Thompson",
    role: "Sales Director at BrightTech",
    video: "/assets/VideoNum-02.mp4",
  },
  {
    text: "Our sales doubled within a few months thanks to the amazing people we found here.",
    name: "Sophia Lee",
    role: "Growth Manager at CloudSoft",
    video: "/assets/VideoNum-03.mp4",
  },
];

export default function TktmEvent() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate every 12 seconds
  useEffect(() => {
    const interval = setInterval(next, 12000);
    return () => clearInterval(interval);
  }, [index]);

  const t = testimonials[index];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Left: Video with smoother vertical folding transition */}
        <motion.div
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ 
            duration: 1.4, 
            ease: [0.25, 0.8, 0.25, 1] // smooth cubic bezier 
          }}
          className="w-full md:w-1/2 flex justify-center"
          style={{ perspective: "1200px" }}
        >
          <motion.video
            key={t.video}
            src={t.video}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-2xl max-h-[400px] w-full object-cover"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ 
              duration: 1.4, 
              ease: [0.25, 0.8, 0.25, 1] 
            }}
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          key={t.text}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-1/2 text-gray-900 relative"
        >
          <h3 className="text-green-600 text-sm uppercase font-semibold tracking-wider mb-4">
            Testimonials
          </h3>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            "{t.text}"
          </p>
          <p className="font-bold text-lg text-green-700">{t.name}</p>
          <p className="text-gray-600 text-sm">{t.role}</p>

          {/* Navigation Buttons */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
            <button
              onClick={prev}
              className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
            >
              <ChevronUp size={18} />
            </button>
            <button
              onClick={next}
              className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative circle accent */}
      <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-green-200 opacity-40 rounded-full blur-2xl" />
    </section>
  );
}
