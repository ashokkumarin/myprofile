'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Lightbulb, Users, Calendar, ArrowRight } from 'lucide-react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      icon: BookOpen,
      title: "Coming Soon",
      description: "Technical insights and leadership thoughts will be shared here.",
      date: "2024",
      status: "planned",
      color: "bg-gray-500"
    },
    {
      icon: Lightbulb,
      title: "AI in Healthcare",
      description: "Exploring AI-driven innovation in healthcare technology and its impact on patient care.",
      date: "Q1 2024",
      status: "draft",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Strategies for scaling engineering teams effectively and maintaining high engagement.",
      date: "Q2 2024",
      status: "draft",
      color: "bg-green-500"
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planned': return 'bg-gray-100 text-gray-600'
      case 'draft': return 'bg-yellow-100 text-yellow-600'
      case 'published': return 'bg-green-100 text-green-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'planned': return 'Planned'
      case 'draft': return 'In Progress'
      case 'published': return 'Published'
      default: return 'Planned'
    }
  }

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Latest Insights
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
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
                <div className={`absolute inset-0 ${post.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${post.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <post.icon size={24} className="text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                      {getStatusText(post.status)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {post.date}
                    </div>
                    
                    {post.status !== 'planned' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-2" />
                      </motion.button>
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
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to get notified when new insights about engineering leadership, 
                technology strategy, and team building are published.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Subscribe to Updates
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
