import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "روّق | تجارب جدة السياحية - Rawaq Jeddah Tours",
  description: "احجز أفضل الجولات والتجارب السياحية والبحرية والتراثية في جدة مباشرة عبر الواتساب. جولات البحر الأحمر، الغوص، وأسرار جدة التاريخية (البلد).",
  keywords: ["جدة", "تشارم جدة", "تجارب سياحية جدة", "غوص أبحر", "البلد جدة", "Jeddah Tours", "روق"],
  metadataBase: new URL('https://rawaq-jeddah.vercel.app'), // استبدل بدومينك الحقيقي
  openGraph: {
    title: "روّق | تجارب جدة السياحية - Rawaq Jeddah Tours",
    description: "استكشف عروس البحر الأحمر بجولات حصرية وخبرات محلية. احجز الآن جولتك البحرية أو التراثية عبر الواتساب.",
    url: 'https://rawaq-jeddah.vercel.app',
    siteName: 'روّق تجارب جدة',
    images: [
      {
        url: 'https://scth.scene7.com/is/image/scth/albalad-jeddah:crop-760x570?defaultImage=albalad-jeddah',
        width: 760,
        height: 570,
        alt: 'جدة التاريخية - روّق تجارب جدة السياحية',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "روّق | تجارب جدة السياحية",
    description: "احجز أفضل الجولات والتجارب السياحية والبحرية والتراثية في جدة مباشرة عبر الواتساب.",
    images: ['https://scth.scene7.com/is/image/scth/albalad-jeddah:crop-760x570?defaultImage=albalad-jeddah'],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "روّق لتجارب جدة السياحية - Rawaq Tours",
    "image": "https://scth.scene7.com/is/image/scth/albalad-jeddah:crop-760x570?defaultImage=albalad-jeddah",
    "description": "منصة تنظيم الجولات السياحية والتجارب البحرية والتراثية في مدينة جدة بالمملكة العربية السعودية.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jeddah",
      "addressRegion": "Makkah Province",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.543333,
      "longitude": 39.172778
    },
    "url": "https://rawaq-jeddah.vercel.app",
    "telephone": "+966500000000",
    "priceRange": "$$"
  };

  return (
    <html lang="ar">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
