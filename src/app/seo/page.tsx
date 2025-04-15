"use client";
import { Seo } from "@/sections/Seo";
import  SeoCall  from "@/sections/SeoCall";
import  SeoClients  from "@/sections/SeoClients";
import FaqSeo from "@/sections/FaqSeo";
import SeoScroll from "@/sections/SeoScroll";
import SeoTable from "@/sections/SeoTable";
import { SeoTableHead } from "@/sections/SeoTableHead";

export default function TechServices() {
  return (
    <div>
      <Seo/>
      <SeoScroll/> 
      <SeoTableHead />   
      <SeoTable />
      <SeoClients/> 
      <SeoCall /> 
      <FaqSeo />
    </div>
  );
}