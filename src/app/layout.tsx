import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>MSIT B.Tech Management Quota Admission Form</title>
        <link rel="icon" href="/logo.png"/>
        <meta
          name="description"
          content="Application form for admission under Management Quota Seats of GGSIPU, Delhi in Maharaja Surajmal Institute of Technology , developed by Mohit Arora 9667067062."
        />
      </head>
      <body className={`${inter.className} group`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
