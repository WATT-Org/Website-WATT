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
          Last updated: <span className="font-semibold text-gray-300">September 13, 2025</span>
        </p>

        {[
          {
            title: "1. Introduction",
            content: "At QuentoAI, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
          },
          {
            title: "2. Information We Collect",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Personal identifiers such as email address when you access our premium resources</li>
                <li>Usage data including IP address, browser type, operating system, and pages visited</li>
                <li>Cookies and tracking technologies that collect information about your browsing activities</li>
                <li>Information you provide when completing contact forms, subscribing to our newsletter, or requesting access to premium resources</li>
              </ul>
            ),
          },
          {
            title: "3. How We Use Your Information",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Provide, maintain, and improve our website and services</li>
                <li>Process and fulfill your requests for premium resources</li>
                <li>Grant access to premium content when you provide your email address</li>
                <li>Communicate with you about our services, updates, and promotional offers</li>
                <li>Analyze website usage and trends to enhance user experience</li>
                <li>Protect against, identify, and prevent fraud and other illegal activities</li>
                <li>Comply with legal obligations and enforce our terms of service</li>
              </ul>
            ),
          },
          {
            title: "4. Email Collection for Premium Resources",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Your email is stored securely and used to grant you access to the requested premium content</li>
                <li>We use a cookie to remember your access permissions for 30 days</li>
                <li>We may send you relevant updates about similar resources or services</li>
                <li>Your email address is stored in our secure database and is not sold to third parties</li>
              </ul>
            ),
          },
          {
            title: "5. Information Sharing and Disclosure",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Service providers and business partners who perform services on our behalf</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>In connection with a business transaction such as a merger, acquisition, or sale of assets</li>
                <li>We do not sell your personal information to third parties.</li>
              </ul>
            ),
          },
          {
            title: "6. Cookies and Tracking Technologies",
            content: "We use cookies and similar tracking technologies to collect and track information about your browsing activities. This includes a resource access cookie that remembers when you have provided your email to access premium content. You can control cookies through your browser settings and our Cookie Policy, available at www.quentoai.com/cookie-policy.",
          },
          {
            title: "7. Microsoft Clarity and Behavioral Analytics",
            content: "We partner with Microsoft Clarity to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the Microsoft Privacy Statement.",
          },
          {
            title: "8. Data Security",
            content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
          },
          {
            title: "9. Your Privacy Rights",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Access to the personal information we hold about you</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information in certain circumstances</li>
                <li>Restriction of processing of your personal information</li>
                <li>Data portability to transfer your information to another service</li>
                <li>Objection to certain processing activities</li>
                <li>To exercise these rights, please contact us using the information provided below.</li>
              </ul>
            ),
          },
          {
            title: "10. Children's Privacy",
            content: "Our website and services are not intended for children under 16 years of age, and we do not knowingly collect personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete that information.",
          },
          {
            title: "11. International Data Transfers",
            content: "Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country. We take steps to ensure adequate safeguards are in place to protect your information.",
          },
          {
            title: "12. Changes to Our Privacy Policy",
            content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date.",
          },
          {
            title: "13. Contact Information",
            content: "If you have any questions about this Privacy Policy, please contact us at info@quentoai.com.",
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
