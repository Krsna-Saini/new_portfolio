'use client';

import { Layers2, SparklesIcon, StarsIcon, X } from 'lucide-react';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
const sections = ['timeline', 'home', 'about', 'portfolio', 'contact'];


const Navbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [activeSection, setActiveSection] = useState('');

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight
          const coverage =
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const el = document.getElementById(id);
          if (el) {
            console.log('Observing:', id); // Add this
            observer.observe(el);
          } else {
            console.warn('NOT FOUND:', id); // Add this too
          }
          if (coverage >= viewportHeight / 2) {
            setActiveSection(id);
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observerRef.current?.disconnect();
  }, []);
  console.log(activeSection)
  return (
    <div
      className={` flex  items-center md:justify-center justify-end z-50 h-fit w-screen py-4 bg-transparent sticky top-0  transition-all duration-500 ${isOpen ? '' : 'hidden md:flex'
        }`}
    >
      <div className='md:w-[90%] lg:w-[80%] md:mx-15 mx-8 px-3 py-3 absolute top-4 flex flex-col md:flex-row justify-between md:rounded-full rounded-2xl items-center bg-gradient-to-r from-teal-800 via-teal-600/80  to-teal-500/80'>
        <div className=" w-full flex justify-end md:hidden">
          <div className="flex w-fit p-2 rounded-full bg-cyan-400 justify-end items-center ">
            <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
          </div>
        </div>
        <div className='w-40 hidden md:flex'>
          <div className='ml-5 p-2 rounded-full bg-teal-600 w-fit'>
            <Layers2 className='text-lg text-teal-200' />
          </div>
        </div>
        <div className=" mx-2 gap-3 flex flex-col md:flex-row items-center justify-center">
          <NavigatorComponent title="home" active={activeSection === 'home'} />
          <NavigatorComponent title="about" active={activeSection === 'about'} />
          <NavigatorComponent title="timeline" active={activeSection === 'timeline'} />
          <NavigatorComponent title="portfolio" active={activeSection === 'portfolio'} />
        </div>
        <div className='w-45 mt-2 md:mt-0'>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-teal-400 text-white font-semibold text-lg cursor-pointer shadow-lg hover:scale-105 hover:bg-teal-400 hover:shadow-xl transition-all duration-300"
          >
            <StarsIcon className="size-4 text-cyan-200 drop-shadow-md" />
            <span className="font-semibold">Contact Us</span>
            <SparklesIcon className="size-4 text-cyan-200 drop-shadow-md" />
          </button>

        </div>
      </div>

    </div>
  );
};

export default Navbar;

// ========== NavigatorComponent ==========
const NavigatorComponent = ({
  title,
  active,
}: {
  title: string;
  active: boolean;
}) => {
  const handleClick = () => {
    const el = document.getElementById(title);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className={`px-4 w-full py-1 rounded-xl cursor-pointer transition-all border-transparent border-b-5 ${active ? 'text-lg text-white  border-b-cyan-400 font-bold' : 'text-white'
        }`}
    >
      <span className="capitalize">{title}</span>
    </div>
  );
};
