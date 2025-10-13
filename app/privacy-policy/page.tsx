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
        We do <strong>not</strong> share your data with any third parties. All collected data is used only by us for security and analytics.<br />
        <br />
        <strong>Personal information submitted through the contact form (such as your name, email address, or message) is also kept strictly confidential and is <u>never</u> shared with third parties.</strong><br />
        <br />
        <strong>Uploaded files are encrypted and not shared with any third parties.</strong><br />
        <br />
        <strong>User input provided in chat or messaging features may be used to improve automated systems and AI models, but will not be used for advertising or sold to third parties.</strong>
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Your Choices</h2>
      <p className="mb-4">
        If you have concerns about your privacy or wish to request more information, please contact us using the contact form on this website.
      </p>
      <p className="text-sm text-gray-500 mt-8">Last updated: October 13, 2025</p>
    </main>
  );
}
