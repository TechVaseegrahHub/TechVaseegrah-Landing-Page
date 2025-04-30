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

          {/* <motion.div
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
          </motion.div> */}
        </div>

        {/* <motion.div variants={heroChildVariant} className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-semibold text-lg mb-2">Payment Instructions</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Please complete your payment using one of the options above. Once your payment is processed, you'll
              receive access to download our policy document.
            </p>
          </motion.div> */}
        <motion.div variants={heroChildVariant} className="text-center text-sm text-gray-500">
          For payment assistance, please contact our support team
        </motion.div>
        <motion.div variants={heroChildVariant} className="flex justify-center mt-4">
  <Link
    href="https://wa.me/9717219353"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-whatsapp h-4 w-4 sm:h-5 sm:w-5 text-green-600">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
    <span className="ml-2">WhatsApp Support</span>
  </Link>
</motion.div>

      </motion.div>
    </section>
  )
}
