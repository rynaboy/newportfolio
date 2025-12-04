"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MessageCircle, 
  Facebook, 
  Music, 
  Instagram, 
  Linkedin, 
  QrCode 
} from "lucide-react"
import { useEffect, useState } from "react"

export function SocialSection() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    {
      name: "Telegram",
      icon: MessageCircle,
      href: "https://t.me/RYNA_MOL", // You'll add your link here
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#", // You'll add your link here
      gradient: "from-blue-600 to-blue-700",
      hoverGradient: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20",
    },
    {
      name: "TikTok",
      icon: Music,
      href: "#", // You'll add your link here
      gradient: "from-black to-gray-800",
      hoverGradient: "from-gray-900 to-black",
      bgColor: "bg-gray-900/10",
      borderColor: "border-gray-900/20",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#", // You'll add your link here
      gradient: "from-purple-600 via-pink-600 to-orange-500",
      hoverGradient: "from-purple-700 via-pink-700 to-orange-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#", // You'll add your link here
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
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float ${
              i % 2 === 0 ? "animation-delay-2000" : "animation-delay-4000"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

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
              <span className="text-slate-900 dark:text-white">Connect With</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Follow me on social media and stay connected. You can also scan my QR code for quick access.
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
                      Click to visit
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
                    Bank QR Code
                  </h3>
                  <div className="w-48 h-48 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600 mb-4 overflow-hidden">
                    {/* Replace this div with: <img src="/your-qr-code.png" alt="Bank QR Code" className="w-full h-full object-contain" /> */}
                    <div className="text-center p-4">
                      <QrCode className="w-16 h-16 text-slate-400 dark:text-slate-500 mx-auto mb-2" />
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Add your QR code image here
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Scan to make payment
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
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

