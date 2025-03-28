"use client";

import About from "@/sections/About";
import { AboutHead } from "@/sections/AboutHead";
import AboutP1 from "@/sections/AboutP1";


export default function TechServices() {
  return (
    <div>
      <AboutHead />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <About />
          </div>
          <div>
            <AboutP1 />
          </div>
        </div>
      </div>
    </div>
  );
}
