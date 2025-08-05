import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Code, Zap, Smartphone } from 'lucide-react';
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
      github: '#',
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
      title: 'Task Management App',
      category: 'Frontend',
      description: 'A modern task management application with real-time updates',
      longDescription: 'Developed a responsive task management application with drag-and-drop functionality, real-time updates, and collaborative features. The app includes project boards, task assignments, deadline tracking, and team collaboration tools.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#',
      features: [
        'Drag-and-drop task management',
        'Real-time collaboration',
        'Project boards and timelines',
        'Team member assignments',
        'Deadline notifications',
        'Progress tracking and analytics'
      ]
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'A beautiful weather dashboard with location-based forecasts',
      longDescription: 'Created an interactive weather dashboard that provides detailed weather information, forecasts, and weather maps. The application features a clean, modern design with animated weather icons and responsive charts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3', 'JavaScript'],
      github: '#',
      demo: '#',
      features: [
        'Current weather conditions',
        '7-day weather forecast',
        'Interactive weather maps',
        'Location-based services',
        'Weather alerts and notifications',
        'Historical weather data'
      ]
    },
    {
      id: 6,
      title: 'Social Media API',
      category: 'Backend',
      description: 'RESTful API for a social media application with authentication',
      longDescription: 'Developed a comprehensive RESTful API for a social media platform with user authentication, post management, real-time messaging, and social features. The API is built with Node.js and Express, using MongoDB for data storage.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
      github: '#',
      demo: '#',
      features: [
        'User authentication with JWT',
        'Post creation and management',
        'Real-time messaging',
        'Friend connections and following',
        'Image upload and processing',
        'API documentation with Swagger'
      ]
    },
    {
      id: 7,
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'A responsive portfolio website with modern animations',
      longDescription: 'Designed and developed a modern portfolio website featuring smooth animations, responsive design, and optimized performance. The site showcases projects, skills, and experience with an engaging user interface.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      github: '#',
      demo: '#',
      features: [
        'Responsive design for all devices',
        'Smooth scroll animations',
        'Interactive project showcase',
        'Contact form with validation',
        'SEO optimized',
        'Fast loading performance'
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
            {filteredProjects.map((project, index) => (
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
                  </div>
                </div>
              </motion.div>
            ))}
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