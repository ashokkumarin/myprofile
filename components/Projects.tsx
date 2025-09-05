'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity  , GraduationCap, TrendingUp, ExternalLink } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      icon: Activity ,
      title: "EHR Migration & Revival",
      description: "Led complex migration from legacy Progress DB to PASOE and revived shelved EHR project with Git migration and team rebuilding.",
      tech: ["C#", "Progress ABL", "MSSQL", "Git"],
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "DevAcademy Program",
      description: "Established talent pipeline with biannual campus hiring, 4-5 months training, and onboarding as Associate Software Engineers.",
      tech: ["Training", "Mentoring", "Recruitment"],
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "Test Automation Scaling",
      description: "Scaled test automation coverage from 19% to 35%, accelerating release cycles and improving product quality.",
      tech: ["Automation", "Quality", "CI/CD"],
      color: "bg-purple-500"
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
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="card group cursor-pointer relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 ${project.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-primary-100 group-hover:text-primary-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors"
                  >
                    View Details
                    <ExternalLink size={16} className="ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
