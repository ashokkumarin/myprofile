'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, Linkedin, Github, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aashokkumarin@hotmail.com",
      link: "mailto:aashokkumarin@hotmail.com",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-94480 70477",
      link: "tel:+919448070477",
      color: "text-green-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/ashok-kumar-anbalagan-61120921/",
      color: "text-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my projects",
      link: "#",
      color: "text-gray-800"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, India",
      link: null,
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Open to opportunities",
      link: null,
      color: "text-purple-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm always interested in discussing new opportunities, 
                innovative projects, and ways to drive engineering excellence. 
                Let's connect and explore how we can work together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-100 group-hover:bg-primary-100 transition-colors`}>
                      <contact.icon size={24} className={contact.color} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {contact.title}
                      </h3>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          target={contact.link.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start a Conversation?
                </h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Whether you're looking for engineering leadership, technical consultation, 
                  or just want to discuss the latest in technology, I'd love to hear from you.
                </p>
                <motion.a
                  href="mailto:aashokkumarin@hotmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send an Email
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
