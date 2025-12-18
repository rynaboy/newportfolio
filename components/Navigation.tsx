"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

export function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", isAnchor: true },
    { name: "About", href: "#about", isAnchor: true },
    { name: "Skills", href: "#skills", isAnchor: true },
    { name: "Projects", href: "#projects", isAnchor: true },
    { name: "Experience", href: "#experience", isAnchor: true },
    { name: "Contact", href: "#contact", isAnchor: true },
    { name: "Documents", href: "/documents", isAnchor: false },
    { name: "Social", href: "/social", isAnchor: false },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/molryna", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", label: "LinkedIn" },
    { icon: Mail, href: "mailto:rynaboy22@gmail.com", label: "Email" },
  ]

  const scrollToSection = (href: string) => {
    // Helper function to scroll to an element
    const scrollToElement = (elementId: string) => {
      const element = document.querySelector(elementId)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
        return true
      }
      return false
    }

    // Special handling for Home - navigate to home page and scroll to top
    if (href === "#home" || href === "/") {
      // If we're on a different page (like /social), navigate to home first
      if (pathname !== "/") {
        router.push("/")
        // Wait a bit for navigation, then scroll to top
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }, 100)
        setIsOpen(false)
        return
      }
      // If we're already on home page, just scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      setIsOpen(false)
      return
    }

    // For anchor links, check if we're on the home page
    if (pathname !== "/") {
      // Store the target section in sessionStorage
      sessionStorage.setItem("scrollToSection", href)
      // Navigate to home page
      router.push("/")
      // Wait for navigation and DOM to be ready, then scroll to the section
      setTimeout(() => {
        let attempts = 0
        const maxAttempts = 10
        const tryScroll = () => {
          attempts++
          if (scrollToElement(href)) {
            sessionStorage.removeItem("scrollToSection")
          } else if (attempts < maxAttempts) {
            setTimeout(tryScroll, 100)
          } else {
            sessionStorage.removeItem("scrollToSection")
          }
        }
        tryScroll()
      }, 300)
      setIsOpen(false)
      return
    }

    // If we're already on home page, find the element and scroll to it
    scrollToElement(href)
    setIsOpen(false)
  }

  // Effect to handle scrolling after navigation from other pages
  useEffect(() => {
    const scrollTarget = sessionStorage.getItem("scrollToSection")
    if (scrollTarget && pathname === "/") {
      sessionStorage.removeItem("scrollToSection")
      // Wait for page to fully render
      setTimeout(() => {
        const element = document.querySelector(scrollTarget)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 300)
    }
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-700"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                if (pathname === "/") {
                  // If we're on the home page, scroll to top
                  window.scrollTo({ top: 0, behavior: "smooth" })
                } else {
                  // Otherwise, navigate to home and scroll to top
                  router.push("/")
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }, 100)
                }
              }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:animate-pulse transition-all duration-300"
            >
              Ryna
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.isAnchor) {
                      e.preventDefault()
                      scrollToSection(item.href)
                    } else {
                      // For non-anchor links like /social, use router
                      e.preventDefault()
                      router.push(item.href)
                      setIsOpen(false)
                    }
                  }}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-2 text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? "_blank" : "_blank"}
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-lg mt-2 border border-slate-200 dark:border-slate-700 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.isAnchor) {
                    e.preventDefault()
                    scrollToSection(item.href)
                  } else {
                    // For non-anchor links like /social, use router
                    e.preventDefault()
                    router.push(item.href)
                    setIsOpen(false)
                  }
                }}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
