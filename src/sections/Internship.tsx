"use client";
import { useRef } from "react";
import { CutCornerButton } from "@/components/CutCornerButton";
import { TextButton } from "@/components/TextButton";
import { motion, useScroll, useTransform } from "framer-motion";
import roboimg from "@/assets/17.png";
import productImage from "@/assets/a-group-photo.jpeg";
import Image from "next/image";
//import robo1img from "@/assets/0004.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

import internImage1 from "@/assets/intern6.jpeg";
import internImage2 from "@/assets/intern2.jpeg";
import internImage3 from "@/assets/intern7.jpeg";
import internImage4 from "@/assets/intern4.jpeg";
import internImage5 from "@/assets/intern5.jpeg";

const internPhotos = [
  internImage1,
  internImage2,
  internImage3,
  internImage4,
  internImage5,
];

const listItems = [
  "Mentorship and Training",
  "Real-World Experience",
  "Professional Development",
  "Learning Resources",
  "Flexible Work Environment",
];

export const Internship = () => {
  const torusKnotRef = useRef(null);
  const firstHemisphereRef = useRef(null);

  const { scrollYProgress: torusKnotScrollYProgress } = useScroll({
    target: torusKnotRef,
    offset: ["start end", "end start"],
  });

  const torusKnotTranslateY = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [100, -100]
  );

  const torusKnotRotate = useTransform(
    torusKnotScrollYProgress,
    [0, 1],
    [30, -30]
  );

  const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
    target: firstHemisphereRef,
    offset: ["start end", "end start"],
  });

  const firstHemisphereTranslateY = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );

  const firstHemisphereRotate = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [-20, -50]
  );

  return (
    <section className="py-24 overflow-x-clip mt-20">
      <div className="container">
        <div className="flex flex-col gap-56">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Develop your skills with <br />Tech Vaseegrah!
              </h2>
              <p className="text-xl tracking-tight text-[#010D3E] mt-8">
                We offer internships to empower students with industrial-level
                experience and hands-on learning in cutting-edge technologies.
                Gain mentorship from industry experts, work on real-world
                projects, and bridge academic learning with practical skills for
                a successful career in software and IT.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-blue-500/50">
                      <div className="size-1.5 bg-blue-700 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold text-[#010D3E]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              {/*   <div className="flex gap-8 mt-12">
                <CutCornerButton>Get Started</CutCornerButton>
                <TextButton>Learn More</TextButton>
              </div> */}
            </div>

            <div>
              <div className="relative inline-flex z-0">
                <motion.img
                  src={roboimg.src}
                  alt="torus knot 3d img"
                  className="size-96 max-w-none"
                  ref={torusKnotRef}
                  style={{
                    translateY: torusKnotTranslateY,
                    rotate: torusKnotRotate,
                  }}
                />
                {/*<motion.img
                  src={robo1img.src}
                  alt="hemisphere 3d img"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  ref={firstHemisphereRef}
                  style={{
                    translateY: firstHemisphereTranslateY,
                    rotate: firstHemisphereRotate,
                  }}
                />*/}
              </div>
            </div>
          </div>

          {/* <div>
            <h2 className="font-heading font-black text-4xl">
              Blockforge leads the way.
            </h2>
            <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6">
              <p>
                Blockforge is dedicated to supporting the evolution of Web3
                applications by delivering the necessary infrastructure and
                security for Web3.
              </p>
              <p>
                Blockforge champions Web3 for everyone. As a decentralized
                blockchain scaling platform, Blockforge enables developers to
                create scalable, user-friendly dApps with low transaction costs,
                all while ensuring robust security.
              </p>
            </div>
            <div className="flex gap-8 mt-12">
              <CutCornerButton>Get Started</CutCornerButton>
              <TextButton>Learn More</TextButton>
            </div>
          </div> */}
        </div>
      </div>

      {/* Swiper Slider for Intern Photos */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 2000, // Delay between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
        }}
        modules={[Pagination, Navigation, Autoplay]} // Add Autoplay module
        className="flex justify-center mt-20  w-full max-w-5xl mx-auto "
      >
        {internPhotos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full">
              <img
                src={photo.src}
                alt={`Intern Photo ${index + 1}`}
                className="rounded-lg max-w-full max-h-full object-contain"
                width={1000}
                height={600}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};