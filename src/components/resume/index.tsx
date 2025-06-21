import React from 'react'

const Resume = () => {
  return (
    <section id='resume' className="min-h-screen w-full bg-black px-8 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-7xl text-4xl font-bold mb-12 text-teal-300">Resume</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">IIT Varanasi</h4>
                <p className="text-neutral-200 text-sm mb-1">B.Tech in Engineering</p>
                <p className="text-neutral-300 text-sm italic">2023 – Present</p>
                <p className="text-neutral-300 mt-2">
                  Currently pursuing my engineering degree with a strong focus on software development, real-world project building, and problem solving.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold">JEE Advanced Qualified</h4>
                <p className="text-neutral-300 text-sm italic">2023</p>
                <p className="text-neutral-300 mt-2">
                  Cleared India’s toughest engineering entrance exam, opening doors to IITs.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">💼 Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold">Freelance Developer</h4>
                <p className="text-neutral-200 text-sm mb-1">Remote</p>
                <p className="text-neutral-300 text-sm italic">2023 – Present</p>
                <p className="text-neutral-300 mt-2">
                  Designed and developed full-stack web applications using Next.js, Firebase, MongoDB, and TailwindCSS for personal and freelance projects.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold">Open Source Contributor</h4>
                <p className="text-neutral-300 text-sm italic">Ongoing</p>
                <p className="text-neutral-300 mt-2">
                  Exploring and contributing to open source projects. Learning through code reviews, pull requests, and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">🛠️ Skills</h3>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-100">
            <span className="bg-cyan-600 px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">React</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">TailwindCSS</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">Firebase</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">Redux Toolkit</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">GraphQL</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">Git & GitHub</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">Framer Motion</span>
          </div>
        </div>
        {/* Languages */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">💻 Languages I Know</h3>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-100">
            <span className="bg-cyan-600 px-3 py-1 rounded-full">Python</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">C</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">C++</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">HTML</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">CSS</span>
            <span className="bg-cyan-600 px-3 py-1 rounded-full">SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume