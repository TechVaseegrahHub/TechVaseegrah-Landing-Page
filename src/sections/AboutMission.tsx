"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export default function AboutMission() {
  // Refs for the counter elements with proper typing
  const websiteRef = useRef<HTMLSpanElement>(null)
  const studentsRef = useRef<HTMLSpanElement>(null)
  const clientsRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Enhanced counting animation with easing
    const startCounting = (ref: React.RefObject<HTMLSpanElement>, target: number, duration = 2000) => {
      const node = ref.current
      if (!node) return

      let startTime: number | null = null
      let animationFrameId: number

      const easeOutQuad = (t: number): number => t * (2 - t)

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Apply easing function for smoother animation
        const easedProgress = easeOutQuad(progress)
        const currentValue = Math.floor(easedProgress * target)

        node.textContent = currentValue + "+"

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCounter)
        } else {
          node.textContent = target + "+"
        }
      }

      // Start the animation when the element is in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animationFrameId = requestAnimationFrame(updateCounter)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: "50px" }, // More sensitive threshold and margin
      )

      if (node) {
        observer.observe(node)
      }

      return () => {
        if (node) {
          observer.unobserve(node)
          cancelAnimationFrame(animationFrameId)
        }
      }
    }

    // Start counting animations with slightly staggered timing
    startCounting(websiteRef, 80, 2000)
    setTimeout(() => startCounting(studentsRef, 50, 1800), 200)
    setTimeout(() => startCounting(clientsRef, 100, 2200), 400)

    return () => {
      // Cleanup is handled within each startCounting function
    }
  }, [])

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column - Mission statement */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tighter 
                    text-green-600 mb-4"
              >
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl md:text-[22px] leading-relaxed tracking-tight section-description text-left">
                At Tech Vaseegrah, our mission is to transform small businesses into smart businesses by providing
                innovative technology solutions, streamlining operations, and driving sustainable growth. We are
                committed to empowering entrepreneurs with tools and insights to thrive in a digital world.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-tighter 
                            text-green-600  mb-4"
              >
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl md:text-[22px] leading-relaxed tracking-tight section-description text-left">
                Our vision at Tech Vaseegrah is to be a leading catalyst in the digital transformation of small
                businesses, fostering innovation and sustainability. We aim to create a future where every business,
                regardless of size, thrives through smart technology and seamless integration.
              </p>
            </div>
          </div>

          {/* Right column - Statistics */}
          <div className="flex flex-col justify-center items-center lg:items-end">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:grid-cols-1">
              <div className="text-center lg:text-right">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter text-green-600 text-center">
                  <span ref={websiteRef}>0+</span>
                </h3>
                <p className="text-lg sm:text-xl leading-relaxed tracking-tight  mt-2 text-center">
                  Websites Developed
                </p>
              </div>

              <div className="text-center lg:text-right">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter text-green-600 text-center">
                  <span ref={studentsRef}>0+</span>
                </h3>
                <p className="text-lg sm:text-xl leading-relaxed tracking-tight  mt-2 text-center">
                  Trained Students
                </p>
              </div>

              <div className="text-center lg:text-right">
                <h3 className="text-4xl sm:text-5xl font-bold tracking-tighter text-green-600 text-center">
                  <span ref={clientsRef}>0+</span>
                </h3>
                <p className="text-lg sm:text-xl leading-relaxed tracking-tight  mt-2 text-center">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
