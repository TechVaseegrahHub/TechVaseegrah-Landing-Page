"use client";
import internImage from "@/assets/Team2.png";
import codeImage from "@/assets/c++ programing.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const InternCall =()=> {

    const containerRef = useRef <HTMLDivElement>(null);
    const { scrollYProgress }=useScroll({
        target: containerRef,
        offset: ['start end','end end'],
    });

    useEffect (()=>{
    scrollYProgress.on('change', value=> console.log ('value',value));

    }, []);

    const translateY=useTransform(scrollYProgress, [0,1],[40, -40]);
    return(  
        <div 
            className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 mt-20" 
            ref={containerRef}
        >
        
        <div className="section-heading relative">
          <motion.div style={{translateY}}>
           <Image 
                src={internImage} 
                alt="Intern team img" 
                className="absolute top-6 left-[calc(85%+36px)]"
                height={300}
                width={300}
            />
            </motion.div>
            <motion.div style={{translateY}}>
            <Image 
                 src={codeImage} 
                 alt="CSS code img" 
                 className="absolute -top-[-50px] right-[calc(90%+84px)]"
                 height={200}
                 width={200}
                 
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
    </div>    
    )
};

export default InternCall;