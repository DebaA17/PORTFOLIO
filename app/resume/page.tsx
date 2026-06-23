export const dynamic = "force-static"

import type { Metadata } from "next"
import Link from "next/link"
import fs from "fs"
import path from "path"
import crypto from "crypto"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowLeft, Construction, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Resume | Debasis Biswas",
  description: "Resume PDF preview for Debasis Biswas.",
  robots: { index: true, follow: true },
}

const PDF_PATH = "/Debasis_Biswas_Resume.pdf"
const PDF_VIEWER_FRAGMENT = "#view=FitH&toolbar=0&navpanes=0&scrollbar=0"

export default function ResumePage() {
  let isResumeAvailable = false
  let pdfSha256 = ""

  try {
    const pdfFullPath = path.join(process.cwd(), "public", "Debasis_Biswas_Resume.pdf")
    if (fs.existsSync(pdfFullPath)) {
      isResumeAvailable = true
      const fileBuffer = fs.readFileSync(pdfFullPath)
      const hashSum = crypto.createHash("sha256")
      hashSum.update(fileBuffer)
      pdfSha256 = hashSum.digest("hex")
    }
  } catch (error) {
    console.error("Error reading PDF or generating hash:", error)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Resume</h1>
            <p className="mt-2 text-base text-muted-foreground md:text-lg">
              {isResumeAvailable
                ? "View my resume here. Use “Open / Download” if your browser blocks the embedded view."
                : "My resume is currently being updated and will be available shortly."}
            </p>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            {isResumeAvailable && (
              <Button asChild>
                <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">
                  Open / Download
                </a>
              </Button>
            )}
          </div>
        </div>

        {isResumeAvailable ? (
          <>
            <div className="mt-6 overflow-hidden rounded-lg border bg-card shadow-sm">
              <div className="aspect-[4/5] w-full md:aspect-[16/10]">
                <iframe
                  title="Debasis Biswas Resume (PDF)"
                  src={`${PDF_PATH}${PDF_VIEWER_FRAGMENT}`}
                  className="h-full w-full"
                />
              </div>
            </div>

            <div className="mt-4 rounded-lg border bg-card p-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-500" />
                <p className="text-sm font-medium text-muted-foreground md:text-base">SHA-256 (Integrity Hash)</p>
              </div>
              <p className="mt-2 break-all font-mono text-sm font-semibold text-foreground md:text-base">{pdfSha256}</p>
            </div>

            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              If the preview is blank on mobile Safari, use “Open / Download”.
            </p>
          </>
        ) : (
          <>
            <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-dashed bg-card/50 p-12 text-center shadow-sm backdrop-blur-sm">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 animate-pulse">
                <Construction className="h-10 w-10" />
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight">Resume Under Construction</h2>
              <p className="mt-2 max-w-md text-base text-muted-foreground">
                My updated resume is currently being revised to reflect my latest certifications, achievements, and projects.
              </p>
              <p className="mt-2 text-sm text-blue-400 font-medium">
                The document will automatically become available for preview and download once updated.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary">
                  <Link href="/#projects">Explore Projects</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            <div className="mt-4 rounded-lg border bg-card/30 p-4 flex gap-3 items-start backdrop-blur-sm">
              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Integrity Verification</p>
                <p className="mt-1 text-sm text-muted-foreground/80">
                  A cryptographic SHA-256 checksum will be generated and published here once the updated document is available to verify file authenticity and security.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

