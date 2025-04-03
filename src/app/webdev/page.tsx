"use client";
import { WebService } from "@/sections/WebService";
import WebSpec from "@/sections/WebSpec";
import Web from "@/sections/Web";
import WebStacks from "@/sections/WebStacks";
import  WebDevPhoto from "@/sections/WebDevPhoto";
import WebCall from "@/sections/WebCall";
import WebFaq from "@/sections/WebFaq";

export default function WebDev() {
  return (
    <div>
      <WebService />
      <WebSpec />
      <Web/> 
      <WebStacks/>
      <WebDevPhoto/>
      <WebFaq/>
      <WebCall />
     
    </div>
  );
}