'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Approche orientée qualité du code',
  'Architecture modulaire et scalable',
  'Collaboration étroite avec les équipes produit/design',
  'Méthodologies Agile/Scrum',
  'Sens développé de l\'UI/UX',
  'Performance et sécurité prioritaires',
];

export function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              À propos de moi
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Développeur Full Stack passionné par la création d\'applications web modernes et performantes
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Ayoub Hilali est un développeur Full Stack avec plus de 3 ans d\'expérience dans le développement
              d\'applications web. Il intervient sur la conception d\'interfaces modernes, le développement
              d\'APIs REST, l\'optimisation des performances front-end/back-end, la sécurisation des applications
              et le déploiement via Docker, CI/CD et Plesk.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Spécialisé dans les technologies modernes comme React, Next.js, Laravel et Node.js, il maîtrise
              l\'ensemble de la stack web, de l\'interface utilisateur à l\'infrastructure de déploiement.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Son approche combine rigueur technique, attention au détail et focus sur l\'expérience utilisateur.
              Travaillant en équipe agile, il privilégie la collaboration et la livraison de produits de qualité.
            </p>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 hover:border-blue-400/50 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
