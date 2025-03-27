"use client";
import { Seo } from "@/sections/Seo";
import  SeoCall  from "@/sections/SeoCall";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import  SeoClients  from "@/sections/SeoClients";
import FaqSeo from "@/sections/FaqSeo";
import SeoScroll from "@/sections/SeoScroll";

import seo1 from "@/assets/seo1.jpeg";
import seo2 from "@/assets/seo2.jpeg";
import seo3 from "@/assets/seo-employee.jpeg";

const testimonialsData = [
  {
    quote: "This service transformed our digital presence!",
    name: "HARISANJAY J",
    designation: "On-Page and Off-page SEO Specialist",
    src: seo1.src,
  },
  {
    quote: "The experience was outstanding and seamless.",
    name: "NAVEEN KUMAR S",
    designation: "SEO Analyst, Content creation",
    src: seo2.src,
  },

  {
    quote: "The experience was outstanding and seamless.",
    name: "KISHORE EDWIN M",
    designation: "SEO strategizing, Evaluate websites",
    src: seo3.src,
  },
  // Add more testimonials as needed
];

export default function TechServices() {
  return (
    <div>
      <Seo />
      <SeoScroll/>     
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
      <SeoClients/>
      <FaqSeo />
      <SeoCall />    
    </div>
  );
}