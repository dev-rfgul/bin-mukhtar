import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"] , weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Bin Mukhtar & Co Chartered Accountants",
  description: "Best Tax Consultants in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics id="UA-1234567-89" />
      </body>
    </html>
  );
}
