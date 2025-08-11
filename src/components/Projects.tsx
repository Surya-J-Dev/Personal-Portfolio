import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Code, Zap, Smartphone, Clock, Rocket, Coffee, Wrench, Sparkles } from 'lucide-react';
import FinTrackImage from '../assets/FinTrack.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
    
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
  const projects = [
    {
      id: 1,
      title: 'FinTrack - Your Financial Companion',
      category: 'Frontend',
      description: 'A comprehensive financial tracking application to manage your personal finances',
      longDescription: 'Developed a modern financial tracking application that helps users manage their personal finances effectively. The app features an intuitive dashboard for tracking income, expenses, and savings with beautiful data visualizations and responsive design.',
      image: FinTrackImage,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Local Storage'],
      github: 'https://github.com/Surya-J-Dev/budget-tracker-react',
      demo: 'https://fintrackpatner.netlify.app/',
      features: [
        'Income and expense tracking',
        'Budget management and planning',
        'Interactive charts and analytics',
        'Responsive design for all devices',
        'Local data storage for privacy',
        'Beautiful and intuitive UI/UX'
      ]
    },
    {
      id: 2,
      title: 'Luxecafe - Luxury Cafe Website',
      category: 'Frontend',
      description: 'A modern and elegant luxury cafe website with beautiful design and smooth animations',
      longDescription: 'Designed and developed a sophisticated luxury cafe website that showcases premium dining experiences with elegant aesthetics. The website features a modern design with smooth animations, responsive layout, and immersive user experience that reflects the luxury brand identity.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      github: 'https://github.com/Surya-J-Dev/LuxeCafe---Luxury-Cofee-Shop/',
      demo: 'https://luxecafe.netlify.app/',
      features: [
        'Elegant and modern design aesthetic',
        'Responsive layout for all devices',
        'Smooth scroll animations and transitions',
        'Interactive menu showcase',
        'Beautiful image galleries',
        'Contact and reservation system'
      ]
    },
    {
      id: 3,
      title: 'Dev2Design - Web Service Solutions',
      category: 'Frontend',
      description: 'A company offering web service solutions with modern design and professional presentation',
      longDescription: 'Developed a comprehensive web service solutions website for Dev2Design company. The platform showcases professional web development services, digital solutions, and client portfolio with modern design aesthetics and responsive functionality.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      github: '',
      demo: 'https://dev2design.netlify.app/',
      features: [
        'Professional service showcase',
        'Modern and responsive design',
        'Interactive service portfolio',
        'Client testimonials section',
        'Contact and inquiry forms',
        'SEO optimized for business'
      ]
    },
    {
      id: 4,
      title: 'Context-Aware Productivity AI',
      category: 'Full Stack',
      description: 'Notion + ChatGPT on Steroids - AI-driven workspace with smart insights and automation',
      longDescription: 'Developed a sophisticated AI-powered workspace application that understands your notes, tasks, and ideas, providing intelligent insights and automation. The app features advanced AI capabilities including task prediction, meeting summarization, daily briefings, and smart calendar assistance.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Supabase', 'LangChain', 'OpenAI', 'TipTap Editor', 'TypeScript'],
      github: '#',
      demo: '#',
      features: [
        'AI-powered task prediction and automation',
        'Intelligent meeting and note summarization',
        'Smart daily briefings and insights',
        'Advanced calendar assistant with AI',
        'Context-aware workspace management',
        'Real-time AI-driven workflow optimization'
      ]
    },
    {
      id: 5,
      title: 'DevTool: API Monitor & Uptime Dashboard',
      category: 'Full Stack',
      description: 'Comprehensive API monitoring system with real-time uptime tracking and alerts',
      longDescription: 'Built a robust API monitoring and uptime dashboard that provides comprehensive tracking of API performance, response times, and status codes. Features real-time WebSocket updates, email/SMS alerts, authentication, rate-limiting, and containerized deployment.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'WebSocket', 'Docker', 'Nginx'],
      github: '#',
      demo: '#',
      features: [
        'Real-time API monitoring and uptime tracking',
        'WebSocket-powered live dashboard updates',
        'Email and SMS alert integration',
        'Authentication and rate-limiting',
        'Containerized deployment with Docker',
        'Performance analytics and reporting'
      ]
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      category: 'Frontend',
      description: 'A modern, responsive portfolio showcasing my skills, projects, and professional journey',
      longDescription: 'Designed and developed a modern portfolio website featuring smooth animations, responsive design, and optimized performance. The site showcases projects, skills, and experience with an engaging user interface and contact form integration.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Formspree'],
      github: 'https://github.com/Surya-J-Dev/Personal-Portfolio',
      demo: 'https://suryadeveloper.netlify.app/',
      features: [
        'Responsive design for all devices',
        'Smooth scroll animations and transitions',
        'Interactive project showcase with modals',
        'Contact form with Formspree integration',
        'Beautiful popup notifications',
        'SEO optimized and fast loading'
      ]
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Code className="w-4 h-4" />;
      case 'Frontend':
        return <Smartphone className="w-4 h-4" />;
      case 'Backend':
        return <Zap className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const EmptyState = ({ category }: { category: string }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="col-span-full flex flex-col items-center justify-center py-20"
    >
      <div className="text-center max-w-md mx-auto">
        {/* Animated Icons */}
        <div className="relative mb-8">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Wrench className="w-12 h-12 text-white" />
          </motion.div>
          
          {/* Floating Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="absolute"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>
          ))}
        </div>

        {/* Main Message */}
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-white mb-4"
        >
          {category} Projects Coming Soon!
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mb-6 leading-relaxed"
        >
          I'm currently brewing some amazing {category.toLowerCase()} projects with lots of ☕ and 💻. 
          Stay tuned for some mind-blowing applications!
        </motion.p>

        {/* Animated Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.6 }}
          className="w-full bg-gray-700 rounded-full h-2 mb-6"
        >
          <motion.div
            animate={{ width: ["0%", "75%"] }}
            transition={{ 
              duration: 2, 
              delay: 0.8,
              ease: "easeInOut"
            }}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-6 text-sm"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <Coffee className="w-4 h-4" />
            <span>Coffee consumed: ∞</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Code className="w-4 h-4" />
            <span>Bugs fixed: 42</span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory('All')}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
        >
          View All Projects
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and experience 
            in building modern web applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.length === 0 ? (
              <EmptyState category={activeCategory} />
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      {getCategoryIcon(project.category)}
                      <span className="text-xs text-white font-medium">{project.category}</span>
                    </div>
                    {project.github === '#' && project.demo === '#' && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3"
                          >
                            <Rocket className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="text-white font-bold text-lg mb-1">Coming Soon</div>
                          <div className="text-gray-300 text-sm">In Development</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-4">
                      {project.github !== '#' ? (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </motion.a>
                      ) : (
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">Coming Soon</span>
                        </div>
                      )}
                      {project.demo !== '#' ? (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Demo</span>
                        </motion.a>
                      ) : (
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Rocket className="w-4 h-4" />
                          <span className="text-sm">In Development</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div>
                      <div className="relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                      
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                          <div className="flex items-center space-x-1 bg-cyan-500/20 rounded-full px-3 py-1">
                            {getCategoryIcon(project.category)}
                            <span className="text-cyan-400 font-medium">{project.category}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                          {project.longDescription}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span 
                                  key={tech}
                                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex space-x-4 mt-8">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
                          >
                            <Github className="w-5 h-5" />
                            <span>View Code</span>
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;