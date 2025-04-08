"use client";
import { MbaInternship } from "@/sections/MbaInternship";
import MbaProgram  from "@/sections/MbaProgram";
import  MbaCall  from "@/sections/MbaCall";
import MbaImages from "@/sections/MbaImages";
import MbaCurriculam from "@/sections/MbaCurriculam";

export default function TechServices() {
  return (

    <div>       
      <MbaInternship/>
      <MbaImages/>    
      <MbaProgram />
      <MbaCurriculam/>
      <MbaCall />   
    </div>
  );
}