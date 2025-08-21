// src/app/page.tsx

import Hero from "@/sections/Hero";
import {LogoTicker} from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import {InternHomeExplore } from "@/sections/InternHomeExplore";
import { SmartBiz }  from "@/sections/SmartBiz";
import EnquiryForm from "@/sections/EnquiryForm";
import { Project } from "@/sections/Project";
import { ProjectCarousel, ProjectCardType } from "@/sections/ProjectCarousel"; 

// Import your images
import aiChatBotImage from "@/assets/insta-x-bot.png"; 
import eComImage from "@/assets/f3-icon.png";
import f3Image from "@/assets/go.png";
import billzzyImage from "@/assets/ve.png";

// 2. UPDATE YOUR DATA to match the new, simpler structure (no 'content')
const projectCards: ProjectCardType[] = [ 

  {
    src: billzzyImage,
    title: "Billzzy",
     category: "",
    link: "https://billzzy.com"
  },

  {
    src: eComImage, 
    title: "F3 Engine",
     category: "",
    link: "https://f3engine.com"
  },


  {
    src: f3Image, 
    title: "GoWhats",
     category: "",
    link: "https://gowhats.vercel.app"
  },

  {
    src: aiChatBotImage, 
    title: "InstaX Bot",
     category: "",
    link: "https://insta-xbot-l.vercel.app/" // Add the correct link for InstaX Bot
  },

];

export default function Home () {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Project />
      
      <ProjectCarousel items={projectCards} />
      
      <SmartBiz />
      <Testimonials />  
      <EnquiryForm />
      <InternHomeExplore /> 
    </>
  );
};