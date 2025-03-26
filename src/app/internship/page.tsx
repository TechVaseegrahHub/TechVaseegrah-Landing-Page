"use client";
import { InternHeading } from "@/sections/InternHeading";
import { ExpandableCardDemo } from "@/sections/ExpandableCardDemo";
import  InternPhoto  from "@/sections/InternPhoto"
import InternJobTitle from "@/sections/InternJobTitle";
import InternshipBenefits from "@/sections/InternshipBenefits";

export default function InternshipPage() {
  return (
    <div>
        <InternHeading />
        <InternPhoto/>
        <InternJobTitle />
        <ExpandableCardDemo /> 
        <InternshipBenefits/>
    </div>
  );
}