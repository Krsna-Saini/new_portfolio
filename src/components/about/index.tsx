import React from 'react'
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
const About = () => {
  return (
      <section id='about' className="min-h-screen w-full bg-gradient-to-r from-neutral-400 via-neutral-700 to-neutral-800 px-6 py-10 text-white">
        <h2 className="md:text-7xl text-5xl font-bold mb-6 border-b-8 w-fit border-blue-600">About Me</h2>
        <div className="max-w-7xl mx-auto">
          {/* Typewriter heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-300">
            <Typewriter
              words={[
                "Hey, I'm Krishna 👋",
                'Full-Stack Developer 💻',
                'IIT Varanasi Student 🎓',
                "Let's build something amazing 🚀",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>
  
          <p className="text-lg text-neutral-200 mb-12 max-w-3xl">
            I&apos;m Krishna Saini, a software developer passionate about crafting useful tech. I&apos;m currently pursuing engineering at IIT Varanasi and have built everything from Netflix clones to real-time chat apps using Next.js, Firebase, and MongoDB.
          </p>
  
          {/* Image + Details Grid */}
          <div className="lg:flex gap-4 justify-between items-start">
            {/* Image */}
            <div className="w-fit">
              <Image
                src="/profile.png"
                alt="Krishna's Profile"
                width={400}
                height={400}
                className="rounded-xl grayscale shadow-lg"
              />
            </div>
  
            {/* Details */}
            <div className="w-150 max-w-full mt-5 md:mt-0">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Developer • Problem Solver • Dreamer
              </h2>
  
              <p className="text-neutral-300 mb-6">
                From building projects solo to collaborating with peers, I&apos;m always learning, shipping, and improving. I enjoy solving real-world problems with code, and I&apos;m exploring open source and AI next.
              </p>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 text-neutral-200">
                <p>
                  <span className="font-semibold text-white">🎂 Birthday:</span>{' '}
                  11 july 2005
                </p>
                <p>
                  <span className="font-semibold text-white">🎓 Degree:</span>{' '}
                  B.Tech @ IIT Varanasi
                </p>
                <p>
                  <span className="font-semibold text-white">📍 City:</span>{' '}
                  Varanasi, India
                </p>
                <p>
                  <span className="font-semibold text-white">🌐 Website:</span>{' '}
                  krishna-portfolio.vercel.app
                </p>
                <p>
                  <span className="font-semibold text-white">📞 Phone:</span>{' '}
                  Private
                </p>
                <p>
                  <span className="font-semibold text-white">📧 Email:</span>{' '}
                  krishna@example.com
                </p>
                <p>
                  <span className="font-semibold text-white">💼 Freelance:</span>{' '}
                  Available
                </p>
                <p>
                  <span className="font-semibold text-white">🚀 Stack:</span>{' '}
                  Next.js, Firebase, TailwindCSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About