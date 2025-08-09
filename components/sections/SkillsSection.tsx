import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend",
      skills: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "Node.js",
        "Express",
        "Python",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "PHP & Frameworks",
      skills: [
        "Laravel",
        "CodeIgniter",
        "Symfony",
        "CakePHP",
        "Composer",
        "PHPUnit",
        "Eloquent ORM",
        "Blade Templates",
      ],
    },
    {
      title: "Database & APIs",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
        "CRUD Operations",
        "Database Design",
        "API Integration",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "cPanel", "Linux", "Apache", "Nginx"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-slate-900 dark:text-white">Skills &</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
            <div className="flex justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>• Currently learning: AI/ML</span>
              <span>• Next up: Web3 Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
