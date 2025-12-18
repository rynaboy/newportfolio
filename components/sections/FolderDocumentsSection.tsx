"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { documentFolders } from "./DocumentsSection"

// Define documents for each folder
const folderDocuments: Record<string, Array<{ title: string; fileName: string }>> = {
  advancewebprogramming: [
    {
      title: "Chapter 1: How to Install",
      fileName: "Chapter 1 How to install.pdf",
    },
    {
      title: "Chapter 2: Route",
      fileName: "Chapter 2 Route.pdf",
    },
    {
      title: "Chapter 3: View Template",
      fileName: "Chapter 3 View Template.pdf",
    },
    {
      title: "Chapter 4: MVC & Created Migration",
      fileName: "Chapter 4 MVC & created Migration.pdf",
    },
    {
      title: "Chapter 5: CRUD",
      fileName: "Chapter 5 CRUD.pdf",
    },
    {
      title: "Chapter 6: Auth",
      fileName: "Chapter 6 Auth.pdf",
    },
    {
      title: "Chapter 7: Laravel File Upload & Storage",
      fileName: "Chapter 7- Laravel File Upload & Storage.pdf",
    },
    {
      title: "Chapter 8: Laravel with Datatable",
      fileName: "Chapter 8 Laravel with Datatable.pdf",
    },
  ],
  // Add more folders here
  // phpwebprogramming: [
  //   {
  //     title: "Document 1",
  //     fileName: "document1.pdf",
  //   },
  // ],
}

interface FolderDocumentsSectionProps {
  folderSlug: string
}

export function FolderDocumentsSection({ folderSlug }: FolderDocumentsSectionProps) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const folder = documentFolders.find((f) => f.folderSlug === folderSlug)
  const documents = folderDocuments[folderSlug] || []

  if (!folder) {
    return (
      <section className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Folder not found
          </h1>
          <button
            onClick={() => router.push("/documents")}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to Documents
          </button>
        </div>
      </section>
    )
  }

  const getDocumentPath = (fileName: string) => {
    return `/document/${folderSlug}/${fileName}`
  }

  const handleView = (path: string) => {
    window.open(path, "_blank")
  }

  const handleDownload = (path: string, fileName: string) => {
    const link = document.createElement("a")
    link.href = path
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-x bg-300%"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Back Button */}
          <div className="pt-24 mb-8 animate-fadeInUp">
            <button
              onClick={() => router.push("/documents")}
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Folders</span>
            </button>
          </div>

          {/* Section header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              <span className="text-slate-900 dark:text-white">{folder.folderName}</span>
            </h1>
            <p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              {folder.description}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              {documents.length} {documents.length === 1 ? "document" : "documents"} available
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
            {documents.map((doc, index) => {
              const docPath = getDocumentPath(doc.fileName)
              return (
                <Card
                  key={doc.title}
                  className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-fadeInUp"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                      <FileText className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                      {doc.title}
                    </h3>

                    {/* Actions */}
                    <div className="mt-auto flex gap-2 pt-4">
                      <Button
                        onClick={() => handleView(docPath)}
                        variant="outline"
                        className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button
                        onClick={() => handleDownload(docPath, doc.fileName)}
                        variant="default"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
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

