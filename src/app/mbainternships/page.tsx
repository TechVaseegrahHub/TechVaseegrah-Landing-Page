"use client";


import { MbaInternship } from "@/sections/MbaInternship";
import MbaProgram  from "@/sections/MbaProgram";
import  MbaScroll  from "@/sections/MbaScroll";
import FaqMba from "@/sections/FaqMba";
import  MbaCall  from "@/sections/MbaCall";

import seo1 from "@/assets/seo1.jpeg";
import seo2 from "@/assets/seo2.jpeg";
import seo3 from "@/assets/seo-employee.jpeg";
import { MbaPhotos } from "@/sections/MbaPhotos";
import MbaImages from "@/sections/MbaImages";
import MbaCurriculam from "@/sections/MbaCurriculam";



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

    <div className="min-h-screen py-16">      
  
  
      <MbaInternship/>
   {/* 
          <MbaScroll />
          <MbaPhotos />
          <FaqMba />     */}
      <MbaImages/>    
      <MbaProgram />
      <MbaCurriculam/>
      <MbaCall />  
     
    </div>
  );
}