import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
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
        <section id='portfolio' className="min-h-screen bg-black px-8 py-16 text-white">
            <div className=" px-4 md:px-10 w-full mx-auto flex flex-col items-center">
                <h2 className="md:text-7xl text-4xl font-bold text-teal-300 mb-12 w-full">🚀 Portfolio</h2>
                <Carousel className=" w-full">
                    <CarouselContent className="py-6 px-10">
                        {projects.map((project, index) => (
                            <CarouselItem
                                key={index}
                                className=" flex flex-col w-100 my-3 items-center scale-[0.8] md:scale-100 mx-1 min-w-80 md:mx-3 basis-1/1 md:basis-1/2 lg:basis-1/3 backdrop-blur-md rounded-2xl bg-cyan-600 overflow-hidden transition-transform p-0"
                            >

                                <div className="relative w-fit mt-3">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} homepage`}
                                        width={1000}
                                        height={1000}
                                        className="rounded-2xl h-80 w-90  object-right-top"
                                    />

                                </div>
                                <div>
                                <div className='w-full flex justify-between items-center px-5 my-5 '>
                                    <strong className='text-2xl'>{project.title}</strong>
                                    <a
                                       href={project.link}
                                        className='flex items-center gap-2 px-4 py-2 rounded-full bg-black transition-all duration-300 text-cyan-400 cursor-pointer hover:scale-105'>
                                        <Link className='size-4 text--400'/>
                                        View
                                    </a>
                                </div>
                                <div className='w-full flex justify-between items-center px-5 mb-2 '>
                                   <p className='font-semibold'>
                                    {project.description}
                                </p> 
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