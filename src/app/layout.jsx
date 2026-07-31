import { Geist, Geist_Mono } from "next/font/google";
import { Kanit } from 'next/font/google'
import './globals.css'
import Navbar from "@/Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-kanit'
})

export const metadata = {
  title: "Ramli Silawane — Portfolio",
  description: "Portfolio of Ramli Silawane, a beginner coder specializing in web development, mobile apps, and UI/UX design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kanit.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
