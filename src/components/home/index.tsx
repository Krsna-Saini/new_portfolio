import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image';
import { SidebarOpenIcon, Sparkles, SparklesIcon, StarsIcon } from 'lucide-react';
const Homecomponent = ({ setIsOpen, isOpen }: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}) => {
  const socialPlatform = [
    {
      icon: '/github.svg',
      url: "https://github.com/Krsna-Saini"
    },
    {
      icon: '/gmail.svg',
      url: "mailto:krishnasaini27169@gmail.com"
    },
    {
      icon: '/linked.svg',
      url: "https://www.linkedin.com/in/krishna-saini-1b487629a/"
    }
    ,
    {
      icon: '/x-twitter.svg',
      url: "https://x.com/_Krishna_Saini"
    }

  ]
  return (
    <section id='home' className="h-screen relative -top-10 md:-top-20 flex items-center justify-between px-3 md:pl-10 bg-neutral-950">
      <div className={` ${isOpen && "hidden"} absolute md:hidden z-50 top-20 right-5 bg-cyan-400 p-2 rounded-full`}>
        <SidebarOpenIcon onClick={() => {
          setIsOpen(true)
        }} />
      </div>
      <div className="text-white w-full max-w-2xl">
        <div className='flex items-center my-4 '>
          <span className='text-xl'>Welcome to my world </span> <Sparkles className='text-yellow-400 size-5 ml-1' />
        </div>
        <h1 className="mb-4">
          <span className='md:text-6xl text-4xl font-semibold'>Hi,I&apos;m </span>
          <span className='text-2xl'>Krishna Saini</span>
        </h1>
        <div>
          <strong className='md:text-6xl text-4xl text-teal-400 font-bold'>Full Stack </strong>
          <strong className='md:text-6xl text-4xl'> Developer</strong>
        </div>
        <p className="text-xl font-light mt-6">
          Passionate about building robust and scalable full-stack applications that address real-world problems, enhance user experience. I enjoy turning ideas into functional, impactful solutions using modern tools and frameworks.
        </p>
        <div className='w-fit flex gap-4 md:gap-8 items-center justify-center mt-15 '>
          <button
            onClick={() => {
              const el = document.getElementById("portfolio");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className='flex items-center gap-3 px-3 md:gap-6 md:px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all border border-white duration-300 text-white cursor-pointer hover:scale-105'
          >
            <StarsIcon className='size-4 text-teal-200' />
            <span className='font-semibold md:text-lg'>My Projects</span>
            <SparklesIcon className='size-4 text-teal-200' />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className='flex items-center gap-3 px-3 md:gap-6 md:px-6 py-3 rounded-full hover:bg-white transition-all hover:text-black border-white border duration-300 text-white cursor-pointer hover:scale-105'
          >
            <StarsIcon className='size-4 text-teal-200' />
            <span className='font-semibold md:text-lg'>Dowload CV</span>
            <SparklesIcon className='size-4 text-teal-200' />
          </button>
        </div>
        <div className="flex mt-10 gap-2 w-70 py-2 px-5 items-center justify-around">
          {socialPlatform.map(
            (item, i) => (
              <a
                key={i}
                href={item.url}
                className="bg-white p-2 rounded-full hover:scale-115 transition-all duration-300 hover:cursor-pointer"
              >
                <Image
                  alt="platformImage"
                  height={200}
                  width={200}
                  src={item.icon}
                  className="size-6 rounded-full "
                />
              </a>
            )
          )}
        </div>
      </div>

      <div className="flex-shrink-0 hidden lg:flex mr-10">
        <Image
          src="/profile2.jpg" // update to public path if needed
          alt="Krishna's profile"
          width={400}
          height={400}
          className="shadow-2xl size-94 shadow-gray-900 object-cover object-right-top rounded-full "
        />
      </div>
    </section>
  );
}

export default Homecomponent