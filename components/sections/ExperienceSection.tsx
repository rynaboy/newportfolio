"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: "IT Manager & Full-Stack Developer",
      company: "TANADA Property Co,.Ltd.",
      period: `2026 - ${t.experience.present}`,
      location: t.contact.location,
      description:
        "Leading development of scalable web applications and mobile app. Using Next.js, Node.js, Laravel Framework, Python, React Native, and Flutter. Mentoring junior developers and architecting for complex business requirements.",
      technologies: ["Laravel", "Next.js", "React Native", "Flutter", "TypeScript", "cPanel", "PostgreSQL", "Git", "Raw SQL", "SQLite"],
      current: true,
    },
    {
      title: "Project Manager & Full-Stack Developer",
      company: "Technology Solution Development TSD Co,.Ltd.",
      period: "2020 - 2026",
      location: t.contact.location,
      description:
        "Leading development of scalable web applications using PHP, Next.js, and Node.js. Mentoring junior developers and architecting solutions for complex business requirements.",
      technologies: ["PHP", "Next.js", "TypeScript", "cPanel", "PostgreSQL"],
      current: false,
    },
    {
      title: "Full-Stack Developer",
      company: "Technology Solution Development TSD Co,.Ltd.",
      period: "2021 - 2023",
      location: t.contact.location,
      description:
        "Developed and maintained multiple client projects, implemented PHP, Laravel, CodeIgniter, and collaborated with design teams to create pixel-perfect user interfaces.",
      technologies: ["PHP", "Laravel", "CodeIgniter", "MySQL", "SQLite", "Git", "CMS"],
      current: false,
    },
    {
      title: "UX/UI Designer & Frontend Developer",
      company: "Technology Solution Development TSD Co,.Ltd.",
      period: "2020 - 2021",
      location: t.contact.location,
      description:
        "Created responsive web applications and landing pages for various clients. Focused on performance optimization and cross-browser compatibility.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Webpack", "Sass"],
      current: false,
    },
    {
      title: "Internship - Web Development",
      company: "Technology Solution Development TSD Co,.Ltd.",
      period: "2019 - 2020",
      location: t.contact.location,
      description:
        "Created responsive web applications and landing pages for various clients. Focused on performance optimization and cross-browser compatibility.",
      technologies: ["HTML5", "CSS", "JavaScript"],
      current: false,
    },
    {
      title: "Cashier & Customer Service",
      company: "Bong Houses Pub",
      period: "2019 - 2019",
      location: "Kampong Cham, Cambodia",
      description:
        "Be able to handle cash transactions, and Using the POS system to process orders and payments.",
      technologies: ["Customer Service", "Cash Handling"],
      current: false,
    },
    {
      title: "Cashier & Customer Service",
      company: "Chapayom Tea",
      period: "2018 - 2019",
      location: "Kampong Cham, Cambodia",
      description:
        "Be able to handle cash transactions, and Using the POS system to process orders and payments.",
      technologies: ["Customer Service", "Cash Handling"],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-slate-900 dark:text-white">{t.experience.title}</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t.experience.subtitle}
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hidden md:block" />

                  {/* Experience Card */}
                  <Card
                    className={`ml-0 md:ml-16 border-0 shadow-lg hover:shadow-xl transition-shadow ${
                      exp.current
                        ? "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50"
                        : ""
                    }`}
                  >
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        {exp.current && (
                          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 w-fit">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>{exp.location}</span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-base mb-4">{exp.description}</CardDescription>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
