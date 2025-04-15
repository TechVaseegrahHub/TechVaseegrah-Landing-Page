"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Utility to convert slug to Title Case
const formatName = (slug: string) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
}

export const ProjectGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    { id: 1, thumbnail: "/gologo.png", height: 250, width: 140, slug: "Gowhats" },
    { id: 2, thumbnail: "/blog-wp.png", height: 250, width: 380, slug: "Wordpress" },
    { id: 3, thumbnail: "/e-commerce.jpg", height: 240, width: 380, slug: "Ecommerce" },
    { id: 4, thumbnail: "/images/f3logo.png", height: 240, width: 200, slug: "f3-engine" },
    { id: 5, thumbnail: "/images/image.png", height: 250, width: 150, slug: "Billzzy" },
    { id: 6, thumbnail: "/images/intraxbot.png", height: 250, width: 140, slug: "Chatbot" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        
        <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-4">Our Case Studies</h2>
        
        <p className="text-left mb-12 leading-[30px] tracking-tight text-[#010D3E] text-xl">
          Explore our portfolio of successful projects
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">        
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-56 flex items-center justify-center bg-gray-50 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/20 z-10"></div>
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={`Project ${formatName(project.slug)} thumbnail`}
                  width={project.width}
                  height={project.height}
                  className={`
                    object-contain z-20 transition-all duration-500 
                    ${hoveredId === project.id ? "scale-110" : "scale-100"}
                  `}
                />
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gray-100/50 rounded-br-full -translate-x-12 -translate-y-12 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-100/50 rounded-tl-full translate-x-12 translate-y-12 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{formatName(project.slug)}</h3>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/casestudies/${project.slug}`}
                    className={`
                      relative px-5 py-2 bg-black text-white rounded-lg 
                      transition-all duration-300  overflow-hidden
                    `}
                  >
                    <span className="relative z-10">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}