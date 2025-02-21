import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./components/AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Wedding & Event Decoration Services in Indore, Ujjain, Dewas | Affordable Prices",
  icons: {
    icon: './img/cardecor.png',
  },
  description:
    "Best wedding and event decoration services in Indore, Ujjain, and Dewas. Specializing in car decoration for marriage, mandir decor, sehra, bouquet, and garlands. Get stunning decorations at minimum prices with immediate service. Book now!",
  keywords: [
    "wedding decoration",
    "event decoration",
    "car decoration for marriage",
    "mandir decor",
    "sehra",
    "bouquet",
    "garlands",
    "wedding decor in Indore",
    "event decor in Ujjain",
    "wedding decoration in Dewas",
    "affordable wedding decoration",
    "immediate decoration service",
    "best mandir decor",
    "car decoration near me",
    "wedding bouquet",
    "garlands for marriage",
    "budget wedding decor",
  ],
  authors: [{ name: "Flower Elegance" }],
  openGraph: {
    title: "Wedding & Event Decoration Services in Indore, Ujjain, Dewas | Affordable Prices",
    description:
      "Best wedding and event decoration services in Indore, Ujjain, and Dewas. Specializing in car decoration for marriage, mandir decor, sehra, bouquet, and garlands. Get stunning decorations at minimum prices with immediate service. Book now!",
    url: "https://flowers-three-gamma.vercel.app/", 
    siteName: "Flower Elegance",
    images: [
      {
        url: "https://flowers-three-gamma.vercel.app/p12.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Wedding & Event Decoration Services",
      },
    ],
    locale: "en_IN", // For India
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding & Event Decoration Services in Indore, Ujjain, Dewas | Affordable Prices",
    description:
      "Best wedding and event decoration services in Indore, Ujjain, and Dewas. Specializing in car decoration for marriage, mandir decor, sehra, bouquet, and garlands. Get stunning decorations at minimum prices with immediate service. Book now!",
    images: ["https://flowers-three-gamma.vercel.app/p12.jpg"], // Replace with your actual Twitter image URL
  },
  other: {
    "google-site-verification": "your-verification-code", // Add your Google Search Console verification code
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <AppProvider>
        <Header/>
        {children}
        <Footer/>
      </AppProvider>
      </body>
    </html>
  );
}
