"use client";
import React from "react";

export default function TermsOfService() {
  return (
    <div className="bg-gray-950 min-h-screen text-gray-200 py-12 px-6 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Last updated: <span className="font-semibold text-gray-300">September 13, 2025</span>
        </p>

        {/* Sections */}
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing or using QuentoAI&apos;s website, services, applications, and other offerings (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the Services.",
          },
          {
            title: "2. Changes to Terms",
            content:
              "QuentoAI reserves the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website. Your continued use of the Services after such modifications constitutes your acceptance of the revised Terms.",
          },
          {
            title: "3. Privacy Policy",
            content:
              "Our Privacy Policy, available at www.quentoai.com/privacy-policy, governs our collection, use, and disclosure of information. By using our Services, you also agree to the terms of our Privacy Policy.",
          },
          {
            title: "4. Use of Services",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Use the Services in any way that violates applicable laws or regulations</li>
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Use any robot, spider, or other automated device to access the Services</li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Services
                </li>
              </ul>
            ),
          },
          {
            title: "5. Premium Resource Access",
            content: (
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>You will be required to provide a valid email address</li>
                <li>
                  By providing your email, you consent to receiving communications related to the
                  resource and other similar offerings
                </li>
                <li>You agree not to share access to premium resources with unauthorized users</li>
                <li>
                  You may access resources for a period of 30 days after providing your email, after
                  which you may need to resubmit your email to regain access
                </li>
              </ul>
            ),
          },
          {
            title: "6. Intellectual Property Rights",
            content:
              "All content, features, and functionality of the Services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by QuentoAI or its licensors and are protected by copyright, trademark, and other intellectual property laws.",
          },
          {
            title: "7. User Content",
            content:
              "You retain ownership of any content you submit to the Services (&quot;User Content&quot;). However, by submitting User Content, you grant QuentoAI a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content in connection with providing and promoting the Services.",
          },
          {
            title: "8. Termination",
            content:
              "QuentoAI reserves the right to terminate or suspend your access to the Services at any time, without prior notice or liability, for any reason, including without limitation if you breach these Terms.",
          },
          {
            title: "9. Disclaimer of Warranties",
            content:
              "THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. QUENTOAI DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
          },
          {
            title: "10. Limitation of Liability",
            content:
              "IN NO EVENT WILL QUENTOAI, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.",
          },
          {
            title: "11. Indemnification",
            content:
              "You agree to defend, indemnify, and hold harmless QuentoAI, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Services.",
          },
          {
            title: "12. Governing Law",
            content:
              "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles.",
          },
          {
            title: "13. Dispute Resolution",
            content:
              "Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration conducted in Delaware in accordance with the rules of the American Arbitration Association.",
          },
          {
            title: "14. Contact Information",
            content:
              "If you have any questions about these Terms, please contact us at info@quentoai.com.",
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
