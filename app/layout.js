import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/ui/Navbar';
import Footer from '../components/Footer';
import { BeamBackground } from "@/components/ui/BeamBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Jenios',
  description: 'Innovative solutions for your business needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BeamBackground >
        <Navbar />
        
        {children}
        <Footer />
        </BeamBackground>
      </body>
    </html>
  );
}
