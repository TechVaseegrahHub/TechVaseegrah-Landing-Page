"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

export default function F3() {
  const router = useRouter();
  const [currentImageIndex] = useState(0);

  const images = [
    "/images/f3log.png"
  ];

  return (
    <>
      <Head>
        <title>billz</title>
        <meta
          name="description"
          content="AI-powered e-commerce platform case study"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-full py-2 md:py-4">
        {/* Back Button */}
        <div className="mb-2 px-2 md:px-8 w-full max-w-7xl mx-auto">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
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

        <div className="w-full max-w-6xl mx-auto">
          {/* Hero section */}
          <div className="mb-2 px-2 md:px-8">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full mb-1">
              F3-engine Application 
            </span>
          </div>

          {/* Image Gallery with decreased width */}
          <div className="mb-4 w-full flex justify-center">
            <div className="relative bg-gray-100 w-3/5 h-[250px] md:h-[500px]">
              <Image
                src={images[currentImageIndex]}
                alt={`F3-engine application screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 60vw, 60%"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
          </div>

          <div className="prose prose-sm md:prose-lg max-w-none px-2 md:px-8">
            {/* Project Overview */}
            <section className="mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Overview</h2>
              <p>
                F3-engine is a powerful multi-tenant SaaS platform built to automate and manage backend operations for e-commerce businesses, especially those using WooCommerce. It centralizes key post-order processes such as billing, packing, tracking, printing, and inventory management. Each tenant operates in a secure, isolated environment with custom workflows. The platform also integrates with WhatsApp to handle conversational commerce and order updates. A dynamic dashboard provides real-time analytics for smarter decision-making. With modular components and print-ready templates, F3-engine streamlines operations from order to delivery, all in one place. 
              </p>
            </section>

            {/* Recommendation Engine */}
            <section className="mb-4 md:mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                Objective 
              </h3>
              <ol className="mt-1 md:mt-2 space-y-1 md:space-y-2">
                <li>
                  <strong>1. Simplify E-commerce Backend Operations:</strong> Streamline order processing, billing, packing, and tracking into one centralized platform for WooCommerce-based businesses.
                </li>
                <li>
                  <strong>2. Enable Multi-Tenant SaaS Architecture:</strong> Allow multiple businesses to use the platform independently with isolated data, branding, and access controls.
                </li>
                <li>
                  <strong>3. Automate Post-Order Workflows:</strong> Reduce manual efforts by automating tasks like invoice generation, label printing, order tracking, and customer communication.
                </li>
                <li>
                  <strong>4. Integrate WhatsApp for Commerce:</strong> Use WhatsApp APIs to enable order flow, customer interaction, and payment confirmation through a conversational interface.
                </li>
                <li>
                  <strong>5. Support Smart Printing & Inventory Management:</strong> Offer flexible printing options (A4, 4x6, 4x4, etc.) and live inventory tracking for efficient warehouse and shipping operations.
                </li>
                <li>
                  <strong>6. Provide Actionable Business Insights:</strong> Deliver real-time analytics and sales insights to help businesses make data-driven decisions through visual dashboards and reports
                </li>
              </ol>
            </section>

            {/* Challenges */}
            <section className="mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Solution</h2>
              <p>
                F3-engine provides a complete backend solution that automates post-order workflows and eliminates manual processing for WooCommerce stores. It features smart modules for packing, billing, tracking, holding, and printing, each tailored to streamline warehouse and order management. The system supports multiple paper sizes for invoices and packing slips, and allows local or remote printing. With WhatsApp integration, businesses can manage orders and communicate directly with customers in real time. Built on a scalable multi-tenant architecture, F3-engine ensures data isolation and customization per client. It empowers e-commerce businesses to run smoother, faster, and more efficiently from a single dashboard.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}