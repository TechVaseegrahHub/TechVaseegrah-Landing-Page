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
         எனது ஐம்பதாவது வயதில் தொடங்கப்பட்ட <span className="text-yellow-600 text-2xl">வசீகர வேதா </span>நிறுவனத்தின் வளர்ச்சி என்னைப்போல் இருக்கும் தொழில் முனைவோருக்கு ஊக்கம் அளிப்பதை கண்டு தோள் கொடுப்போம் 
         தொழில்முனைந்திட என்ற இந்த பயணத்தில் ஒரு லட்சம் தொழில் முனைவோருக்கு வழிகாட்டியாக இருக்க வேண்டும் என்ற  லட்சியத்தோடு எனது பயணம் தொடர்கிறது..
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
