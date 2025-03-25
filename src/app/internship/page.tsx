"use client";
import { InternJobCards } from "@/sections/InternJobCards";
import { Internship } from "@/sections/Internship";
import { InternCall } from "@/sections/InternCall";
import { InternHeading } from "@/sections/InternHeading";
import { ExpandableCardDemo } from "@/sections/ExpandableCardDemo";
import  InternPhoto  from "@/sections/InternPhoto"
import InternJobTitle from "@/sections/InternJobTitle";
import InternshipBenefits from "@/sections/InternshipBenefits";

export default function InternshipPage() {
  return (
    <div className="min-h-screen py-16">
     
        <InternHeading />
        <InternPhoto/>
     
      {/* <InternHeading /> */}
      {/* <InternJobCards />  */}
       
       {/* <Internship /> */}
       <InternJobTitle />
       <ExpandableCardDemo /> 
      {/* <InternCall /> */}
      <InternshipBenefits/>

 
    </div>
  );
}