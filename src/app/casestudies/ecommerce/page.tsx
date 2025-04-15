"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

export default function Ecommerce() {
  const router = useRouter();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [projectImages] = useState([
    "/images/krish.png",
    "/images/futurenature.png"
  ]);

  return (
    <>
      <Head>
        <title>Project Case Studies </title>
        <meta
          name="description"
          content="Showcase of successful project implementations"
        />
      </Head>

      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Back Button */}
        <div className="mb-6 md:mb-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm md:text-base"
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

        <div className="max-w-4xl mx-auto">
          {/* Hero section */}
          <div className="mb-8 md:mb-12">
            <span className="inline-block px-3 py-1 text-xs md:text-sm font-semibold text-blue-800 bg-blue-100 rounded-full mb-3 md:mb-4">
              {currentProjectIndex === 0 ? "E-commerce Solution" : "Digital Solution"}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              {currentProjectIndex === 0 ? "Ecommerce Website Case Study" : "Ecommerce Website Case Study"}
            </h1>
            <p className="text-base md:text-xl text-gray-600">
              {currentProjectIndex === 0 ? "Krish Collections (Website)" : "Future Nature(Website)"}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mb-8 md:mb-12">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-4 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-sm md:text-xl">
                  {currentProjectIndex === 0 ? "Krish Collections " : "Future Nature(Website) "}
                </span>
              </div>

              <Image
                src={projectImages[currentProjectIndex]}
                alt={currentProjectIndex === 0 ? "Krish " : "futurenature"}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 120px) 50vw, 800px"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>

            <div className="flex space-x-2 justify-center mb-4">
              <button
                onClick={() => setCurrentProjectIndex(0)}
                className={`w-3 h-3 rounded-full ${
                  currentProjectIndex === 0 ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label="View Krish Collections project"
              />
              <button
                onClick={() => setCurrentProjectIndex(1)}
                className={`w-3 h-3 rounded-full ${
                  currentProjectIndex === 1 ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label="view future nature project"
              />
            </div>
            
            <div className="flex justify-center mt-4">
              <button 
                onClick={() => setCurrentProjectIndex(currentProjectIndex === 0 ? 1 : 0)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm md:text-base"
              >
                {currentProjectIndex === 0 ? "View " : "View "}
              </button>
            </div>
          </div>

          <div className="prose prose-sm md:prose-lg max-w-none">
            {/* Project Overview */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Overview</h2>
              {currentProjectIndex === 0 ? (
                <p className="text-sm md:text-base">
                  With the growing popularity of online shopping, Krish Collections, a clothing business offering a 
                  wide range of apparel, decided to launch an eCommerce platform. The goal was to create a 
                  user-friendly website that could cater to various types of clothing, including casual wear and 
                  ethnic attire. The website needed to be modern, mobile-friendly, and easy to use, to enhance 
                  customer experience and drive sales.
                </p>
              ) : (
                <p className="text-sm md:text-base">
                  Future Nature, a honey business specializing in 100% pure and natural honey, sought to 
                  establish a modern, user-friendly online store to connect with customers. The goal was to create 
                  a visually appealing website that effectively communicated the purity and quality of their honey 
                  products while offering a seamless shopping experience for customers. 
                </p>
              )}
            </section>

            {/* Objectives */}
            <section className="mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Objectives</h3>
              {currentProjectIndex === 0 ? (
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                  <li>To create a fully functional and visually appealing eCommerce website for selling various 
                  types of clothing.</li>
                  <li>To offer a smooth shopping experience with clear product categories and filtering 
                  options.</li>
                  <li>To include promotional discounts and offers to attract more customers and boost sales.</li>
                  <li>To ensure the website is responsive, providing a good experience on both desktop and 
                  mobile devices.</li>
                  <li>To integrate a secure payment system with multiple payment options for customers.</li>
                  <li>To improve website speed and performance for faster load times and a better user 
                  experience.</li>
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                  <li>To design and develop a fully functional and visually appealing eCommerce website to 
                  sell pure honey and related products. </li>
                  <li>To ensure the website was easy to navigate, with clear product categorization and 
                  simple filtering options for a smooth shopping experience. </li>
                  <li>To enhance the customer experience by incorporating user-friendly features such as a 
                  back-to-top button with a honey bee animation. </li>
                  <li> To create a website that showcases the natural and organic qualities of the products with 
                  a vibrant, attractive design. </li>
                  <li>To integrate a secure and reliable payment system for easy and safe transactions.</li>
                  <li>To ensure the website is fully responsive, providing a great shopping experience on both 
                  desktop and mobile devices. </li>
                </ul>
              )}
            </section>

            {/* Solution */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Solution</h2>
              <p className="text-sm md:text-base">
                The website was developed with several key features to meet the business needs of {currentProjectIndex === 0 ? "Krish Collections" : "Future Nature"}: 
              </p>
              {currentProjectIndex === 0 ? (
                <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Responsive Design</h4>
                      <p className="text-gray-700 text-sm md:text-base">The website was made fully responsive, ensuring customers have a consistent and 
                      easy experience whether browsing on a desktop or mobile device. </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Product Categories and Filters</h4>
                      <p className="text-gray-700 text-sm md:text-base">The website displays different product categories like "Exclusive Kurti Collection" and 
                      "Ethnic Wear" on the homepage, helping customers easily find what they are looking for. 
                      Filters were added to help sort through clothing options. </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Visual Design</h4>
                      <p className="text-gray-700 text-sm md:text-base">A clean, modern design was used, with high-quality product images, allowing customers 
                      to clearly see the clothing and make better purchasing decisions. </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Secure Payment System</h4>
                      <p className="text-gray-700 text-sm md:text-base">The website includes a secure payment gateway that supports various payment 
                      methods like credit/debit cards, net banking, and UPI, ensuring safe and easy 
                      transactions.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Promotions and Discounts</h4>
                      <p className="text-gray-700 text-sm md:text-base">Offers like "Get 10% off on purchases above ₹3000" and "5% off on purchases above                 
                      ₹1500" were added to encourage customers to make larger purchases and increase      
                      sales. </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Back-to-Top Button with Honey Bee Animation: </h4>
                      <p className="text-gray-700 text-sm md:text-base">A fun, interactive back-to-top button was added, featuring a honey bee animation. This 
                      not only adds a playful touch but also enhances user experience by making it easier for 
                      customers to navigate back to the top of the page. </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Responsive Design: </h4>
                      <p className="text-gray-700 text-sm md:text-base">The website was designed to be fully responsive, ensuring customers could shop easily 
                      from any device, whether desktop, tablet, or mobile. The design adapts seamlessly 
                      across screen sizes, making the site accessible to a wider audience. </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Product Categories and Filters: </h4>
                      <p className="text-gray-700 text-sm md:text-base">To help customers find the products they are looking for quickly, the website includes 
                      well-organized product categories and an easy-to-use filter system. This allows 
                      customers to browse different honey products with ease.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Visual Design: </h4>
                      <p className="text-gray-700 text-sm md:text-base">The design uses bright and vibrant colors with a focus on high-quality images of the 
                      honey jars, reinforcing the natural and organic quality of the products. The visuals are 
                      clean, modern, and align with the brand's values of purity and sustainability.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 md:mr-4 text-blue-600 font-bold">●</div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base"> Secure Payment System: </h4>
                      <p className="text-gray-700 text-sm md:text-base">A trusted and secure payment gateway was integrated, providing customers with 
                      multiple payment options, such as credit/debit cards, net banking, and UPI. This ensures 
                      safe and convenient transactions for all users.</p>
                      <p className="text-gray-700 text-sm md:text-base mt-2">
                        With these features, Future Nature's website offers an engaging, seamless shopping 
                        experience, enhancing both user interaction and customer satisfaction, while effectively 
                        showcasing the company's products.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}