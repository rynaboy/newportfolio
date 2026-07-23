"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export function ContactSection() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields (Name, Email, Subject, Message).")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rynaboy22@gmail.com",
      link: "mailto:rynaboy22@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+855 96 98 94 789",
      link: "tel:+855969894789",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Phnom Penh, Cambodia",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/rynaboy",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mol-ryna-2296b51a1/",
      color: "hover:text-blue-600",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-gradient-x bg-300%"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 dark:from-blue-800 dark:to-blue-700 animate-float"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl opacity-20 dark:from-purple-800 dark:to-purple-700 animate-blob"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl opacity-40 dark:from-pink-800 dark:to-pink-700 animate-float-delayed"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-fadeInUp">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Phone (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project discussion"
                      className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact info */}
            <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{info.title}</p>
                        <p className="text-slate-900 dark:text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Follow me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:shadow-md transition-all duration-300 hover:scale-110 text-slate-600 dark:text-slate-400 ${social.color} group`}
                    >
                      <social.icon className="w-6 h-6 group-hover:animate-bounce" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability status */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                
                <p className="text-green-700 dark:text-green-300 text-sm">
                  I'm currently available for freelance projects and part-time opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
