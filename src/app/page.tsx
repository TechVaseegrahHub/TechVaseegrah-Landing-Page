  import Header from "@/sections/Header"; 
  import Hero from "@/sections/Hero";
  import {LogoTicker} from "@/sections/LogoTicker";
  import { BoostYourProductivity } from "@/sections/BoostYourProductivity";
  import { Testimonials } from "@/sections/Testimonials";
  import { Footer } from "@/sections/Footer";
  import {InternHomeExplore } from "@/sections/InternHomeExplore";
  import {SmartBiz}  from "@/sections/SmartBiz";
  import  InternOldTemplate  from "@/sections/InternOldTemplate";
  import  Features from "@/sections/Features";
  import { Internship } from "@/sections/Internship";
  import  { InternCall } from "@/sections/InternCall";
  
  
  export default function Home() {
    return (
    <>
    <Header />
    <Hero />
    <LogoTicker />
    <BoostYourProductivity />
    <Features />
    <SmartBiz />
    <Testimonials />
    <InternHomeExplore />
    

    <Internship />
    <InternCall />
    <Footer />
    </>
  );
}