"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

export default function Gowhat() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/gowhat.png",
  ];

  return (
    <>
      <Head>
        <title>GoWhats</title>
        <meta
          name="description"
          content="AI-powered e-commerce platform case study"
        />
      </Head>

      <div className="w-full min-h-screen flex flex-col bg-white">
        {/* Content container with proper spacing */}
        <div className="container mx-auto px-3 pt-3 pb-6 sm:px-4 sm:py-8 md:py-12 flex-grow">
          {/* Back Button */}
          <div className="mb-3 sm:mb-4">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              <svg
                className="w-3 h-3 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Case Studies
            </button>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            {/* Hero section */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-3">
                GoWhat 
              </span>
            </div>

            {/* Image Gallery - Adjusted for phone view */}
            <div className="mb-4 sm:mb-6">
              <div className="relative w-full aspect-video sm:aspect-auto sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-md bg-white">
                <Image
                  src={images[currentImageIndex]}
                  alt={`gowhat ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/gowhat.png";
                  }}
                />
              </div>
            </div>

            <div className="prose prose-sm sm:prose max-w-none">
              {/* Project Overview */}
              <section className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Overview</h2>
                <p className="text-sm">
                  Vaseegrah Veda, a renowned brand specializing in high-quality herbal products, offers a variety of skincare, haircare, and wellness solutions. While their products are top-notch, they struggled with managing customer communication and support efficiently on WhatsApp, which impacted both customer experience and order management.
                </p>
              </section>

              {/* Objective */}
              <section className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Objective
                </h3>
                <p className="text-sm">
                  Vaseegrah Veda wanted to enhance customer engagement, improve communication, and streamline order management. They aimed to provide 24/7 support, automate the order-taking process, and ensure a smoother, more efficient workflow, leading to happier customers and improved sales.
                </p>
              </section>

              {/* Solution */}
              <section className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Solution</h2>
                <p className="text-sm">
                  By integrating GoWhats, Vaseegrah Veda was able to revolutionize their customer interactions and order management. The platform's 24/7 chatbot responded to customers instantly, taking orders directly through WhatsApp. The seamless printing, packing, and tracking modules ensured that orders were processed and dispatched smoothly. Additionally, GoWhats enabled personalized broadcast and greeting messages to keep customers informed and engaged, while inventory management streamlined stock tracking. This all-in-one solution helped Vaseegrah Veda offer exceptional service, improve operational efficiency, and achieve significant revenue growth.
                </p>
              </section>

              {/* Revenue */}
              <section className="pt-3 mt-4 border-t border-gray-200 sm:pt-4 sm:mt-6">
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  Revenue
                </h2>
                <p className="text-sm">
                  Within 4 months of integrating GoWhats, Vaseegrah Veda saw a substantial revenue increase of ₹816,899.00, thanks to the enhanced customer engagement and operational efficiency provided by the platform.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}