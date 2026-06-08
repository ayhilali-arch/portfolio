'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo, badges } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
              Ayoub Hilali
            </h3>
            <p className="text-gray-400 mb-4">Développeur Full Stack JavaScript</p>
            <p className="text-gray-500 text-sm">
              Créateur d\'applications web modernes et performantes
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Navigation</h4>
            <nav className="space-y-2">
              {['À propos', 'Compétences', 'Projets', 'Contact'].map((item) => {
                const href = `#${item.toLowerCase().replace(/\s+/g, '')}`;
                return (
                  <motion.a
                    key={item}
                    href={href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors block"
                  >
                    {item}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Suivez-moi</h4>
            <div className="flex items-center gap-4">
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 border border-transparent transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 border border-transparent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-slate-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 border border-transparent transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-500 text-sm mb-3">Stack technologique</p>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 text-xs font-medium text-gray-400 bg-slate-800/50 border border-slate-700 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-slate-800"
        >
          <p className="text-gray-500 text-sm">
            © 2026 Ayoub Hilali. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Créé avec React, Next.js, TypeScript et Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
