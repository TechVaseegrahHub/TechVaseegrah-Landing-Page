"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CheckCircle, ArrowRight, Sparkles, Zap, TrendingUp, Users, BarChart3 } from "lucide-react"
interface SocialService {
  id: number
  title: string
  description: string
  image: string
  icon: React.ReactNode
  benefits: string[]
  idealFor: string
}
const SOCIAL_SERVICES: SocialService[] = [
  {
    id: 1,
    title: "Strategy That Works",
    description:
      "We create focused roadmaps across all platforms with clear purpose and measurable goals that drive real business outcomes.",
    image: "/assets/images/planning.png",
    icon: <Sparkles className="w-6 h-6" />,
    benefits: ["Data-driven approach", "Platform-specific optimization", "Measurable KPIs"],
    idealFor: "Brands seeking direction and growth",
  },

  {
    id: 2,
    title: "Content That Captivates",
    description:
      "Blending strategy with creativity to give your brand a voice that gets attention and resonates with your ideal audience.",
    image: "/assets/images/story.png",
    icon: <Zap className="w-6 h-6" />,
    benefits: ["Engaging storytelling", "Platform-optimized content", "Brand voice development"],
    idealFor: "Growing businesses",
  },

  {
    id: 3,
    title: "High-Performance Ads",
    description:
      "Optimized campaigns across Meta, LinkedIn, and Google that make every rupee count, delivering measurable ROI.",
    image: "/assets/images/promotion.png",
    icon: <TrendingUp className="w-6 h-6" />,
    benefits: ["Targeted audience selection", "Budget optimization", "Advanced A/B testing"],
    idealFor: "Established brands",
  },

  {
    id: 4,
    title: "Influencer Collaborations",
    description:
      "Partner with trusted voices to grow brand awareness with authenticity that connects with audiences on a deeper level.",
    image: "/assets/images/2a.png",
    icon: <Users className="w-6 h-6" />,
    benefits: ["Authentic partnerships", "Extended audience reach", "Trust building"],
    idealFor: "Growing businesses",
  },

  {
    id: 5,
    title: "Transparent Reporting",
    description:
      "Clear monthly reports with actionable insights and recommendations that drive continuous improvement.",
    image: "/assets/images/Read.png",
    icon: <BarChart3 className="w-6 h-6" />,
    benefits: ["Clear metrics tracking", "Actionable insights", "ROI analysis"],
    idealFor: "Established brands",
  },
]

export default function SocialMediaServices() {
  const [selectedId, setSelectedId] = useState<number>(SOCIAL_SERVICES[0].id)
  const [isInView, setIsInView] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const selectedService = SOCIAL_SERVICES.find((s) => s.id === selectedId) || SOCIAL_SERVICES[0]

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Scroll selected button into view on mobile
  useEffect(() => {
    if (scrollRef.current) {
      const selectedButton = scrollRef.current.querySelector(`[data-id="${selectedId}"]`)
      if (selectedButton) {
        selectedButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
      }
    }
  }, [selectedId])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50 overflow-hidden"
      id="social-services"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 md:mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text mb-6">
            Make Your <span className="text-green-700">Brand Unmissable</span>
          </h2>
          <p className="text-lg md:text-xl leading-[30px] tracking-tight font-body max-w-2xl mx-auto">
            At Tech Vaseegrah, we turn social media into your brand&apos;s growth engine through strategic, creative
            solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Service navigation */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div
              ref={scrollRef}
              className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {SOCIAL_SERVICES.map((service) => (
                <motion.button
                  key={service.id}
                  data-id={service.id}
                  onClick={() => setSelectedId(service.id)}
                  className={`relative flex-shrink-0 px-5 py-4 rounded-xl transition-all duration-300 text-left w-full ${
                    selectedId === service.id
                      ? "text-green-700 shadow-lg"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedId === service.id ? "bg-white/20" : "bg-slate-100"
                      }`}
                    >
                      {service.icon} {/* ✅ Correct way to render an icon */}
                    </div>
                    <span className="font-medium">{service.title}</span>
                    {selectedId === service.id && <ArrowRight className="w-4 h-4 ml-auto" />}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service details */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >

                <div className="grid md:grid-cols-2 gap-8 md:gap-0">
                  <div className="p-6 md:p-8 lg:p-10">
                    <h3 className="text-2xl md:text-3xl mb-4 font-bold tracking-tighter text-green-700 bg-clip-text">
                      {selectedService.title}
                    </h3>

                    <p className=" leading-[30px] tracking-tight font-body text-lg mb-6">{selectedService.description}</p>

                    {/* <div className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium text-sm mb-6">
                      <span className="font-semibold">Perfect for:</span> {selectedService.idealFor}
                    </div> */}

                    {/* <button className="inline-flex items-center px-5 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors gap-2 group">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button> */}
                  </div>

                  <div className="bg-slate-50 p-6 md:p-8 lg:p-10 flex flex-col h-full">
                    <div className="relative aspect-square rounded-xl bg-white overflow-hidden shadow-sm mb-6 flex-grow">
                      <Image
                        src={selectedService.image || "/placeholder.svg"}
                        alt=""
                        fill
                        className="object-contain p-8"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    <div className="space-y-4">
                      <h4 className=" font-bold tracking-tighter text-green-700 bg-clip-text text-lg">
                                      Key Benefits
                      </h4>
                      <div className="space-y-3">
                        {selectedService.benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="font-body">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}