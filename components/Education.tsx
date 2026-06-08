'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/portfolio';
import { BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Formation
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Parcours académique et continu</p>
        </motion.div>

        {/* Education List */}
        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="group"
            >
              <div className="relative flex items-start gap-6 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg group-hover:border-cyan-400/50 transition-all duration-300">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 group-hover:border-cyan-400/50 transition-colors">
                    <BookOpen className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-cyan-400 mb-1">{edu.degree}</h3>
                  <p className="text-gray-300 font-medium mb-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
