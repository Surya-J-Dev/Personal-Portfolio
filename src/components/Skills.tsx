import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Database } from 'lucide-react';

type Skill = { name: string; slug: string; color: string; fallback?: string };

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: 'React', slug: 'react', color: '#61DAFB' },
    { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' },
    { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
    { name: 'Next.js', slug: 'nextdotjs', color: '#FFFFFF', fallback: 'nextjs' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', color: '#06B6D4', fallback: 'tailwind' },
    { name: 'CSS3', slug: 'css3', color: '#1572B6', fallback: 'css' },
    { name: 'HTML5', slug: 'html5', color: '#E34F26', fallback: 'html' },
    { name: 'Framer Motion', slug: 'framer', color: '#0055FF', fallback: 'framermotion' },
    { name: 'Bootstrap', slug: 'bootstrap', color: '#7952B3' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Django', slug: 'django', color: '#092E20', fallback: 'django' },
    { name: 'Spring Boot', slug: 'springboot', color: '#6DB33F', fallback: 'spring' },
    { name: 'FastAPI', slug: 'fastapi', color: '#009688', fallback: 'fastapi' },
  ];

  const toolSkills: Skill[] = [
    { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1', fallback: 'postgres' },
    { name: 'MySQL', slug: 'mysql', color: '#4479A1', fallback: 'mysql' },
    { name: 'Git', slug: 'git', color: '#F05032', fallback: 'git' },
    { name: 'GitHub', slug: 'github', color: '#181717', fallback: 'github' },
    { name: 'Docker', slug: 'docker', color: '#2496ED', fallback: 'docker' },
  ];

  const getIconUrl = (skill: Skill) =>
    `https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`;

  const renderSkillGrid = (skills: Skill[]) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.05, ease: 'easeInOut' }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.03 }}
          className="group rounded-xl border border-gray-700/60 bg-gradient-to-br from-gray-900 to-gray-800 p-3 sm:p-4 text-center hover:border-cyan-500/50 shadow-md hover:shadow-cyan-500/10 transition-all"
        >
          <motion.div
            whileHover={{ rotate: 6 }}
            className="mx-auto mb-2 sm:mb-3 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-gray-800/70 ring-1 ring-gray-700 group-hover:ring-cyan-500/50"
          >
            <img
              src={getIconUrl(skill)}
              alt={skill.name}
              className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                const fallbackName = skill.fallback ?? skill.slug;
                target.src = `https://skillicons.dev/icons?i=${fallbackName}`;
              }}
            />
          </motion.div>
          <div className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-200">{skill.name}</div>
        </motion.div>
      ))}
    </div>
  );

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
            A curated set of technologies I use to build modern, scalable, and delightful web experiences.
          </p>
        </motion.div>

        <div className="space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/70"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Frontend</h3>
            </div>
            {renderSkillGrid(frontendSkills)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/70"
          >
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Backend</h3>
            </div>
            {renderSkillGrid(backendSkills)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/70"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Database & Tools</h3>
            </div>
            {renderSkillGrid(toolSkills)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;