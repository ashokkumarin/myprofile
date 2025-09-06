"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6">
        <h1 className="text-xl font-bold">Ashok Kumar</h1>
        <div className="space-x-6 font-medium">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-16" id="home">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Engineering Leader
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          23+ Years of Experience delivering enterprise-scale SaaS & on-premises
          products across Healthcare, EHS, and Test & Measurement. Proven record
          of building and scaling high-performing teams (60+ engineers), driving
          20%+ productivity gains.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="bg-gray-200 px-4 py-2 rounded-lg"
          >
            View Experience
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-700 leading-relaxed">
          Engineering leader with 23+ years of experience delivering
          enterprise-scale SaaS & on-premises products. Adept at aligning
          execution with business strategy, fostering innovation, and delivering
          measurable outcomes. Currently Director of Development Engineering at
          Greenway Health, leading 60+ engineers in delivering EHR products.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6 text-center">
          <div><p className="text-3xl font-bold">23+</p><p>Years Experience</p></div>
          <div><p className="text-3xl font-bold">60+</p><p>Engineers Led</p></div>
          <div><p className="text-3xl font-bold">20%+</p><p>Productivity Gains</p></div>
          <div><p className="text-3xl font-bold">92%</p><p>Team Engagement</p></div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16">
        <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>

        <div className="mb-8">
          <h4 className="text-xl font-bold">Director of Development Engineering</h4>
          <p className="text-gray-600">Greenway Health | Bengaluru, India | 2024 – Present</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Scaled test automation from 19% → 35%</li>
            <li>Led 2 major migration projects</li>
            <li>Launched DevAcademy talent program</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-bold">Senior Software Development Manager & Site Lead</h4>
          <p className="text-gray-600">Intelex Technologies | Remote | 2022 – 2024</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Built 7 Agile teams, scaled site to 60+ engineers</li>
            <li>Reduced onboarding ramp-up to 1 month</li>
            <li>Introduced SAFe methodology</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold">Engineering Manager</h4>
          <p className="text-gray-600">Tektronix | Bangalore, India | 2016 – 2022</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Delivered 40+ high-speed serial test products</li>
            <li>Transitioned legacy products to web-based architecture</li>
            <li>Boosted engagement 57% → 92%</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
        <p className="text-gray-700">I’d love to connect and explore opportunities.</p>
        <div className="mt-4 space-y-2">
          <p>Email: <a href="mailto:aashokkumarin@hotmail.com" className="text-blue-600">aashokkumarin@hotmail.com</a></p>
          <p>Phone: +91-94480 70477</p>
          <p>
            <a href="https://linkedin.com" target="_blank" className="text-blue-600">LinkedIn</a> | 
            <a href="https://github.com" target="_blank" className="text-blue-600 ml-2">GitHub</a>
          </p>
          <p>Bengaluru, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 Ashok Kumar. All rights reserved.
      </footer>
    </main>
  );
}
