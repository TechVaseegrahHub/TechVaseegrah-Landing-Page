"use client";
import { InternHead } from "@/sections/InternHead";
import { ExpandableCardDemo } from "@/sections/ExpandableCardDemo";
import  InternPhotos  from "@/sections/InternPhotos"
import InternJobTitle from "@/sections/InternJobTitle";
import InternshipBenefits from "@/sections/InternshipBenefits";

export default function InternshipPage() {
  return (
    <div>
        <InternHead />
        <InternPhotos/>
        <InternJobTitle />
        <ExpandableCardDemo /> 
        <InternshipBenefits/>
    </div>
  );
}