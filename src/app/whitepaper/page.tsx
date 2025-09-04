"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Download, FileText, BarChart3, Users, Target } from 'lucide-react';
import { trackEvent } from '@/lib/gtm';

export default function WhitepaperPage() {
  const handleDownload = (type: 'whitepaper' | 'onepager') => {
    // Track download with GTM
    trackEvent.fileDownload(
      type === 'whitepaper' ? 'whitepaper_v1.2' : 'onepager_v1.0',
      type === 'whitepaper' ? 'pdf' : 'pdf'
    );
    trackEvent.whitepaperEngagement('download', type);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            "@id": "https://alie.network/whitepaper#report",
            "mainEntityOfPage": {"@type": "WebPage", "@id": "https://alie.network/whitepaper"},
            "headline": "The S.A.G.A. Framework: A Data-Driven Intelligence Engine for Web3 & AI",
            "description": "Whitepaper describing Alie Network's S.A.G.A. scoring engine, Phoenix Engine architecture, methodology, and case studies (Aethir, Nillion).",
            "datePublished": "2025-01-27",
            "dateModified": "2025-01-27",
            "publisher": {"@id": "https://alie.network/#organization"},
            "author": {"@id": "https://alie.network/#organization"},
            "inLanguage": "en"
          })
        }}
      />

      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Navigation */}
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-[#00FF88] hover:text-[#00FF88]/80 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div 
          className="container mx-auto px-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#00FF88] font-mono text-sm uppercase tracking-wider">Whitepaper v1.2</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                The S.A.G.A. Framework
              </h1>
              <p className="text-xl md:text-2xl text-[#A1A1A1]">
                A Data-Driven Intelligence Engine for Web3 & AI
              </p>
              <p className="text-sm text-[#A1A1A1] mt-4">
                Published: January 27, 2025
              </p>
            </motion.div>

            {/* Download Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="/whitepaper-content.html"
                download="alie-network-whitepaper.html"
                onClick={() => handleDownload('whitepaper')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF88] text-black font-bold rounded-lg 
                         hover:bg-opacity-90 hover:scale-105 transition-all duration-300 
                         shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40"
              >
                <Download className="w-5 h-5" />
                Download Full Whitepaper (PDF)
              </a>
              <a 
                href="/whitepaper-content.html"
                download="alie-network-onepager.html"
                onClick={() => handleDownload('onepager')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#00AAFF] text-[#00AAFF] font-bold rounded-lg 
                         hover:bg-[#00AAFF] hover:text-black hover:scale-105 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Download One-Pager
              </a>
            </motion.div>

            {/* Content Sections */}
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Executive Summary */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF88]">Executive Summary</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-[#EAEAEA] leading-relaxed mb-4">
                    Alie Network provides data-driven intelligence for Web3 & AI. Our S.A.G.A. engine scores projects 
                    from 0–100 across four pillars (Team, Product, Community, Finance) to identify blue-chip candidates 
                    and surface high-risk ventures. We publish transparent case studies, maintain public repositories 
                    (Phoenix Engine, X-Analyzer), and deliver actionable insights for institutional and retail stakeholders.
                  </p>
                </div>
              </section>

              {/* Introduction */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF88]">1. Introduction: Data Over Hype</h2>
                <p className="text-[#EAEAEA] leading-relaxed mb-4">
                  The Web3 and AI landscapes are crowded with projects where hype often overshadows substance. 
                  Alie Network was established to counteract this "information asymmetry" with a single guiding principle: 
                  <strong className="text-white"> Data over Hype.</strong> Our S.A.G.A. engine provides a quantifiable, 
                  evidence-based scoring model with a core philosophy of analytical integrity: we do not award scores 
                  where data is insufficient or unverifiable.
                </p>
              </section>

              {/* S.A.G.A. Framework */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF88]">
                  2. The S.A.G.A. (Strategic Analysis Gem) Framework
                </h2>
                <p className="text-[#EAEAEA] leading-relaxed mb-6">
                  S.A.G.A. is a proprietary framework that assigns a "Confidence Score" based on performance across 
                  four weighted pillars:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="p-6 bg-[#141414] rounded-lg border border-[#27272A]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-[#00FF88]" />
                      <h3 className="text-xl font-bold">Team & Vision</h3>
                    </div>
                    <p className="text-[#A1A1A1] mb-2">35% Weight</p>
                    <p className="text-sm text-[#EAEAEA]">
                      Leadership quality, technical expertise, track record, and strategic vision
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-6 bg-[#141414] rounded-lg border border-[#27272A]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-6 h-6 text-[#00AAFF]" />
                      <h3 className="text-xl font-bold">Product & Technology</h3>
                    </div>
                    <p className="text-[#A1A1A1] mb-2">30% Weight</p>
                    <p className="text-sm text-[#EAEAEA]">
                      Innovation level, technical architecture, competitive advantage, and scalability
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-6 bg-[#141414] rounded-lg border border-[#27272A]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-[#FF00FF]" />
                      <h3 className="text-xl font-bold">Community & Market</h3>
                    </div>
                    <p className="text-[#A1A1A1] mb-2">20% Weight</p>
                    <p className="text-sm text-[#EAEAEA]">
                      Community engagement, market positioning, adoption metrics, and growth trajectory
                    </p>
                  </motion.div>

                  <motion.div 
                    className="p-6 bg-[#141414] rounded-lg border border-[#27272A]"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="w-6 h-6 text-[#FFB600]" />
                      <h3 className="text-xl font-bold">Financial Health</h3>
                    </div>
                    <p className="text-[#A1A1A1] mb-2">15% Weight</p>
                    <p className="text-sm text-[#EAEAEA]">
                      Funding status, token economics, revenue model, and long-term sustainability
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* Scoring Methodology */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF88]">
                  3. Scoring Methodology: An Illustrative Example
                </h2>
                <p className="text-[#EAEAEA] mb-6">
                  Each pillar is scored from 0 to 100. The final score is a weighted average.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border border-[#27272A]">
                    <thead className="bg-[#141414]">
                      <tr>
                        <th className="text-left p-4 border-b border-[#27272A]">Pillar</th>
                        <th className="text-left p-4 border-b border-[#27272A]">Weight</th>
                        <th className="text-left p-4 border-b border-[#27272A]">Example Raw Score</th>
                        <th className="text-left p-4 border-b border-[#27272A]">Weighted Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b border-[#27272A]">Team & Vision</td>
                        <td className="p-4 border-b border-[#27272A]">35%</td>
                        <td className="p-4 border-b border-[#27272A]">98</td>
                        <td className="p-4 border-b border-[#27272A]">34.3</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-[#27272A]">Product & Technology</td>
                        <td className="p-4 border-b border-[#27272A]">30%</td>
                        <td className="p-4 border-b border-[#27272A]">90</td>
                        <td className="p-4 border-b border-[#27272A]">27.0</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-[#27272A]">Community & Market</td>
                        <td className="p-4 border-b border-[#27272A]">20%</td>
                        <td className="p-4 border-b border-[#27272A]">85</td>
                        <td className="p-4 border-b border-[#27272A]">17.0</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-[#27272A]">Financial Health</td>
                        <td className="p-4 border-b border-[#27272A]">15%</td>
                        <td className="p-4 border-b border-[#27272A]">90</td>
                        <td className="p-4 border-b border-[#27272A]">13.5</td>
                      </tr>
                      <tr className="bg-[#141414] font-bold">
                        <td className="p-4">Total Confidence Score</td>
                        <td className="p-4">100%</td>
                        <td className="p-4">—</td>
                        <td className="p-4 text-[#00FF88]">91.8 ≈ 92/100 (Class A)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Use Cases */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF88]">
                  4. Use Cases in Action (with Verifiable Data)
                </h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-[#141414] rounded-lg border border-[#27272A]">
                    <h3 className="text-xl font-bold mb-3">High-Scoring Example: Aethir (95/100)</h3>
                    <p className="text-[#EAEAEA]">
                      Aethir's blue-chip score is evidenced by its expansive ecosystem, including a collaboration 
                      with the Avalanche Foundation for the infraBUIDL(AI) Program, and partnerships extending to 
                      institutions like Arizona State University.
                    </p>
                  </div>

                  <div className="p-6 bg-[#141414] rounded-lg border border-[#27272A]">
                    <h3 className="text-xl font-bold mb-3">High-Scoring Example: Nillion Network (92/100)</h3>
                    <p className="text-[#EAEAEA]">
                      Nillion's technical credibility is underpinned by over $50M in funding, with strategic 
                      partnerships spanning NEAR, Aptos, Arbitrum, and Ritual, reinforcing its growth trajectory 
                      in privacy-preserving computation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Commitment to Transparency */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF88]">
                  5. Our Commitment to Transparency: Team & Tools
                </h2>
                <ul className="space-y-3 text-[#EAEAEA]">
                  <li className="flex items-start">
                    <span className="text-[#00FF88] mr-2">•</span>
                    <span><strong>Our Leadership:</strong> Our core team brings decades of combined experience in data science and Web3 analysis. 
                    For full profiles and backgrounds, please visit our team page at <Link href="/team" className="text-[#00FF88] hover:underline">alie.network/team</Link>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00FF88] mr-2">•</span>
                    <span><strong>Public Repositories:</strong> Key aspects of our toolchains are maintained in our 
                    <a href="https://github.com/sizingibiler/alie-web3-agency" target="_blank" rel="noopener noreferrer" className="text-[#00FF88] hover:underline ml-1">
                      public GitHub organization
                    </a>.</span>
                  </li>
                </ul>
              </section>

              {/* Roadmap */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF88]">
                  6. Roadmap (Q4 2025 - Q2 2026)
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-[#00FF88] font-bold mr-4">Q4 2025:</span>
                    <span className="text-[#EAEAEA]">Launch docs.alie.network and publish in-depth case studies.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#00FF88] font-bold mr-4">Q1 2026:</span>
                    <span className="text-[#EAEAEA]">Launch a YouTube Shorts series and create a Wikidata entity for Alie Network.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#00FF88] font-bold mr-4">Q2 2026:</span>
                    <span className="text-[#EAEAEA]">Initiate strategic PR outreach and guest post collaborations.</span>
                  </div>
                </div>
              </section>

              {/* Appendix & Legal */}
              <section className="border-t border-[#27272A] pt-8 mt-12">
                <h2 className="text-2xl font-bold mb-6 text-[#00FF88]">Appendix & Legal</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 text-white">Sources:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-[#A1A1A1] text-sm">
                    <li>Avalanche Foundation Partners with Aethir. (Avalanche Blog)</li>
                    <li>Aethir Project Overview. (Messari)</li>
                    <li>Privacy Blockchain Project Nillion Raises $25M. (CoinDesk)</li>
                    <li>Understanding Nillion: A Comprehensive Overview. (Messari)</li>
                  </ol>
                </div>

                <div className="p-6 bg-[#141414] rounded-lg border border-[#27272A]">
                  <h3 className="text-lg font-bold mb-4 text-white">Legal Disclaimer:</h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">
                    The contents of this whitepaper are informational only and do not constitute financial, investment, 
                    tax or legal advice. Analyses are based on publicly available information and Alie Network's 
                    proprietary methodology; accuracy is not guaranteed. Always perform your own due diligence before 
                    making investment decisions. © 2025 Alie Network. All rights reserved.
                  </p>
                </div>
              </section>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div 
              className="text-center mt-16 p-8 bg-gradient-to-b from-[#141414] to-[#0A0A0A] rounded-2xl border border-[#27272A]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to leverage data-driven intelligence?
              </h2>
              <p className="text-[#A1A1A1] mb-8">
                Request a custom S.A.G.A. analysis for your project or portfolio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@alie.network?subject=S.A.G.A. Analysis Request"
                  className="inline-block px-8 py-3 bg-[#00FF88] text-black font-bold rounded-lg 
                           hover:bg-opacity-90 hover:scale-105 transition-all duration-300 
                           shadow-lg shadow-[#00FF88]/20 hover:shadow-[#00FF88]/40"
                >
                  Request Analysis
                </a>
                <a 
                  href="https://linktr.ee/alienetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border-2 border-[#00AAFF] text-[#00AAFF] font-bold rounded-lg 
                           hover:bg-[#00AAFF] hover:text-black hover:scale-105 transition-all duration-300"
                >
                  Schedule a Call
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
