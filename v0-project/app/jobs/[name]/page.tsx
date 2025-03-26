import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function JobPage({ params }: { params: { name: string } }) {
  const job = jobs.find((j) => j.slug === params.name)

  if (!job) {
    return (
      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold">Job Not Found</h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          The job you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Button asChild className="mt-8 bg-blue-500 hover:bg-blue-600 text-white">
          <Link href="/jobs">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button variant="ghost" asChild className="mb-8 hover:bg-gray-100 dark:hover:bg-gray-800">
        <Link href="/jobs">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
        </Link>
      </Button>

      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="flex items-center gap-6">
            <div className="relative h-32 w-32 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-2">
              <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{job.title}</h1>
              <p className="mt-2 text-2xl text-gray-500 dark:text-gray-400">{job.company}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{job.dates}</span>
            </div>
            {job.location && (
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{job.location}</span>
              </div>
            )}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Job Description</h2>
            <div className="mt-4 space-y-4 text-lg">
              {job.description.map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Key Responsibilities</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold">Achievements</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg text-gray-700 dark:text-gray-300">
              {job.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-medium">Employment Period</h3>
                  <p className="text-gray-700 dark:text-gray-300">{job.dates}</p>
                </div>

                {job.location && (
                  <div>
                    <h3 className="mb-2 font-medium">Location</h3>
                    <p className="text-gray-700 dark:text-gray-300">{job.location}</p>
                  </div>
                )}

                <div>
                  <h3 className="mb-2 font-medium">Skills & Technologies</h3>
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
                </div>

                {job.team && (
                  <div>
                    <h3 className="mb-2 font-medium">Team Size</h3>
                    <p className="text-gray-700 dark:text-gray-300">{job.team}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
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
    description: [
      "As the Senior Frontend Developer at TechCorp Inc., I led a team of developers in building and maintaining a next-generation SaaS platform used by enterprise clients worldwide.",
      "I was responsible for architecture decisions, code quality, and mentoring junior developers while working closely with product and design teams to deliver exceptional user experiences.",
      "Implemented modern frontend practices including component-driven development, comprehensive testing strategies, and performance optimization techniques.",
    ],
    responsibilities: [
      "Led a team of 5 frontend developers, providing technical guidance and code reviews",
      "Architected and implemented key features of the company's flagship SaaS product",
      "Collaborated with UX/UI designers to create intuitive and accessible user interfaces",
      "Established coding standards, best practices, and development workflows",
      "Conducted technical interviews and onboarded new team members",
    ],
    achievements: [
      "Reduced application load time by 40% through performance optimizations",
      "Implemented a component library that increased development velocity by 30%",
      "Led the successful migration from a legacy codebase to a modern React architecture",
      "Mentored 3 junior developers who were promoted to mid-level positions",
      "Received the company's 'Technical Excellence' award in 2023",
    ],
    skills: ["React", "TypeScript", "GraphQL", "CI/CD", "Team Leadership"],
    dates: "Jan 2022 - Present",
    location: "San Francisco, CA (Remote)",
    team: "Led a team of 5 developers",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Full Stack Developer",
    company: "InnovateSoft",
    slug: "innovatesoft-fullstack",
    shortDescription: "Developed and maintained multiple client projects using modern web technologies.",
    description: [
      "As a Full Stack Developer at InnovateSoft, I was responsible for developing and maintaining web applications for a diverse range of clients across various industries.",
      "Worked in an agile environment, collaborating closely with project managers, designers, and clients to deliver high-quality solutions that met business requirements.",
      "Handled both frontend and backend development, from database design to user interface implementation.",
    ],
    responsibilities: [
      "Developed full-stack web applications using Next.js, Node.js, and PostgreSQL",
      "Designed and implemented RESTful APIs and database schemas",
      "Deployed and maintained applications on AWS infrastructure",
      "Participated in client meetings to gather requirements and provide technical insights",
      "Collaborated with the QA team to ensure high-quality deliverables",
    ],
    achievements: [
      "Delivered 12 client projects on time and within budget",
      "Implemented an automated deployment pipeline that reduced deployment time by 70%",
      "Created a reusable component library that was adopted company-wide",
      "Optimized database queries resulting in a 50% reduction in response times",
      "Received consistent positive feedback from clients for technical solutions",
    ],
    skills: ["Next.js", "Node.js", "PostgreSQL", "AWS", "RESTful APIs"],
    dates: "Mar 2020 - Dec 2021",
    location: "Boston, MA",
    team: "Worked in a cross-functional team of 8",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Frontend Engineer",
    company: "DataViz Solutions",
    slug: "dataviz-frontend",
    shortDescription: "Created interactive data visualization dashboards for enterprise clients.",
    description: [
      "At DataViz Solutions, I specialized in creating interactive data visualization dashboards that helped enterprise clients make sense of complex datasets and derive actionable insights.",
      "Worked with large datasets to create performant and intuitive visualizations that communicated key business metrics effectively.",
      "Collaborated with data scientists and analysts to understand data structures and visualization requirements.",
    ],
    responsibilities: [
      "Developed interactive dashboards using Vue.js and D3.js",
      "Implemented complex data visualizations including charts, graphs, and maps",
      "Optimized frontend performance for handling large datasets",
      "Created responsive designs that worked across desktop and tablet devices",
      "Wrote comprehensive unit and integration tests",
    ],
    achievements: [
      "Built a visualization framework that reduced development time for new dashboards by 60%",
      "Implemented data caching strategies that improved dashboard load times by 45%",
      "Created custom visualization components that became part of the company's core offering",
      "Contributed to winning three major enterprise clients through technical demonstrations",
      "Recognized as 'Employee of the Quarter' for technical innovation",
    ],
    skills: ["Vue.js", "D3.js", "Tailwind CSS", "Jest", "Data Visualization"],
    dates: "Jun 2018 - Feb 2020",
    location: "Chicago, IL",
    team: "Part of a 12-person product team",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    slug: "creative-agency-web",
    shortDescription: "Built responsive websites and e-commerce solutions for various clients.",
    description: [
      "As a Web Developer at Creative Agency, I was responsible for building responsive websites and e-commerce solutions for clients across various industries including retail, hospitality, and professional services.",
      "Worked closely with designers to transform creative concepts into functional websites while ensuring cross-browser compatibility and responsive design.",
      "Managed multiple projects simultaneously, from initial development to deployment and maintenance.",
    ],
    responsibilities: [
      "Developed custom WordPress themes and plugins for client websites",
      "Built and customized e-commerce solutions using Shopify and WooCommerce",
      "Implemented responsive designs that worked across all device sizes",
      "Optimized websites for speed, SEO, and accessibility",
      "Provided technical support and maintenance for existing client websites",
    ],
    achievements: [
      "Completed over 25 client websites with consistently positive feedback",
      "Reduced average page load times by 35% through optimization techniques",
      "Created a custom WordPress starter theme that became the agency standard",
      "Implemented accessibility improvements that brought client sites to WCAG 2.1 AA compliance",
      "Mentored two junior developers in WordPress development",
    ],
    skills: ["JavaScript", "PHP", "WordPress", "Shopify", "WooCommerce"],
    dates: "Aug 2016 - May 2018",
    location: "Portland, OR",
    team: "Collaborated with a team of 15 designers and developers",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    title: "Junior Developer",
    company: "StartUp Labs",
    slug: "startup-labs-junior",
    shortDescription: "Assisted in developing MVPs for early-stage startups and product prototypes.",
    description: [
      "As a Junior Developer at StartUp Labs, I assisted in developing minimum viable products (MVPs) for early-stage startups and product prototypes.",
      "Worked in a fast-paced environment with changing requirements and tight deadlines, gaining exposure to various technologies and development methodologies.",
      "Collaborated with founders and product managers to understand business requirements and translate them into technical solutions.",
    ],
    responsibilities: [
      "Developed frontend interfaces using HTML, CSS, and JavaScript",
      "Built simple backend functionality using Firebase",
      "Created responsive layouts using Bootstrap",
      "Participated in user testing sessions and implemented feedback",
      "Assisted senior developers with code reviews and debugging",
    ],
    achievements: [
      "Contributed to the development of 8 startup MVPs, 3 of which secured funding",
      "Built a reusable authentication system that was implemented across multiple projects",
      "Learned and implemented new technologies on tight deadlines",
      "Received recognition for exceptional problem-solving abilities",
      "Promoted from intern to junior developer within 6 months",
    ],
    skills: ["HTML/CSS", "JavaScript", "Bootstrap", "Firebase", "Rapid Prototyping"],
    dates: "Jan 2015 - Jul 2016",
    location: "Austin, TX",
    team: "Part of a small 5-person development team",
    logo: "/placeholder.svg?height=200&width=200",
  },
]

