import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security Reporting | Debasis Biswas",
  description:
    "Responsible disclosure and secure vulnerability reporting for debasisbiswas.me (PGP key included).",
}

export default function SecurityReportingPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#00ff88]">
      <div className="mx-auto w-full max-w-3xl px-4 py-8">
        <div className="border border-[#00ff88] bg-[#111] p-6 shadow-[0_0_15px_#00ff88]">
          <h1 className="text-lg font-semibold">&gt; Security Reporting</h1>

          <p className="mt-4 leading-relaxed">
            Security is a priority. If you discover a vulnerability, please report it responsibly so it can be fixed
            safely.
          </p>

          <h2 className="mt-6 border-l-4 border-[#00ff88] pl-3 font-semibold">&gt; How to Report</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Email: {" "}
              <a className="text-[#00ffee] hover:underline" href="mailto:forensic@debasisbiswas.me">
                forensic@debasisbiswas.me
              </a>
            </li>
            <li>
              GitHub Security Advisory (preferred for sensitive details): {" "}
              <a
                className="text-[#00ffee] hover:underline"
                href="https://github.com/DebaA17/PORTFOLIO/security/advisories/new"
                rel="noreferrer"
                target="_blank"
              >
                /security/advisories/new
              </a>
            </li>
          </ul>

          <h2 className="mt-6 border-l-4 border-[#00ff88] pl-3 font-semibold">&gt; What to Include</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Description of the issue</li>
            <li>Steps to reproduce / PoC</li>
            <li>Impact assessment (if known)</li>
            <li>Optional contact details for follow-up</li>
          </ul>

          <h2 className="mt-6 border-l-4 border-[#00ff88] pl-3 font-semibold">&gt; Rules of Engagement</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>No public disclosure before resolution</li>
            <li>Do not access, modify, or delete any data</li>
            <li>Do not use automated tools or cause service disruption</li>
          </ul>

          <h2 className="mt-6 border-l-4 border-[#00ff88] pl-3 font-semibold">&gt; Encrypt Your Report (PGP/GPG)</h2>
          <p className="mt-3 leading-relaxed">
            If your report contains sensitive details, please encrypt it using my PGP public key. Download:{" "}
            <a className="text-[#00ffee] hover:underline" href="/pgp.asc">
              /pgp.asc
            </a>
          </p>

          <div className="mt-3 rounded border border-[#00ff88]/40 bg-[#0b0b0b] p-3">
            <pre className="overflow-x-auto whitespace-pre font-mono text-xs leading-5 text-[#00ff88]">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----

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
Nw==
=LASb
-----END PGP PUBLIC KEY BLOCK-----`}
            </pre>
          </div>

          <p className="mt-6">
            <span className="inline-block rounded bg-[#222] px-2 py-1 font-mono text-sm text-[#0f0]">
              -- Debasis Biswas
            </span>
          </p>
        </div>
      </div>
    </main>
  )
}
