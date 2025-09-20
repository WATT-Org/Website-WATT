"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-200 py-12 px-6 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Last updated: <span className="font-semibold text-gray-300">September 20, 2025</span>
        </p>

        {[
          {
            title: "Introduction",
            content: "WATT (World of Automation Technology & Trainings) (“WATT,” “we,” “our,” “us”) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website https://hellowatt.in/."
          },
          {
            title: "1. Information We Collect",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Personal Data: Name, email, phone number, or other details you provide through contact forms, inquiries, or service requests.</li>
                <li>Usage Data: IP address, browser type, device information, pages visited, and interactions with our site.</li>
                <li>Cookies & Tracking: Cookies and analytics tools to improve site performance and user experience.</li>
              </ul>
            ),
          },
          {
            title: "2. How We Use Your Data",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>To provide and improve our automation services and website.</li>
                <li>To respond to inquiries and provide customer support.</li>
                <li>To send updates or promotional emails (only if you opt in).</li>
                <li>To analyze traffic, improve security, and enhance user experience.</li>
              </ul>
            ),
          },
          {
            title: "3. Data Sharing",
            content: "We do not sell or rent your personal information. Data may be shared only with trusted service providers (e.g., hosting, analytics) or when required by law."
          },
          {
            title: "4. Cookies",
            content: "Cookies help us understand site usage and improve functionality. You may disable cookies in your browser settings, but some features may not work properly."
          },
          {
            title: "5. Data Security",
            content: "We use reasonable security measures to protect your data. No method of online transmission or storage is 100% secure."
          },
          {
            title: "6. Your Rights",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>You may request to access, update, or delete your personal data at any time.</li>
                <li>Contact us to withdraw consent for marketing or ask about how your data is stored.</li>
              </ul>
            ),
          },
          {
            title: "7. Third-Party Links",
            content: "Our website may link to external sites. WATT is not responsible for the privacy practices of those websites."
          },
          {
            title: "8. Policy Updates",
            content: "We may update this Privacy Policy periodically. Any changes will be posted here with a revised Effective Date."
          },
          {
            title: "9. Contact Us",
            content: (
              <div className="space-y-1">
                <p>For questions or privacy-related requests, contact us at:</p>
                <p>📧 wattincorporate@gmail.com</p>
                <p>📍   E-6/132, Arera Colony, Bhopal 462016</p>
              </div>
            ),
          },
        ].map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
            <div className="text-gray-300 leading-relaxed">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
