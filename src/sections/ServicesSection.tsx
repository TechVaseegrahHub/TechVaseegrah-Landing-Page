"use client"

import { useState, useMemo } from "react"
import { ChevronRight, Receipt, FileText, Globe, Shield, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Helper component for category icons
function CategoryIcon({ category }: { category: string }) {
  const getIcon = () => {
    switch (category) {
      case "business-registration":
        return <Receipt className="h-5 w-5" />
      case "gst-services":
        return <FileText className="h-5 w-5" />
      case "license-permits":
        return <FileText className="h-5 w-5" />
      case "import-export":
        return <Globe className="h-5 w-5" />
      case "tax-services":
        return <Shield className="h-5 w-5" />
      default:
        return <ShoppingBag className="h-5 w-5" />
    }
  }

  return getIcon()
}

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("business-registration")

  const categories = useMemo(
    () => [
      { id: "business-registration", name: "GST Registration", icon: Receipt },
      { id: "gst-services", name: "Udayam Registration", icon: FileText },
      { id: "license-permits", name: "FSSAI Registration", icon: FileText },
      { id: "import-export", name: "DSC Registration", icon: Globe },
      { id: "tax-services", name: "Trade Mark Checking", icon: Shield },
    ],
    [],
  )

  const services = useMemo(
    () => ({
      "business-registration": [
        {
          title: "Private Limited",
          description: "For medium to large businesses",
          price: "₹1000",
          features: [
            "Aadhar-linked Mobile/Email",
            "PAN Card",
            "Aadhar Card",
            "Photo",
            "Business Address Proof (Electricity Bill/Rental Agreement)",
            "Bank Details (Passbook/Statement/Cheque)",
          ],
        },
      ],
      "gst-services": [
        {
          title: "Documents Required for Udyam Registration",
          description: "Get your Udyam Registration hassle-free",
          price: "₹500",
          features: [
            "Aadhar Card & Registered Mobile",
            "PAN Card",
            "Bank Passbook",
            "Shop & Unit Details (Name, Address)",
            "Email ID",
            "Employee Details",
            "IT File (if available)",
            "Photo",
            "Business Details",
          ],
        },
      ],
      "license-permits": [
        {
          title: "FSSAI License - Required Documents",
          description: "Smooth FSSAI registration process",
          price: "₹500",
          features: [
            "PAN Card",
            "Aadhar Card",
            "Passport Size Photo",
            "Business Name & Details",
            "Business Address",
            "Email ID & Mobile Number",
            "Rental Agreement / Electricity Bill",
          ],
        },
      ],
      "import-export": [
        {
          title: "DSC Registration - Required Documents",
          description: "Class 3 DSC registration",
          price: "₹500",
          features: [
            "PAN Card (ID Proof)",
            "Aadhaar Card (Address Proof)",
            "Passport-size Photo (JPEG)",
            "Email ID & Mobile Number (OTP Verification)",
          ],
        },
      ],
      "tax-services": [
        {
          title: "Trademark Checking - Required Documents",
          description: "Ensure your trademark is unique",
          price: "₹350",
          features: ["Brand Name / Logo / Wordmark", "Business Type (Goods/Services)", "Business Class (Category)"],
        },
      ],
    }),
    [],
  )

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id)
  }

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl 
        md:text-[54px] md:leading-[60px] 
        font-bold tracking-tighter">Our Services</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Comprehensive business solutions tailored to your needs
          </p>
        </div>

        {/* Mobile Category Selector */}
        <div className="md:hidden w-full mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-md transition-all ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white font-medium"
                    : "bg-green-50 hover:bg-green-100"
                }`}
              >
                <CategoryIcon category={category.id} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block w-72 shrink-0">
            <div className="sticky top-24 border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-muted p-4 font-medium border-b">
                <h3 className="text-lg">Service Categories</h3>
              </div>
              <nav className="flex flex-col p-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`flex items-center gap-3 text-left px-4 py-3 rounded-md transition-all ${
                      activeCategory === category.id ? "bg-green-600 text-white font-medium" : "hover:bg-green-50"
                    }`}
                  >
                    <CategoryIcon category={category.id} />
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <CategoryIcon category={activeCategory} />
              <h3 className="text-2xl font-bold">{categories.find((c) => c.id === activeCategory)?.name}</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services[activeCategory as keyof typeof services].map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-green-300 border-green-100 group"
                >
                  <CardHeader className="bg-gradient-to-br from-green-50 to-green-100/50 pb-4">
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-green-600">{service.price}</div>
                    <ul className="mt-4 space-y-3 text-sm">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-green-600 group-hover:translate-x-0.5 transition-transform" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t bg-green-50/50 pt-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Select Plan</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
