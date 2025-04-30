"use client"

import Image from "next/image"
import { motion, type Variants, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Tag from "@/components/Tag"
import Link from "next/link"
// Fixed import path to use the public directory
import qrCodeImage from "@/assets/wise_qr.jpeg"

// Framer motion variants
const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const heroChildVariant: Variants = {
  start: { y: 20, opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

// Button animation variant
const buttonVariant: Variants = {
  start: { scale: 0.95, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.6,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
}

export const PaymentGate = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-10 sm:py-14 md:py-20 overflow-hidden"
    >
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container max-w-4xl mx-auto px-4 sm:px-6"
      >
        <div className="section-heading relative">
          <motion.div variants={heroChildVariant} className="flex justify-center mb-4">
            <Tag>Secure Payment</Tag>
          </motion.div>

          <motion.h2
            variants={heroChildVariant}
            className="section-title text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          >
            Complete Your Payment
          </motion.h2>

          <motion.div variants={heroChildVariant} className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src={qrCodeImage || "/placeholder.svg"}
                alt="Payment QR Code"
                width={200}
                height={200}
                className="rounded-lg w-[180px] h-[180px] object-cover"
                priority
              />
            </div>

            <p className="text-center text-gray-700 font-medium mb-2">Scan the QR code to pay via Wise</p>
            <p className="text-center text-sm text-gray-500">Or use the direct payment link below</p>
          </motion.div>

          <motion.div variants={heroChildVariant} className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-semibold text-lg mb-2">Payment Instructions</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Please complete your payment using one of the options above. Once your payment is processed, you'll
              receive access to download our policy document.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <motion.div
            variants={buttonVariant}
            initial="start"
            animate={isInView ? "end" : "start"}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="https://wise.com/pay/r/N6MDZf5RZ4Rk938"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2e4369] text-white px-5 py-3 rounded-lg font-medium tracking-tight transition-colors duration-200 hover:bg-[#1d2b45] flex items-center justify-center w-full sm:w-auto min-w-[180px]"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16L16 12L12 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Pay with Wise
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariant}
            initial="start"
            animate={isInView ? "end" : "start"}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/contract.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-3 rounded-lg font-medium tracking-tight transition-colors duration-200 hover:bg-gray-800 flex items-center justify-center w-full sm:w-auto min-w-[180px]"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Policy
            </Link>
          </motion.div>
        </div>

        <motion.div variants={heroChildVariant} className="text-center text-sm text-gray-500">
          For payment assistance, please contact our support team
        </motion.div>
      </motion.div>
    </section>
  )
}
