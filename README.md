# Vanilla Export Landing Page

A professional single-page landing page for Indonesian Vanilla Export business with multi-language support (English & Indonesian).

## Features

- 🌍 **Multi-language Support**: English and Indonesian with easy language switching
- 🎨 **Modern Design**: Elegant, natural, and professional design with green and cream color scheme
- 📱 **Responsive**: Fully responsive design for mobile and desktop
- ⚡ **Performance**: Built with Next.js for optimal performance
- 🎭 **Animations**: Smooth animations using Framer Motion
- 🎯 **SEO Optimized**: Bilingual SEO with proper meta tags

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **next-i18next** - Internationalization
- **Lucide React** - Beautiful icons
- **shadcn/ui** - UI components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vanilla-export-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Products.tsx    # Products section
│   ├── GlobalReach.tsx # Global reach section
│   ├── Testimonials.tsx # Testimonials section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── lib/                # Utility functions
├── pages/              # Next.js pages
├── public/
│   └── locales/        # Translation files
│       ├── en/         # English translations
│       └── id/         # Indonesian translations
├── styles/             # Global styles
└── tailwind.config.js  # Tailwind configuration
```

## Sections

1. **Hero Section**: Fullscreen background with compelling headline and CTA
2. **About Us**: Company description and key features
3. **Products**: Vanilla beans, extract, and powder showcase
4. **Global Reach**: Worldwide distribution network
5. **Testimonials**: Client reviews and testimonials
6. **Contact**: Contact form and business information
7. **Footer**: Links and company information

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Green tones (#2d7a2d, #1f5f1f, etc.)
- Cream: Warm cream tones (#fefdf8, #fdf1c7, etc.)

### Content
All text content is managed through translation files:
- `public/locales/en/common.json` - English content
- `public/locales/id/common.json` - Indonesian content

### Images
Replace placeholder images with your own:
- Hero background: Update the background image URL in `components/Hero.tsx`
- Product images: Update image URLs in `components/Products.tsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support, email info@vanillaexport.com or create an issue in the repository.

