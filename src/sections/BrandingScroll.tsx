"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface SEOService {
  id: number;
  title: string;
  description: string;
  image?: string;
}

export default function BrandingScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax Effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // SEO Services Data
  const services: SEOService[] = [
    {
      id: 1,
      title: "Brand Identity Development",
      description:
        "We work closely with you to craft a unique and consistent brand identity. From logo and visual design to brand name and tagline creation, we ensure every element reflects your vision. We also define brand colors, typography, and style guidelines to keep your presence strong and cohesive across all platforms.",
      image: "/assets/images/target.png",
    },
    {
      id: 2,
      title: "Digital Presence & Storytelling",
      description:
        "With our Digital Presence & Storytelling service, we ensure your brand stays consistent across all digital platforms. From website and social media branding to personal branding for founders and influencers, we shape your online identity. We also help craft a compelling brand story and guide content direction that truly connects with your audience.",
      image: "/assets/images/story.png",
    },
    {
      id: 3,
      title: "Rebranding & Brand Refresh",
      description:
        "We run targeted campaigns across Meta (Facebook & Instagram), LinkedIn, and Google ads, optimized for reach, engagement, and conversions. With smart targeting, A/B testing, and continuous optimization, we make every ad rupee count.",
      image: "/assets/images/growth-graph.png",
    },
    {
      id: 4,
      title: "Logo Design",
      description:
        "Rebranding & Brand Refresh For businesses looking to evolve or modernize Comprehensive brand audits Visual and strategic redesign Communication and messaging updates",
      image: "/assets/images/visual-appeal.png",
    },



  ];

  return (
    <section className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] -z-10"
        style={{ y: backgroundY }}
      />
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title mb-6 md:text-5xl"
          >
            Make Your Brand Unmissable Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-description"
          >
            At Tech Vaseegrah, we don&apos;t just manage social media, 
            we turn it into your brand&apos;s growth engine. From strategy 
            to execution, we help you stand out, connect deeply with 
            your audience, and drive real results through every post, 
            ad, and interaction.

          </motion.p>
        </div>

        {/* ✅ Displaying Each Service */}
        <div className="space-y-40 md:space-y-56 lg:space-y-64">
          {services.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              index={index}
              setActiveService={setActiveService}
              isMobile={isMobile}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          {/* <button className="btn btn-primary">Get a Free SEO Audit</button> */}
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  service: SEOService;
  index: number;
  setActiveService: (id: number | null) => void;
  isMobile: boolean;
}

function ServiceItem({ service, index, setActiveService, isMobile }: ServiceItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: false,
    margin: "-40% 0px -40% 0px",
    amount: 0.4,
  });

  useEffect(() => {
    if (isInView) {
      setActiveService(service.id);
    }
  }, [isInView, service.id, setActiveService]);

  const isEven = index % 2 === 0;

  // Apply custom size for "Creative" section image
  const isCreative = service.title === "Creative"; // Check if it's the Creative service
  const imageSize = isCreative ? "w-[300px] h-[300px]" : "w-[300px] h-[300px]"; // Adjust size

  return (
    <motion.div
      id={`service-${service.id}`}
      ref={ref}
      className={`flex flex-col ${isMobile ? "" : isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16`}
    >
      {/* ✅ Left Section - Text Content */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-3xl section-title text-left mb-6">{service.title}</h3>
        <p className="text-left section-description">{service.description}</p>
      </motion.div>

      {/* ✅ Right Section - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {service.image && (
          <Image
            src={service.image}
            alt={service.title}
            width={300}
            height={300}
            className={`${imageSize} object-cover`} // Apply custom size
          />
        )}
      </motion.div>
    </motion.div>
  );
}
