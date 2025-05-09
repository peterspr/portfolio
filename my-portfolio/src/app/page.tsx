'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import NavBar from './components/NavBar';

export default function Home() {
  useEffect(() => {
    fetch(`/api/track?path=${encodeURIComponent(window.location.pathname)}`);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <NavBar />
      <main className="font-sans">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[75vh] flex flex-col-reverse sm:flex-row items-center justify-between px-6 py-20"
          style={{backgroundImage: "url('/wavy-lines-light.svg')", backgroundRepeat: 'repeat', backgroundSize: 'auto', backgroundColor: 'black',}}>
          <div className="sm:w-1/2 text-center sm:text-left sm:px-12 bg-white/70 p-6 rounded-md shadow-md">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black">Hi, I&apos;m Preston Petersen</h1>
            <h2 className="text-2xl text-gray-800 mb-6">Entry-Level Software Engineer</h2>
            <p className="text-gray-900 mb-6">Building thoughtful, scalable software solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center">
              <Link href="/resume.pdf" target="_blank" className="border border-black px-5 py-2 rounded-full text-black hover:bg-black hover:text-white transition">
                Download Resume
              </Link>
              <div className="flex gap-4 mt-2 sm:mt-0">
                <Link href="mailto:prestonwpetersen@outlook.com">
                  <Image src="/outlook.svg" alt="Email" width={28} height={28} />
                </Link>
                <Link href="https://github.com/peterspr" target="_blank" rel="noopener noreferrer">
                  <Image src="/github.svg" alt="GitHub" width={28} height={28} />
                </Link>
                <Link href="https://linkedin.com/in/prestonwpetersen" target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} />
                </Link> 
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 flex justify-center mb-10 sm:mb-0">
            <Image src="/headshot.jpeg" alt="Preston Petersen" width={300} height={300} className="rounded-full shadow-lg" />
          </div>
        </section>
        {/* About Me Section */}
        <section id="about" className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-sky-600">About Me</h2>
            <p className="text-gray-900 mb-4">I&apos;m a recent Computer Science graduate passionate about backend development and building scalable systems. My work blends thoughtful design with technical depth, shaped by experience in consulting and real-world projects.</p>
            <p className="text-gray-900 mb-4">My goal is to contribute to impactful engineering teams where I can grow as a developer and solve meaningful problems.</p>
            <p className="text-gray-900">Outside of work, I enjoy hiking, learning about financial markets, and optimizing everyday systems.</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-sky-600">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2 text-black">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">Python</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">JavaScript</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">TypeScript</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">C/C++</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">React</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">Docker</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">Git</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">OAuth</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">AWS</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">GCP</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">REST APIs</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">CI/CD</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">TDD</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">OOP</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">Agile</span>
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-600">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-xl shadow p-4 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <Image src="/public/temp-image.png" alt="Earnings Call Project" width={600} height={300} className="rounded mb-4" />
                <h3 className="text-xl font-semibold text-black">Earnings Call NLP Classifier</h3>
                <p className="text-gray-900 mb-4">Fine-tuned BERT model to classify earnings call sections. Led model training and optimization.</p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="text-blue-600 underline">GitHub Repo</Link>
                </div>
              </div>
              {/* Project 2 */}
              <div className="bg-white rounded-xl shadow p-4 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <Image src="/public/temp-image.png" alt="QuizWiz" width={600} height={300} className="rounded mb-4" />
                <h3 className="text-xl font-semibold text-black">QuizWiz Web App</h3>
                <p className="text-gray-900 mb-4">A full-stack trivia game using React and Node.js. Built REST API and UI components.</p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="text-blue-600 underline">Live Demo</Link>
                  <Link href="#" className="text-blue-600 underline">GitHub Repo</Link>
                </div>
              </div>
              {/* Project 3 */}
              <div className="bg-white rounded-xl shadow p-4 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <Image src="/public/temp-image.png" alt="Wellspring" width={600} height={300} className="rounded mb-4" />
                <h3 className="text-xl font-semibold text-black">Wellspring Order Optimizer</h3>
                <p className="text-gray-900 mb-4">Redesigned nonprofit&apos;s ordering workflow. Cut lead time and improved UX.</p>
                <div className="flex gap-3 text-sm">
                  <Link href="#" className="text-blue-600 underline">Case Study</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-black py-6 text-center">
          <div className="flex flex-col gap-2">
            <p>© {currentYear} Preston Petersen</p>
            <div className="flex justify-center gap-4 text-sm">
              <Link href="#">Home</Link>
              <Link href="#projects">Projects</Link>
              <Link href="/resume.pdf">Resume</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
