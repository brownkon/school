import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="inline-block">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <p className="mt-4 text-xl text-muted-foreground">A collection of my recent work and personal projects</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.slug}
            className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
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
            <CardHeader>
              <CardTitle className="group-hover:text-blue-500 transition-colors">{project.name}</CardTitle>
              <CardDescription>{project.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-500/10 text-blue-700 dark:text-blue-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild className="bg-blue-500 hover:bg-blue-600">
                <Link href={`/projects/${project.slug}`}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}

const projects = [
  {
    name: "E-commerce Platform",
    slug: "ecommerce-platform",
    shortDescription: "A modern e-commerce solution with real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    image: "/coder1.jpg?height=300&width=500",
  },
  {
    name: "Health Tracker App",
    slug: "health-tracker",
    shortDescription: "Mobile application for tracking fitness and nutrition goals.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    image: "/coder2.jpg?height=300&width=500",
  },
  {
    name: "Financial Dashboard",
    slug: "financial-dashboard",
    shortDescription: "Interactive dashboard for monitoring financial performance.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "/coder3.jpg?height=300&width=500",
  },
  {
    name: "Social Media Analytics",
    slug: "social-media-analytics",
    shortDescription: "Analytics platform for tracking social media engagement.",
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL"],
    image: "/coder4.jpg?height=300&width=500",
  },
  {
    name: "AI Content Generator",
    slug: "ai-content-generator",
    shortDescription: "Tool for generating marketing content using AI.",
    technologies: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel AI SDK"],
    image: "/coder5.jpg?height=300&width=500",
  },
]

