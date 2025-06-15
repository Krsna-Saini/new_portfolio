"use client"

import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import * as React from "react"
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Homecomponent from "@/components/home";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex w-screen  relative bg-gray-800">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="h-screen w-full overflow-y-auto overflow-x-hidden">
        {/* home */}
        <Homecomponent isOpen={isOpen} setIsOpen={setIsOpen}/>

        {/* seperator */}
        <hr className="w-4/5 border-t border-gray-700 my-4 mx-auto" />

        {/* about */}
        <About />

        {/* seperator */}
        <hr className="w-4/5 border-t border-gray-700 my-4 mx-auto" />

        {/* Resume */}
        <Resume />

        {/* seperator */}
        <hr className="w-4/5 border-t border-gray-700 my-4 mx-auto" />

        {/* Portfolio */}
        <Portfolio />
        {/* seperator */}
        <hr className="w-4/5 border-t border-gray-700 my-4 mx-auto" />

        {/* contact */}
        <Contact />
      </div>
    </div>
  );
}
