import { Package2, ShoppingBag, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const categories = [
    { id: "business-registration", name: "GST Registration" },
    { id: "gst-services", name: "Udayam Registration" },
    { id: "license-permits", name: "FSSAI Registration" },
    { id: "import-export", name: "DSC Registration" },
    { id: "tax-services", name: "Trade Mark Checking" },
  ]

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl md:text-[54px] md:leading-[60px] 
        font-bold tracking-tighter">Ready to Get Started?</h2>
            <p className="max-w-[600px] text-muted-foreground text-[22px] 
        leading-[30px] tracking-tight md:text-xl/relaxed">
              Contact us today to learn more about our business services and how we can help you streamline your
              operations.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <Package2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">Monday - Saturday: 9AM - 6PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <ShoppingBag className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Office Address</h3>
                  <p className="text-sm text-muted-foreground">9, Vijaya Nagar, Reddypalayam Road, Thanjavur-613009</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <Scale className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Customer Support</h3>
                  <p className="text-sm text-muted-foreground">admin@techvaseegrah.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>

              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    >
                      <option value="">Select a service</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your requirements" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
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
}
