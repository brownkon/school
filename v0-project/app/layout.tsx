import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alex Johnson | Full Stack Developer",
  description: "Personal portfolio showcasing projects and professional experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                  <Link href="/" className="font-bold text-blue-500 text-xl">
                    Alex Johnson
                  </Link>
                  <nav className="hidden gap-6 md:flex">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-500 relative group">
                      Home
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/projects"
                      className="text-sm font-medium transition-colors hover:text-blue-500 relative group"
                    >
                      Projects
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link
                      href="/jobs"
                      className="text-sm font-medium transition-colors hover:text-blue-500 relative group"
                    >
                      Experience
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full"></span>
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                      <nav className="flex flex-col gap-4">
                        <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-500">
                          Home
                        </Link>
                        <Link href="/projects" className="text-sm font-medium transition-colors hover:text-blue-500">
                          Projects
                        </Link>
                        <Link href="/jobs" className="text-sm font-medium transition-colors hover:text-blue-500">
                          Experience
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-gray-200 dark:border-gray-800 py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
                  © {new Date().getFullYear()} Alex Johnson. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

