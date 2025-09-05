'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Cpu, Code, ClipboardList, Brain } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      icon: Users,
      title: "Leadership & Team Building",
      description: "Scaling global engineering teams, engagement >85%",
      color: "text-blue-600"
    },
    {
      icon: Cpu,
      title: "Technology Strategy",
      description: "Microservices, Azure Cloud, Distributed Systems",
      color: "text-green-600"
    },
    {
      icon: Code,
      title: "Architecture & Delivery",
      description: ".NET, C#, Node.js, React, Python, MongoDB, Kafka",
      color: "text-purple-600"
    },
    {
      icon: ClipboardList,
      title: "Program & Product Management",
      description: "Agile/SAFe, Roadmap Planning, KPI Tracking",
      color: "text-orange-600"
    },
    {
      icon: Brain,
      title: "AI & Innovation",
      description: "AI-enabled feature design, Data-driven decision framework",
      color: "text-pink-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Core Competencies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="card group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <skill.icon size={32} className={skill.color} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
