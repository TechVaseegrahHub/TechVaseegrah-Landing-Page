"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Globe, Smartphone, Cloud, BrainCircuit } from "lucide-react"
// import heroIllustration from "@/assets/hero.png";

const animationVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
}

const featuresData = [
  {
    icon: Globe,
    title: "Web",
    description: "Build web apps and services for macOS, Windows, Linux, and Docker.",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
    iconBgColor: "bg-purple-100",
  },
  {
    icon: Smartphone,
    title: "Mobile and desktop",
    description: "Use a single codebase to build native apps for Windows, macOS, iOS, and Android.",
    borderColor: "border-pink-500",
    textColor: "text-pink-600",
    iconBgColor: "bg-pink-100",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Build scalable and resilient cloud-native apps that run on all major cloud providers.",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & ML",
    description: "Build smart apps with AI, OpenAI, and cloud services. Explore endless possibilities.",
    borderColor: "border-sky-500",
    textColor: "text-sky-600",
    iconBgColor: "bg-sky-100",
  },
]

const FeatureCard = ({ feature }: { feature: (typeof featuresData)[0] }) => {
  const Icon = feature.icon
  return (
    <div
      className={`p-5 bg-white border-2 ${feature.borderColor} rounded-xl ...`} // p-8 -> p-6, rounded-2xl -> rounded-xl
    >
      <div className={`w-10 h-7 ... mb-1`}> {/* w-12 h-12 -> w-10 h-10, mb-6 -> mb-4 */}
        <Icon className={feature.textColor} size={20} /> {/* size 24 -> 20 */}
      </div>
      <h3 className={`text-lg font-semibold ... mb-1`}>{feature.title}</h3> {/* text-xl -> text-lg, mb-3 -> mb-2 */}
      <p className="text-gray-600 leading-normal text-sm">{feature.description}</p> {/* leading-relaxed -> leading-normal, added text-sm */}
    </div>
  )
}

export default function Hero() {
  const staticText = "Automate Your"
  const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={heroRef} className="bg-[radial-gradient(ellipse_at_bottom_left,_#fff,_#f0fdf4_100%)] min-h-screen ">
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              <span>{staticText}</span>
              <br />
              <div className="relative h-[1.2em] overflow-hidden">
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
                    className="absolute w-full text-primary"
                  >
                    {animatedWords[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </h1>

            <p className="section-description text-left text-2xl text-gray-700 leading-relaxed max-w-lg">
            Boost your business with smart websites, AI, and software that improve efficiency, productivity, and growth
            </p>

            <div className=" flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1B9D4A] text-white hover:bg-[#16803D] transition-colors shadow-lg shadow-[#1B9D4A]/30 px-6 py-3 rounded-lg font-semibold">
                Start your project
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          {/* <div className="relative">
          <img
              src={heroIllustration.src} // Use the imported variable's src property
              alt="Automation and AI tools illustration"
              className="w-full h-auto"
          />
          </div> */}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-7">
          <h2 className="text-4xl font-bold text-slate-900 ">Build. Test. Deploy</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
