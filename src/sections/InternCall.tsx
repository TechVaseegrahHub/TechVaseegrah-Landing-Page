"use client";
import internImage from "@/assets/ai-brain.png";
import codeImage from "@/assets/webdev.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const InternCall =()=> {

    const sectionRef = useRef <HTMLDivElement>(null);
    const { scrollYProgress }=useScroll({
        target: sectionRef,
        offset: ['start end','end end'],
    });

    useEffect (()=>{
    scrollYProgress.on('change', value=> console.log ('value',value));

    }, []);

    const translateY=useTransform(scrollYProgress, [0,1],[150, -150]);
    return(  
        <section
        ref={sectionRef}
            className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip" 
           
        >
        
        <div className="section-heading relative">
          <motion.div style={{translateY}}>
           <Image 
                src={internImage} 
                alt="Intern team img" 
                className="absolute -left-[270px] -bottom-[280px]"
                height={180}
                width={180}
            />
            </motion.div>
            <motion.div style={{translateY}}>
            <Image 
                 src={codeImage} 
                 alt="CSS code img" 
                 className="absolute -right-[331px] -bottom-[400px] hidden sm:block"
                 height={320}
                 width={310}
            /> 
            </motion.div>
            
            <h2 className="section-title">
                Transform Your Knowledge into Experience.
            </h2>
            
            <p className="section-description mt-5">
                Intern with Us and Make a Difference
            </p>
        
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
        <input 
               type="email" 
               placeholder="Your@mail.com" 
               className="h-12 bg-white/90 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] flex-1"
        />
            <button className="btn btn-primary">
                    Kick Start
            </button>
        </form>
        </div>
    </section>    
    );
};

export default InternCall;
