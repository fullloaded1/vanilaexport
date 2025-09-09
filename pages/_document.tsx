import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'

interface MyDocumentProps extends DocumentProps {
  locale?: string;
}

export default function Document({ locale = 'en' }: MyDocumentProps) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <Html lang={locale} dir={dir}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={locale === 'ar' ? 'font-tajawal' : ''}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
