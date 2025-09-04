"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#00FF88] hover:text-[#00FF88]/80 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-[#A1A1A1] mb-12">Last updated: January 2025</p>

        <div className="space-y-8 text-[#EAEAEA]">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">1. Introduction</h2>
            <p className="mb-4">
              Alie Network ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3 text-[#00AAFF]">Personal Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name and contact information (email address, Telegram handle)</li>
              <li>Company or project information</li>
              <li>Wallet addresses (for Web3 services)</li>
              <li>Communication preferences</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3 text-[#00AAFF]">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP addresses and browser information</li>
              <li>Device information and operating system</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize user experience</li>
              <li>Send administrative and marketing communications</li>
              <li>Analyze usage patterns and optimize our platform</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">4. Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To trusted service providers who assist in operating our website</li>
              <li>To comply with legal requirements or respond to lawful requests</li>
              <li>To protect our rights, property, or safety</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or 
              electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">6. Web3 and Blockchain Data</h2>
            <p className="mb-4">
              When you interact with blockchain-based features:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transactions on public blockchains are permanently recorded and publicly accessible</li>
              <li>We cannot delete or modify blockchain transaction data</li>
              <li>Your wallet address may be visible to other users in certain contexts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">8. Cookies Policy</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie 
              preferences through your browser settings, but disabling cookies may limit certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">10. Contact Information</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#27272A]">
              <p className="font-semibold mb-2">Alie Network</p>
              <p>Email: info@alie.network</p>
              <p>Telegram: @alieweb3</p>
              <p>Website: https://alie.network</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
