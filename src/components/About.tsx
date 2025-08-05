import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Target } from 'lucide-react';

// Import company logos (you'll need to add these files to src/assets/)
// import companyLogo1 from '../assets/company-logo-1.png';
// import inmakesLogo from '../assets/inmakes-logo.png';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized applications with lightning-fast load times'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Focusing on intuitive user experiences and accessibility'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Delivering solutions that meet business objectives'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full stack developer with a love for creating innovative web solutions. 
            With expertise in modern technologies and a keen eye for design, I build applications 
            that are both functional and beautiful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-6">
                Started as a curious developer exploring different technologies, I've evolved into 
                a full stack developer specializing in React, Node.js, and modern web technologies. 
                I'm constantly learning and adapting to new challenges in the ever-evolving tech landscape.
              </p>
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-white mb-3">Professional Experience</h4>
                
                {/* Associate Software Engineer Intern */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {/* Replace with your company logo */}
                      <img 
                        src="/src/assets/episyche_logo.jpeg" 
                        alt="Episyche Technologies Logo" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (target && fallback) {
                            target.style.display = 'none';
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" style={{display: 'none'}}>
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="text-white font-semibold text-sm">Associate Software Engineer Intern</h5>
                        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full">2 months</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-0.5">Episyche Technologies</p>
                      <p className="text-gray-500 text-xs">June 2025 - July 2025</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs">Python</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs">Django</span>
                        <span className="px-1.5 py-0.5 bg-black/20 text-gray-300 rounded-full text-xs">Next.js</span>
                        <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">React</span>
                        <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">JavaScript</span>
                        <span className="px-1.5 py-0.5 bg-teal-500/20 text-teal-400 rounded-full text-xs">Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Java Developer Trainee */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {/* Replace with Inmakes Infotech logo */}
                      <img 
                        src="/src/assets/inmakesofficial_logo.jpeg" 
                        alt="Inmakes Infotech Logo" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          const target = e.currentTarget as HTMLImageElement;
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (target && fallback) {
                            target.style.display = 'none';
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" style={{display: 'none'}}>
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="text-white font-semibold text-sm">Java Developer Trainee</h5>
                        <span className="text-xs text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full">Internship</span>
                      </div>
                      <p className="text-gray-400 text-xs mb-0.5">Inmakes Infotech</p>
                      <p className="text-gray-500 text-xs">Duration: [Add your duration]</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-400 rounded-full text-xs">Java</span>
                        <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs">SQL</span>
                        <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs">MySQL</span>
                        <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-400 rounded-full text-xs">JSP</span>
                        <span className="px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded-full text-xs">Servlets</span>
                        <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full text-xs">Spring Boot</span>
                        <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">jQuery</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-3 border border-purple-500/20">
                    <div className="text-lg font-bold text-purple-400">15+</div>
                    <div className="text-gray-400 text-xs">Projects Completed</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-lg p-3 border border-green-500/20">
                    <div className="text-lg font-bold text-green-400">Always</div>
                    <div className="text-gray-400 text-xs">Learning & Growing</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;