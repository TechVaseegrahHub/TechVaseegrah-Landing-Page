"use client";

import { JobCards } from "@/sections/JobCards";
import { Internship } from "@/sections/Internship";
import InternCall from "@/sections/InternCall";

export default function InternshipPage() {
  return (
    <div className="min-h-screen py-16">
     
      <JobCards />
      <Internship />
      <InternCall />
    </div>
  );
}
