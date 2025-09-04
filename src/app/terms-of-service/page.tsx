"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-[#A1A1A1] mb-12">Effective Date: January 2025</p>

        <div className="space-y-8 text-[#EAEAEA]">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using Alie Network's services ("Services"), you agree to be bound by these Terms of Service ("Terms"). 
              If you disagree with any part of these terms, you do not have permission to access our services.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">2. Description of Services</h2>
            <p className="mb-4">
              Alie Network provides Web3 growth and intelligence services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strategic consulting for blockchain projects</li>
              <li>KOL (Key Opinion Leader) marketing campaigns</li>
              <li>DEX and CEX listing assistance</li>
              <li>Community building and management</li>
              <li>Market intelligence and analytics</li>
              <li>Angel investor matchmaking services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">3. User Responsibilities</h2>
            <p className="mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the integrity or performance of our services</li>
              <li>Not attempt to gain unauthorized access to any part of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">4. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of 
              Alie Network and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks 
              and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
            <p>
              You retain all rights to any content you submit to us, but grant us a worldwide, non-exclusive, royalty-free 
              license to use, reproduce, and distribute such content in connection with the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">5. Payment Terms</h2>
            <p className="mb-4">For paid services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are quoted in USDT or other agreed cryptocurrencies</li>
              <li>Payment is due according to the agreed schedule in your service agreement</li>
              <li>Payments are non-refundable unless otherwise specified in writing</li>
              <li>We reserve the right to modify pricing with 30 days' notice</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">6. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Guarantees of specific results or outcomes</li>
              <li>Promises of uninterrupted or error-free service</li>
            </ul>
            <p className="mt-4">
              We do not guarantee any specific results from the use of our services, including but not limited to token price appreciation, 
              trading volume increases, or successful fundraising outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">7. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALIE NETWORK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER 
              INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">8. Risk Acknowledgment</h2>
            <p className="mb-4">
              You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cryptocurrency and blockchain markets are highly volatile and speculative</li>
              <li>Past performance does not guarantee future results</li>
              <li>Regulatory changes may impact project viability</li>
              <li>You are solely responsible for your investment decisions</li>
              <li>We do not provide financial, legal, or tax advice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Alie Network and its officers, directors, employees, and agents 
              from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out 
              of or relating to your violation of these Terms or your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">10. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during 
              the course of the business relationship. This obligation survives the termination of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">11. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any 
              reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will cease immediately. All provisions of the Terms which by 
              their nature should survive termination shall survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">12. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of applicable jurisdiction, without regard 
              to its conflict of law provisions. Any disputes arising from these Terms will be resolved through binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at 
              least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#00FF88]">14. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-[#141414] p-6 rounded-lg border border-[#27272A]">
              <p className="font-semibold mb-2">Alie Network</p>
              <p>Email: legal@alie.network</p>
              <p>Telegram: @alieweb3</p>
              <p>Website: https://alie.network</p>
            </div>
          </section>

          <section className="mt-12 p-6 bg-[#141414] rounded-lg border border-[#00FF88]/30">
            <p className="text-sm text-[#A1A1A1]">
              By using Alie Network's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
