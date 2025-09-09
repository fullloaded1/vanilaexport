'use client'

import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { ScrollReveal, StaggerChildren, StaggerItem, ScaleOnHover } from './ScrollAnimations'

export default function Testimonials() {
  const { t } = useTranslation('common')

  const testimonials = [
    {
      name: t('testimonials.client1.name'),
      company: t('testimonials.client1.company'),
      text: t('testimonials.client1.text'),
      rating: 5,
    },
    {
      name: t('testimonials.client2.name'),
      company: t('testimonials.client2.company'),
      text: t('testimonials.client2.text'),
      rating: 5,
    },
    {
      name: t('testimonials.client3.name'),
      company: t('testimonials.client3.company'),
      text: t('testimonials.client3.text'),
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-warm-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth-800 font-display mb-6 bg-gradient-to-r from-primary-700 to-earth-700 bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
        </ScrollReveal>

        <StaggerChildren staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <ScaleOnHover scale={1.03}>
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 relative hover:shadow-2xl transition-all duration-500 cursor-pointer border border-warm-200/50"
                    whileHover={{ y: -8, scale: 1.02 }}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="absolute top-6 left-6 text-primary-300"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-10 h-10" />
                    </motion.div>
                    
                    <motion.div 
                      className="flex mb-4 mt-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.2 + i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.p 
                      className="text-earth-600 mb-8 leading-relaxed italic font-light text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      "{testimonial.text}"
                    </motion.p>

                    <motion.div 
                      className="border-t border-warm-200 pt-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="font-bold text-earth-800 text-lg font-display">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-earth-500 font-light">
                        {testimonial.company}
                      </div>
                    </motion.div>
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
