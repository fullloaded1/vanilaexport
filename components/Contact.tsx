'use client'

import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ScrollReveal, ScaleOnHover } from './ScrollAnimations'

export default function Contact() {
  const { t } = useTranslation('common')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-warm-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2} className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-earth-800 font-display mb-6 bg-gradient-to-r from-primary-700 to-earth-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left" delay={0.4}>
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-warm-200/50"
              whileHover={{ y: -8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-earth-700 mb-2 font-semibold">
                    {t('contact.form.name')}
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2 font-semibold">
                    {t('contact.form.email')}
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-earth-700 mb-2 font-semibold">
                    {t('contact.form.message')}
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full transition-all duration-300"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ScaleOnHover scale={1.02}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {t('contact.form.submit')}
                    </Button>
                  </ScaleOnHover>
                </motion.div>
              </form>
            </motion.div>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal direction="right" delay={0.6}>
            <div className="space-y-8">
              <ScaleOnHover scale={1.02}>
                <motion.div 
                  className="bg-gradient-to-br from-primary-800 to-primary-900 text-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary-700/50"
                  whileHover={{ y: -8 }}
                >
                  <motion.h3 
                    className="text-2xl font-semibold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {t('contact.info.phone')}
                  </motion.h3>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                        <Phone className="w-5 h-5 text-primary-300" />
                      </motion.div>
                      <span>+62 21 1234 5678</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                        <Mail className="w-5 h-5 text-primary-300" />
                      </motion.div>
                      <span>info@vanillaexport.com</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                        <MapPin className="w-5 h-5 text-primary-300 mt-1" />
                      </motion.div>
                      <span>
                        Jl. Vanilla Raya No. 123<br />
                        Jakarta, Indonesia 12345
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </ScaleOnHover>

              <ScaleOnHover scale={1.02}>
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-warm-200/50"
                  whileHover={{ y: -8 }}
                >
                  <motion.h4 
                    className="text-xl font-semibold text-earth-800 mb-4 font-display"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Business Hours
                  </motion.h4>
                  <div className="space-y-3 text-earth-600">
                    {[
                      { day: "Monday - Friday:", time: "8:00 AM - 6:00 PM" },
                      { day: "Saturday:", time: "9:00 AM - 4:00 PM" },
                      { day: "Sunday:", time: "Closed" }
                    ].map((schedule, index) => (
                      <motion.div 
                        key={index}
                        className="flex justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span>{schedule.day}</span>
                        <span>{schedule.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </ScaleOnHover>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
