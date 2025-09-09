module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id', 'ar'],
    localeDetection: true,
  },
  fallbackLng: {
    default: ['en'],
    'ar': ['ar', 'en'],
    'id': ['id', 'en']
  },
  // This is important for RTL support in Arabic
  localePath: './public/locales',
  react: {
    useSuspense: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
