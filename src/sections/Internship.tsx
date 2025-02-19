"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import roboimg from "@/assets/17.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import internImage1 from "@/assets/intern6.jpeg";
import internImage2 from "@/assets/intern2.jpeg";
import internImage3 from "@/assets/intern7.jpeg";
import internImage4 from "@/assets/intern4.jpeg";
import internImage5 from "@/assets/intern5.jpeg";

const internPhotos = [internImage1, internImage2, internImage3, internImage4, internImage5];

const listItems = [
  "Mentorship and Training",
  "Real-World Experience",
  "Professional Development",
  "Learning Resources",
  "Flexible Work Environment",
];


export const Internship = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  // ✅ Scroll-based Animations for FAST, FLUID Rotation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 🚀 **Increased Rotation Speed & Range**
  const imageRotate = useTransform(scrollYProgress, [0, 1], ["-40deg", "40deg"]);
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]); // Increased depth
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Zoom effect

  // ✅ Left to Right Animation (Text & Image)
  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeInOut" },
    }),
  };

    // ✅ Fade In Up Animation (for "Our Interns at Work" & Swiper)
    const fadeInUpVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.8, ease: "easeInOut" },
      }),
    };
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={sectionRef} className="py-12 md:py-24 overflow-x-clip mt-2 md:mt-10">
      <motion.div className="container" initial="hidden" animate={controls} key="internship-section">
        <div className="flex flex-col gap-8 md:gap-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
            
            {/* ✅ Faster Rotating Image (Mobile View) */}
            <motion.div
              custom={0}
              variants={slideInLeftVariants}
              initial="hidden"
              animate={controls}
              className="col-span-1 md:hidden flex justify-center"
            >
              <motion.div
                className="relative inline-flex z-0 md:mt-[-6rem] w-full justify-center"
                style={{
                  y: imageTranslateY,
                  rotate: imageRotate,
                  scale: imageScale,
                }}
              >
                <Image src={roboimg} alt="Animated 3D image" className="w-3/4 max-w-xs" />
              </motion.div>
            </motion.div>

            {/* ✅ Text Content */}
            <motion.div className="col-span-1 md:col-span-2">
              <motion.h2
                custom={1}
                variants={slideInLeftVariants}
                initial="hidden"
                animate={controls}
                className="font-heading font-black text-3xl sm:text-4xl md:text-5xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text"
              >
                Develop your skills with <br />
                Tech Vaseegrah!
              </motion.h2>

              <motion.p
                custom={2}
                variants={slideInLeftVariants}
                initial="hidden"
                animate={controls}
                className="text-lg md:text-xl tracking-tight text-[#010D3E] mt-6 md:mt-8"
              >
                We offer internships to empower students with industrial-level experience and hands-on learning in
                cutting-edge technologies. Gain mentorship from industry experts, work on real-world projects, and
                bridge academic learning with practical skills for a successful career in software and IT.
              </motion.p>
              <motion.ul className="flex flex-col gap-8 mt-10">
                {listItems.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index + 3}
                    variants={slideInLeftVariants}
                    initial="hidden"
                    animate={controls}
                    className="flex items-center gap-3 md:gap-4"
                  >
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-6 md:size-8 outline outline-3 md:outline-4 -outline-offset-3 md:-outline-offset-4 rounded-full outline-blue-500/50">
                      <div className="size-1 md:size-1.5 bg-blue-700 rounded-full"></div>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-[#010D3E]">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* ✅ Faster Rotating Image (Desktop View) */}
            <motion.div
              custom={4}
              variants={slideInLeftVariants}
              initial="hidden"
              animate={controls}
              className="hidden md:block md:self-start"
            >
              <motion.div
                className="relative inline-flex z-0 md:mt-[-6rem]"
                style={{
                  y: imageTranslateY,
                  rotate: imageRotate,
                  scale: imageScale,
                }}
              >
                <Image src={roboimg} alt="Animated 3D image" className="w-full md:size-96 max-w-none" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* ✅ Swiper Section */}
      <motion.div
        className="mt-16 md:mt-24 text-center"
        variants={fadeInUpVariants}
        initial="hidden"
        animate={controls}
        custom={5}
      >
        <h3 className="section-title mb-5 text-[35px]">Our Interns</h3>
      </motion.div>

      <motion.div className="mt-8" variants={fadeInUpVariants} initial="hidden" animate={controls} custom={6}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          className="w-full max-w-4xl mx-auto px-4 md:px-0"
        >
          {internPhotos.map((photo, index) => (
            <SwiperSlide key={index}>
              <motion.div className="flex justify-center items-center h-full">
                <Image
                  src={photo || "/placeholder.svg"}
                  alt={`Intern Photo ${index + 1}`}
                  className="rounded-lg w-full h-auto max-h-[60vh] object-cover shadow-md transition-transform duration-300 hover:scale-[1.02]"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* ✅ Pagination Dots Below the Swiper */}
      <div className="custom-pagination flex justify-center mt-6">
        <div className="pagination-dots flex space-x-2">
          {internPhotos.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300 hover:bg-gray-500 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background-color: #e0e0e0 !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #001E80 !important;
          transform: scale(1.5) !important;
        }
      `}</style>
    </section>
  );
};
