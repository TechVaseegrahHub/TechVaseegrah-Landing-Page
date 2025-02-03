"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

import roboimg from "@/assets/17.png"
import internImage1 from "@/assets/intern6.jpeg"
import internImage2 from "@/assets/intern2.jpeg"
import internImage3 from "@/assets/intern7.jpeg"
import internImage4 from "@/assets/intern4.jpeg"
import internImage5 from "@/assets/intern5.jpeg"

const internPhotos = [internImage1, internImage2, internImage3, internImage4, internImage5]

const listItems = [
  "Mentorship and Training",
  "Real-World Experience",
  "Professional Development",
  "Learning Resources",
  "Flexible Work Environment",
]

export const Internship = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageTranslateY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={sectionRef} className="py-12 md:py-24 overflow-x-clip mt-10 md:mt-20">
      <div className="container">
        <div className="flex flex-col gap-8 md:gap-56">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
            <div className="col-span-1 md:hidden">
              <motion.div
                className="relative inline-flex z-0 w-full justify-center"
                style={{
                  y: imageTranslateY,
                  rotate: imageRotate,
                }}
              >
                <Image src={roboimg || "/placeholder.svg"} alt="Animated 3D image" className="w-3/4 max-w-xs" />
              </motion.div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Develop your skills with <br />
                Tech Vaseegrah!
              </h2>
              <p className="text-lg md:text-xl tracking-tight text-[#010D3E] mt-6 md:mt-8">
                We offer internships to empower students with industrial-level experience and hands-on learning in
                cutting-edge technologies. Gain mentorship from industry experts, work on real-world projects, and
                bridge academic learning with practical skills for a successful career in software and IT.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 md:gap-4">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-6 md:size-8 outline outline-3 md:outline-4 -outline-offset-3 md:-outline-offset-4 rounded-full outline-blue-500/50">
                      <div className="size-1 md:size-1.5 bg-blue-700 rounded-full"></div>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-[#010D3E]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block md:self-start">
              <motion.div
                className="relative inline-flex z-0 md:mt-[-6rem]"
                style={{
                  y: imageTranslateY,
                  rotate: imageRotate,
                }}
              >
                <Image
                  src={roboimg || "/placeholder.svg"}
                  alt="Animated 3D image"
                  className="w-full md:size-96 max-w-none"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <h3 className="section-title mb-5 text-[35px]">Our Interns at Work</h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full max-w-4xl mx-auto px-4 md:px-0"
        >
          {internPhotos.map((photo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-full">
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Intern Photo ${index + 1}`}
                  className="rounded-lg w-full h-auto max-h-[60vh] object-cover shadow-md transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next after:text-blue-600 after:text-2xl"></div>
          <div className="swiper-button-prev after:text-blue-600 after:text-2xl"></div>
        </Swiper>
      </div>
    </section>
  )
}

