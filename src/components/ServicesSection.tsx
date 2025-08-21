import React from "react";
import { Button } from "../components/ui/button";  // Importing Button from the correct file
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "../components/ui/card"; // Ensure CardFooter is correctly imported

import { ChevronRight } from "lucide-react"; // Import ChevronRight from lucide-react

export default function ServicesSection({ activeCategory, services, categories }: any) {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Comprehensive business solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services[activeCategory]?.map((service: any, index: number) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-green-300 border-green-100 group">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100/50 pb-4">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-700">{service.price}</div>
                <ul className="mt-4 space-y-3 text-sm">
                  {service.features.map((feature: any, i: number) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="mr-2 h-4 w-4 mt-0.5 text-green-700 group-hover:translate-x-0.5 transition-transform" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t bg-green-50/50 pt-4">
                <Button className="w-full bg-green-700 hover:bg-green-700 text-white">Select Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
