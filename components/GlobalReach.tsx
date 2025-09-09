'use client'

import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { MapPin, Globe, Truck } from 'lucide-react'

export default function GlobalReach() {
  const { t } = useTranslation('common')

  const stats = [
    { 
      icon: Globe, 
      value: '100+', 
      label: t('globalReach.stats.countries', 'Countries') 
    },
    { 
      icon: Truck, 
      value: '5000+', 
      label: t('globalReach.stats.shipments', 'Shipments') 
    },
    { 
      icon: MapPin, 
      value: '100%', 
      label: t('globalReach.stats.satisfaction', 'Satisfaction') 
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-earth-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-display mb-6 bg-gradient-to-r from-white via-warm-100 to-secondary-200 bg-clip-text text-transparent">
            {t('globalReach.title')}
          </h2>
          <p className="text-xl text-warm-100 max-w-4xl mx-auto leading-relaxed font-light">
            {t('globalReach.description')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-10 h-10 text-warm-200" />
              </motion.div>
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-warm-200 bg-clip-text text-transparent font-display">{stat.value}</div>
              <div className="text-warm-200 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-20 h-20 mx-auto mb-6 text-warm-200" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-6 font-display bg-gradient-to-r from-white to-warm-200 bg-clip-text text-transparent">
            {t('globalReach.networkTitle', 'Worldwide Shipping')}
          </h3>
          <p className="text-warm-100 max-w-2xl mx-auto leading-relaxed font-light">
            {t('globalReach.networkDescription', 'We ship to all countries worldwide with safe and secure delivery, ensuring the highest quality of our vanilla products upon arrival.')}
          </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
