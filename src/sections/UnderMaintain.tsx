"use client";

import Image from "next/image";

export default function UnderMaintain() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] flex flex-col justify-center items-center px-4 py-16 sm:px-6 lg:px-8">
      {/* Under Maintenance Message */}
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center text-gray-800 mb-4">
        Under Maintenance
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl">
        We&apos;re updating our website. Please check back shortly.
      </p>
    </div>
  );
}
