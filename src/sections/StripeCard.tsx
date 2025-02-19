"use client";

import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";
import projectImage from "@/assets/bill-z.jpeg"; // Replace with actual image path

export function StripeCard() {
  return (
    <div className="overflow-hidden  text-center text-3xl 
         md:text-[54px] md:leading-[60px] 
         font-bold tracking-tighter 
         bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] 
         text-transparent bg-clip-text; mb-20 mt-">
      <MacbookScroll
        title={<span>Our Latest Projects</span>}
        src={projectImage.src} // Pass the image to be displayed
        showGradient={false}
      />
    </div>
  );
}
