"use client";
import apfLogo from "@/assets/apf.png";
import amzLogo from "@/assets/amzf.png";
import bgLogo from "@/assets/bg.png";
import cleansoLogo from "@/assets/cleanso.png";
import decaraLogo from "@/assets/de-cara.png";
import colorcrackersLogo from "@/assets/colour-crackers.png";
import frelaLogo from "@/assets/frela.png";
import hasiniaariLogo from "@/assets/hasini-aari.png";
import hunnyLogo from "@/assets/hunny-bi.png";
import naturalLogo from "@/assets/naturals.png"
import jaiLogo from "@/assets/jai.png";
import jungleLogo from "@/assets/jungle-meet.png";
import magizhamLogo from "@/assets/magizham.png";
import mamiveeduLogo from "@/assets/mami-veedu.png";
import samudraLogo from "@/assets/samudra.png";
import sribariyaLogo from "@/assets/sai-bariya.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={apfLogo}
              alt="Apf"
              className="logo-ticker-image h-14 w-18"  // Increased size
            />

            <Image
              src={amzLogo}
              alt="Amz Farm"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={bgLogo}
              alt="BG"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={cleansoLogo}
              alt="CleanSo"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={frelaLogo}
              alt="Frela"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={hasiniaariLogo}
              alt="Hasini Aari Works"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={decaraLogo}
              alt="De Cara"
              className="logo-ticker-image h-14 w-18"  
            /> 

            <Image
              src={hunnyLogo}
              alt="Hunny Bi"
              className="logo-ticker-image h-14 w-18" 
            />

            
            <Image
              src={naturalLogo}
              alt="Naturals"
              className="logo-ticker-image h-14 w-18" 
            />

            <Image
              src={jaiLogo}
              alt="Jai"
              className="logo-ticker-image h-14 w-18" 
            />

            <Image
              src={jungleLogo}
              alt="Jungle Meet"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={magizhamLogo}
              alt="Magizham"
              className="logo-ticker-image h-14 w-18" 
            />

            <Image
              src={mamiveeduLogo}
              alt="Maami Veedu"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={samudraLogo}
              alt="Samudra"
              className="logo-ticker-image h-14 w-18"  
            />
            <Image
              src={colorcrackersLogo}
              alt="Color Crackers"
              className="logo-ticker-image h-14 w-18"  
            />
            <Image
              src={sribariyaLogo}
              alt="Sri Bariya Skin Care"
              className="logo-ticker-image h-14 w-18"  
            />

            {/* Second set of logos for animation */}
            <Image
              src={apfLogo}
              alt="Apf"
              className="logo-ticker-image h-14 w-18" 
            />

            <Image
              src={amzLogo}
              alt="Amz Farm"
              className="logo-ticker-image h-14 w-18"  
            />
            <Image
              src={bgLogo}
              alt="BG"
              className="logo-ticker-image h-14 w-18"  
            />
            <Image
              src={cleansoLogo}
              alt="CleanSo"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={frelaLogo}
              alt="Frela"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={hasiniaariLogo}
              alt="Hasini Aari Works"
              className="logo-ticker-image h-14 w-18"  
            />


            <Image
              src={decaraLogo}
              alt="De Cara"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={hunnyLogo}
              alt="Hunny Bi"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={naturalLogo}
              alt="Naturals"
              className="logo-ticker-image h-14 w-18" 
            />

            <Image
              src={jaiLogo}
              alt="Jai"
              className="logo-ticker-image h-14 w-18" 
            />

            <Image
              src={jungleLogo}
              alt="Jungle Meet"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={magizhamLogo}
              alt="Magizham"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={mamiveeduLogo}
              alt="Maami Veedu"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={samudraLogo}
              alt="Samudra"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={colorcrackersLogo}
              alt="Color Crackers"
              className="logo-ticker-image h-14 w-18"  
            />

            <Image
              src={sribariyaLogo}
              alt="Sri Bariya Skin Care"
              className="logo-ticker-image h-14 w-18"  
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};