import React from "react";
import { Timeline } from "../ui/timeline";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradiant";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ColourfulText } from "../ui/colorfull-text";
export default function TimelinePortfolio() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <TextGenerateEffect
            words="Started my coding journey right after entering IIT BHU by learning C++. Explored the basics of programming and wrote my first console-based projects."
            className="text-2xl font-bold mb-10"
          />
          <div className="grid grid-cols-2 gap-3">
            <BackgroundGradient>
              <Image
                src="/cpp1.jpg"
                alt="cpp learning"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/cpp4.png"
                alt="cpp learning"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/cpp2.png"
                alt="cpp learning"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/cpp3.png"
                alt="cpp learning"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <TextGenerateEffect
            words="Took a deep dive into **Competitive Programming (CP)** and **Data Structures & Algorithms (DSA)** using C++. 
            Participated in contests and sharpened my problem-solving skills."
            className="text-2xl font-bold mb-10"
          />
          <div className="grid grid-cols-2 gap-3">
            <BackgroundGradient>
              <Image
                src="/cpp1.jpg"
                alt="cp practice"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/DSA1.png"
                alt="dsa solving"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/DSA2.png"
                alt="leetcode solving"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/DSA3.png"
                alt="cp contests"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <div className="mb-8">
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
              <p>Transitioned into</p><ColourfulText text=" Full-Stack Dev" />
            </h1>
            <TextGenerateEffect
              className="text-2xl font-bold mb-8 text-gray-200"
              words={
                `• Focused on building real-world applications, enhancing my skills in both front-end and back-end development.\n
• Worked on multiple projects, including a real-time chat app and a lawyer appointment system.\n
• Learned responsive design and advanced UI/UX using Tailwind CSS and ShadCN UI.\n
• Integrated GraphQL, MongoDB, and Express.js into projects.`
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <BackgroundGradient>
              <Image
                src="/chatassistant.png"
                alt="web project"
                width={1000}
                height={1000}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/notesmania.png"
                alt="full stack"
                width={1000}
                height={1000}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/nexus.png"
                alt="chat app"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
            <BackgroundGradient>
              <Image
                src="/bettercallsaul.png"
                alt="portfolio site"
                width={500}
                height={500}
                className="h-20 w-full rounded-2xl object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
              />
            </BackgroundGradient>
          </div>
        </div >
      ),
    },
  ];

  return (
    <div className="w-full relative overflow-clip">
      <section id="timeline" className="absolute top-0 w-full min-h-screen right-0 z-0">
      </section>
      <Timeline data={data} />
    </div>
  );
}
