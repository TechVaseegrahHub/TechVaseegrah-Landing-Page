"use client";

import SocialCall from "@/sections/SocialCall";
import  {SocialMedia} from "@/sections/SocialMedia";
import SocialMediaTable from "@/sections/SocialMediaTable";
import SocialScroll from "@/sections/SocialScroll";
import { SocialTableHead } from "@/sections/SocialTableHead";


export default function socialMarketing() {
  return (
    <div>
     <SocialMedia/>
     <SocialScroll/>
     <SocialTableHead/>
     <SocialMediaTable/>
     <SocialCall/>
     
    </div>
  );
}