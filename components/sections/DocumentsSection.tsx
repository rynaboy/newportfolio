"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Folder, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

// Shared folder data - can be moved to a separate file if needed
export const documentFolders = [
  {
    folderName: "Advanced Web Programming",
    folderSlug: "advancewebprogramming",
    description: "Laravel framework tutorials and guides",
    documentCount: 8,
  },
  // Add more folders here in the future
  // {
  //   folderName: "PHP Web Programming",
  //   folderSlug: "phpwebprogramming",
  //   description: "PHP programming tutorials",
  //   documentCount: 5,
  // },
]

export function DocumentsSection() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleFolderClick = (folderSlug: string) => {
    router.push(`/documents/${folderSlug}`)
  }

  return (
    <section className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-x bg-300%"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section header */}
          <div className="text-center mb-16 pt-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight animate-fadeInUp">
              <span className="text-slate-900 dark:text-white">Documents</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Library
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Browse document folders and access educational resources.
            </p>
          </div>

          {/* Folders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {documentFolders.map((folder, index) => (
              <Card
                key={folder.folderSlug}
                onClick={() => handleFolderClick(folder.folderSlug)}
                className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer animate-fadeInUp group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-8 flex flex-col items-center text-center min-h-[250px] justify-center">
                  {/* Folder Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Folder className="w-10 h-10 text-white" />
                  </div>

                  {/* Folder Name */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {folder.folderName}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {folder.description}
                  </p>

                  {/* Document Count */}
                  <div className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                    <span>{folder.documentCount} {folder.documentCount === 1 ? "document" : "documents"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
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
