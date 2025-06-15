'use client';

import { FileText, Home, Images, InfoIcon, Mail, X } from 'lucide-react';
import Image from 'next/image';
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
  const socialPlatform = [
    {
      icon:'/github.svg',
      url:"https://github.com/Krsna-Saini"
    },
    {
      icon:'/gmail.svg',
      url:"mailto:krishnasaini27169@gmail.com"
    },
    {
      icon:'/instagram.svg',
      url:"https://www.instagram.com/_krishna_saini_____/"
    },
    {
      icon:'/linked.svg',
      url:"https://www.linkedin.com/in/krishna-saini-1b487629a/"
    }
    ,
    {
      icon:'/x-twitter.svg',
      url:"https://x.com/_Krishna_Saini"
    }
    
  ]
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
      className={`w-84 flex flex-col h-screen overflow-y-auto overflow-x-hidden bg-neutral-900 absolute md:relative md:left-0 transition-all duration-500 ${isOpen ? 'left-0' : '-left-84'
        }`}
    >
      {/* Close button */}
      <div className="w-full flex justify-end">
        <div className="flex w-fit p-2 m-2 rounded-full bg-green-400 justify-end items-center md:hidden">
          <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
        </div>
      </div>

      {/* Profile */}
      <div className="flex flex-col gap-2 items-center mt-4">
        <Image
          alt="profileImage"
          width={1000}
          height={1000}
          src="/profile.png"
          className="size-40 rounded-full border-6 border-gray-500 object-cover object-top-right"
        />
        <span className="font-bold text-2xl text-white rotate-x-15 italic">Krishna Saini</span>
      </div>

      {/* Social Links */}
      <div className="flex gap-2 w-full py-2 px-5 items-center justify-around mt-3">
        {socialPlatform.map(
          (item, i) => (
            <a
              key={i}
              href={item.url}
              className="bg-black p-2 rounded-full hover:invert hover:scale-105 transition-all duration-300 hover:cursor-pointer"
            >
              <Image
                alt="platformImage"
                height={200}
                width={200}
                src={item.icon}
                className="size-6 rounded-full bg-white invert"
              />
            </a>
          )
        )}
      </div>

      {/* Navigation */}
      <div className="mt-5 mx-2 space-y-5">
        <h2 className="italic text-blue-400 m-3">Navigation</h2>
        <NavigatorComponent title="home" Icon={Home} active={activeSection === 'home'} />
        <NavigatorComponent title="about" Icon={InfoIcon} active={activeSection === 'about'} />
        <NavigatorComponent title="resume" Icon={FileText} active={activeSection === 'resume'} />
        <NavigatorComponent title="portfolio" Icon={Images} active={activeSection === 'portfolio'} />
        <NavigatorComponent title="contact" Icon={Mail} active={activeSection === 'contact'} />
      </div>
    </div>
  );
};

export default Sidebar;

// ========== NavigatorComponent ==========
const NavigatorComponent = ({
  title,
  Icon,
  active,
}: {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active: boolean;
}) => {
  const handleClick = () => {
    const el = document.getElementById(title);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-3 px-3 w-full p-2 rounded-2xl cursor-pointer transition-all hover:bg-neutral-800 ${active ? 'text-blue-400 font-bold' : 'text-white'
        }`}
    >
      <Icon />
      <span className="capitalize">{title}</span>
    </div>
  );
};
