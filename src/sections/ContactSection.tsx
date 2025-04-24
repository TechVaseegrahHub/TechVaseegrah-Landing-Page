"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Clock, MapPin } from "lucide-react"

interface ContactSectionProps {
  categories: Array<{
    id: string
    name: string
  }>
}

export const ContactSection = ({ categories }: ContactSectionProps) => (
  <section
    id="contact"
    className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Ready to Get Started Section */}
        <div className="flex flex-col justify-center space-y-6 lg:pr-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Ready to Get Started?
            </h2>
            {/* <p className="max-w-[600px] text-lg text-gray-600 dark:text-gray-300">
              Let&apos;s connect and discuss how we can help your business grow. 
              Our team is ready to assist you with all your needs.
            </p> */}
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                <p className="text-gray-600 dark:text-gray-400">Monday - Saturday: 9AM - 6PM</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Closed on Sundays and public holidays</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Office Address</h3>
                <p className="text-gray-600 dark:text-gray-400">9, Vijaya Nagar, Reddypalayam Road</p>
                <p className="text-gray-600 dark:text-gray-400">Thanjavur&#8209;613009, Tamil Nadu</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customer Support</h3>
                <p className="text-gray-600 dark:text-gray-400">admin@techvaseegrah.com</p>
                <p className="text-gray-600 dark:text-gray-400">+91 9876543210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="lg:pl-8">
          <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Contact Us
              </CardTitle>
              {/* <CardDescription className="text-gray-600 dark:text-gray-400">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </CardDescription> */}
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="h-11"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 1234567890" 
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-black dark:focus:ring-black"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="gst">GST Registration</option>
                  <option value="udyam">Udyam Registration</option>
                  <option value="fssai">FSSAI Registration</option>
                  <option value="dsc">DSC Registration</option>
                  <option value="trademark">Trade Mark Checking</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements in detail..."
                    className="min-h-[140px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-base font-medium transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
)