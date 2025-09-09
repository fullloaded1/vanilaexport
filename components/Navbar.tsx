'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { smoothScrollTo } from '@/lib/smoothScroll'
import { useRouter } from 'next/router'

const navItems = [
  { key: 'home', label: 'nav.home' },
  { key: 'about', label: 'nav.about' },
  { key: 'products', label: 'nav.products' },
  { key: 'contact', label: 'nav.contact' }
]

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'id', name: 'ID' },
  { code: 'ar', name: 'عربي' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation('common')
  const router = useRouter()
  
  const { scrollY } = useScroll()
  
  // Enhanced scroll effects
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.95)']
  )
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ['0.1', '0.2']
  )
  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['0 4px 30px rgba(0, 0, 0, 0.05)', '0 8px 30px rgba(0, 0, 0, 0.1)']
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(5px)', 'blur(10px)']
  )

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 10)
    })
  }, [scrollY])

  const handleLanguageChange = (langCode: string) => {
    // Update the document direction based on the selected language
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    router.push(router.asPath, undefined, { locale: langCode });
  }

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    smoothScrollTo(sectionId, 80) // 80px offset for navbar height
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: shadow,
        borderColor: `rgba(0, 0, 0, ${isScrolled ? '0.1' : '0.05'})`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="flex items-center"
          >
            <div className="flex items-center space-x-3">
              <div className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 p-1.5 shadow-lg border-2 border-primary-400/30">
                <img 
                  src="/Natura vanilla.png" 
                  alt="Natura Vanilla Logo" 
                  className="h-full w-full object-contain"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                />
              </div>
              <h1 className="hidden md:block text-2xl font-bold font-display bg-gradient-to-r from-primary-700 to-earth-800 bg-clip-text text-transparent">
                <span className="block text-sm font-normal text-primary-500">PT. Natura Vanilla</span>
                <span className="-mt-1 block">Indonesia</span>
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="relative px-2 py-1.5 text-earth-700 hover:text-primary-600 transition-colors font-medium text-sm uppercase tracking-wider"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.3 + index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
              >
                {t(item.label)}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Desktop CTA & Language Switcher */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
            className="hidden md:flex items-center space-x-4"
          >
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t('hero.cta')}
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white bg-opacity-95 backdrop-blur-sm">
              {navItems.map((item) => (
                <motion.button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  {t(item.label)}
                </motion.button>
              ))}
              <div className="px-3 py-3">
                <LanguageSwitcher />
              </div>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-2.5 rounded-lg font-medium transition-all duration-300"
                >
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
