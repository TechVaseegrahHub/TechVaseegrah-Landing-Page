"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const SmartBiz = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} className="py-1 relative mb-10">
      <div className="container">
        <div className="flex items-center justify-center">
          <p className="text-4xl font-extrabold text-black/40 text-center">
            Transforming small businesses into{" "}
            <span className="relative">
              <span className="group inline-block">
                <span className="bg-gradient-to-r from-black to-[#001E80] bg-clip-text text-transparent">
                  Smart biz
                </span>
                <video
                  src="/assets/incredible.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                />
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

