import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const nameVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
        delay: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const name = "Surya J";
  const title = "Full Stack Developer";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear" as const
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear" as const
        }}
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/30 rounded-full"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear" as const
        }}
        className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/30 rounded-lg"
      />

      {/* Additional floating elements */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute top-1/4 right-1/4 w-16 h-16 border border-cyan-400/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
        className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-purple-400/20 rounded-lg"
      />

      {/* Sparkle effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          variants={sparkleVariants}
          animate="animate"
          style={{
            position: 'absolute',
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
          transition={{
            delay: i * 0.5,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        >
          <Sparkles className="w-4 h-4 text-cyan-400/40" />
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name with letter animation */}
          <motion.div
            variants={nameVariants}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-2">
              {name.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.8,
                    ease: "easeOut" as const
                  }}  
                  className={`inline-block ${letter === ' ' ? 'w-4' : ''} ${
                    index < name.indexOf(' ') 
                      ? 'bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent' 
                      : 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                  }`}
                                whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3, ease: "easeOut" as const }
              }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Title with typewriter effect */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 relative">
              {title.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    delay: index * 0.1,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: title.length * 0.1 + 1
                  }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.5
                }}
                className="inline-block w-1 h-8 sm:h-12 bg-cyan-400 ml-1"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting innovative web solutions with modern technologies and creative problem-solving. 
            Passionate about building scalable applications that make a difference.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>Explore My Work</span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.a
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(6, 182, 212, 1)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex justify-center space-x-6"
        >
          {[
            { Icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
            { Icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
            { Icon: Mail, href: '#contact', label: 'Email', color: 'hover:text-cyan-400' },
          ].map(({ Icon, href, label, color }, index) => (
            <motion.a
              key={label}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 2 + index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.3, 
                y: -8,
                rotate: 5
              }}
              whileTap={{ scale: 0.9 }}
              href={href}
              className={`w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 ${color} transition-all duration-300 border border-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20`}
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ 
            y: [0, 12, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={scrollToAbout}
          className="group text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-current rounded-full mt-2"
            />
          </div>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;