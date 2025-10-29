import React from "react";

const certifications = [
  {
    title: "Cisco Ethical Hacker",
    image: "/certifications/Ethical Hacker.jpg",
    verifyUrl: "https://www.credly.com/badges/3fede4ae-fd28-4d79-8e0f-73d7f8c72ece",
    issuer: "Cisco Networking Academy",
    date: "2025-08-17",
  },
  {
    title: "Network Addressing and Basic Troubleshooting",
    image: "/certifications/Network_cisco.jpg",
    verifyUrl: "",
    issuer: "Cisco Networking Academy",
    date: "2025-04-21",
  },
];

export default function CertificationsPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Certifications</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-[#18181b] rounded-lg shadow p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="overflow-hidden rounded-lg w-full flex justify-center mb-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full max-w-[420px] h-auto object-contain border border-gray-700 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center">{cert.title}</h2>
            <p className="text-gray-400 mb-2">{cert.issuer}</p>
            <p className="text-gray-500 text-sm mb-4">Issued: {new Date(cert.date).toLocaleDateString()}</p>
            {idx === 0 && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Verify on Official Site
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
