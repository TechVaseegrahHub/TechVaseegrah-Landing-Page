"use client"
import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface ServiceFeature {
  icon: string
  text: string
  description: string
}

interface BrandingService {
  id: number
  title: string
  description: string
  image: string
  features: ServiceFeature[]
}

export default function BrandingScroll() {
  const [activeTab, setActiveTab] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768)
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Branding Services Data
  const brandingServices: BrandingService[] = [
    {
      id: 1,
      title: "Brand Identity",
      description:
        "We craft distinctive brand identities that resonate with your audience through strategic design and positioning.",
      image: "/assets/images/star-badge.png",
      features: [
        { icon: "palette", text: "Logo & visual design system", description: "Create a distinctive visual identity" },
        { icon: "message-square", text: "Brand voice development", description: "Develop consistent messaging" },
        { icon: "droplet", text: "Strategic color psychology", description: "Evoke the right emotions" },
        { icon: "book", text: "Comprehensive brand guidelines", description: "Ensure brand consistency" },
      ],
    },
    {
      id: 2,
      title: "Digital Presence",
      description: "Create compelling narratives and ensure consistent brand presence across all digital platforms.",
      image: "/assets/images/growth.png",
      features: [
        { icon: "globe", text: "Omnichannel branding", description: "Maintain consistency across platforms" },
        { icon: "layers", text: "Content strategy framework", description: "Develop engaging content systems" },
        { icon: "users", text: "Personal branding solutions", description: "Build authentic personal brands" },
        { icon: "message-circle", text: "Engagement growth systems", description: "Increase audience interaction" },
      ],
    },
    {
      id: 3,
      title: "Brand Evolution",
      description:
        "Revitalize your brand while preserving core equity with strategic redesign and transition planning.",
      image: "/assets/images/data_analytics.png",
      features: [
        { icon: "search", text: "Competitive brand audits", description: "Analyze market positioning" },
        { icon: "refresh-cw", text: "Visual identity redesign", description: "Refresh your visual language" },
        { icon: "trending-up", text: "Brand migration strategy", description: "Transition with minimal disruption" },
        { icon: "bell", text: "Stakeholder alignment", description: "Ensure internal brand adoption" },
      ],
    },

  ]

  // Handle tab change
  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId)
  }

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-4"
          >
            <span className="tag mb-6">Brand Development</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center text-3xl sm:text-4xl md:text-5xl 
               font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] 
               text-transparent bg-clip-text mb-6"
          >
            Professional Branding Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center text-xl leading-[30px] tracking-tight text-[#010D3E] max-w-2xl mx-auto"
          >
            We create cohesive brand identities that communicate your values and connect with your target audience
            through strategic design and positioning.
          </motion.p>
        </div>

        {/* Service Selection Tabs */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-1 sm:gap-0 border-b border-gray-200 w-full max-w-2xl">
              {brandingServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleTabChange(service.id)}
                  className={`relative px-5 py-3 text-base transition-all duration-200 ${
                    activeTab === service.id ? "text-[#010D3E] font-medium" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {service.title}
                  {activeTab === service.id && (
                    <motion.div
                      layoutId="activeTabLine"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#010D3E]"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Content Area */}
        <div ref={servicesRef} className="relative">
          <AnimatePresence mode="wait">
            {brandingServices
              .filter((service) => service.id === activeTab)
              .map((service) => (
                <motion.div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Image Section */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-gray-50 to-blue-50 p-12 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                      >
                        <Image
                          src={service.image || "/placeholder.svg?height=280&width=280"}
                          alt={service.title}
                          width={280}
                          height={280}
                          className="object-contain"
                        />
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center">
                      <div className="max-w-2xl">
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-3xl lg:text-4xl mb-6 font-bold tracking-tight 
                                    bg-gradient-to-b from-black to-[#001E80] 
                                    text-transparent bg-clip-text inline-block relative"
                        >
                          {service.title}
                          {/* <span className="absolute -bottom-3 left-0 h-1 w-24 bg-gradient-to-r from-[#001E80] to-blue-400"></span> */}
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="text-[#010D3E]/80 mb-12 text-xl leading-relaxed"
                        >
                          {service.description}
                        </motion.p>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                              className="flex items-start gap-4 group"
                            >
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-[#001E80] group-hover:shadow-md transition-all duration-300 border border-blue-100">
                                  <Icon name={feature.icon} />
                                </div>
                              </div>
                              <div>
                                <p
                                  className="font-semibold text-lg tracking-tight 
                                              bg-gradient-to-b from-black to-[#001E80] 
                                              text-transparent bg-clip-text mb-2"
                                >
                                  {feature.text}
                                </p>
                                <p className="text-[#010D3E]/70">{feature.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

// Icon component
const Icon = ({ name }: { name: string }) => {
  // Basic icon mapping
  switch (name) {
    case "palette":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-palette"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="8" r="1"></circle>
          <circle cx="8" cy="12" r="1"></circle>
          <circle cx="16" cy="12" r="1"></circle>
          <circle cx="12" cy="16" r="1"></circle>
        </svg>
      )
    case "message-square":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-square"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    case "droplet":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-droplet"
        >
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      )
    case "book":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-book"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      )
    case "globe":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-globe"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    case "layers":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-layers"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    case "users":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    case "message-circle":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    case "refresh-cw":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-refresh-cw"
        >
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </svg>
      )
    case "trending-up":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trending-up"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    case "bell":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    case "star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-star"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    case "grid":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-grid"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    case "file-text":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-file-text"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    case "package":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-package"
        >
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-help-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      )
  }
}
