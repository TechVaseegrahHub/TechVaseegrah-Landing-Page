"use client"
import pyramidImage from "@/assets/contactus.png"
import tubeImage from "@/assets/bulb.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const ContactUs = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading text-center mb-12">
          <div className="tag">
            Let's Talk
          </div>
          <h2 className="section-title mt-5">Contact Us</h2>
          <p className="section-description mt-5">
            We're here to help and answer any questions you may have. Reach out to us more about our services, get
            support, or to apply for positions.
          </p>
        </div>
        <div className="relative">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">What can we help you with?</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                ></textarea>
              </div>
              <div>
                <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={320}
            width={320}
            className="hidden md:block absolute -right-28 -top-28"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={190}
            width={190}
            className="hidden md:block absolute bottom-24 -left-20"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  )
}

