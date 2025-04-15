import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header"; // Make sure this path is correct
import { Footer }from "@/sections/Footer"; // Make sure this is properly exported too
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Vaseegrah",
  description: "Transforming small businesses into smart businesses",
  icons: {
    icon: "/tech-vaseegrah.png",
    apple: "/tech-vaseegrah.png",  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <Head>
        <link rel="icon" href="/tech-vaseegrah.png" />
      </Head>
      <body className={twMerge(dmSans.className, "antialiased bg-[#FFF]")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}