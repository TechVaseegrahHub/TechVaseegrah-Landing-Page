"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

// Service data moved outside component to prevent recreating on rerenders
const services = [
  {
    id: "web-development",
    title: "Web Development",
    image: "/b1.jpeg",
    intro:
      "Your website is often the first interaction potential customers have with your business, so it's vital that it leaves a great first impression.",
    points: [
      "Custom Website Design and Development: Tailored designs that reflect your brand's personality and goals.",
      "E-commerce Solutions: User-friendly platforms that make shopping simple and secure.",
      "Content Management Systems (CMS): Easy-to-manage systems that let you keep your content fresh.",
      "Mobile-Friendly Responsive Websites: Websites that look great and function perfectly on any device.",
      "Website Maintenance and Support: Ongoing services to keep your website running smoothly and securely.",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    image: "/b2.jpeg",
    intro: "Social media is one of the most powerful ways to engage with your audience and build brand loyalty.",
    points: [
      "Increase Brand Awareness and Engagement: Creating compelling content that attracts and retains followers.",
      "Generate Quality Leads and Conversions: Turning social interactions into real business results.",
      "Build a Loyal Community: Fostering relationships with your audience.",
      "Manage Paid Ads and Campaigns: Maximizing the effectiveness of your paid social campaigns.",
    ],
  },
  {
    id: "branding-consultation",
    title: "Branding & Consultation",
    image: "/b3.jpeg",
    intro: "Your brand is your identity. A memorable, cohesive brand is what helps you stand out in a crowded market.",
    points: [
      "Brand Identity Design: From logos to color schemes, we create a look that represents your business.",
      "Brand Strategy Development: Building a strategy that aligns with your business goals and values.",
      "Market Research & Audience Targeting: Understanding your audience to create tailored messaging.",
      "Rebranding & Evolution: Helping you refresh your brand as your business grows.",
      "Digital Marketing Consultation: Offering expert advice to set you up for long-term success.",
    ],
  },
  {
    id: "seo-services",
    title: "SEO Services",
    image: "/blog-1.jpeg",
    intro:
      "In the digital world, visibility is everything. SEO is key to making sure your website ranks well on search engines.",
    points: [
      "On-Page Optimization: Improving your website's content and structure for better rankings.",
      "Off-Page SEO Strategies: Building quality backlinks and improving your site's authority.",
      "Technical SEO: Optimizing your website's speed and mobile compatibility.",
      "Local SEO: Helping local businesses rank higher in their specific geographic areas.",
      "Analytics and Reporting: Tracking performance and providing insights.",
    ],
  },
]

// Animation variants for consistent animations
const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
}

// Reusable service tab component
const ServiceTab = ({
  service,
  isActive,
  onClick,
}: {
  service: { title: string }
  isActive: boolean
  onClick: () => void
}) => (
  <button
    className={`px-4 py-2 rounded-md transition-all duration-300 text-sm ${
      isActive ? `bg-green-700 text-white shadow-sm` : `bg-gray-100 text-gray-700 hover:bg-gray-200`
    } font-medium`}
    onClick={onClick}
  >
    {service.title}
  </button>
)

export default function BlogPage() {
  const [activeService, setActiveService] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Set isInView to true after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsInView(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero section with minimal design */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold  mb-4 text-left text-green-700">Blog </h1>
          <p className="text-lg text-gray-600 text-left">
            Empowering your business with cutting-edge digital solutions
          </p>
          <p className="text-lg text-gray-600 text-left mt-6">
          In today&apos;s fast-paced, tech-driven world, staying ahead of the competition is essential to business success.
          The right digital solutions can elevate your brand and create lasting connections with your customers.
          </p>

          <p className="text-lg text-gray-600 text-left mt-6">
          At <span className="font-semibold text-gray-900">Tech Vaseegrah</span>, we specialize in providing
          innovative digital solutions tailored to your business needs.
          </p>
        </div>
  

        {/* Services tabs navigation with minimal design */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map((service, index) => (
              <ServiceTab
                key={service.id}
                service={service}
                isActive={activeService === index}
                onClick={() => setActiveService(index)}
              />
            ))}
          </div>
        </div>

        {/* Services content with clean layout */}
        {services.map((service, index) => {
          if (activeService !== index) return null

          return (
            <div key={service.id} id={service.id} className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Image section with clean design */}
              <div className={`${index % 2 === 1 ? "md:order-last" : ""}`}>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 ">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content section with minimal design */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-green-700 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 text-lg">{service.intro}</p>
                <div className="space-y-3">
                  {service.points.map((point, i) => {
                    const [title, description] = point.split(":")
                    return (
                      <div key={i} className="flex gap-3 items-start">
                        <ChevronRight className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          <strong className="text-black-900 font-medium">{title}:</strong>
                          {description}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}