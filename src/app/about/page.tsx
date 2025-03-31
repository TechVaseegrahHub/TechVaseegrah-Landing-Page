"use client";
import AboutHeading from "@/sections/AboutHeading";
import { AboutTitle } from "@/sections/AboutTitle";
import AboutUs from "@/sections/AboutUs";
import AboutValue from "@/sections/AboutValue";

export default function About() {
  return (
    <div>
      <AboutTitle/>
      <AboutHeading/>
      <AboutUs/>
      <AboutValue/>
    </div>
  );
}