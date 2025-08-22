"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

function TypewriterSubtitle() {
  const titles = [
    "Full-Stack Developer & UI/UX Designer",
    "Backend Developer & System Architect",
    "Frontend Developer & Creative Designer",
    "PHP Developer & Laravel Expert",
    "React Developer & Next.js Specialist",
    "UI/UX Designer & Product Designer",
    "CodeIgniter Developer & API Builder",
    "Web Developer & Digital Creator",
    "Database Designer & API Developer",
    "Mobile Developer & Cross-Platform Expert",
  ]

  const [currentTitle, setCurrentTitle] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typeSpeed, setTypeSpeed] = useState(100)

  useEffect(() => {
    const handleType = () => {
      const current = titles[currentIndex]

      if (isDeleting) {
        setCurrentTitle(current.substring(0, currentTitle.length - 1))
        setTypeSpeed(50)
      } else {
        setCurrentTitle(current.substring(0, currentTitle.length + 1))
        setTypeSpeed(100)
      }

      if (!isDeleting && currentTitle === current) {
        setTimeout(() => setIsDeleting(true), 3000)
      } else if (isDeleting && currentTitle === "") {
        setIsDeleting(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
      }
    }

    const timer = setTimeout(handleType, typeSpeed)
    return () => clearTimeout(timer)
  }, [currentTitle, isDeleting, currentIndex, typeSpeed, titles])

  return (
    <div className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 min-h-[2em] flex items-center justify-center">
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {currentTitle}
      </span>
      <span className="animate-pulse text-blue-600 ml-1">|</span>
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Floating geometric shapes matching the design */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-60 dark:from-purple-800 dark:to-purple-700" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl opacity-50 rotate-45 dark:from-blue-800 dark:to-blue-700" />
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-40 dark:from-pink-800 dark:to-pink-700" />
      <div className="absolute bottom-40 right-20 w-28 h-28 bg-gradient-to-br from-green-200 to-green-300 rounded-3xl opacity-50 rotate-12 dark:from-green-800 dark:to-green-700" />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-2xl opacity-60 dark:from-yellow-800 dark:to-orange-700" />
      <div className="absolute top-1/3 right-10 w-36 h-36 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full opacity-30 dark:from-indigo-800 dark:to-indigo-700" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Status indicator */}
          <div className="inline-flex items-center gap-3 bg-white/80 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-full text-sm font-medium mb-12  hover:shadow-md transition-all duration-300">
           
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-slate-900 dark:text-white">Hi, I'm</span>
          </h1>

          {/* Name with gradient */}
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ryna Mol
            </span>
          </h2>

          {/* Animated subtitle */}
          <div className="mb-8">
            <TypewriterSubtitle />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            crafting beautiful digital experiences with modern technologies
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 hover:bg-white/80 dark:hover:bg-slate-800/80 px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-3" />
              Download CV
            </Button>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "20+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => {
            const aboutSection = document.getElementById("about")
            if (aboutSection) {
              const headerOffset = 80
              const elementPosition = aboutSection.offsetTop
              const offsetPosition = elementPosition - headerOffset
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              })
            }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer hover:scale-110 transition-all duration-300"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce group-hover:animate-none">
            
         
          </div>
        </button>
      </div>
    </section>
  )
}
