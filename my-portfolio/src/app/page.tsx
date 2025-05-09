'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch(`/api/track?path=${encodeURIComponent(window.location.pathname)}`);
  }, []);

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="flex flex-col-reverse sm:flex-row items-center justify-between min-h-[90vh] px-6 py-20 bg-gradient-to-br from-white to-gray-100">
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I’m Preston Petersen</h1>
          <h2 className="text-2xl text-gray-600 mb-6">Entry-Level Software Engineer</h2>
          <p className="text-gray-700 mb-6">Building thoughtful, scalable software solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <Link href="#projects" className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">View Projects</Link>
            <Link href="/resume.pdf" target="_blank" className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition">Download Resume</Link>
            <Link href="#contact" className="text-black underline underline-offset-4">Contact Me</Link>
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center mb-10 sm:mb-0">
          <Image src="/avatar.jpg" alt="Preston Petersen" width={300} height={300} className="rounded-full shadow-lg" />
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 mb-4">I’m a recent Computer Science graduate passionate about backend development and building scalable systems. My work blends thoughtful design with technical depth, shaped by experience in consulting and real-world projects.</p>
          <p className="text-gray-700 mb-4">My goal is to contribute to impactful engineering teams where I can grow as a developer and solve meaningful problems.</p>
          <p className="text-gray-700">Outside of work, I enjoy hiking, learning about financial markets, and optimizing everyday systems.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full">Python</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">C/C++</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full">React</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">Docker</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">Git</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full">REST APIs</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">CI/CD</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">TDD</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full">OOP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <Image src="/images/earnings-call-project.png" alt="Earnings Call Project" width={600} height={300} className="rounded mb-4" />
              <h3 className="text-xl font-semibold">Earnings Call NLP Classifier</h3>
              <p className="text-gray-600 mb-4">Fine-tuned BERT model to classify earnings call sections. Led model training and optimization.</p>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="text-blue-600 underline">GitHub Repo</Link>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <Image src="/images/quizwiz.png" alt="QuizWiz" width={600} height={300} className="rounded mb-4" />
              <h3 className="text-xl font-semibold">QuizWiz Web App</h3>
              <p className="text-gray-600 mb-4">A full-stack trivia game using React and Node.js. Built REST API and UI components.</p>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="text-blue-600 underline">Live Demo</Link>
                <Link href="#" className="text-blue-600 underline">GitHub Repo</Link>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
              <Image src="/images/wellspring.png" alt="Wellspring" width={600} height={300} className="rounded mb-4" />
              <h3 className="text-xl font-semibold">Wellspring Order Optimizer</h3>
              <p className="text-gray-600 mb-4">Redesigned nonprofit's ordering workflow. Cut lead time and improved UX.</p>
              <div className="flex gap-3 text-sm">
                <Link href="#" className="text-blue-600 underline">Case Study</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6 text-gray-700">Let’s build something great together!</p>
        <div className="flex justify-center gap-6 text-xl">
          <Link href="mailto:youremail@example.com" className="hover:underline">Email</Link>
          <Link href="https://linkedin.com/in/yourprofile" className="hover:underline" target="_blank">LinkedIn</Link>
          <Link href="https://github.com/yourusername" className="hover:underline" target="_blank">GitHub</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <div className="flex flex-col gap-2">
          <p>© {new Date().getFullYear()} Preston Petersen</p>
          <div className="flex justify-center gap-4 text-sm">
            <Link href="#">Home</Link>
            <Link href="#projects">Projects</Link>
            <Link href="/resume.pdf">Resume</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
