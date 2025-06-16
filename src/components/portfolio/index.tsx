import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'lucide-react'
const Portfolio = () => {
    const projects = [
        {
            title: 'Better Call Saul',
            description:
                'A modern full-stack platform for users to book appointments with lawyers and for advocates to showcase their expertise. Built with Next.js, MongoDB, Tailwind, and Redux.js.',
            image: '/bettercallsaul.png',
            link: 'https://better-call-saul-frontend.vercel.app/',
            gradient: 'from-[#fef5ec] via-[#fef5ec] to-[#fef5ec]/1',
            titleColor: 'text-[#e07a1f]',
            linkColor: 'text-[#e07a1f]',
        },
        {
            title: 'AI Chat Application',
            image: '/chatassistant.png',
            description:
                'An AI-powered chat platform featuring group chat, audio messages, attachments, and follow-up prompts with message context.',
            link: 'https://chatgpt-gray-xi.vercel.app/',
            gradient: 'from-neutral-300 via-neutral-100 to-white/1',
            titleColor: 'text-black',
            linkColor: 'text-neutral-900',
        },
        {
            title: 'NotesMania',
            image: '/notesmania.png',
            description:
                'A platform for students to organize and share notes, assignments, and academic content. Designed to replace unorganized WhatsApp sharing.',
            link: 'https://notes-mania-frontend.vercel.app/',
            gradient: 'from-pink-300 via-pink-100 to-pink-200/1',
            titleColor: 'text-rose-600',
            linkColor: 'text-rose-500',
        },
        {
            title: 'Nexus',
            image: '/nexus.png',
            description:
                'A productivity platform for everyone to manage tasks, deadlines, and content efficiently. Designed to streamline organization and reduce dependency on WhatsApp for information sharing.',
            link: 'https://nexus-two-snowy.vercel.app/',
            gradient: 'from-blue-300 via-blue-100 to-blue-200/1',
            titleColor: 'text-blue-600',
            linkColor: 'text-blue-500',
        }
    ];


    return (
        <section id='portfolio' className="min-h-screen bg-gradient-to-r from-neutral-400 via-neutral-700 to-neutral-800 px-8 py-16 text-white">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="md:text-7xl text-4xl font-bold text-green-300 mb-12 w-full">🚀 Portfolio</h2>
                <Carousel className="w-full max-w-2xs md:max-w-3xl">
                    <CarouselContent className="py-6 px-10">
                        {projects.map((project, index) => (
                            <CarouselItem
                                key={index}
                                className="bg-neutral-900/70 mx-3 basis-1/1 md:basis-1/2 backdrop-blur-md rounded-2xl border-4 border-green-400 overflow-hidden transition-transform p-0"
                            >
                                <div className="relative h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative  w-full">
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} homepage`}
                                            width={1000}
                                            height={1000}
                                            className="rounded-t-2xl h-100 object-right-top"
                                        />
                                    </div>

                                    {/* Text block */}
                                    <div className={`absolute bottom-0 h-full hover:h-56 w-full flex-grow flex flex-col justify-end p-4 bg-gradient-to-t ${project.gradient}`}>
                                        <div className="hover:backdrop-blur-sm">
                                            <h3 className={`text-2xl italic font-semibold mb-1 ${project.titleColor}`}>
                                                <Typewriter
                                                    words={[`${project.title}`]}
                                                    loop
                                                    cursor
                                                    cursorStyle="|"
                                                    typeSpeed={100}
                                                    deleteSpeed={60}
                                                    delaySpeed={100}
                                                />
                                            </h3>
                                            <div className="flex justify-between">
                                                <HoverCard >
                                                    <HoverCardTrigger className={`text-sm underline  font-semibold mb-1 ${project.linkColor}`}>Detail</HoverCardTrigger>
                                                    <HoverCardContent className={`text-sm bg-gray-100 ${project.linkColor}`}>
                                                        {project.description}
                                                    </HoverCardContent>
                                                </HoverCard>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`text-sm underline transition-all duration-200 hover:text-base text-green-600`}
                                                >
                                                    <Link />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}

export default Portfolio