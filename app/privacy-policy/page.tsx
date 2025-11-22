import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This page explains what information we collect when you use this website and how it is used.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">What We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>IP address</li>
        <li>Device and browser information</li>
        <li>IP-based location and ISP</li>
        <li>Session recordings (mouse movements, clicks, scrolls, etc.)</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How We Collect Data</h2>
      <p className="mb-4">
        We use analytics and session recording tools to collect the above information. These tools help us understand how users interact with our website and improve security.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Why We Collect Data</h2>
      <p className="mb-4">
        The data is collected solely for security purposes and to improve the user experience. We do not use this data for advertising or marketing.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Data Sharing & AI Usage</h2>
      <p className="mb-4">
        We do <strong>not</strong> share your data with any third parties except as required by law (see below). All collected data is used only by us for security and analytics.<br />
        <br />
        <strong>Personal information submitted through the contact form (such as your name, email address, or message) is also kept strictly confidential and is <u>never</u> shared with third parties unless required by law.</strong><br />
        <br />
        <strong>Uploaded files are encrypted and not shared with any third parties.</strong>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">GPT & OpenAI Data Policy</h2>
      <p className="mb-4">
        <strong>
          User input provided in chat or messaging features (including GPT-powered chats) may be collected and used to improve automated systems and AI models. This data, as well as uploaded files in Debasis GPT, may be accessed and processed by ChatGPT/OpenAI according to their <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">privacy policy</a>. We do not use chat data or uploaded files for advertising or sell them to third parties.
        </strong>
      </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">Legal Compliance</h2>
        <p className="mb-4">
          We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
        </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Your Choices</h2>
      <p className="mb-4">
        If you have concerns about your privacy or wish to request more information, please contact us using the contact form on this website.
      </p>
      <p className="text-sm text-gray-500 mt-8">Last updated: November 22, 2025</p>
    </main>
  );
}
