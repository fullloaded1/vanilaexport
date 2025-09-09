'use client'

import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Leaf, Globe, Users, TreePine } from 'lucide-react'
import { ScrollReveal, StaggerChildren, StaggerItem, ScaleOnHover } from './ScrollAnimations'

export default function About() {
  const { t } = useTranslation('common')

  const features = [
    {
      icon: Leaf,
      title: t('features.organic.title'),
      description: t('features.organic.description'),
    },
    {
      icon: Globe,
      title: t('features.shipping.title'),
      description: t('features.shipping.description'),
    },
    {
      icon: Users,
      title: t('features.trusted.title'),
      description: t('features.trusted.description'),
    },
    {
      icon: TreePine,
      title: t('features.sustainable.title'),
      description: t('features.sustainable.description'),
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-warm-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <ScrollReveal direction="up" delay={0.2} className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-earth-800 font-display mb-6 bg-gradient-to-r from-primary-700 to-earth-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('about.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-earth-600 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('about.description')}
          </motion.p>
        </ScrollReveal>

        {/* Why Choose Us Section */}
        <ScrollReveal direction="up" delay={0.4} className="text-center mb-12">
          <h3 className="text-3xl font-bold text-earth-800 font-display mb-8 bg-gradient-to-r from-primary-600 to-earth-600 bg-clip-text text-transparent">
            {t('features.title')}
          </h3>
        </ScrollReveal>

        {/* Features Grid with Stagger Animation */}
        <StaggerChildren staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <ScaleOnHover scale={1.05}>
                  <motion.div
                    className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-warm-200/50"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(34, 197, 94, 0.1)"
                    }}
                  >
                    <motion.div 
                      className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl mb-6 shadow-lg"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        background: "linear-gradient(135deg, rgb(220, 252, 231), rgb(187, 247, 208))"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-10 h-10 text-primary-600" />
                    </motion.div>
                    <h4 className="text-xl font-semibold text-earth-800 mb-4 font-display">
                      {feature.title}
                    </h4>
                    <p className="text-earth-600 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </motion.div>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}
