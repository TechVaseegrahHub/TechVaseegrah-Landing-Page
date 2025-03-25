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

export default function MbaScroll() {
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
      title: "Module 1: Business Strategy & Entrepreneurship",
      description:
        "Business Model Development & Validation Market Research & Competitive Analysis Lean Startup & Business Growth Strategies Innovation & Digital Transformation",
      image: "/assets/images/Networking.png",
    },
    {
      id: 2,
      title: "Module 2: Financial Management & Accounting",
      description:
        "Financial Statements & Cash Flow Analysis Budgeting & Cost Management Investment Strategies & Business Funding Taxation & Compliance",
      image: "/assets/images/Idea.png",
    },
    {
      id: 3,
      title: "Module 3: Marketing & Brand Building",
      description:
        "Digital Marketing & Social Media Strategies Consumer Behavior & Market Positioning Sales Funnels & Revenue Optimization Personal Branding for Entrepreneurs",
      image: "/assets/images/trend.png",
    },
    {
      id: 4,
      title: "Module 4: Leadership & Organizational Development",
      description:
        "Business Ethics & Leadership Building High-Performance Teams Conflict Resolution & Decision Making Legal Aspects of Business",
      image: "/assets/images/cloud.png",
    },

    {
        id: 4,
        title: "Module 5: Operations & Business Scaling",
        description:
          "Supply Chain & Logistics Management Process Automation & Business Efficiency Scaling Strategies & Franchise Models Exit Strategies & Business Valuation",
        image: "/assets/images/cloud.png",
      },
  ];

  return (
    <section className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] -z-10"
        style={{ y: backgroundY }}
      />
          <div className="flex justify-center">
            <motion.div  className="tag mb-10">
              
            </motion.div>
          </div>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title mb-6"
          >
            Program Curriculum
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
          <button className="btn btn-primary">Get a Free SEO Audit</button>
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