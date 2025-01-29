"use client";

import { useRef } from "react";
import { CutCornerButton } from "@/components/CutCornerButton";
import { TextButton } from "@/components/TextButton";
import { motion, useScroll, useTransform } from "framer-motion";
import roboimg from "@/assets/api robot.png";
//import robo1img from "@/assets/0004.png";


const listItems = [
    "Mentorship and Training",
    "Real-World Experience",
    "Professional Development",
    "Learning Resources",
    "Flexible Work Environment",
];

export const FeaturesGrid = () => {

    const torusKnotRef = useRef(null);
    const firstHemisphereRef =useRef(null);
    const { scrollYProgress: torusKnotScrollYProgress }=useScroll ({
        target:torusKnotRef,
        offset:["start end","end start"]
    });
    const torusKnotTranslateY =useTransform(
          torusKnotScrollYProgress, 
          [0, 1], 
          [100, -100]
        );
        const torusKnotRotate=useTransform(
              torusKnotScrollYProgress, 
              [0,1],[30, -30]
        );
    


        const { scrollYProgress: firstHemisphereScrollYProgress }=useScroll ({
            target:firstHemisphereRef,
            offset:["start end","end start"]
        });
        const firstHemisphereTranslateY =useTransform(
            firstHemisphereScrollYProgress, 
              [0, 1], 
              [50, -50]
            );
            const firstHemisphereRotate=useTransform(
                firstHemisphereScrollYProgress, 
                  [0, 1],
                  [-20, -50]
            );
        return (
        <section className="py-24 overflow-x-clip   ">
            <div className="container">
                <div className="flex flex-col gap-56">
                    <div className="grid grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <h2 className="font-heading font-black text-4xl md:text-5xl">
                            Develop your skills with techvaseegrah!
                            </h2>
                            <p className="text-xl text-zinc-400 mt-8">
                            We offer internships to empower students with industrial-level 
                            experience and hands-on learning in cutting-edge technologies.
                             Gain mentorship from industry experts, work on real-world projects, 
                            and bridge academic learning with practical skills for a 
                            successful career in software and IT.
                            </p>
                            <ul className="flex flex-col gap-8 mt-12">
                                {listItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <div className="inline-flex flex-shrink-0 
                                                        justify-center items-center 
                                                        size-8 outline outline-4 
                                                        -outline-offset-4 rounded-full 
                                                        outline-fuchsia-500/20">
                                            <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                                        </div>
                                        <span className="text-xl font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-8 mt-12">
                                <CutCornerButton>Get Started</CutCornerButton>
                                <TextButton>Learn More</TextButton>
                            </div>
                        </div>
                        <div>
                            <div className="relative inline-flex z-0">
                            <motion.img 
                                src={roboimg.src}
                                alt="torus knot 3d img"
                                className="size-96 max-w-none"
                                ref={torusKnotRef}
                                style={{
                                    translateY: torusKnotTranslateY,
                                    rotate: torusKnotRotate,
                                }}
                            /> 
                            {/*<motion.img
                                src={robo1img.src}
                                alt="hemisphere 3d img"
                                className="absolute size-96 top-3/4 -z-10 scale-x-[-1]" 
                                ref={firstHemisphereRef}
                                style={{
                                    translateY: firstHemisphereTranslateY,
                                    rotate: firstHemisphereRotate,
                                }}
                            />*/}
                        </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-heading font-black text-4xl">
                            Blockforge leads the way.
                        </h2>
                        <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6">
                            <p>
                                Blockforge is dedicated to supporting 
                                the evolution of Web3 applications by delivering 
                                the necessary infrastructure and security for Web3.
                            </p>
                            <p>
                                Blockforge champions Web3 for everyone. 
                                As a decentralized blockchain scaling platform,
                                Blockforge enables developers to create scalable,
                                user-friendly dApps with low transaction costs,
                                all while ensuring robust security.
                            </p>
                        </div>
                        <div className="flex gap-8 mt-12">
                            <CutCornerButton>Get Started</CutCornerButton>
                            <TextButton>Learn More</TextButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};