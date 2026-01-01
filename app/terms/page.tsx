
export const dynamic = 'force-static';
import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Third-Party Links Disclaimer</h2>
        <p>
          This website may contain links to third-party websites. These links are provided for your convenience only. We do not verify, endorse, or take responsibility for the content, privacy policies, or practices of any third-party sites. Visiting external links is at your own risk.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Respectful Communication & Anti-Spam</h2>
        <p>
          Users are expected to communicate respectfully when using any chat systems or contact forms on this site. Please refrain from using offensive, abusive, or inappropriate language. Messages containing such content may be ignored or removed.
        </p>
        <p className="mt-2">
          <strong>Don’t post unlawful or inappropriate content.</strong> Don’t post anything that is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another’s privacy, tortious, obscene, vulgar, pornographic, offensive, profane, contains or depicts nudity, contains or depicts sexual activity, or is otherwise inappropriate as determined by us in our sole discretion.
        </p>
        <p className="mt-2">
          <strong>Don’t spam.</strong> Don’t distribute unsolicited or unauthorized advertising or promotional material, or any junk mail, spam, or chain letters. Don’t run mail lists, listservs, or any kind of auto-responder or spam on or through the Site.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">General Terms</h2>
        <p>
          By using this website, you agree to abide by these terms. We reserve the right to update or modify these terms at any time without prior notice.
        </p>
      </section>
            <p className="text-sm text-gray-500 mt-8">Last updated: November 22, 2025</p>

    </main>
  );
}
