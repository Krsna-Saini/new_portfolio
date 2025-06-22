import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from 'lucide-react';
const Portfolio = () => {
    const projects = [
        {
            title: 'Better Call Saul',
            description:
                'A modern full-stack platform for users to book appointments with lawyers and for advocates to showcase their expertise. Built with Next.js, MongoDB, Tailwind, and Redux.js.',
            image: '/bettercallsaul.png',
            link: 'https://better-call-saul-frontend.vercel.app/',
        },
        {
            title: 'AI Chat Application',
            image: '/chatassistant.png',
            description:
                'An AI-powered chat platform featuring group chat, audio messages, attachments, and follow-up prompts with message context.',
            link: 'https://chatgpt-gray-xi.vercel.app/',
        },
        {
            title: 'NotesMania',
            image: '/notesmania.png',
            description:
                'A platform for students to organize and share notes, assignments, and academic content. Designed to replace unorganized WhatsApp sharing.',
            link: 'https://notes-mania-frontend.vercel.app/',
        },
        {
            title: 'Nexus',
            image: '/nexus.png',
            description:
                'A productivity platform for everyone to manage tasks, deadlines, and content efficiently. Designed to streamline organization and reduce dependency on WhatsApp for information sharing.',
            link: 'https://nexus-two-snowy.vercel.app/',
        }
    ];


    return (
        <section id='portfolio' className="h-fit bg-neutral-950 px-8 py-16 text-white">
            <div className=" px-4 md:px-10 w-full mx-auto flex flex-col items-center">
                <h2 className="md:text-7xl text-4xl font-bold text-teal-300 mb-12 w-full"> Portfolio</h2>
                <Carousel className=" w-full">
                    <CarouselContent className="py-6 px-10">
                        {projects.map((project, index) => (
                            <CarouselItem
                                key={index}
                                className=" flex flex-col h-full w-100  my-3 items-center scale-[0.8] md:scale-100 mx-1 min-w-80 md:mx-3 basis-1/1 md:basis-1/2 lg:basis-1/3 backdrop-blur-md rounded-3xl overflow-hidden transition-transform p-0"
                            >
                                <div className='h-full w-full'>
                                    <CardContainer className="inter-var px-5 min-h-115">
                                        <CardBody className="bg-zinc-900 relative max-w-95 group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2]   sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                            <CardItem
                                                translateZ="100"
                                                className="w-full my-4">
                                                <Image
                                                    src={project.image}
                                                    alt="jordans"
                                                    height="850"
                                                    width="850"
                                                    className="object-contain rounded-2xl"
                                                />
                                            </CardItem>
                                            <CardItem
                                                translateZ="50"
                                                className="text-xl font-bold text-white ">
                                                <span className="text-base sm:text-xl mt-6 mb-2 text-neutral-200">
                                                    {project.title}
                                                </span>
                                            </CardItem>
                                            <CardItem as="p"
                                                translateZ="60"
                                                className="text-sm max-w-sm mt-2 text-neutral-300">
                                                <span className="text-sm text-neutral-400">
                                                    {project.description}
                                                </span>
                                            </CardItem>
                                            <CardItem
                                             translateZ={40}
                                            >
                                                <button className="rounded-full cursor-pointer pl-4 pr-1 py-1 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800">
                                                    <span>Visit now </span>
                                                    <a href={project.link} className="bg-zinc-700 rounded-full  px-2 py-1 text-white">
                                                        <Link size={13} />
                                                    </a>
                                                </button>
                                            </CardItem>
                                        </CardBody>
                                    </CardContainer>
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