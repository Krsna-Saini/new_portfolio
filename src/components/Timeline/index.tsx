import React from "react";
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export default function TimelinePortfolio() {
  const data = [
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-8 font-normal text-neutral-200">
          Started my coding journey right after entering IIT BHU by learning **C++**. Explored the basics of programming, object-oriented principles, and wrote my first console-based projects.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/cpp1.jpg"
            alt="cpp learning"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/cpp4.png"
            alt="cpp learning"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/cpp2.png"
            alt="cpp learning"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/cpp3.png"
            alt="cpp learning"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2024",
    content: (
      <div>
        <p className="mb-8 font-normal  text-neutral-200">
          Took a deep dive into **Competitive Programming (CP)** and **Data Structures & Algorithms (DSA)** using C++. Participated in contests, solved 300+ problems, and sharpened my problem-solving skills.
        </p>
        <p className="mb-8 font-normal text-neutral-200">
          These fundamentals helped me build a strong base for real-world applications and web development.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/cpp1.jpg"
            alt="cp practice"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/DSA1.png"
            alt="dsa solving"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/DSA2.png"
            alt="leetcode solving"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/DSA3.png"
            alt="cp contests"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Late 2024",
    content: (
      <div>
        <p className="mb-4 font-normal  text-neutral-200">
          Transitioned into **Full-Stack Web Development** — mastering HTML, CSS, JS, React, Next.js, MongoDB, Firebase, and more.
        </p>
        <div className="mb-8">
          <div className="flex items-center gap-2 text-neutral-300">
            ✅ Built 4 major projects including a real-time chat app and a lawyer appointment system
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            ✅ Learned responsive design and advanced UI/UX using Tailwind & ShadCN UI
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            ✅ Integrated Firebase, MongoDB, and GraphQL into projects
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            ✅ Open-sourced multiple projects on GitHub
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/chatassistant.png"
            alt="web project"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/notesmania.png"
            alt="full stack"
            width={1000}
            height={1000}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/nexus.png"
            alt="chat app"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
          <Image
            src="/bettercallsaul.png"
            alt="portfolio site"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[...your-shadow] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];

  return (
    <section  id="timeline" className="relative w-full min-h-screen">
        <Timeline data={data} />
    </section>
  );
}
