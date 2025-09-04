"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { faqSchema } from '@/components/SEO';

const faqs = [
  {
    question: "What makes Alie Network different from traditional marketing agencies?",
    answer: "We are not a marketing agency. We are a technology-driven intelligence partner that uses proprietary systems like Phoenix Engine and S.A.G.A. Analysis to find and grow high-potential Web3 projects through data-driven strategies."
  },
  {
    question: "How does the Phoenix Engine work?",
    answer: "The Phoenix Engine is our autonomous intelligence system that scans the Web3 market 24/7 for alpha signals, identifying growth opportunities, market inefficiencies, and emerging trends before they become mainstream."
  },
  {
    question: "What is S.A.G.A. Analysis?",
    answer: "S.A.G.A. (Strategic Analysis Gem) is our proprietary scoring system that evaluates Web3 projects against hundreds of data points including team strength, technology innovation, community engagement, and market positioning to identify true growth potential."
  },
  {
    question: "Which blockchain networks do you support?",
    answer: "We work with projects across all major blockchain ecosystems including Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Avalanche, and emerging chains. Our technology is blockchain-agnostic."
  },
  {
    question: "How quickly can I see results?",
    answer: "Results vary by package and project stage. LAUNCHPAD clients typically see significant community growth within 2-4 weeks. ECOSYSTEM GROWTH is a continuous partnership with monthly performance reviews. DATA & STRATEGY insights are delivered immediately upon engagement."
  },
  {
    question: "What types of projects do you work with?",
    answer: "We work with projects at all stages - from pre-launch projects preparing for TGE, to established protocols seeking growth, to enterprises entering Web3. Our services are tailored to each project's specific needs and stage."
  },
  {
    question: "How do you measure success?",
    answer: "Success metrics are customized per project but typically include: community growth rate, engagement quality scores, trading volume increase, holder distribution improvement, social sentiment scores, and brand awareness metrics. We provide detailed monthly reports with all KPIs."
  },
  {
    question: "Do you offer guarantees?",
    answer: "While we cannot guarantee specific price movements or regulatory outcomes, we do guarantee our commitment to data-driven strategies, transparent reporting, and continuous optimization. Our track record speaks to our effectiveness."
  },
  {
    question: "How does pricing work?",
    answer: "Our pricing is package-based and depends on your project's needs. LAUNCHPAD is a one-time sprint package, ECOSYSTEM GROWTH is a monthly retainer, and DATA & STRATEGY is modular. Contact us for a customized quote based on your requirements."
  },
  {
    question: "Can you help with exchange listings?",
    answer: "Yes, we have established relationships with major CEXs and DEXs. We assist with application preparation, liquidity requirements, market making connections, and launch strategy. Our network includes Tier 1 and Tier 2 exchanges globally."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-[#A1A1A1] mb-12">Find answers to common questions about Alie Network's services and technology</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#27272A] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#141414] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#00FF88] transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-[#A1A1A1]">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16 p-8 bg-[#141414] rounded-2xl border border-[#27272A]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-[#A1A1A1] mb-6">
              Our team is here to help. Schedule a call to discuss your project's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://linktr.ee/alienetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#00FF88] text-black font-bold rounded-lg 
                         hover:bg-opacity-90 hover:scale-105 transition-all duration-300 
                         shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40">
                Schedule a Call
              </a>
              <a 
                href="https://forms.gle/k8KYD9QfkNkioRY77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border-2 border-[#00AAFF] text-[#00AAFF] font-bold rounded-lg 
                         hover:bg-[#00AAFF] hover:text-black hover:scale-105 transition-all duration-300">
                Send Feedback
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
