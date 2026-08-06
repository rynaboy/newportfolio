"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import {
  Facebook,
  Instagram,
  QrCode
} from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"

// SVG Icon Components
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export function SocialSection() {
  const { t } = useLanguage()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: string }>>([])
  useEffect(() => {
    setMounted(true)
    // Generate random particle positions only on client side
    const particleData = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${4 + Math.random() * 4}s`,
    }))
    setParticles(particleData)
  }, [])

  const socialLinks = [
    {
      name: "Telegram",
      icon: TelegramIcon,
      href: "https://t.me/RYNA_MOL", // You'll add your link here
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/share/1GNoN5TqAh/?mibextid=wwXIfr", // You'll add your link here
      gradient: "from-blue-600 to-blue-700",
      hoverGradient: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      href: "#", // You'll add your link here
      gradient: "from-black to-gray-800",
      hoverGradient: "from-gray-900 to-black",
      bgColor: "bg-gray-900/10",
      borderColor: "border-gray-900/20",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/mol.ryna/", // You'll add your link here
      gradient: "from-purple-600 via-pink-600 to-orange-500",
      hoverGradient: "from-purple-700 via-pink-700 to-orange-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/mol-ryna-2296b51a1/", // You'll add your link here
      gradient: "from-blue-700 to-blue-800",
      hoverGradient: "from-blue-800 to-blue-900",
      bgColor: "bg-blue-700/10",
      borderColor: "border-blue-700/20",
    },
  ]

  return (
    <section className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-60 dark:from-purple-800 dark:to-purple-700 animate-float" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl opacity-50 rotate-45 dark:from-blue-800 dark:to-blue-700 animate-float-delayed" />
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-40 dark:from-pink-800 dark:to-pink-700 animate-blob" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16 pt-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight animate-fadeInUp">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.social.connectWithMe}
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              {t.social.subtitle}
            </p>
          </div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <Card className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}
                    >
                      <social.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {social.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                      {t.social.clickToVisit}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* QR Code Card */}
            <div
              className="group animate-fadeInUp"
              style={{ animationDelay: `${0.3 + socialLinks.length * 0.1}s` }}
            >
              <Card className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                    <QrCode className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {t.social.bankQrCode}
                  </h3>
                  <div className="w-48 h-48 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 mb-4 overflow-hidden shadow-sm">
                    <img
                      src="/molryna.jpg"
                      alt="Bank QR Code - ABA PAY"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.social.scanToPay}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to home link */}
          <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: "1s" }}>
            <button
              onClick={() => {
                router.push("/")
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 100)
              }}
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              <span>←</span>
              <span>{t.social.backToHome}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

