import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Personalized', 'Adaptive', 'Engaging', 'Effective'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-black py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Empowering Every Learner with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-black"
          >
            Deliver <span className="font-semibold text-indigo-600">{words[currentWord]}</span>{' '}
            learning experiences, real-time insights, and smarter outcomes with AI-powered education.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
              Try a Live Demo
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
              Start Free Trial
            </button>
            <button className="flex items-center text-red font-semibold hover:underline">
              See How It Works
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Image Section */}
        <div
         
          className="relative"
        >
          <div className="relative">
            <img
              src="/hero-illustration.svg"
              alt="AI tutors helping students"
              className="w-full h-auto max-w- mx-auto opacity-100"
            />
          </div>
        </div>
      </div>  
    </div>
  );
};

export default HeroSection;
