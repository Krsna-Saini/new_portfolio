"use client"

import Navbar from "@/components/Navbar";
import { useState } from "react";
import * as React from "react"
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Homecomponent from "@/components/home";
import Timeline from "@/components/Timeline";
import Contact from "@/components/contact";
import { Toaster } from "sonner";
import { Option } from "lucide-react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="max-w-screen relative  bg-neutral-950">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Option onClick={()=>{
        setIsOpen(true)
      }}/>
      <div className=" relative max-w-screen overflow-x-hidden ">
        {/* home */}
        <Homecomponent isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* seperator */}
        <hr className="w-7/8  bg-cyan-500/90 shadow-2xl shadow-cyan-300 h-1 rounded-[100%] my-4 mx-auto" />

        {/* about */}
        <About />
        {/* seperator */}
        <hr className="w-7/8  bg-cyan-500/90 shadow-2xl shadow-cyan-300 h1  rounded-[100%] my-4 mx-auto" />

        {/* Resume */}
        <Timeline/>

        {/* seperator */}
        <hr className="w-7/8  bg-cyan-500/90 shadow-2xl shadow-cyan-300 h1  rounded-[100%] my-4 mx-auto" />

        {/* Portfolio */}
        <Portfolio />
        {/* seperator */}
        <hr className="w-7/8  bg-cyan-500/90 shadow-2xl shadow-cyan-300 h1  rounded-[100%] my-4 mx-auto" />

        {/* contact */}
        <Contact />

      </div>
      <Toaster />
    </div>
  );
}
