"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { icon: Code, title: "Frontend Development", description: "React, Next.js, TypeScript, Tailwind CSS" },
    { icon: Database, title: "Backend Development", description: "Node.js, PHP, Laravel, CodeIgniter" },
    { icon: Palette, title: "UI/UX Design", description: "Figma, Adobe XD, Responsive Design" },
    { icon: Smartphone, title: "Mobile Development", description: "React Native, Cross-platform Apps" },
  ]

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-pink-400/10 animate-gradient-x bg-300%"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 dark:from-blue-800 dark:to-blue-700 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-20 dark:from-purple-800 dark:to-purple-700 animate-blob"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl opacity-40 dark:from-pink-800 dark:to-pink-700 animate-float-delayed"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-fadeInUp">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make
              a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 animate-fadeInUp`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:animate-pulse">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{skill.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal info */}
          <div
            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Let me tell you a bit about myself
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  I specialize in creating modern, responsive web applications using cutting-edge technologies. My
                  expertise spans across frontend frameworks like React and Next.js, backend technologies including PHP
                  and Laravel, and database management systems.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge with the developer community.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "PHP", "Laravel", "Node.js", "Tailwind CSS", "MySQL"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <Code className="w-10 h-10" />
                      </div>
                      <p className="text-lg font-semibold">Always Learning</p>
                      <p className="text-sm opacity-80">Staying updated with latest tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
