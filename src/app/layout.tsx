import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import "./performance.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kutupgrup.com'),
  title: {
    default: 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler',
    template: '%s | Kutup Grup'
  },
  description: 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz. İple erişim teknikleri, jeoteknik uygulamalar ve yüksek yapı çözümleri.',
  keywords: ['endüstriyel dağcılık', 'jeoteknik uygulamalar', 'iple erişim', 'şev stabilizasyonu', 'kaya bariyeri', 'çığ bariyeri', 'yüksek yapı temizliği'],
  authors: [{ name: 'Kutup Grup' }],
  creator: 'Kutup Grup',
  publisher: 'Kutup Grup',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://kutupgrup.com',
    siteName: 'Kutup Grup',
    title: 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler',
    description: 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kutup Grup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kutup Grup - Endüstriyel Dağcılık ve Jeoteknik Çözümler',
    description: 'Heyelan, kaya ve taş düşmesi problemlerinize en uygun çözümleri projelendirip uyguluyoruz.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://kutupgrup.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
