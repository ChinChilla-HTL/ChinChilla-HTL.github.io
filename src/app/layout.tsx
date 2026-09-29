import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PROFILE } from "@/data/profile";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cabinet = localFont({ src: "../../public/fonts/CabinetGrotesk-Medium.ttf", variable: "--font-sans", display: "swap" });
export const metadata: Metadata = {
  title: { default: "Haitian Li | Academic Homepage", template: "%s | Haitian Li" },
  description: PROFILE.description,
  metadataBase: new URL("https://chinchilla-htl.github.io"),
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${cabinet.variable} font-sans antialiased`}><ThemeProvider attribute="class" defaultTheme="light"><TooltipProvider delayDuration={0}><a className="skip-link" href="#home">Skip to content</a><div className="page-shell">{children}</div><Navbar /></TooltipProvider></ThemeProvider></body></html>;
}
