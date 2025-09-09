import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'

interface MyDocumentProps extends DocumentProps {
  locale?: string;
}

export default function Document({ locale = 'en' }: MyDocumentProps) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <Html lang={locale} dir={dir}>
      <Head>
        {locale === 'ar' ? (
          <link
            href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        ) : (
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        )}
      </Head>
      <body className={locale === 'ar' ? 'font-tajawal' : ''}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
