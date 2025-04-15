"use client";
import  WebService from "@/sections/WebService";
import WebStacks from "@/sections/WebStacks";
import WebCall from "@/sections/WebCall";
import WebFaq from "@/sections/WebFaq";
import ChooseWeb from "@/sections/ChooseWeb";
import { WebTableHead } from "@/sections/WebTableHead";
import { WebHead } from "@/sections/WebHead";

export default function WebDev() {
  return (
    <div>
      <WebHead/>
      <WebService />
      <WebStacks/>
      <WebTableHead />
      <ChooseWeb/>
      <WebCall /> 
      <WebFaq/>
    </div>
  );
}