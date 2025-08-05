import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Container,
  Palette,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 95, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'HTML5 & CSS3', level: 93, icon: '🎨' },
        { name: 'Tailwind CSS', level: 92, icon: '💨' },
        { name: 'Bootstrap', level: 88, icon: '🎯' },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Django', level: 85, icon: '🐘' },
        { name: 'Spring Boot', level: 83, icon: '🌱' },
        { name: 'FastAPI', level: 80, icon: '⚡' },
        { name: 'Flask', level: 82, icon: '🍶' },
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MySQL', level: 80, icon: '🐬' },
        { name: 'Git', level: 92, icon: '📝' },
        { name: 'GitHub', level: 90, icon: '🐙' },
        { name: 'Docker', level: 78, icon: '🐳' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building 
            scalable, performant web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full relative"
                      >
                        <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;