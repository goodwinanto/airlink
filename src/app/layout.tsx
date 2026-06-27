import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      className={`${cormorant.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F5F0E8]">
        {children}
      </body>
    </html>
  );
}

