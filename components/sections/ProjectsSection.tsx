import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Star, Eye } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      id: "Ditribution Management System",
      title: "Laravel Distribution Management Platform",
      description:
        "Some-featured for distribution system platform built with Laravel, featuring admin dashboard, staff, Category, and inventory management, role permission level, sales, purchasing, stock movement, commission based.",
      image: "/distributionsystem.png?height=300&width=200",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", 'tailwind css', "JWT", "Spatie Permission", "phpunit"],
      featured: true,
      liveUrl: "https://milktea.phpcode.shop/login/",
      githubUrl: "#",
      stats: { stars: 0, views: "10" },
      gradient: "from-red-600 to-orange-600",
    },
    {
      id: "laravel-assetmanagement",
      title: "Laravel Asset Mangeemnt Platform",
      description:
        "Some-featured for assetmanagement system platform built with Laravel, featuring admin dashboard, Floor, Cagegory, and inventory management.",
      image: "/assetdashborad.png?height=300&width=200",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Stripe API"],
      featured: false,
      liveUrl: "https://assetmanagement.phpcode.shop/",
      githubUrl: "#",
      stats: { stars: 0, views: "10" },
      gradient: "from-red-600 to-orange-600",
    },
    {
      id: "Web Site E-Commerce",
      title: "360 Monica Bedding Store",
      description:
        "Content Management System built with Next.js, Taiwind CSS, REST API, Laravel Backend, and SEO optimization.",
      image: "/monicabadding.png?height=300&width=500",
      technologies: ["Laravel", "PHP", "MySQL", "jQuery", "Tailwind CSS","Next.js","Node Module","Vercel"],
      featured: false,
      liveUrl: "https://360monica.com/",
      githubUrl: "#",
      stats: { stars: 189, views: "9.8k" },
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: "php-api-system",
      title: "PHP REST API System",
      description: "RESTful API system with JWT authentication, CRUD operations, and comprehensive documentation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["PHP", "MySQL", "JWT", "Postman", "Apache"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 156, views: "7.3k" },
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: "Profolio Next.js",
      title: "Portfolio Next.js",
      description: "Modern portfolio and details your self by webpage and use this template for free.",
      image: "/molrynaportfolio.png?height=300&width=500",
      technologies: ["Next.js", "Node.js", "Daisy UI", "JSON data",'Tailwind CSS', "Vercel"],
      featured: false,
      liveUrl: "https://molryna.phpcode.shop/",
      githubUrl: "https://github.com/rynaboy/newportfolio",
      stats: { stars: 134, views: "6.1k" },
      gradient: "from-green-500 to-blue-500",
    },
    {
      id: "sophearen_profile",
      title: "Kou Sophearen Profile",
      description: "Make the profile for Kou Sophearen. With link social media and contact information.",
      image: "/sophearen.png?height=300&width=500",
      technologies: ["Next.js", "JSON data", "Tailwind CSS", "Vercel"],
      featured: false,
      liveUrl: "https://kousophearen.vercel.app/",
      githubUrl: "#",
      stats: { stars: 0, views: "0" },
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: "panha_profile",
      title: "Thol Sopanha Profile",
      description: "Make the profile for Thol Sopanha. With link social media and contact information.",
      image: "/panha.png?height=300&width=500",
      technologies: ["Next.js", "JSON data", "Tailwind CSS", "Vercel"],
      featured: false,
      liveUrl: "https://tholsopanha.vercel.app/",
      githubUrl: "#", 
      stats: { stars: 0, views: "0" },
      gradient: "from-purple-600 to-pink-600",
    },
  ]

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              My Personal Projects
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              <span className="text-slate-900 dark:text-white">Featured</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore a selection of my recent projects that demonstrate my technical expertise, problem-solving abilities, and commitment to creating modern, high-quality web applications.
            </p>
          </div>

          {/* Enhanced featured project */}
          {featuredProject && (
            <div className="mb-20">
              <Card className="border-0 shadow-2xl overflow-hidden bg-white/80 dark:bg-white/5 backdrop-blur-sm group hover:shadow-3xl transition-all duration-700">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                    <img
                      src={featuredProject.image || "/placeholder.svg"}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <Badge className={`bg-gradient-to-r ${featuredProject.gradient} text-white shadow-lg`}>
                        ⭐ Featured
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 right-6 z-20 flex gap-3">
                      <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-white text-sm flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {featuredProject.stats.stars}
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-white text-sm flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {featuredProject.stats.views}
                      </div>
                    </div>
                  </div>
                  <div className="p-12 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl mb-4 font-black text-slate-900 dark:text-white">
                        {featuredProject.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {featuredProject.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-3 mb-8">
                        {featuredProject.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 text-sm font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button
                          asChild
                          className={`bg-gradient-to-r ${featuredProject.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300`}
                        >
                          <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          asChild
                          className="hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300"
                        >
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Enhanced other projects grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {otherProjects.map((project, index) => (
              <Card
                key={project.id}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white/80 dark:bg-white/5 backdrop-blur-sm hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                  ></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-white text-xs flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {project.stats.stars}
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-white text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {project.stats.views}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced view all projects button */}
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/50 dark:bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/80 dark:hover:bg-white/20 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                View All Projects
              </span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
