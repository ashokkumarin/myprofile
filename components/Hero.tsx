'use client'

import { motion } from 'framer-motion'
import { ChevronDown, User } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen gradient-bg text-white flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            >
              Engineering Leader
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl lg:text-3xl font-light mb-6 opacity-90"
            >
              23+ Years of Experience
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed"
            >
              Delivering enterprise-scale SaaS & on-premises products across Healthcare, EHS, and Test & Measurement domains. 
              Proven track record of building and scaling high-performing teams (60+ engineers), driving 20%+ productivity gains.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToAbout()}
                className="btn btn-primary"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#experience')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn btn-secondary"
              >
                View Experience
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-white/20 rounded-full"
              ></motion.div>
              <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <User size={120} className="text-white/70" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
