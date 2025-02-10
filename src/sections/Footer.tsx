import Image from "next/image";
import logo from "@/assets/tech-v-logo.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div  className="container">
      <div  className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:absolute">
      <Image src={logo} height={40} alt="SaaS logo" className="relative" />
      </div>  
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2025 Tech Vassegrah, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};