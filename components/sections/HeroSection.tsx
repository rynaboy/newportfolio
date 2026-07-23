"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import { useEffect, useState } from "react"

function TypewriterSubtitle() {
  const titles = [
    "Businesses Consultant",
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
    "Lecture & Teacher at Western University",
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
  const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: string }>>([])

  useEffect(() => {
    setMounted(true)
    // Generate random particle positions only on client side
    const particleData = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${4 + Math.random() * 4}s`,
    }))
    setParticles(particleData)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-x bg-300%"></div>

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float ${i % 2 === 0 ? "animation-delay-2000" : "animation-delay-4000"
                }`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating geometric shapes with enhanced animations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-60 dark:from-purple-800 dark:to-purple-700 animate-float" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl opacity-50 rotate-45 dark:from-blue-800 dark:to-blue-700 animate-float-delayed" />
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-40 dark:from-pink-800 dark:to-pink-700 animate-blob" />
      <div className="absolute bottom-40 right-20 w-28 h-28 bg-gradient-to-br from-green-200 to-green-300 rounded-3xl opacity-50 rotate-12 dark:from-green-800 dark:to-green-700 animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-2xl opacity-60 dark:from-yellow-800 dark:to-orange-700 animate-blob animation-delay-4000" />
      <div className="absolute top-1/3 right-10 w-36 h-36 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full opacity-30 dark:from-indigo-800 dark:to-indigo-700 animate-float-delayed" />

      {/* Additional animated elements */}
      <div
        className="absolute top-10 left-1/2 w-16 h-16 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-full opacity-40 dark:from-cyan-800 dark:to-cyan-700 animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl opacity-50 dark:from-rose-800 dark:to-rose-700 animate-pulse" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Main heading with enhanced animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-snug tracking-tight animate-fadeInUp">
            <span className="text-slate-900 dark:text-white">Hi, I'm</span>
          </h1>

          {/* Name with animated gradient */}
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-snug tracking-tight animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="animate-shimmer bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ryna Mol
            </span>
          </h2>

          {/* Animated subtitle */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <TypewriterSubtitle />
          </div>

          {/* Description with fade in */}
          <p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-normal animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            crafting beautiful digital experiences with modern technologies
          </p>

          {/* CTA buttons with staggered animation */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  const headerOffset = 80
                  const elementPosition = contactSection.offsetTop
                  const offsetPosition = elementPosition - headerOffset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  })
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Get In Touch
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/MOLRYNA.pdf"
                link.download = "MOLRYNA.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 hover:bg-white/80 dark:hover:bg-slate-800/80 px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>

          {/* Stats cards with enhanced animations */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "1s" }}
          >
            {[
              { number: "6+", label: "Years Experience" },
              { number: "70+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/80 dark:hover:bg-slate-800/80">
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2 group-hover:animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced scroll indicator */}
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
