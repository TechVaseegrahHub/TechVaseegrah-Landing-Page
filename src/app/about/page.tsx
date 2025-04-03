"use client";
import AboutHeading from "@/sections/AboutHeading";
import AboutMission from "@/sections/AboutMission";
import { AboutTitle } from "@/sections/AboutTitle";
import AboutUs from "@/sections/AboutUs";
import AboutValue from "@/sections/AboutValue";
import CeoPhoto from "@/sections/CeoPhoto";
import AboutGroup from "@/sections/AboutGroup";

export default function About() {
  return (
    <div>
      <AboutTitle/>
      {/* <CeoPhoto/>  */}   
      <AboutMission/>
      <AboutHeading/>
      {/* <AboutGroup /> */}
      <AboutUs/> 
      <AboutValue/>
    </div>
  );
}