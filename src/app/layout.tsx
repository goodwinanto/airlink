import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Hotel Airlink Castle | A Five-Star Sanctuary in Kerala",
  description: "Built at the threshold of arrival and stillness, Hotel Airlink Castle is where Kerala's most discerning travellers choose to pause.",
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
      <body className="min-h-full flex flex-col bg-[#F8F4EE] text-[#1A1614]">
        {children}
      </body>
    </html>
  );
}

