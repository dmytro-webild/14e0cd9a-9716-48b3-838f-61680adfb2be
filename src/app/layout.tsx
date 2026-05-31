import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Trabzon Restaurant - Premium Grills & Pastries in Najran',
  description: 'Experience luxury dining at Trabzon Restaurant in Najran, Saudi Arabia. Savor authentic Middle Eastern grills and exquisite Turkish-inspired pastries in an elegant atmosphere.',
  keywords: ["Trabzon Restaurant, Najran, Saudi Arabia, grills, pastries, Middle Eastern cuisine, luxury dining, fine dining, reservation, menu, events"],
  openGraph: {
    "title": "Trabzon Restaurant - Premium Grills & Pastries in Najran",
    "description": "Experience luxury dining at Trabzon Restaurant in Najran, Saudi Arabia. Savor authentic Middle Eastern grills and exquisite Turkish-inspired pastries in an elegant atmosphere.",
    "url": "https://www.trabzonrestaurant.com",
    "siteName": "Trabzon Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/girl-with-phone-night_1303-5741.jpg",
        "alt": "Luxury dining ambiance at Trabzon Restaurant"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Trabzon Restaurant - Premium Grills & Pastries in Najran",
    "description": "Experience luxury dining at Trabzon Restaurant in Najran, Saudi Arabia. Savor authentic Middle Eastern grills and exquisite Turkish-inspired pastries in an elegant atmosphere.",
    "images": [
      "http://img.b2bpic.net/free-photo/girl-with-phone-night_1303-5741.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
