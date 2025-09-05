'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "23+", label: "Years Experience" },
    { number: "60+", label: "Engineers Led" },
    { number: "20%+", label: "Productivity Gains" },
    { number: "92%", label: "Team Engagement" },
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Engineering leader with 23+ years of experience delivering enterprise-scale SaaS & on-premises products 
                across Healthcare, EHS, and Test & Measurement domains. Proven track record of building and scaling 
                high-performing teams (60+ engineers), driving 20%+ productivity gains, and leading digital transformation 
                initiatives including AI integration.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Adept at aligning engineering execution with business strategy, fostering innovation, and delivering 
                measurable outcomes. Currently serving as Director of Development Engineering at Greenway Health, 
                leading 60+ engineers in delivering EHR products for ambulatory and dental care.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center"
                >
                  <motion.h3 
                    className="text-4xl font-bold text-primary-600 mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
