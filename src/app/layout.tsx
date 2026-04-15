import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const heroData = {
  name: "Rituraj Singh",
  tagline: "Project Manager · Delivery Architect · Strategy · Agile",
  roles: [
    "Project Manager",
    "Agile Delivery Architect",
    "Strategic Product Partner",
    "Systems Thinker",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Rituraj Singh | Project Manager & Delivery Architect",
    template: "%s | Rituraj Singh",
  },
  description:
    "Official portfolio of Rituraj Singh, a specialized Project Manager focused on agile delivery, product architecture, and strategic transformation.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rituraj Singh — PM Architect",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* Plausible Analytics */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-[73px] page-transition">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
