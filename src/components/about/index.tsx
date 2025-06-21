import React from 'react'
import Image from 'next/image';
const About = () => {
  return (
    <section id='about' className="min-h-screen bg-black w-full bg- px-6 py-10 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Image + Details Grid */}
        <div className="lg:flex gap-4 justify-between items-start">
          {/* Image */}
          <div className="w-fit md:h-screen flex items-center justify-center">
            <Image
              src="/profile2.jpg"
              alt="Krishna's Profile"
              width={400}
              height={400}
              className="object-top-right rounded-full size-100 shadow-2  object-cover "
            />
          </div>

          {/* Details */}
          <div className="w-150 max-w-full mt-5 md:mt-0">
            <h2 className="my-10 text-5xl font-bold w-fit text-teal-300">About Me</h2>
            <p className="text-lg text-neutral-200 mb-12 w-full max-w-3xl">
              I&apos;m Krishna Saini, a software developer passionate about crafting useful technology. I&apos;m currently pursuing engineering at IIT Varanasi and have built everything from appointment booking applications to real-time chat platforms and file-handling tools, using the latest technologies.
              </p>

            <h2 className="text-2xl font-semibold text-white mb-4">
              Developer • Problem Solver • Dreamer
            </h2>

            <p className="text-neutral-300 mb-6">
             Hi, I&apos;m Krishna — a passionate full-stack developer and an engineering student at IIT Varanasi. I thrive on turning real-world problems into impactful digital solutions through code. From designing sleek frontend interfaces to architecting robust backend systems, I enjoy building applications that are not only functional but meaningful.
             </p>
             <p className="text-neutral-300 mb-6">
              With hands-on experience in technologies like Next.js, React, MongoDB, and Firebase, I&apos;ve developed chat platforms, task managers, and collaborative tools that blend performance with user experience. I&apos;m currently exploring advanced concepts like real-time communication, AI integration, and scalable cloud architectures
             </p>
              <p className="text-neutral-300 mb-6">
                 I&apos;m deeply committed for my work , looking for opportunities to grow, contribute, and build something valuable.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About