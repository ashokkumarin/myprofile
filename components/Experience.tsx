'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Director of Development Engineering",
      company: "Greenway Health",
      location: "Bengaluru, India",
      period: "2024 – Present",
      description: "Lead 60+ engineers in delivering EHR products for ambulatory and dental care. Implemented engineering KPIs and dashboards to track velocity, quality, and operational efficiency.",
      achievements: [
        "Scaled test automation coverage from 19% → 35%",
        "Led two complex migration projects",
        "Launched DevAcademy talent program"
      ],
      tech: ["C# WinForms", "WPF", "Progress ABL", "MSSQL"]
    },
    {
      title: "Senior Software Development Manager & Site Lead",
      company: "Intelex Technologies",
      location: "Remote",
      period: "2022 – 2024",
      description: "Built 7 Agile teams and scaled the site to 60+ engineers. Reduced onboarding ramp-up to 1 month for new hires.",
      achievements: [
        "Established Offshore Development Center",
        "Introduced SAFe methodology",
        "Maintained vendor relationships"
      ],
      tech: ["C#", "ASP.NET", "Node.js", "React", "MongoDB", "Kafka", "Azure"]
    },
    {
      title: "Engineering Manager",
      company: "Tektronix",
      location: "Bangalore, India",
      period: "2016 – 2022",
      description: "Led multi-product portfolio including TekExpress and high-speed test suites. Increased team engagement from 57% → 92%.",
      achievements: [
        "Delivered 40+ high-speed serial test products",
        "Transitioned legacy products to web-based architecture",
        "Structured mentoring and career growth paths"
      ],
      tech: [".NET", "C#", "Python", "ASP.NET"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Professional Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative lg:pl-20"
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-6 lg:left-6 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 font-semibold mb-2">
                          <Users size={16} className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <TrendingUp size={16} className="mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
