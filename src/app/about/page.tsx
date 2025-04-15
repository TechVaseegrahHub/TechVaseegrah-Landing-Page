"use client";
import AboutCeo from "@/sections/AboutCeo";
import AboutMission from "@/sections/AboutMission";
import AboutTeam from "@/sections/AboutTeam";
import { AboutTitle } from "@/sections/AboutTitle";
import AboutValue from "@/sections/AboutValue";

export default function About() {
  return (
    <div>
      <AboutTitle/>
      <AboutCeo/>
      <AboutMission/>
      <AboutTeam/>
      <AboutValue/>
    </div>
  );
}