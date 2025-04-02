"use client";
import AboutHeading from "@/sections/AboutHeading";
import { AboutTitle } from "@/sections/AboutTitle";
import AboutUs from "@/sections/AboutUs";
import AboutValue from "@/sections/AboutValue";
import CeoPhoto from "@/sections/CeoPhoto";

export default function About() {
  return (
    <div>
      <AboutTitle/>
      {/* <CeoPhoto/> */}
      <AboutHeading/>
      <AboutUs/>
      <AboutValue/>
    </div>
  );
}