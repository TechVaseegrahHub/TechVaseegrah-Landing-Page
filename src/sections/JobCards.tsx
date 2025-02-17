"use client"
import Tag from "@/components/Tag"
import { twMerge } from "tailwind-merge"
import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, animate } from "framer-motion"

const cardData = [
  {
    image: "/assets/images/Code.png",
    title: "Web Development",
    description: "Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless.",
    color: "fuchsia",
  },
  {
    image: "/assets/images/Laptop.png",
    title: "Web App Development",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
    color: "lime",
  },
  {
    image: "/assets/images/0014.png",
    title: "UI/UX Designer",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    image: "/assets/images/Big-Data.png",
    title: "Data Science / Machine Learning",
    description:
      "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
]

export const JobCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentCardWidth, setCurrentCardWidth] = useState(320)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setCurrentCardWidth(320) // Keep the card size fixed
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleDragEnd = (event: any, info: any) => {
    const threshold = currentCardWidth / 3
    let newIndex = selectedCardIndex

    if (info.offset.x < -threshold && selectedCardIndex < cardData.length - 1) {
      newIndex = selectedCardIndex + 1
    } else if (info.offset.x > threshold && selectedCardIndex > 0) {
      newIndex = selectedCardIndex - 1
    }

    setSelectedCardIndex(newIndex)
    animate(containerRef.current, { x: -newIndex * currentCardWidth }, { type: "spring", stiffness: 300, damping: 30 })
  }

  return (
    <section className="py-20 overflow-hidden">
      <motion.div className="container">
        <div className="section-heading md:text-5xl lg:text-6xl text-center">
          <motion.div className="flex justify-center">
            <Tag>Internships</Tag>
          </motion.div>

          <motion.h2 className="section-title mt-5">
            Start Your Career with Tech Vaseegrah!
          </motion.h2>

          <motion.p className="section-description mt-5">
            Interns gain practical skills by working on real-world projects alongside experienced professionals,
            enhancing their knowledge and preparing them for future careers.
          </motion.p>

          <motion.div className="mt-36 lg:mt-48 flex justify-center">
            <motion.div
              ref={containerRef}
              className="flex flex-nowrap gap-4 md:gap-8 px-4 md:px-0"
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: -(currentCardWidth * (cardData.length - 1)), right: 0 }}
              dragElastic={0.1}
              whileTap={{ cursor: isMobile ? "grabbing" : "auto" }}
              onDragEnd={handleDragEnd}
              style={{ x: useMotionValue(0) }}
            >
              {cardData.map(({ image, title, description, color }, cardIndex) => (
                <motion.div
                  key={title}
                  className="relative z-0 p-8 md:p-10 group rounded-2xl"
                  style={{
                    width: currentCardWidth,
                    flexShrink: 0,
                    margin: isMobile ? "0 auto" : undefined, // Center align in mobile
                  }}
                >
                  {/* BACKLIGHT EFFECT - Perfect with Border Radius */}
                  <div
                    className={twMerge(
                      "absolute inset-0 rounded-2xl bg-fuchsia-500 -z-10 blur-2xl opacity-0 group-hover:opacity-50 transition duration-300",
                      color === "lime" && "bg-lime-500",
                      color === "cyan" && "bg-cyan-500",
                      color === "violet" && "bg-violet-500",
                    )}
                  ></div>

                  <div
                    className={twMerge(
                      "absolute inset-0 rounded-2xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 -z-10",
                      color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
                      color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
                      color === "violet" && "bg-violet-500 group-hover:bg-violet-400",
                    )}
                  ></div>

                  {/* CARD CONTAINER - Border Radius Fixed */}
                  <div className="absolute inset-0 bg-white -z-10 rounded-2xl border border-white/30 shadow-lg"></div>

                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <img
                        src={image || "/placeholder.svg"}
                        alt="Pill img"
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="section-title text-3xl mt-12">{title}</h3>
                  <p className="section-description mt-5">{description}</p>
                  <div className="flex justify-center mt-1">
                    <button className="btn-primary btn text-[15px] mt-5">Apply</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
