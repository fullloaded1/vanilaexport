import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Montserrat } from 'next/font/google'
import '../styles/globals.css'

// Load Montserrat font with various weights
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Set document direction based on language
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dir = router.locale === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.lang = router.locale || 'en';
    }
  }, [router.locale]);

  return (
    <div className={`${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(MyApp)

