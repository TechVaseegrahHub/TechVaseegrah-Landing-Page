"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Head from "next/head"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default function Gowhat() {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = ["/assets/images/GoWhats.png"]

  return (
    <>
      <Head>
        <title>GoWhats</title>
        <meta name="description" content="AI-powered e-commerce platform case study" />
      </Head>

        {/* Navigation */}
          <div className="container mx-auto px-4 py-3 flex items-center mt-10">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </button>
          </div>
        <div>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            {/* Header Section */}
            <header className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                {/* Image Container */}
                <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <Image
                    src={images[currentImageIndex] || "/placeholder.svg"}
                    alt="GoWhats Case Study"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).src = "/public/images/GoWhats.png"
                    }}
                  />
                </div>

                {/* Title Container */}
                <div className="w-full md:w-1/2">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full mb-4">
                    Case Study
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">GoWhats for Vaseegrah Veda</h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    How an AI-powered WhatsApp solution transformed customer engagement and boosted revenue for a
                    premium herbal products brand.
                  </p>
                </div>
              </div>
            </header>

            {/* Key Metrics */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Revenue Increase</h3>
                  <p className="text-3xl font-bold text-emerald-600">₹816,899</p>
                  <p className="text-sm text-gray-500 mt-1">Within 4 months of implementation</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Customer Response Time</h3>
                  <p className="text-3xl font-bold text-emerald-600">24/7</p>
                  <p className="text-sm text-gray-500 mt-1">Instant automated responses</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Order Processing</h3>
                  <p className="text-3xl font-bold text-emerald-600">Streamlined</p>
                  <p className="text-sm text-gray-500 mt-1">From inquiry to delivery</p>
                </div>
              </div>
            </section>

            {/* Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Overview Section */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-gray-700 font-medium">01</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                    <div className="prose prose-gray">
                      <p>
                        Vaseegrah Veda, a renowned brand specializing in high-quality herbal products, offers a variety
                        of skincare, haircare, and wellness solutions. While their products are top-notch, they
                        struggled with managing customer communication and support efficiently on WhatsApp, which
                        impacted both customer experience and order management.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Objective Section */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-gray-700 font-medium">02</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Objective</h2>
                    <div className="prose prose-gray">
                      <p>
                        Vaseegrah Veda wanted to enhance customer engagement, improve communication, and streamline
                        order management. They aimed to provide 24/7 support, automate the order-taking process, and
                        ensure a smoother, more efficient workflow, leading to happier customers and improved sales.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Solution Section */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-gray-700 font-medium">03</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
                    <div className="prose prose-gray">
                      <p>
                        By integrating GoWhats, Vaseegrah Veda was able to revolutionize their customer interactions and
                        order management. The platform&apos;s 24/7 chatbot responded to customers instantly, taking
                        orders directly through WhatsApp. The seamless printing, packing, and tracking modules ensured
                        that orders were processed and dispatched smoothly.
                      </p>
                      <p>
                        Additionally, GoWhats enabled personalized broadcast and greeting messages to keep customers
                        informed and engaged, while inventory management streamlined stock tracking. This all-in-one
                        solution helped Vaseegrah Veda offer exceptional service, improve operational efficiency, and
                        achieve significant revenue growth.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Results Section */}
              <section>
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-gray-700 font-medium">04</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
                    <div className="prose prose-gray">
                      <p>
                        Within 4 months of integrating GoWhats, Vaseegrah Veda saw a substantial revenue increase of
                        ₹816,899.00, thanks to the enhanced customer engagement and operational efficiency provided by
                        the platform.
                      </p>
                      <p>
                        The business experienced improved customer satisfaction, reduced response times, and more
                        efficient order processing. The automated system allowed the team to focus on product quality
                        and business growth rather than manual communication management.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </main>

        
      </div>
    </>
  )
}
