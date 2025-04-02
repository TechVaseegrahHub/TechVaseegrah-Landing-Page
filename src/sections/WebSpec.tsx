import type React from "react"
import { Cloud, Lock, RefreshCw, Shield } from "lucide-react"

export default function WebSpec() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="tag mb-6">Deploy faster</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] 
         text-transparent bg-clip-text mb-4 ">
          Achieve your goals
            <br className="hidden sm:block" />
            with web development solutions
          </h1>
          <p className="section-description max-w-2xl mx-auto text-sm sm:text-base">
          Achieve your goals swiftly with expert web development solutions. Leverage advanced tools and technologies to minimize deployment time, optimize performance, and bring your ideas to life with unparalleled efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <FeatureCard
            icon={<Cloud className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />}
            title="eCommerce Development"
            description="Transform your business with seamless eCommerce solutions. From user-friendly interfaces to secure payment gateways, our tailored development services help you grow your online store and enhance customer engagement."
          />

          <FeatureCard
            icon={<Shield className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />}
            title="Web Applications"
            description="Unlock the potential of web applications with scalable and efficient solutions. Whether you're building an internal tool or a public-facing service, our development team ensures your web application is robust, secure, and user-friendly."
          />
      
          <FeatureCard
            icon={<RefreshCw className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />}
            title="Customized Template Design"
            description="Stand out with a unique online presence. Our customized template design services provide you with visually stunning, responsive, and user-centric designs that perfectly align with your brand identity and business needs."
          />

          <FeatureCard
            icon={<Lock className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />}
            title="Support & Maintenance"
            description="Our comprehensive support and maintenance services ensure your website remains up-to-date, secure, and fully optimized. With prompt issue resolution and regular updates, you can focus on your core business while we handle the technical aspects."
          />
      
        </div>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-lg p-6 transition-all duration-300   group">
      <div className="bg-indigo-100 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-[#001E80] mb-4 transition-colors duration-300 group-hover:bg-text-[#001E80] group-hover:text-blue-300">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2  
                    tracking-tighter bg-gradient-to-b from-black to-[#001E80] 
                     text-transparent bg-clip-text">{title}</h3>
      <p className="text-[#010D3E] text-sm sm:text-base">{description}</p>
    </div>
  )
}

