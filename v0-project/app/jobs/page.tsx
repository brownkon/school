import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function JobsPage() {
  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="inline-block">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Work Experience</h1>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">My professional journey and career highlights</p>
      </div>

      <div className="space-y-8">
        {jobs.map((job) => (
          <Card
            key={job.slug}
            className="overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
          >
             <div className="grid md:grid-cols-[1.5fr_3fr]">
              <div className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900/50 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
                <div className="relative w-full h-40 md:h-48">
                  <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-contain" />
                </div>
              </div>
              <div className="p-6">
                <CardHeader className="px-0 pt-0">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl group-hover:text-blue-500 transition-colors">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-lg">{job.company}</CardDescription>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>{job.dates}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="mb-4">{job.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-700 dark:text-blue-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-0 pb-0">
                  <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Link href={`/jobs/${job.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  )
}

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    slug: "techcorp-senior-frontend",
    shortDescription: "Led the frontend development team in building a next-generation SaaS platform.",
    skills: ["React", "TypeScript", "GraphQL", "CI/CD"],
    dates: "Jan 2022 - Present",
    logo: "/logo1.png?height=200&width=200",
  },
  {
    title: "Full Stack Developer",
    company: "InnovateSoft",
    slug: "innovatesoft-fullstack",
    shortDescription: "Developed and maintained multiple client projects using modern web technologies.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    dates: "Mar 2020 - Dec 2021",
    logo: "/logo2.png?height=200&width=200",
  },
  {
    title: "Frontend Engineer",
    company: "DataViz Solutions",
    slug: "dataviz-frontend",
    shortDescription: "Created interactive data visualization dashboards for enterprise clients.",
    skills: ["Vue.js", "D3.js", "Tailwind CSS", "Jest"],
    dates: "Jun 2018 - Feb 2020",
    logo: "/logo3.png?height=200&width=200",
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    slug: "creative-agency-web",
    shortDescription: "Built responsive websites and e-commerce solutions for various clients.",
    skills: ["JavaScript", "PHP", "WordPress", "Shopify"],
    dates: "Aug 2016 - May 2018",
    logo: "/logo4.png?height=200&width=200",
  },
  {
    title: "Junior Developer",
    company: "StartUp Labs",
    slug: "startup-labs-junior",
    shortDescription: "Assisted in developing MVPs for early-stage startups and product prototypes.",
    skills: ["HTML/CSS", "JavaScript", "Bootstrap", "Firebase"],
    dates: "Jan 2015 - Jul 2016",
    logo: "/logo5.png?height=4000&width=4000",
  },
]

