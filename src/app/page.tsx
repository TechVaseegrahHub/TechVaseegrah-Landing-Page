  import Hero from "@/sections/Hero";
  import {LogoTicker} from "@/sections/LogoTicker";
  import { BoostYourProductivity } from "@/sections/BoostYourProductivity";
  import { Testimonials } from "@/sections/Testimonials";
  import {InternHomeExplore } from "@/sections/InternHomeExplore";
  import { SmartBiz }  from "@/sections/SmartBiz";
  import   Products  from "@/sections/Products";
  import EnquiryForm from "@/sections/EnquiryForm";

  export default function Home () {
    return (
    <>
    <Hero />
    <LogoTicker />
    <BoostYourProductivity />
    <Products />
    <SmartBiz />
    <Testimonials />  
    <EnquiryForm />
    <InternHomeExplore /> 
    </>
  );
};