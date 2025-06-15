import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { SidebarOpenIcon } from 'lucide-react';
const Homecomponent = ({setIsOpen,isOpen}:{
    setIsOpen:Dispatch<SetStateAction<boolean>>
    isOpen:boolean
}) => {
 return (
    <section id='home' className="h-screen flex items-center justify-between px-10 bg-gradient-to-r from-neutral-400 via-neutral-700 to-neutral-800">
        <div className={` ${isOpen && "hidden"} absolute md:hidden top-3 right-10 bg-green-400 p-2 rounded-full`}>
            <SidebarOpenIcon onClick={()=>{
            setIsOpen(true)
        }}/></div>
      <div className="text-white max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Hey, I&apos;m Krishna —{" "}
          <span className="text-green-400">
            <Typewriter
              words={['Developer', 'Designer', 'Creator']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          Passionate about building full-stack apps that solve real-world problems.
        </p>
      </div>

      <div className="flex-shrink-0 hidden lg:flex">
        <Image
          src="/profile.png" // update to public path if needed
          alt="Krishna's profile"
          width={400}
          height={400}
          className="shadow-2xl rounded-full"
        />
      </div>
    </section>
  );
}

export default Homecomponent