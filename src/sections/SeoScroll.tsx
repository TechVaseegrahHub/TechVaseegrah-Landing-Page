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

export default function SeoScroll() {
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
      title: "Keyword Research & Strategy",
      description:
        "Find high-ranking, profitable keywords that drive targeted traffic to your website and improve your search engine rankings.",
      image: "/assets/images/39.png",
    },
    {
      id: 2,
      title: "On-Page SEO",
      description:
        "Optimize content, meta tags, URLs, and internal links for better search visibility and improved user experience.",
      image: "/assets/images/s.png",
    },
    {
      id: 3,
      title: "Off-Page SEO",
      description:
        "Build high-quality backlinks and strengthen domain authority through strategic outreach and relationship building.",
      image: "/assets/images/Bill.png",
    },
    {
      id: 4,
      title: "Technical SEO",
      description:
        "Improve website speed, mobile-friendliness, and indexing to enhance user experience and search engine crawlability.",
      image: "/assets/images/9.png",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] -z-10"
        style={{ y: backgroundY }}
      />
          <div className="flex justify-center">
            <motion.div  className="tag mb-6">
              SEO Services
            </motion.div>
          </div>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title mb-6 md:text-5xl"
          >
            Our SEO Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-description"
          >
            Comprehensive SEO solutions to improve your online visibility and drive organic traffic
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
            className=""
          />
        )}
      </motion.div>
    </motion.div>
  );
}