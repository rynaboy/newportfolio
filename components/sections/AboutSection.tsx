import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users, Award, Coffee } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, user-centered digital experiences",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and exceptional user experience",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const achievements = [
    { icon: Award, label: "Top 1% Developer", value: "GitHub" },
    { icon: Coffee, label: "Cups of Coffee", value: "2,847" },
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Enhanced background with patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Get to know me
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              <span className="text-slate-900 dark:text-white">About</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences through code and design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced content section */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                    Building the future, one line of code at a time
                  </h3>

                  <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="relative">
                      I'm a passionate full-stack developer with over 5 years of experience creating digital solutions
                      that make a difference. My journey started with PHP and has evolved into expertise across modern
                      web technologies, specializing in both frontend and backend development.
                    </p>

                    <p>
                      I have extensive experience with <strong>PHP frameworks</strong> including Laravel and
                      CodeIgniter, building robust web applications with clean architecture. On the frontend, I work
                      with React, Next.js, and TypeScript to create beautiful, responsive user interfaces.
                    </p>

                    <p>
                      My backend expertise includes designing RESTful APIs, implementing CRUD operations, database
                      optimization, and server management. I'm passionate about writing clean, maintainable code and
                      following best practices in both PHP and JavaScript ecosystems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced personal info with better styling */}
              <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Location", value: "Pnhom Penh, Cambodia" },
                    { label: "Experience", value: "5+ Years" },
                    { label: "Email", value: "rynaboy22@gmail.com" },
                    { label: "Status", value: "Available", highlight: true },
                  ].map((item, index) => (
                    <div key={index} className="group">
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-medium block mb-1">
                        {item.label}:
                      </span>
                      <span
                        className={`font-semibold ${item.highlight ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"} group-hover:scale-105 transition-transform inline-block`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements section */}
              <div className="flex gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-2xl p-4 flex-1"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{achievement.label}</div>
                      <div className="font-bold text-slate-900 dark:text-white">{achievement.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced highlights grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-white/5 backdrop-blur-sm overflow-hidden relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>
                  <CardContent className="p-8 relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
