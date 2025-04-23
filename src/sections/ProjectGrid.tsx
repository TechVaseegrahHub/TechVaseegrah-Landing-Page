"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

// Utility to convert slug to Title Case
const formatName = (slug: string) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
}

// Project type definition
type Project = {
  id: number
  thumbnail: string
  slug: string
  category: string
  description?: string
}

export const ProjectGrid = () => {
  const projects: Project[] = [
    {
      id: 1,
      thumbnail: "/assets/images/GoWhats.png",
      slug: "goWhats",
      category: "Sass",
      description: "A messaging platform designed for seamless communication",
    },
    {
      id: 2,
      thumbnail: "/assets/images/wordpressimg.png",
      slug: "wordpress",
      category: "Web Development",
      description: "Custom WordPress solutions for business needs",
    },
    {
      id: 3,
      thumbnail: "/assets/images/Ecommerce2.jpg",
      slug: "ecommerce",
      category: "E-Commerce",
      description: "End-to-end shopping experience with modern design",
    },
    {
      id: 4,
      thumbnail: "/assets/images/F3.jpg",
      slug: "f3-engine",
      category: "Sass",
      description: "High-performance engine for complex applications",
    },
    {
      id: 5,
      thumbnail: "/assets/images/Billzzyimg2.jpg",
      slug: "billzzy",
      category: "Finance",
      description: "Simplified billing and payment processing solution",
    },
    {
      id: 6,
      thumbnail: "/assets/images/Instaxbot2.jpg",
      slug: "instaXBot ",
      category: "AI",
      description: "Intelligent conversation assistant for customer support",
    },
  ]

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Item animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 sm:mb-6">Our Case Studies</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Explore our collection of successful projects and discover how we&apos;ve helped businesses transform their
            digital presence.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
              variants={itemVariants}
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 z-10" />
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={`${formatName(project.slug)} project thumbnail`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={project.id <= 3}
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-white/90 text-black rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6 relative h-[160px] sm:h-[180px] flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold mb-2 tracking-tight">{formatName(project.slug)}</h3>

                {project.description && (
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                )}

                <Link
                  href={`/casestudies/${project.slug}`}
                  className="inline-flex items-center font-medium text-black hover:text-gray-700 transition-colors mt-auto"
                >
                  <span className="mr-1">View case study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-black rounded-xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}