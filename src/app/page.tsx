// src/app/page.tsx

import Hero from "@/sections/Hero";
import {LogoTicker} from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";
import {InternHomeExplore } from "@/sections/InternHomeExplore";
import { SmartBiz }  from "@/sections/SmartBiz";
import EnquiryForm from "@/sections/EnquiryForm";
import { Project } from "@/sections/Project";
import Products from "@/sections/Products";


export default function Home () {
  return (
    <>
      <Hero />
      <LogoTicker />
       <Project /> 
      <Products />
        
      <SmartBiz />
      <Testimonials />  
      <EnquiryForm />
      <InternHomeExplore /> 
    </>
  );
};