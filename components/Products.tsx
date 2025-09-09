'use client'

import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Coffee, Droplets, Package } from 'lucide-react'
import { ScrollReveal, StaggerChildren, StaggerItem, ScaleOnHover } from './ScrollAnimations'

export default function Products() {
  const { t } = useTranslation('common')

  const products = [
    {
      icon: Coffee,
      title: t('products.planifolia.title'),
      description: t('products.planifolia.description'),
      image: 'https://images.unsplash.com/photo-1598137203980-945997109a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      icon: Droplets,
      title: t('products.tahitensis.title'),
      description: t('products.tahitensis.description'),
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      icon: Package,
      title: t('products.powder.title'),
      description: t('products.powder.description'),
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ]

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-white via-warm-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth-800 font-display mb-6 bg-gradient-to-r from-primary-700 to-earth-700 bg-clip-text text-transparent">
            {t('products.title')}
          </h2>
        </ScrollReveal>

        <StaggerChildren staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <StaggerItem key={index}>
                <ScaleOnHover scale={1.02}>
                  <motion.div
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-warm-200/50"
                    whileHover={{ y: -12, scale: 1.02 }}
                    initial={{ opacity: 0, y: 50, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-72 overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className="absolute top-6 right-6"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-warm-200/50">
                          <product.icon className="w-8 h-8 text-primary-600" />
                        </div>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="p-8"
                      whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.02)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-earth-800 mb-4 font-display">
                        {product.title}
                      </h3>
                      <p className="text-earth-600 leading-relaxed font-light">
                        {product.description}
                      </p>
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
