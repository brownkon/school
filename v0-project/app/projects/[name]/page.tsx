import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Code2, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectPageProps {
  params: {
    name: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.name)

  if (!project) {
    return (
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="mt-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{project.dates}</span>
            </div>
          </div>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <div className="mt-4 space-y-4 text-lg">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-medium">Project Timeline</h3>
                  <p>{project.dates}</p>
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Links</h3>
                  <div className="space-y-2">
                    {project.links?.map((link) => (
                      <Button key={link.url} variant="outline" asChild className="w-full justify-start">
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.icon === "github" ? (
                            <Code2 className="mr-2 h-4 w-4" />
                          ) : (
                            <ExternalLink className="mr-2 h-4 w-4" />
                          )}
                          {link.label}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

const projects = [
  {
    name: "E-commerce Platform",
    slug: "ecommerce-platform",
    shortDescription: "A modern e-commerce solution with real-time inventory management.",
    description: [
      "Developed a comprehensive e-commerce platform that enables businesses to sell products online with a seamless user experience.",
      "The platform features real-time inventory management, secure payment processing, and a responsive design that works across all devices.",
      "Implemented advanced search and filtering capabilities to help customers find products quickly and easily.",
    ],
    features: [
      "Real-time inventory tracking and management",
      "Secure payment processing with Stripe integration",
      "Customer account management and order history",
      "Admin dashboard for product and order management",
      "Responsive design for mobile and desktop",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    dates: "Jan 2023 - Apr 2023",
    image: "/coder1.jpg?height=600&width=1200",
    links: [
      { label: "View GitHub Repository", url: "https://github.com", icon: "github" },
      { label: "Visit Live Site", url: "https://example.com", icon: "external" },
    ],
  },
  {
    name: "Health Tracker App",
    slug: "health-tracker",
    shortDescription: "Mobile application for tracking fitness and nutrition goals.",
    description: [
      "Created a comprehensive health tracking application that helps users monitor their fitness progress and nutrition intake.",
      "The app provides personalized recommendations based on user goals and activity levels, with visual representations of progress over time.",
      "Implemented social features that allow users to connect with friends and share achievements.",
    ],
    features: [
      "Personalized workout plans and nutrition tracking",
      "Progress visualization with interactive charts",
      "Integration with fitness wearables for automatic data import",
      "Social sharing and community challenges",
      "Reminder system for workouts and meals",
    ],
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    dates: "May 2022 - Dec 2022",
    image: "/coder2.jpg?height=600&width=1200",
    links: [
      { label: "View GitHub Repository", url: "https://github.com", icon: "github" },
      { label: "Download App", url: "https://example.com", icon: "external" },
    ],
  },
  {
    name: "Financial Dashboard",
    slug: "financial-dashboard",
    shortDescription: "Interactive dashboard for monitoring financial performance.",
    description: [
      "Designed and developed an interactive financial dashboard that provides real-time insights into business performance.",
      "The dashboard features customizable widgets, data visualization tools, and automated reporting capabilities.",
      "Implemented secure authentication and role-based access control to ensure sensitive financial data is protected.",
    ],
    features: [
      "Real-time financial data visualization",
      "Customizable dashboard widgets",
      "Automated report generation and scheduling",
      "Role-based access control",
      "Integration with multiple data sources",
    ],
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    dates: "Aug 2021 - Mar 2022",
    image: "/coder3.jpg?height=600&width=1200",
    links: [
      { label: "View GitHub Repository", url: "https://github.com", icon: "github" },
      { label: "View Demo", url: "https://example.com", icon: "external" },
    ],
  },
  {
    name: "Social Media Analytics",
    slug: "social-media-analytics",
    shortDescription: "Analytics platform for tracking social media engagement.",
    description: [
      "Built a comprehensive analytics platform that helps businesses track and optimize their social media performance across multiple platforms.",
      "The tool provides insights into audience demographics, engagement metrics, and content performance to inform marketing strategies.",
      "Implemented machine learning algorithms to predict optimal posting times and content types for maximum engagement.",
    ],
    features: [
      "Cross-platform social media analytics",
      "Audience demographic insights",
      "Content performance tracking",
      "Predictive analytics for optimal posting",
      "Automated reporting and alerts",
    ],
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL"],
    dates: "Feb 2021 - Jul 2021",
    image: "/coder4.jpg?height=600&width=1200",
    links: [{ label: "View GitHub Repository", url: "https://github.com", icon: "github" }],
  },
  {
    name: "AI Content Generator",
    slug: "ai-content-generator",
    shortDescription: "Tool for generating marketing content using AI.",
    description: [
      "Developed an AI-powered content generation tool that helps marketers create high-quality content for various channels.",
      "The platform uses advanced language models to generate blog posts, social media updates, email campaigns, and more.",
      "Implemented a user-friendly interface that allows non-technical users to easily generate and customize content.",
    ],
    features: [
      "AI-powered content generation for multiple formats",
      "Content customization and editing tools",
      "Brand voice and tone settings",
      "Content calendar and scheduling",
      "Performance analytics for published content",
    ],
    technologies: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel AI SDK"],
    dates: "Oct 2022 - Jan 2023",
    image: "/coder5.jpg?height=600&width=1200",
    links: [
      { label: "View GitHub Repository", url: "https://github.com", icon: "github" },
      { label: "Try the Demo", url: "https://example.com", icon: "external" },
    ],
  },
]

