"use client";
import { Branding } from "@/sections/Branding";
import BrandingScroll from "@/sections/BrandingScroll";
import ChooseBranding from "@/sections/ChooseBranding";
import { BrandTableHead } from "@/sections/BrandTableHead";
import BrandCall from "@/sections/BrandCall";
import FaqBranding from "@/sections/FaqBranding";

export default function ContactPage() {
    return ( 
    <div>
        <Branding />
        <BrandingScroll/>
        {/* <BrandTableHead />
        <ChooseBranding /> */}
        <BrandCall/> 
        <FaqBranding />
    </div>
    );
}