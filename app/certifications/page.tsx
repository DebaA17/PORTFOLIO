import { title } from "process";
import React from "react";
import Image from "next/image"

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
  {
    title: "SQL Injection",
    image: "/certifications/SQL injection.png",
    verifyUrl: "https://learn.eccouncil.org/certificate/3c62091f-76ad-47d0-8529-ac539540267a?logged=false",
    issuer: "EC-Council",
    date: "2025-6-28"
  },
  {
    title: "Kali Linux for Advanced Pen Testing and Ethical Hacking",
    image: "/certifications/Kali-pentesting.png",
    verifyUrl: "https://www.linkedin.com/learning/certificates/b3ee43e11baafc34558bc8452a1980b96270cbf2c84422ec9b0e80cea8eea283",
    issuer: "Linkedin",
    date: "2025-6-3"
  },
  {
    title: "XSS Exploits and Defenses",
    image: "/certifications/Linux Foundation cert(xss).jpg",
    verifyUrl: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/e0c0fd33-11ed-45ef-9866-7190de45b045-debasis-biswas-5fd87972-bd2e-4ae3-9311-5c7750887ece-certificate.pdf",
    issuer: "The Linux Foundation",
    date: "2025-9-23"
  }
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
              <div className="w-full max-w-[420px] relative">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={840}
                  height={630}
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="w-full h-auto object-contain border border-gray-700 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  priority={idx === 0}
                />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center">{cert.title}</h2>
            <p className="text-gray-400 mb-2">{cert.issuer}</p>
            <p className="text-gray-500 text-sm mb-4">Issued: {new Date(cert.date).toLocaleDateString()}</p>
            {cert.verifyUrl && (
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
