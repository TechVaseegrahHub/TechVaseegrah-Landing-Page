"use client";

import React from "react";
import { useRef, useState, FormEvent, ChangeEvent } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Package2, ShoppingBag, Scale } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await emailjs.send("service_snukdgn", "template_tnc6ckm", {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_service: formData.service,
        user_message: formData.message,
      }, "VkvBxQ3RnOgrj4gE3");

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Get in touch with us for all your business compliance needs.
            </p>

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

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" name="email" placeholder="Your email" required value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input id="phone" name="phone" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      required
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="GST">GST Registration</option>
                      <option value="Udyam">Udyam Registration</option>
                      <option value="FSSAI">FSSAI Registration</option>
                      <option value="DSC">DSC Registration</option>
                      <option value="Trademark">Trade Mark Checking</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements"
                      className="min-h-[120px]"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                  {status === 'success' && <p className="text-sm text-green-600 mt-2">Message sent successfully!</p>}
                  {status === 'error' && <p className="text-sm text-red-600 mt-2">Something went wrong. Try again.</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}