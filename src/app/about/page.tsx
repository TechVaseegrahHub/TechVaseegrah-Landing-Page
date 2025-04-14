"use client";
import AboutHeading from "@/sections/AboutHeading";
import AboutMission from "@/sections/AboutMission";
import AboutTeam from "@/sections/AboutTeam";
import { AboutTitle } from "@/sections/AboutTitle";
import AboutValue from "@/sections/AboutValue";

export default function About() {
  return (
    <div>
      <AboutTitle/>
      <AboutHeading/>
      <AboutMission/>
      <AboutTeam/>
      <AboutValue/>
    </div>
  );
}