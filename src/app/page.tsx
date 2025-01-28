  import Header from "@/sections/Header"; 
  import Hero from "@/sections/Hero";
  import {LogoTicker} from "@/sections/LogoTicker";
  import { ProductShowcase } from "@/sections/ProductShowcase";
  import { Testimonials } from "@/sections/Testimonials";
  import { Footer } from "@/sections/Footer";
  import { CallToAction } from "@/sections/CallToAction";
  import {Slogan}  from "@/sections/Slogan";
  import { InternMain } from "@/sections/InternMain";
  import  Features  from "@/sections/Features";

  export default function Home() {
    return (
    <>
    <Header />
    <Hero />
    <LogoTicker />
    <ProductShowcase />
    <Features />
    <Slogan />
    <Testimonials />
    <CallToAction />
    <Footer />
    <InternMain />
    </>
  );
  }
