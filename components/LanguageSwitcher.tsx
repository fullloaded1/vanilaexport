'use client'

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLocale = i18n.language === 'en' ? 'id' : 'en'
    router.push(router.asPath, router.asPath, { locale: newLocale })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLanguage}
        className="flex items-center gap-2 border-primary-600 text-primary-600 hover:bg-primary-50"
      >
        {i18n.language === 'en' ? (
          <>
            <span className="text-lg">🇬🇧</span>
            <span>English</span>
          </>
        ) : (
          <>
            <span className="text-lg">🇮🇩</span>
            <span>Indonesia</span>
          </>
        )}
      </Button>
    </motion.div>
  )
}

