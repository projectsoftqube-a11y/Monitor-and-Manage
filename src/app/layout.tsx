import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
// import TawkTracker from "@/components/TawkTracker";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Security Guard Monitoring Software | Monitor & Manage",
    template: "%s | M&M Security"
  },
  description: "Real-time security guard monitoring software with patrol tracking, attendance management, SOS alerts and incident reporting.",
  keywords: [
    "security guard app",
    "guard patrolling system",
    "guard tour system",
    "real-time guard tracking",
    "workforce management software",
    "security incident reporting",
    "QR code patrol system",
    "mandmsecurity",
    "M&M App",
    "security operation software",
    "automated patrol reports"
  ],
  authors: [{ name: "M&M Security Solutions", url: "https://www.mandmsecurity.com" }],
  creator: "M&M Security Solutions",
  publisher: "M&M Security Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.mandmsecurity.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Security Guard Monitoring Software | Monitor & Manage",
    description: "Real-time security guard monitoring software with patrol tracking, attendance management, SOS alerts and incident reporting.",
    url: "https://www.mandmsecurity.com",
    siteName: "M&M Security",
    images: [
      {
        url: "/dashboard-mockup.png",
        width: 1200,
        height: 630,
        alt: "M&M Guard Patrolling and Management Portal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Guard Monitoring Software | Monitor & Manage",
    description: "Real-time security guard monitoring software with patrol tracking, attendance management, SOS alerts and incident reporting.",
    images: ["/dashboard-mockup.png"],
  },
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
};

// Structured Data (JSON-LD) for Search Engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "M&M Guard App",
  "operatingSystem": "iOS, Android, Web",
  "applicationCategory": "BusinessApplication, SafetyApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Real-time guard patrolling, workforce management, and automated incident reporting platform built for modern security operations.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "120"
  },
  "author": {
    "@type": "Organization",
    "name": "M&M Security Solutions",
    "url": "https://www.mandmsecurity.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z55N01H6PT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z55N01H6PT');
          `}
        </Script>
        <SmoothScroll>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <WhatsAppButton />
        </SmoothScroll>

        {/* Tawk.to chat widget temporarily disabled */}
        {/* <TawkTracker /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}





