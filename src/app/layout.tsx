import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hotel Airlink Castle | 5-Star Luxury Hotel near Cochin Airport (CIAL)",
  description: "Experience premium 5-star luxury at Hotel Airlink Castle, located just 2 minutes from Cochin International Airport. Features the Horizon rooftop pool, signature wooden suites, and Royal Dine dining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-[#D4AF37] selection:text-neutral-950">
        {children}
      </body>
    </html>
  );
}

