'use client';

import { Layers2, SparklesIcon, StarsIcon, X } from 'lucide-react';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];

const Sidebar = ({
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
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
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

  return (
    <div
      className={` flex items-center md:justify-center justify-end z-50 h-fit w-screen py-4 bg-transparent sticky top-10  transition-all duration-500 ${isOpen ? '' : 'hidden md:flex'
        }`}
    >
      <div className='md:w-full md:mx-15 mx-8 px-3 py-3 flex flex-col md:flex-row justify-between md:rounded-full rounded-2xl items-center bg-gradient-to-r from-teal-800   to-teal-600'>
        <div className=" w-full flex justify-end md:hidden">
          <div className="flex w-fit p-2 rounded-full bg-cyan-400 justify-end items-center ">
            <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
          </div>
        </div>
        <div className='w-45 hidden md:flex'>
          <div className='ml-5 p-2 rounded-full bg-teal-600 w-fit'> 
            <Layers2 className='text-lg text-teal-200'/>
          </div>
        </div>
        <div className=" mx-2 gap-3 flex flex-col md:flex-row items-center justify-center">
          <NavigatorComponent title="home" active={activeSection === 'home'} />
          <NavigatorComponent title="about" active={activeSection === 'about'} />
          <NavigatorComponent title="resume" active={activeSection === 'resume'} />
          <NavigatorComponent title="portfolio" active={activeSection === 'portfolio'} />
        </div>
        <div className='w-45'>
          <button onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
            className='flex items-center gap-3 px-3 py-2 rounded-full bg-teal-500 transition-all duration-300 text-white cursor-pointer hover:scale-105'>
            <StarsIcon className='size-4 text-cyan-300' />
            <span className='font-semibold text-lg'>Contact Us</span>
            <SparklesIcon className='size-4 text-cyan-300' />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;

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
      className={`px-4 w-full py-1 rounded-lg cursor-pointer transition-all border-transparent border-b-5 ${active ? 'text-lg text-white  border-b-cyan-400 font-bold' : 'text-white'
        }`}
    >
      <span className="capitalize">{title}</span>
    </div>
  );
};
