'use client'

import { useTranslation } from 'next-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import { Parallax, FloatingElement } from './ScrollAnimations'
import { smoothScrollTo } from '@/lib/smoothScroll'

export default function Hero() {
  const { t } = useTranslation('common')
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId, 80) // 80px offset for navbar height
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/our-vanilla-farm-on-traditiona_waifu2x_photo_noise3_scale.webp')",
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/40 to-warm-900/60" />
      </motion.div>

      {/* Content with Fade Out on Scroll */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20"
        style={{ opacity }}
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-white">
              {t('hero.title')}
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-primary-400 to-warm-300 mx-auto rounded-full"></div>
            
            <p className="text-lg sm:text-xl text-warm-100 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-4"
          >
            <a 
              href="https://wa.me/6285144920078" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-700 bg-white rounded-md shadow-lg hover:bg-warm-50 hover:shadow-xl transition-all duration-300"
            >
              {t('hero.cta')}
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 3.293a1 1 0 010 1.414L8.414 13H12a1 1 0 110 2H5a1 1 0 01-1-1V8a1 1 0 112 0v3.586l8.293-8.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-warm-200 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center space-y-1"
          >
            <span className="text-sm font-light tracking-wider">EXPLORE MORE</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full"
                animate={{ 
                  y: [0, 8],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  )
}
