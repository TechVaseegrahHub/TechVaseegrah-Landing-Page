import { Database, Globe, Layout, Layers, Palette, RefreshCw } from "lucide-react"
// import Image from "next/image"

export default function TechServicesSection() {
  return (
    <section className="w-full py-20">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="tag">
            OUR EXPERTISE
          </div>
          <h2 className="section-title">
            Innovative digital solutions for <span className="text-green-700">modern businesses</span>.
          </h2>
          {/* <p className="section-description ">
            Innovative digital solutions for modern businesses
          </p> */}
        </div>

        {/* Scrollable Services */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-6 snap-x snap-mandatory">
            
            {/* Web Applications */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white 
              border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 
              min-w-[320px] md:min-w-[380px] snap-center">
              {/* <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-gray-100 rounded-full opacity-70"></div> */}
              <div className="p-8 relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl  mb-6">
                  <Globe className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl mb-3 font-bold tracking-tighter bg-clip-text">Web Applications</h3>
                <p className="font-body mb-6">
                  Custom, scalable solutions engineered for complex business requirements and exceptional user
                  experiences.
                </p>
                
              </div>
            </div>

            {/* Website Revamp & Redesign */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white 
              border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 
              min-w-[320px] md:min-w-[380px] snap-center">
              {/* <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-gray-100 rounded-full opacity-70"></div> */}
              <div className="p-8 relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl  mb-6">
                  <RefreshCw className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl  mb-3 font-bold tracking-tighter  bg-clip-text">
                  Website Revamp
                </h3>
                <p className="font-body mb-6">
                  Transform outdated websites into modern, high-performing digital experiences that captivate visitors.
                </p>
                {/* <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/web-design.png"
                      alt="Website redesign"
                      width={180}
                      height={120}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <p className="text-xs font-medium text-center mt-1 text-gray-500">BEFORE</p>
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/web-stacks.png"
                      alt="Web Stacks"
                      width={180}
                      height={120}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <p className="text-xs font-medium text-center mt-1 text-gray-500">AFTER</p>
                  </div>
                </div> */}
                
              </div>
            </div>

            {/* E-commerce Website */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white 
              border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 
              min-w-[320px] md:min-w-[380px] snap-center">
              {/* <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-gray-100 rounded-full opacity-70"></div> */}
              <div className="p-8 relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl  mb-6">
                  <Layers className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl mb-3 font-bold tracking-tighter bg-clip-text">
                  E-commerce Website
                </h3>
                <p className="font-body mb-6">
                  Custom online stores designed to maximize conversions and deliver seamless shopping experiences.
                </p>
                {/* <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/ecom-website.png"
                      alt="Ecommerce website"
                      width={180}
                      height={120}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <p className="text-xs font-medium text-center mt-1 text-gray-500">BEFORE</p>
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src="/ecom-mobile.png"
                      alt="Ecommerce mobile"
                      width={180}
                      height={120}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <p className="text-xs font-medium text-center mt-1 text-gray-500">AFTER</p>
                  </div>
                </div> */}
               
              </div>
            </div>

            {/* Front-End Development */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white 
              border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 
              min-w-[320px] md:min-w-[380px] snap-center">
              {/* <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-gray-100 rounded-full opacity-70"></div> */}
              <div className="p-8 relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6">
                  <Layout className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold tracking-tighter bg-clip-text mb-3">
                  Front-End Development
                </h3>
                <p className="font-body mb-6">
                  Pixel-perfect interfaces with flawless user experiences and responsive designs.
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm ">
                  {/* <div className="flex items-center"> */}
                    {/* <div className="w-2 h-2 rounded-full bg-gray-300 mr-2 "></div>
                    <span className="font-body">React & Next.js</span>
                  </div> */}
                  {/* <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                    <span className="font-body">Vue & Nuxt</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                    <span className="font-body">Responsive design</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                    <span className="font-body">Micro-interactions</span>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Back-End Development */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white 
              border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 
              min-w-[320px] md:min-w-[380px] snap-center">
              {/* <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-gray-100 rounded-full opacity-70"></div> */}
              <div className="p-8 relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6">
                  <Database className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl mb-3 font-bold tracking-tighter bg-clip-text">
                  Back-End Development
                </h3>
                <p className="font-body mb-6">
                  Robust server architecture and API development for scalable, high-performance applications.
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm ">
                  {/* <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                    <span className="font-body">Node.js & Express</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                    <span className="font-body">Python & Django</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                    <span className="font-body">Database design</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                    <span className="font-body">API development</span>
                  </div> */}
                </div>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white 
              border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 
              min-w-[320px] md:min-w-[380px] snap-center">
              {/* <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-gray-100 rounded-full opacity-70"></div> */}
              <div className="p-8 relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-6">
                  <Palette className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-2xl mb-3 font-bold tracking-tighter bg-clip-text">
                  UI/UX Design
                </h3>
                <p className="font-body mb-6">
                  User-centered design that creates intuitive and engaging digital experiences.
                </p>
                {/* <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="overflow-hidden rounded-lg bg-gray-100 aspect-square">
                    <Image
                      src="/ui-ux-1.jpeg"
                      alt="UI UX Tools"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg bg-gray-100 aspect-square">
                    <Image
                      src="/ui-ux-2.jpg"
                      alt="UI UX Tools"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg bg-gray-100 aspect-square">
                    <Image
                      src="/ui-ux-3.jpg"
                      alt="UI UX Tools"
                      width={80}
                      height={80}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </div> */}
                {/* <ul className="space-y-3 text-sm font-body">
                  <li className="flex items-start">
                    <span className="mr-2 h-5 w-5 text-gray-400">•</span>
                    <span>User-Centric Approach – Designs focused on user needs and behavior.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 h-5 w-5 text-gray-400">•</span>
                    <span>Intuitive Interfaces – Simple, clear, and easy-to-navigate layouts.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 h-5 w-5 text-gray-400">•</span>
                    <span>Engaging Experiences – Visually appealing designs that boost interaction and retention.</span>
                  </li>
                </ul> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
