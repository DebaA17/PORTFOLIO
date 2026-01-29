export const dynamic = "force-static"

import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Resume | Debasis Biswas",
  description: "Resume PDF preview for Debasis Biswas.",
  robots: { index: true, follow: true },
}

const PDF_PATH = "/Debasis_Biswas_Resume.pdf"

const PDF_VIEWER_FRAGMENT = "#view=FitH&toolbar=0&navpanes=0&scrollbar=0"

const PDF_SHA256 = "ef933e8f1867c56f57fb04e9391fbf6f26e178f33f1e12cc5238ad62a02916f5"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Resume</h1>
            <p className="mt-2 text-base text-muted-foreground md:text-lg">
              View my resume here. Use “Open / Download” if your browser blocks the embedded view.
            </p>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild>
              <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">
                Open / Download
              </a>
            </Button>
          </div>
        </div>

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
          <p className="text-sm font-medium text-muted-foreground md:text-base">SHA-256</p>
          <p className="mt-2 break-all font-mono text-sm font-semibold text-foreground md:text-base">{PDF_SHA256}</p>
        </div>

        <p className="mt-4 text-sm text-muted-foreground md:text-base">
          If the preview is blank on mobile Safari, use “Open / Download”.
        </p>
      </div>
    </main>
  )
}
