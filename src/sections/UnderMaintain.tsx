"use client";
import Image from "next/image";
import maintenanceImg from "@/assets/34.png";


export default function UnderMaintain() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] flex flex-col justify-center items-center px-4 py-16 sm:px-6 lg:px-8">
      {/* Under Maintenance Message */}
      <Image
        src={maintenanceImg} // Change this to your image path
        alt="Under Maintenance"
        width={190}
        height={190}
        className="object-contain"
      />
      <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl">
        We&apos;re updating our website. Please check back shortly.
      </p>
    </div>
  );
}
