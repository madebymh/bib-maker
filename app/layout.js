import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "London Marathon Bib Maker",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-800`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
