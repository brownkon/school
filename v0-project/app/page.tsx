import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ParallaxBackground } from "@/components/parallax-background"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />

      <main className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col space-y-6 backdrop-blur-sm bg-white/10 dark:bg-black/10 p-6 rounded-xl border border-gray-200/20 dark:border-gray-700/20 shadow-lg">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-blue-500">Alex Johnson</span>
              <span className="block">Full Stack Developer</span>
            </h1>
            <p className="max-w-prose text-xl text-gray-700 dark:text-gray-300">
              I build exceptional digital experiences with modern technologies. Focused on creating intuitive,
              high-performance applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Link href="/jobs">My Experience</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Email"
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-blue-500/20 shadow-xl sm:h-96 sm:w-96 animate-float">
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent" />
              <Image
                src="/happyDude.jpg?height=400&width=400"
                alt="Alex Johnson"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-24 backdrop-blur-sm bg-white/10 dark:bg-black/10 p-8 rounded-xl border border-gray-200/20 dark:border-gray-700/20 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold">Featured Work</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                className="overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/5 group bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold group-hover:text-blue-500 transition-colors">{project.name}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{project.shortDescription}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group-hover:border-blue-500 group-hover:text-blue-500 transition-colors"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

const featuredProjects = [
  {
    name: "E-commerce Platform",
    slug: "ecommerce-platform",
    shortDescription: "A modern e-commerce solution with real-time inventory management.",
    image: "/coder1.jpg?height=300&width=500",
  },
  {
    name: "Health Tracker App",
    slug: "health-tracker",
    shortDescription: "Mobile application for tracking fitness and nutrition goals.",
    image: "/coder2.jpg?height=300&width=500",
  },
  {
    name: "Financial Dashboard",
    slug: "financial-dashboard",
    shortDescription: "Interactive dashboard for monitoring financial performance.",
    image: "/coder3.jpg?height=300&width=500",
  },
]

