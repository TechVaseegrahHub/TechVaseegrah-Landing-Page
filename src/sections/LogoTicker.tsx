"use client";
import apfLogo from "@/assets/apf.png";
import amzLogo from "@/assets/amzf.png";
import bgLogo from "@/assets/bg.png";
import cleansoLogo from "@/assets/cleanso.png";
import colorcrackersLogo from "@/assets/colour-crackers.png";
import kirscollectionLogo from "@/assets/krish-collections.png";
import futurenatureLogo from "@/assets/future-nature.png";
import nimalasLogo from "@/assets/nimalas.png";
import frelaLogo from "@/assets/frela.png";
import hunnyLogo from "@/assets/hunny-bi.png";
import jaiLogo from "@/assets/jai.png";
import jungleLogo from "@/assets/jungle-meet.png";
import magizhamLogo from "@/assets/magizham.png";
import mamiveeduLogo from "@/assets/mami-veedu.png";
import samudraLogo from "@/assets/samudra.png";
import sribariyaLogo from "@/assets/sai-bariya.png";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assets/techvl.png";

// --- 1. Refactor logos into a data array for easier management ---
const logoData = [
  { src: apfLogo, alt: "Apf" },
  { src: amzLogo, alt: "Amz Farm" },
  { src: bgLogo, alt: "BG" },
  { src: cleansoLogo, alt: "CleanSo" },
  { src: frelaLogo, alt: "Frela" },
  { src: hunnyLogo, alt: "Hunny Bi" },
  { src: jaiLogo, alt: "Jai" },
  { src: jungleLogo, alt: "Jungle Meet" },
  { src: magizhamLogo, alt: "Magizham" },
  { src: mamiveeduLogo, alt: "Maami Veedu" },
  { src: samudraLogo, alt: "Samudra" },
  { src: colorcrackersLogo, alt: "Color Crackers" },
  // These logos had a different height, so we'll give them a specific class
  { src: kirscollectionLogo, alt: "Krish collection", className: "h-12 md:h-16" },
  { src: futurenatureLogo, alt: "Future Nature", className: "h-12 md:h-16" },
  { src: nimalasLogo, alt: "Nimalas", className: "h-12 md:h-16" },
  { src: sribariyaLogo, alt: "Sri Bariya Skin Care" },
];

export const LogoTicker = () => {
  // We create a combined array for the seamless loop
  const combinedLogos = [...logoData, ...logoData];

  return (
    <div className="py-8 md:py-12 bg-gradient-to-b to-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            // --- 2. Added responsive gap and padding ---
            className="flex gap-10 md:gap-14 flex-none pr-10 md:pr-14"
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
            {/* --- 3. Mapped over the data array for cleaner code --- */}
            {combinedLogos.map((logo, index) => (
              <Image
                key={`${logo.alt}-${index}`} // Unique key for each item
                src={logo.src}
                alt={logo.alt}
                // --- 4. Applied responsive sizing classes ---
                className={
                  logo.className
                    ? `${logo.className} w-auto object-contain`
                    : "h-10 md:h-14 w-auto object-contain"
                }
              />
            ))}
          </motion.div>
        </div>

        {/* --- 5. Made the heading responsive --- */}
        <h2 className="text-lg md:text-xl mt-12 flex items-center justify-center gap-2 section-title">
          <span>Brands Powered by</span>
          <Image 
            src={logo} 
            alt="Vaseegrah Logo" 
            className="h-8 md:h-12 w-auto" // Responsive height
          /> 
        </h2>
      </div>
    </div>
  );
};