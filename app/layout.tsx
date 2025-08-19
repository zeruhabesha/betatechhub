import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { InteractiveBackground } from "@/components/InteractiveBackground"
import { ThemeProvider } from "@/components/theme-provider"
import ChatbotWrapper from "@/components/ChatbotWrapper"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "BETA TECH HUB - Advanced Cybersecurity Solutions",
  description:
    "Protect your business with cutting-edge cybersecurity solutions. Real-time threat detection, penetration testing, and 24/7 monitoring.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <InteractiveBackground />
          <Navigation />
          {children}
          <ChatbotWrapper />
        </ThemeProvider>
      </body>
    </html>
  )
}
