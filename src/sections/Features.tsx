"use client";
import Tag from '@/components/Tag';
import FeatureCard from '@/components/FeaturesCard';
import Image from 'next/image';
import avatar1 from '@/assets/Whatsapp.png';
import avatar2 from '@/assets/Instagram.png';
import avatar3 from '@/assets/0005.png';
import Avatar from '@/components/Avatar';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from "react";

const features = [
  'Asset Library',
  'Code Preview',
  'Flow Mode',
  'Smart Sync',
  'Auto Layout',
  'Fast Search',
  'Smart Guides',
];

// Framer motion variants
const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant: Variants = {
  start: { y: 30, opacity: 0, filter: 'blur(0px)' },
  end: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20" ref={sectionRef}>
      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container"
      >
        <motion.div variants={heroChildVariant} className="flex justify-center">
          <Tag>Products</Tag>
        </motion.div>

        <motion.h2 variants={heroChildVariant} className="section-title mt-5">
          Our Major Products for <br /> Ecommerce Industry
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="GoWhats"
            description="Simplify customer connections with GoWhats! Manage orders, automate messages, and offer real-time support using our powerful WhatsApp API—streamlining communication and boosting efficiency."
            className="md:col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-10">
                <Image src={avatar1} alt="Avatar 1" width={120} height={120} priority />
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard
            title="F3 Engine"
            description="F3 Engine simplifies e-commerce with automated printing, packing, tracking, and inventory management. Streamline order dispatch, boost efficiency, and enhance customer satisfaction—focus on growth, not manual tasks!"
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-10">
                <Image src={avatar3} alt="Avatar 3" />
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Instamatic"
            description="Instamatic’s AI-powered Instagram automation automates direct message replies and instant comment responses, saving you time and boosting customer engagement. Streamline your social media communication effortlessly!"
            className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-10">
                <Image src={avatar2} alt="Avatar 2" width={120} height={120} />
              </Avatar>
            </div>
          </FeatureCard>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-100 border border-white/10 inline-flex px-3 md:px-5 md:py-2 py-1.5 rounded-2xl gap-3 items-center"
            >
              <span className="bg-blue-800 text-white w-5 h-5 rounded-full inline-flex items-center justify-center text-xl">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
