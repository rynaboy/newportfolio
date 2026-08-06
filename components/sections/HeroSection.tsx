"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Code, Terminal, Cpu, Database, Braces, Layers, Globe, FileCode, Zap, Workflow } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

function TypewriterSubtitle() {
  const { t } = useLanguage()
  const titles = t.hero.titles
  const [currentTitle, setCurrentTitle] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typeSpeed, setTypeSpeed] = useState(100)

  useEffect(() => {
    setCurrentIndex(0)
    setCurrentTitle("")
    setIsDeleting(false)
  }, [titles])

  useEffect(() => {
    const handleType = () => {
      const current = titles[currentIndex] || titles[0]

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
  const { t } = useLanguage()
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
        <div className="absolute inset-0 pointer-events-none">
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
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-20 dark:from-purple-800 dark:to-purple-700 animate-float pointer-events-none" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl opacity-20 rotate-45 dark:from-blue-800 dark:to-blue-700 animate-float-delayed pointer-events-none" />
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-15 dark:from-pink-800 dark:to-pink-700 animate-blob pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-28 h-28 bg-gradient-to-br from-green-200 to-green-300 rounded-3xl opacity-20 rotate-12 dark:from-green-800 dark:to-green-700 animate-float animation-delay-2000 pointer-events-none" />

      {/* ========================================================= */}
      {/* ANIMATED CODE FRAME WINDOWS & FRAMEWORK LOGO BACKGROUND */}
      {/* ========================================================= */}

      {/* Code Frame Window 1 (Top Left): Developer Object Spec - Shifted further left & 50% lighter opacity */}
      <div className="absolute top-16 left-2 sm:left-4 md:left-6 lg:left-8 max-w-[260px] sm:max-w-xs md:max-w-sm hidden sm:block pointer-events-none opacity-55 dark:opacity-50 animate-float shadow-lg transition-all">
        <div className="bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-sm rounded-xl border border-slate-700/40 p-3 text-left font-mono text-xs text-slate-200 shadow-xl">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-700/40">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
              <FileCode className="w-3 h-3 text-blue-400" /> Developer.ts
            </span>
          </div>
          <div className="space-y-1 text-[11px] leading-relaxed">
            <p className="text-purple-400">const <span className="text-blue-300">developer</span> = &#123;</p>
            <p className="pl-3 text-emerald-400">name: <span className="text-amber-300">&quot;MOL RYNA&quot;</span>,</p>
            <p className="pl-3 text-emerald-400">role: <span className="text-amber-300">&quot;Full Stack &amp; IT Manager&quot;</span>,</p>
            <p className="pl-3 text-emerald-400">skills: [<span className="text-cyan-300">&quot;Next.js&quot;</span>, <span className="text-rose-300">&quot;Laravel&quot;</span>, <span className="text-sky-300">&quot;Flutter&quot;</span>],</p>
            <p className="pl-3 text-emerald-400">experience: <span className="text-amber-300">&quot;6+ Years&quot;</span></p>
            <p className="text-purple-400">&#125;;</p>
          </div>
        </div>
      </div>

      {/* Code Frame Window 2 (Bottom Right): API Route Query - 50% lighter opacity */}
      <div className="absolute bottom-24 right-2 sm:right-4 md:right-6 lg:right-8 max-w-[260px] sm:max-w-xs md:max-w-sm hidden sm:block pointer-events-none opacity-55 dark:opacity-50 animate-float-delayed shadow-lg transition-all">
        <div className="bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-sm rounded-xl border border-slate-700/40 p-3 text-left font-mono text-xs text-slate-200 shadow-xl">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-700/40">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
              <Terminal className="w-3 h-3 text-green-400" /> api/projects/route.ts
            </span>
          </div>
          <div className="space-y-1 text-[11px] leading-relaxed">
            <p className="text-blue-400">export async function <span className="text-yellow-300">GET</span>() &#123;</p>
            <p className="pl-3 text-purple-300">const <span className="text-slate-200">projects</span> = await <span className="text-cyan-300">db</span>.<span className="text-blue-300">query</span>(</p>
            <p className="pl-6 text-amber-300">&quot;SELECT * FROM portfolio WHERE status = &apos;active&apos;&quot;</p>
            <p className="pl-3 text-purple-300">);</p>
            <p className="pl-3 text-rose-300">return <span className="text-emerald-300">NextResponse</span>.<span className="text-yellow-300">json</span>(&#123; success: true, projects &#125;);</p>
            <p className="text-blue-400">&#125;</p>
          </div>
        </div>
      </div>

      {/* Code Frame Window 3 (Top Right): Terminal Terminal Execution */}
      <div className="absolute top-28 right-4 md:right-10 max-w-[200px] sm:max-w-xs hidden lg:block pointer-events-none opacity-50 dark:opacity-45 animate-float animation-delay-2000 shadow-md">
        <div className="bg-slate-900/40 dark:bg-slate-950/40 backdrop-blur-sm rounded-xl border border-slate-700/40 p-2.5 text-left font-mono text-[11px] text-slate-200 shadow-lg">
          <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-700/40">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
              <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
            </div>
            <span className="text-[9px] text-slate-400 font-semibold">bash ~ deploy</span>
          </div>
          <p className="text-emerald-400">$ git commit -m <span className="text-amber-200">&quot;feat: live 🚀&quot;</span></p>
          <p className="text-blue-300">$ npm run build</p>
          <p className="text-emerald-300 font-semibold">✔ Compiled in 1.2s!</p>
        </div>
      </div>

      {/* FLOATING FRAMEWORK LOGO BADGES - 50% reduced opacity & blur */}

      {/* 1. React Logo Badge (Top Left) */}
      <div className="absolute top-36 left-1/3 transform -translate-x-12 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-500/5 dark:bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs font-bold shadow-sm animate-float pointer-events-none opacity-60">
        <svg className="w-4 h-4 animate-spin text-cyan-500" style={{ animationDuration: '8s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </svg>
        <span>React 19</span>
      </div>

      {/* 2. Next.js Logo Badge (Top Center Right) */}
      <div className="absolute top-20 right-1/3 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/5 dark:bg-white/5 backdrop-blur-sm border border-slate-700/20 text-slate-800 dark:text-white text-xs font-bold shadow-sm animate-float-delayed pointer-events-none opacity-60">
        <svg className="w-4 h-4 text-slate-900 dark:text-white" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="85" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="10" />
          <path d="M149.508 157.52L69.142 54H54V126H67.8818V73.436L137.636 163.504C141.872 161.802 145.856 159.78 149.508 157.52Z" fill="currentColor" />
          <rect x="115" y="54" width="13.8818" height="72" fill="currentColor" />
        </svg>
        <span>Next.js 15</span>
      </div>

      {/* 3. Laravel Logo Badge (Mid Left) */}
      <div className="absolute top-1/2 left-4 md:left-12 transform -translate-y-16 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-500/5 dark:bg-rose-500/10 backdrop-blur-sm border border-rose-500/20 text-rose-600 dark:text-rose-300 text-xs font-bold shadow-sm animate-float-delayed pointer-events-none opacity-60">
        <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.2 5.8l-8.6-5a1.2 1.2 0 00-1.2 0l-8.6 5a1.2 1.2 0 00-.6 1v10.4a1.2 1.2 0 00 .6 1l8.6 5a1.2 1.2 0 00 1.2 0l8.6-5a1.2 1.2 0 00 .6-1V6.8a1.2 1.2 0 00-.6-1zm-9.2 15l-6.8-3.9v-8.2l6.8 3.9v8.2zm1.2-9.6L6.4 7.3l5.6-3.3 5.6 3.3-4.4 2.6zm5.6 1.4l-4.4-2.6v-2.3l4.4 2.6v2.3z" />
        </svg>
        <span>Laravel</span>
      </div>

      {/* 4. Flutter Logo Badge (Mid Right) */}
      <div className="absolute top-1/2 right-4 md:right-12 transform translate-y-12 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-500/5 dark:bg-sky-500/10 backdrop-blur-sm border border-sky-500/20 text-sky-600 dark:text-sky-300 text-xs font-bold shadow-sm animate-float pointer-events-none opacity-60">
        <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.3 2.5L5 11.8l2.8 2.8L17.1 5.3h-2.8zM14.3 12.3l-4.2 4.2 4.2 4.2h2.8l-4.2-4.2 4.2-4.2h-2.8z" />
        </svg>
        <span>Flutter</span>
      </div>

      {/* 5. TypeScript Logo Badge (Bottom Left) */}
      <div className="absolute bottom-36 left-1/3 transform -translate-x-12 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600/5 dark:bg-blue-600/10 backdrop-blur-sm border border-blue-500/20 text-blue-600 dark:text-blue-300 text-xs font-bold shadow-sm animate-float animation-delay-2000 pointer-events-none opacity-60">
        <div className="w-4 h-4 rounded bg-blue-600 text-white font-black text-[9px] flex items-center justify-center">
          TS
        </div>
        <span>TypeScript</span>
      </div>

      {/* 6. Tailwind Logo Badge (Bottom Right) */}
      <div className="absolute bottom-40 right-1/3 transform translate-x-12 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-500/5 dark:bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 text-teal-600 dark:text-teal-300 text-xs font-bold shadow-sm animate-float-delayed pointer-events-none opacity-60">
        <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.8-2.3 4.3-1.7 1 .4 1.7 1.2 2.5 2C14.1 12.6 15.6 14 19 14c3.3 0 5.3-1.7 6-5-1.3 1.7-2.8 2.3-4.3 1.7-1-.4-1.7-1.2-2.5-2C16.9 7.4 15.4 6 12 6zm-7 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.8-2.3 4.3-1.7 1 .4 1.7 1.2 2.5 2C7.1 18.6 8.6 20 12 20c3.3 0 5.3-1.7 6-5-1.3 1.7-2.8 2.3-4.3 1.7-1-.4-1.7-1.2-2.5-2C9.9 13.4 8.4 12 5 12z" />
        </svg>
        <span>Tailwind CSS</span>
      </div>

      {/* 7. PostgreSQL Logo Badge (Top Mid Left) */}
      <div className="absolute top-15 left-1/3 hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-bold shadow-sm animate-float pointer-events-none opacity-60">
        <Database className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
        <span>PostgreSQL</span>
      </div>

      {/* FLOATING SYNTAX CODE CHIPS & ICON ACCENTS */}
      <div className="absolute top-1/3 right-12 hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/40 text-purple-300 font-mono text-[10px] border border-slate-700/40 shadow-sm animate-float pointer-events-none opacity-50">
        <Braces className="w-3 h-3 text-yellow-400" /> &lt;Component /&gt;
      </div>

      <div className="absolute bottom-28 left-8 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/40 text-emerald-300 font-mono text-[10px] border border-slate-700/40 shadow-sm animate-float-delayed pointer-events-none opacity-50">
        <Zap className="w-3 h-3 text-emerald-400" /> async / await
      </div>

      <div className="absolute bottom-12 right-1/4 hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/40 text-sky-300 font-mono text-[10px] border border-slate-700/40 shadow-sm animate-float pointer-events-none opacity-50">
        <Cpu className="w-3 h-3 text-blue-400" /> useState(true)
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Main heading with enhanced animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-2 sm:mb-4 leading-snug tracking-tight animate-fadeInUp">
            <span className="text-slate-900 dark:text-white">{t.hero.greeting}</span>
          </h1>

          {/* Name with animated gradient */}
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-snug tracking-tight animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="animate-shimmer bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h2>

          {/* Animated subtitle */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <TypewriterSubtitle />
          </div>

          {/* Description with fade in */}
          <p
            className="text-base sm:text-lg md:text-xl text-black dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-normal animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            {t.hero.description}
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
                {t.hero.contactMe}
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
              className="group bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              {t.hero.downloadCv}
            </Button>
          </div>

          {/* Stats cards with enhanced animations */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "1s" }}
          >
            {[
              { number: "6+", label: t.hero.yearsExp },
              { number: "70+", label: t.hero.completedProjects },
              { number: "50+", label: t.hero.happyClients },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white dark:hover:bg-slate-800">
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
