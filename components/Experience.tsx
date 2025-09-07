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
      company: "Greenway Health (A Vista Portfolio Company)",
      location: "Bengaluru, India",
      period: "2024 – Present",
      description: "Lead 60+ engineers in delivering EHR products for ambulatory and dental care. Implemented engineering KPIs and dashboards to track velocity, quality, and operational efficiency.",
      achievements: [
        "Achieved 20%+ productivity gains through process improvements",
        "Scaled test automation coverage from 19% to 35%",
        "Led two complex migration projects",
        "Collaborated with Product and Program teams for seamless delivery",
        "Defined and tracked engineering KPIs for performance and health",
        "Fostered continuous improvement via retrospectives and feedback loops",
        "Mentored engineering managers and senior engineers",
        "Influenced key architectural decisions through active design participation",
        "Contributed to DevAcademy via hiring, onboarding projects, and mentoring"
      ],
      tech: ["C# WinForms", "WPF", "Progress ABL", "MSSQL"]
    },
    {
      title: "Senior Software Development Manager & Site Lead",
      company: "Intelex Technologies (A Fortive Company)",
      location: "Remote",
      period: "2022 – 2024",
      description: "Built 7 Agile teams and scaled the site to 60+ engineers. Reduced onboarding ramp-up to 1 month for new hires.",
      achievements: [
        "Established a development center, scaling to 60+ engineers across 7 Scrum teams",
        "Increased team engagement from 65% → 90%",
        "Implemented Agile best practices, improving sprint predictability by 30%",
        "Revamped onboarding, enabling new hire productivity within one month",
        "Set benchmarks for operational excellence, improving delivery and cost efficiency",
        "Introduced SAFe methodology to enhance cross-team collaboration",
        "Influenced architecture through active design discussions",
        "Streamlined workflows via close collaboration with cross-functional teams",
        "Maintained vendor relationships to ensure consistent delivery",
        "Tracked KPIs and project progress, reporting to senior leadership",
        "Conducted performance evaluations and mentoring to build a cohesive, engaged team"
      ],
      tech: ["C#", "ASP.NET", "Node.js", "React", "MongoDB", "Kafka", "Azure"]
    },
    {
      title: "Engineering Manager <- Program Manager <- Project Lead <- Sr. Software Engineer",
      company: "Tektronix (A Fortive Company)",
      location: "Bangalore, India",
      period: "2006 – 2022",
      description: "Led multi-product portfolio including TekExpress and high-speed test suites. Increased team engagement from 57% → 92%.",
      achievements: [
        "Delivered 40+ high-speed serial test products",
        "Transitioned legacy products to web-based architecture",
        "Structured mentoring and career growth paths",
        "Delivered software projects on time with high quality standards",
        "Oversaw end-to-end development: design, coding, testing, deployment",
        "Managed and mentored developers, driving performance and growth",
        "Defined project scopes and objectives with key stakeholders",
        "Championed best practices in development and project management",
        "Drove innovation by staying ahead of industry trends",
        "Boosted team engagement from 57% to 92% through collaborative culture",
        "Led architectural decisions and implementation with hands-on leadership",
        "Owned product portfolio in HDMI/MIPI standards and firmware development",
        "Facilitated cross-functional collaboration with customers and partners",
        "Spearheaded recruitment and mentorship to build a high-performing team",
        "Cultivated a culture of innovation and continuous improvement"
      ],
      tech: [".NET", "C#", "Python", "ASP.NET", "LabVIEW", "TestStand"]
    },
    {
      title: "Senior Software Engineer",
      company: "Robert Bosch Engineering India Pvt Ltd",
      location: "Bangalore, India",
      period: "2005 – 2006",
      description: "Led development and integration of industrial automation and inspection systems across multiple global sites, delivering robust solutions in C++, C#, LabVIEW, and PLC communication.",
      achievements: [
        "Developed drivers and RS-232 modules for pump calibration and PLC communication systems",
        "Designed and implemented UIs for hardware control and injector inspection systems",
        "Migrated legacy FoxPro interfaces to modern C# operator consoles for laser marking systems",
        "Enhanced UI and error reporting for PCB test automation using DLL-based architecture",
        "Delivered integration and commissioning support across multiple inspection platforms",
        "Analyzed Marantz PCB inspection tool capabilities for soldering process validation",
        "Prototyped and implemented LabVIEW-based injector inspection system with NI DAQ integration"
      ],
      tech: [".NET", "C#", "LabVIEW", "LabWindows CVI", "TestStand"]
    },
    {
      title: "Senior Project Engineer",
      company: "Soliton Technologies Pvt Ltd",
      location: "Bangalore, India",
      period: "2002 – 2005",
      description: "Delivered high-speed vision and inspection systems across automotive, industrial, and medical domains, leveraging LabVIEW, NI IMAQ, and embedded technologies for precision automation and defect detection.",
      achievements: [
        "Delivered high-speed vision inspection systems for automotive and industrial clients using LabVIEW and NI IMAQ",
        "Designed adaptive algorithms for defect detection in CT-scan sensors, brake assemblies, and pencil sorting systems",
        "Developed real-time vision modules achieving sub-40µs detection speeds for high-throughput inspection",
        "Migrated legacy systems and built modern operator interfaces for laser marking and inspection platforms",
        "Spearheaded feasibility studies and proof-of-concept demos for 3D measurement and web inspection systems",
        "Provided technical leadership, installation, and commissioning support across customer sites"
      ],
      tech: ["LabVIEW", "LabWindows CVI", "TestStand", "NI IMAQ", "C", "C++"]
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
