import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PR0DK RECORDS | Masterización y producción Online.",
  description:
    "Producción musical, arreglos y masterización online. Atención personalizada.",

  openGraph: {
    title: "PR0DK RECORDS",
    description:
      "Masterización y producción Online",
    url: "https://pr0dkrecords.com",
    siteName: "PR0DK RECORDS",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PR0DK RECORDS",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
  >
      <body className="min-h-full flex flex-col">
  {children}

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-P8XGBZCJKG"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-P8XGBZCJKG');
    `}
  </Script>
</body>
    </html>
  );
}
