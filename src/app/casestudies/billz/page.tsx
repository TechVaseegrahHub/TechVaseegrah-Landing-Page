"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

export default function billz() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/billz.png"


  ];

 


  return (
    <>
      <Head>
        <title> billz</title>
        <meta
          name="description"
          content="AI-powered e-commerce platform case study"
        />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
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

        <div className="max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full mb-4">
          billz
            </span>
            {/* <h1 className="text-4xl font-bold mb-6">
              AI-Powered E-commerce Platform
            </h1>
            <p className="text-xl text-gray-600">
              A modern shopping experience with intelligent product
              recommendations
            </p> */}
          </div>

          {/* Image Gallery */}
                <div className="mb-6 w-full">
                  <div className="w-full relative bg-gray-100 md:mx-8">
                    <div style={{ height: "250px" }} className="md:h-[50px]">
                      <Image
                        src={images[currentImageIndex]}
                        alt={`billz ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, 1200px"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  </div>
                </div>

          <div className="prose prose-lg max-w-none">
            {/* Project Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Overview </h2>
              <p>
              Vaseegrah Veda, a renowned brand specializing in high-quality herbal products, offers a variety 
of skincare, haircare, and wellness solutions. While their products are top-notch, they struggled 
with managing customer communication and support efficiently, which impacted both customer 
experience and order management. Billzzy's all-in-one billing and order management platform 
has provided the solution, streamlining customer interactions, automating the order process, 
and enhancing overall operational efficiency. 
              </p>
            </section>

           

            {/* Features
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Recommendation Engine */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4">
              Objective 
              </h3>
              <p>
              Vaseegrah Veda wanted to enhance customer engagement, improve communication, and 
streamline order management. They aimed to eliminate the difficulties of managing offline 
orders, collecting payments from customers, and updating order statuses. By using Billzzy, they 
successfully automated the order-taking process, improved efficiency in payment collection, and 
ensured smoother workflows, resulting in happier customers and improved sales. Billzzy helped 
them overcome previous challenges, significantly enhancing overall operational efficiency. 
              </p>

            
            </section>

            {/* Results */}
            {/* <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <ul>
                <li>35% increase in conversion rate</li>
                <li>28% higher average order value</li>
                <li>42% reduction in cart abandonment</li>
                <li>4.8/5 average user satisfaction rating</li>
              </ul>
            </section> */}

            {/* Challenges */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Solution</h2>
              <p>
              By integrating Billzzy, Vaseegrah Veda was able to revolutionize their order management and 
customer interactions. Previously, they struggled with managing offline orders, collecting 
payments from customers, and updating order statuses. Billzzy streamlined the entire process 
by automating order-taking, payment collection, and order status updates. The platform 
efficiently managed inventory and ensured smooth printing, packing, and tracking of orders. 
With Billzzy, Vaseegrah Veda was able to offer exceptional service, improve operational 
efficiency, and reduce manual overhead, leading to happier customers and significant revenue 
growth.
              </p>
            </section>


          

            {/* CTA */}
            <section className="my-12 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold mb-4">
              Revenue
              </h2>
              <p>
              Within 4 months of integrating Billzzy, Vaseegrah Veda saw a substantial revenue increase of 
₹9,06,681.00, thanks to the enhanced customer engagement and operational efficiency 
provided by the platform. 
              </p>
            
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
