import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Vaseegrah",
  description: "Transforming small businesses into smart businesses",
  icons: {
    icon: [
      { url: "/tech-v.png", sizes: "32x32", type: "image/png" },
      { url: "/tech-v.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/tech-v.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#FFF]")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
