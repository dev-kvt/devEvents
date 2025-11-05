"use client";

import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { Schibsted_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css"
import { useRef, useEffect, useState } from 'react';
import LightRays from "@/components/LightRays";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 const metadata: Metadata = {
  title: "DevEvent",
  description: "Event for Devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${schibstedGrotesk.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
  <Navbar />
<div className="absolute inset-0 top-0 z-[-1] min-h-screen">
  <LightRays
raysOrigin="top-center"
raysColor="#5dfeca"
raysSpeed={0.5}
lightSpread={0.9}
rayLength={1.2}
followMouse={true}
mouseInfluence={0.02}
noiseAmount={0}
distortion={0.01}
className=""  />
</div>

<main>    
  {children}

</main>
    
      </body>
    </html>
  );
}
