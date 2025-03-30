import { Geist, Geist_Mono } from 'next/font/google'
import { AuthProvider } from '@/components/AuthContext'
import Script from 'next/script'
import TarteConsent from '@/components/TarteConsent'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'CultHive - Découvre et partage tes œuvres préférées',
  description:
    'CultHive est la plateforme où tu peux découvrir, noter et partager des films, séries et livres. Rejoins la communauté de passionnés d’œuvres culturelles.',
  keywords: [
    'films',
    'séries',
    'livres',
    'critiques',
    'notes',
    'partage',
    'cinéma',
    'culture',
    'CultHive',
  ].join(', '), // Ajoute des mots-clés pertinents
  authors: [
    { name: 'CultHive Team', url: 'https://www.culthive.fictyverse.com' },
  ],
  robots: 'index, follow', // Indique aux moteurs de recherche d'indexer et suivre les liens
  icons: {
    icon: '/logo_culthive_svg.svg',
    apple: '/logo_culthive_svg.svg',
  },
  openGraph: {
    title: 'CultHive - Découvre et partage tes œuvres préférées',
    description:
      'CultHive est la plateforme où tu peux découvrir, noter et partager des films, séries et livres.',
    url: 'https://www.culthive.fictyverse.com',
    siteName: 'CultHive',
    type: 'website',
    locale: 'fr_FR', // Définition de la langue
    images: [
      {
        url: 'https://www.culthive.fictyverse.com/logo_culthive.jpg', // Image d'aperçu pour le partage
        width: 1200,
        height: 630,
        alt: 'CultHive - Plateforme pour noter et partager films et séries',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="fr">
        <head>
          <meta
            name="google-site-verification"
            content="_S21QNL_MakRvqzuV17edt8Pw9s6GIO5ifCsNEejPow"
          />

          {/* Google Tag Manager - Head */}
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','G-BTPWGJ6YHV');
              `,
            }}
          />

          {/* Ajouter le fichier CSS de Tarteaucitron */}
          <link
            rel="stylesheet"
            href="/tarteaucitron/css/tarteaucitron.min.css"
          />

          <link rel="icon" href="/logo_culthive_svg.svg" />
        </head>

        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <TarteConsent />
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
