"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Receipt, FileText, UtensilsCrossed, Shield, Award, Check, ArrowRight } from "lucide-react"

interface ServiceFeature {
  id: string
  title: string
  description: string
  price: string
  icon: React.ElementType
  features: string[]
  documents?: string[]
  popular?: boolean
  benefits?: string[]
  cardWidth?: string
  cardHeight?: string
}

interface ServiceCategory {
  [category: string]: ServiceFeature[]
}

interface ServicesSectionProps {
  activeCategory?: string
  services?: ServiceCategory
  categories?: string[]
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  activeCategory,
  services,
  categories,
}) => {
  const defaultServices: ServiceCategory = {
    gst: [
      {
        id: "gst",
        title: "GST Registration",
        description: "For medium to large businesses",
        price: "₹1000",
        icon: Receipt,
        popular: true,
        cardWidth: "w-[370px]",
        cardHeight: "h-[500px]",
        features: [
          "Aadhar-linked Mobile/Email",
          "PAN Card",
          "Aadhar Card",
          "Photo",
          "Business Address Proof (Electricity Bill/Rental Agreement)",
        ],
       
      },
    ],
    udyam: [
      {
        id: "udyam",
        title: "Udyam Registration",
        description: "Get your Udyam Registration hassle-free",
        price: "₹500",
        icon: FileText,
        cardWidth: "w-[380px]",
        cardHeight: "h-[480px]",
        features: [
          "Aadhar Card & Registered Mobile",
          "PAN Card",
          "Bank Passbook",
          "Shop & Unit Details",
          "Email ID",
        ],
        benefits: [
          "MSME benefits and subsidies",
          "Easy loan facilitation",
          "Government tender eligibility",
        ],
      },
    ],
    fssai: [
      {
        id: "fssai",
        title: "FSSAI Registration",
        description: "Smooth FSSAI registration process",
        price: "₹500",
        icon: UtensilsCrossed,
        cardWidth: "w-[400px]",
        cardHeight: "h-[490px]",
        features: [
          "PAN Card",
          "Aadhar Card",
          "Passport Size Photo",
          "Business Name & Details",
          "Business Address",
        ],
        benefits: [
          "Legal compliance for food business",
          "Builds consumer trust",
          "Required for food exports",
        ],
      },
    ],
    dsc: [
      {
        id: "dsc",
        title: "DSC Registration",
        description: "Class 3 DSC registration",
        price: "₹500",
        icon: Shield,
        cardWidth: "w-[420px]",
        cardHeight: "h-[470px]",
        features: [
          "PAN Card (ID Proof)",
          "Aadhaar Card (Address Proof)",
          "Passport-size Photo",
          "Email ID & Mobile Number",
        ],
        benefits: [
          "Secure digital signatures",
          "Valid for 1-2 years",
          "Accepted by all government portals",
        ],
      },
    ],
    trademark: [
      {
        id: "trademark",
        title: "Trademark Checking",
        description: "Ensure your trademark is unique",
        price: "₹350",
        icon: Award,
        cardWidth: "w-[360px]",
        cardHeight: "h-[430px]",
        features: [
          "Brand Name/Logo/Wordmark",
          "Business Type (Goods/Services)",
          "Business Class (Category)",
        ],
        benefits: [
          "Protects brand identity",
          "Prevents legal disputes",
          "Nationwide protection",
        ],
      },
    ],
  }

  const allServices = services || defaultServices
  const [currentCategory, setCurrentCategory] = useState<string>(
    activeCategory || "gst"
  )

  const getServiceIcon = (service: ServiceFeature): React.ReactNode => {
    const IconComponent = service.icon
    return <IconComponent className="h-6 w-6 text-green-600" />
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="servicessection"
      className="w-full bg-gradient-to-b from-white to-green-50 py-20 lg:py-32 px-4 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
            Comprehensive business solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
          }}
        >
          <Tabs
            defaultValue={currentCategory}
            onValueChange={setCurrentCategory}
            className="w-full flex flex-col items-center"
          >
            <TabsList className="h-auto p-1 bg-green-50 border border-green-100 rounded-full mb-8 flex flex-wrap justify-center">
              {(categories || Object.keys(allServices)).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-2.5 rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  <span className="flex items-center gap-2">
                    {category === "gst" && <Receipt className="w-4 h-4" />}
                    {category === "udyam" && <FileText className="w-4 h-4" />}
                    {category === "fssai" && <UtensilsCrossed className="w-4 h-4" />}
                    {category === "dsc" && <Shield className="w-4 h-4" />}
                    {category === "trademark" && <Award className="w-4 h-4" />}
                    {category.replace(/^\w/, (c) => c.toUpperCase()).replace("-", " ")}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {(categories || Object.keys(allServices)).map((category) => (
              <TabsContent key={category} value={category} className="w-full">
                <div className="flex flex-wrap justify-center gap-8">
                  {allServices[category].map((service, index) => (
                    <motion.div
                      key={service.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`${service.cardWidth} ${service.cardHeight}`}
                    >
                      <Card className="w-full h-full flex flex-col border border-green-300 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                        {service.popular && (
                          <div className="absolute top-0 right-0">
                            <Badge className="m-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                              Popular
                            </Badge>
                          </div>
                        )}

                        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-green-100">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-white rounded-full shadow-sm">
                                {getServiceIcon(service)}
                              </div>
                              <CardTitle className="text-xl font-semibold text-green-800">
                                {service.title}
                              </CardTitle>
                            </div>
                          </div>
                          <CardDescription className="text-sm text-green-700">
                            {service.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="p-6 pt-5 flex-grow">
                          <div className="text-3xl font-bold text-green-600 mb-4 text-center">
                            {service.price}
                          </div>
                          <ul className="space-y-3 text-sm text-gray-700">
                            {(service.features || service.documents || []).map(
                              (feature, i) => (
                                <li key={i} className="flex items-start">
                                  <Check className="mr-2 h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </CardContent>

                   

                        <CardFooter className="p-6 pt-0">
                          <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white font-medium py-4 rounded-xl group">
                            <span className="flex items-center">
                              Select Plan
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
          }}
        >
          <div className="bg-white rounded-2xl shadow-md p-8 border border-green-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Why Choose Our Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Secure & Reliable</h4>
                <p className="text-gray-600 text-sm text-center">
                  Your data is always protected with our secure processes
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Expert Guidance</h4>
                <p className="text-gray-600 text-sm text-center">
                  Our team of experts will guide you through every step
                </p>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-green-600" />
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Satisfaction Guaranteed</h4>
                <p className="text-gray-600 text-sm text-center">
                  We ensure complete satisfaction with our services
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection