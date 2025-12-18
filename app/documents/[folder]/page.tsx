import { Navigation } from "@/components/Navigation"
import { FolderDocumentsSection } from "@/components/sections/FolderDocumentsSection"

interface PageProps {
  params: {
    folder: string
  }
}

export default function FolderDocumentsPage({ params }: PageProps) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FolderDocumentsSection folderSlug={params.folder} />
    </main>
  )
}

