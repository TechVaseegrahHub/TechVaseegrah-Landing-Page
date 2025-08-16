// "use client"
// import aiRobotImage from "@/assets/ai-robot.png"
// import cloudImage from "@/assets/cloud-computing.png"
// import networkImage from "@/assets/network-neural.png"
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import { useState, useEffect, useRef } from "react"

// const animationVariants = {
//   initial: { y: 20, opacity: 0 },
//   animate: { y: 0, opacity: 1 },
//   exit: { y: -20, opacity: 0 },
// }

// export default function Hero() {
//   const staticText = "Automate Your"
//   const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
//   const [currentWordIndex, setCurrentWordIndex] = useState(0)

//   // Change the word every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length)
//     }, 4000) // Increased duration for a more subtle change
//     return () => clearInterval(interval)
//   }, [])

//   // Scroll-based transformations
//   const heroRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   })

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

//   return (
//     <section
//       ref={heroRef}
//       className="pt-8 pb-20  md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_at_bottom_left,_#183EC2,_#EAEEFE_100%)] overflow-x-clip text-center md:text-left"
//     >
//       <div className="container ">
//         <div className="md:flex items-center flex flex-col md:flex-row">
//           <div className="md:w-[478px] w-full">
//             {/* Static + Animated Words */}
          
//           {/*  <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
//               Tech Vaseegrah
//             </div>  */}
          
//             <h1 className="text-5xl font-semibold md:text-7xl px-35 tracking-tighter mt-20 min-w-[120px]">
//               <span className="bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
//                 {staticText}
//               </span>
//               <br />
//               <div className="relative h-[1.2em] overflow-hidden">
//                 <AnimatePresence initial={false} mode="wait">
//                   <motion.div
//                     key={animatedWords[currentWordIndex]}
//                     variants={animationVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{
//                       y: { type: "spring", stiffness: 300, damping: 30 },
//                       opacity: { duration: 0.5 },
//                     }}
//                     className="absolute w-full text-[#001E80] word-animation"
//                   >
//                     {animatedWords[currentWordIndex]}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </h1>

//             {/* Subtext */}
//             <p className="text-xl text-[#010D3E] tracking-tight mt-6 max-w-[90%] mx-auto md:mx-0 md:max-w-full">
//               Transform your business with cutting-edge website 
//               development, artificial intelligence, and software
//               solutions that enhance productivity, drive growth, 
//               and ensure exceptional efficiency and success.
//             </p>

//             {/* CONTACT BUTTON 
//             <div className="mt-[40px] flex justify-center md:justify-start">
//               <button className="group relative inline-flex items-center 
//                                 rounded-lg gap-2 px-7 py-3 text-bm 
//                                 font-medium bg-black text-[#ffffff] 
//                                 transition-colors duration-300 
//                                 ease-in-out hover:text-white">
//               <span className="relative z-10">Contact Us</span>
//               <span className="absolute inset-0 rounded-lg bg-[#2950DA] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-[400ms] ease-in-out"></span>
//               <ArrowUpRight
//                   size={18}
//                   className="relative z-10 text-white  transition-colors duration-300 ease-in-out"
//             />
//               </button>
//             </div>*/}
          
//           </div>

//           {/* Images */}
//           <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
//             <motion.img
//               src={aiRobotImage.src}
//               alt="Ai Robot"
//               className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
//               animate={{
//                 translateY: [-30, 30],
//               }}
//               transition={{
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "mirror",
//                 duration: 3,
//                 ease: "easeInOut",
//               }}
//             />
//             <motion.img
//               src={cloudImage.src}
//               width={260}
//               height={260}
//               alt="Cloud Computer"
//               className="hidden md:block bottom-[450px] right-[900px] md:absolute"
//               style={{
//                 translateY: translateY,
//               }}
//             />
//             <motion.img
//               src={networkImage.src}
//               width={250}
//               height={250}
//               alt="Network Neural"
//               className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
//               style={{
//                 rotate: 30,
//                 translateY: translateY,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




// "use client"
// import aiRobotImage from "@/assets/ai-robot.png"

// import cloudImage from "@/assets/cloud-computing.png"
// import networkImage from "@/assets/network-neural.png"
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import { useState, useEffect, useRef } from "react"

// const animationVariants = {
//   initial: { y: 20, opacity: 0 },
//   animate: { y: 0, opacity: 1 },
//   exit: { y: -20, opacity: 0 },
// }

// const TECH_GREEN = "#006400";
// const BLACK_TEXT = "#000000";

// export default function Hero() {
//   const staticText = "Automate Your"
//   const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
//   const [currentWordIndex, setCurrentWordIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [])

//   const heroRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   })

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

//   return (
//     <section
//       ref={heroRef}
//       className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip text-center md:text-left"
//       style={{
//         background: "linear-gradient(135deg, #E6F3E6, #F5FAF0)",
//       }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="md:flex items-center flex flex-col md:flex-row">
//           <div className="md:w-[478px] w-full">
//             <h1 className="text-5xl font-semibold md:text-7xl px-35 tracking-tighter mt-20 min-w-[120px]" style={{ color: TECH_GREEN }}>
//               {staticText}
//               <br />
//               <div className="relative h-[1.2em] overflow-hidden">
//                 <AnimatePresence initial={false} mode="wait">
//                   <motion.div
//                     key={animatedWords[currentWordIndex]}
//                     variants={animationVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{
//                       y: { type: "spring", stiffness: 300, damping: 30 },
//                       opacity: { duration: 0.5 },
//                     }}
//                     style={{
//                       color: TECH_GREEN,
//                       fontWeight: "bold",
//                     }}
//                     className="absolute w-full word-animation"
//                   >
//                     {animatedWords[currentWordIndex]}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </h1>

//             <p
//               className="text-xl tracking-tight mt-6 max-w-[90%] mx-auto md:mx-0 md:max-w-full"
//               style={{ color: BLACK_TEXT }}
//             >
//               Transform your business with cutting-edge website development,
//               artificial intelligence, and software solutions that enhance
//               productivity, drive growth, and ensure exceptional efficiency
//               and success.
//             </p>
//           </div>

//           {/* Images */}
//           <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
//             <motion.img
//               src={aiRobotImage.src}
            
//               alt="Ai Robot"
//               className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                
//               animate={{ translateY: [-30, 30] }}
//               transition={{
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "mirror",
//                 duration: 3,
//                 ease: "easeInOut",
//               }}
//             />
//             <motion.img
//               src={cloudImage.src}
//               width={260}
//               height={260}
//               alt="Cloud Computer"
//               className="hidden md:block bottom-[450px] right-[900px] md:absolute"
//               style={{ translateY: translateY }}
//             />
//             <motion.img
//               src={networkImage.src}
//               width={250}
//               height={250}
//               alt="Network Neural"
//               className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
//               style={{ rotate: 30, translateY: translateY }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }













"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import heroBg from "@/assets/hero-main.png" // <-- the green tech image you liked

const animationVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
}

const TECH_GREEN = "#006400";
const BLACK_TEXT = "#000000";

export default function Hero() {
  const staticText = "Automate Your"
  const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={heroRef}
      className="pt-11 pb-10 md:pt-18 md:pb-16 overflow-x-clip text-center md:text-left relative"
      style={{
        background: "linear-gradient(135deg, #b7b420ff, #E6F3E6, #F5FAF0, #38aa2cff)",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="md:flex items-center flex flex-col md:flex-row">
          {/* Text Section */}
          <div className="md:w-[600px] w-full">
            <h1 className="text-6xl font-bold md:text-8xl px-35 tracking-tight mt-20"
              style={{ color: TECH_GREEN }}
            >
              {staticText}
              <br />
              <div className="relative h-[1.3em] overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={animatedWords[currentWordIndex]}
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.5 },
                    }}
                    style={{
                      color: TECH_GREEN,
                      fontWeight: "bold",
                    }}
                    className="absolute w-full word-animation text-6xl md:text-8xl"
                  >
                    {animatedWords[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </h1>

            <p
              className="text-xl md:text-xl tracking-tight mt-10 max-w-[95%] mx-auto md:mx-0"
              style={{ color: BLACK_TEXT }}
            >
              Transform your business with cutting-edge website development,
              artificial intelligence, and software solutions that enhance
              productivity, drive growth, and ensure exceptional efficiency
              and success.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-16 md:mt-0 md:flex-1 relative flex justify-center">
            <motion.img
              src={heroBg.src}
              alt="Tech Illustration"
              // className="w-[550px] md:w-[800px] h-auto mx-auto rounded-2xl shadow-2xl"
              className ="w-[400px] md:w-[600px] h-auto mx-auto rounded-xl shadow-xl"
              animate={{ translateY: [-25, 25] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "mirror",
                duration: 4,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
