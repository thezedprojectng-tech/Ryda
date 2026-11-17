import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { SmoothScroll } from "@/components/ryda/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#061B45",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ryda.ng"),
  title: "RYDA – Campus Transit, Unlocked",
  description: "Rent a bike on campus with RYDA. Scan, ride and return at any station. Built for students.",
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/brand/favicon.png",
  },
  openGraph: {
    title: "RYDA – Campus Transit, Unlocked",
    description: "Rent a bike on campus with RYDA. Scan, ride and return at any station. Built for students.",
    url: "https://www.ryda.ng",
    siteName: "RYDA",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/hero-landscape.jpg",
        width: 1200,
        height: 800,
        alt: "RYDA – Campus Transit, Unlocked",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RYDA – Campus Transit, Unlocked",
    description: "Rent a bike on campus with RYDA. Scan, ride and return at any station. Built for students.",
    images: ["/images/hero-landscape.jpg"],
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
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${poppins.variable} font-sans min-h-full flex flex-col bg-white text-navy selection:bg-lime selection:text-navy-deep`}
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
