export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://alie.network/#organization",
  "name": "Alie Network",
  "alternateName": "ALIE",
  "url": "https://alie.network",
  "logo": "https://alie.network/logo-new.png",
  "description": "Data-driven Web3 intelligence partner using proprietary technology to evaluate and grow high-potential blockchain projects",
  "foundingDate": "2024-01-01",
  "founders": [
    {
      "@type": "Person",
      "name": "Hamza Aktan",
      "jobTitle": "Founder",
      "sameAs": "https://www.linkedin.com/in/hamza-aktan-0274a8378/"
    },
    {
      "@type": "Person",
      "name": "Berkay Kaya",
      "jobTitle": "Founder",
      "sameAs": "https://www.linkedin.com/in/berkay-kaya-525511378"
    },
    {
      "@type": "Person",
      "name": "Ziya Eyüboğlu",
      "jobTitle": "Founder",
      "sameAs": "https://www.linkedin.com/in/ziya-eyüboğlu-1a0baa235"
    }
  ],
  "sameAs": [
    "https://x.com/networkAlie",
    "https://t.me/alieweb3",
    "https://linktr.ee/alienetwork",
    "https://medium.com/@alienetwork",
    "https://github.com/sizingibiler/alie-web3-agency"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "info@alie.network",
      "url": "https://linktr.ee/alienetwork",
      "availableLanguage": ["en", "tr"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "sales@alie.network",
      "url": "https://linktr.ee/alienetwork",
      "availableLanguage": ["en", "tr"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TR"
  },
  "areaServed": "Worldwide",
  "knowsAbout": [
    "Web3",
    "Blockchain",
    "DeFi",
    "Cryptocurrency",
    "NFT",
    "Smart Contracts",
    "KOL Marketing",
    "Angel Investment",
    "DEX Listings",
    "CEX Listings"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://alie.network/#website",
  "url": "https://alie.network",
  "name": "Alie Network",
  "description": "The Intelligence Engine for Web3 - Data-driven growth strategies and market intelligence",
  "publisher": {
    "@id": "https://alie.network/#organization"
  },
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://alie.network/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://alie.network/phoenix#software",
  "name": "Phoenix Engine",
  "alternateName": "The Phoenix Engine",
  "url": "https://alie.network#technology",
  "description": "Autonomous intelligence engine that scans the Web3 market for alpha signals 24/7, identifying growth opportunities and market inefficiencies",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Market Intelligence",
  "softwareVersion": "2.0",
  "operatingSystem": "Web",
  "creator": {
    "@id": "https://alie.network/#organization"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "eligibleRegion": "Worldwide"
  },
  "featureList": [
    "24/7 Market Scanning",
    "Alpha Signal Detection",
    "Automated Growth Analysis",
    "Community Sentiment Tracking",
    "KOL Network Identification"
  ]
};

export const sagaApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://alie.network/saga#software",
  "name": "S.A.G.A. Analysis",
  "alternateName": "Strategic Analysis Gem",
  "url": "https://alie.network#technology",
  "description": "Strategic Analysis Gem scores Web3 projects against hundreds of data points to identify true potential and growth opportunities",
  "applicationCategory": "AnalyticsApplication",
  "softwareVersion": "1.5",
  "operatingSystem": "Web",
  "creator": {
    "@id": "https://alie.network/#organization"
  },
  "offers": {
    "@type": "Offer",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const xAnalyzerSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://alie.network/x-analyzer#software",
  "name": "X-Analyzer",
  "url": "https://alie.network#technology",
  "description": "Data-driven framework for selecting high-ROI KOLs and influencers, eliminating wasted marketing spend",
  "applicationCategory": "MarketingApplication",
  "softwareVersion": "1.2",
  "operatingSystem": "Web",
  "creator": {
    "@id": "https://alie.network/#organization"
  }
};

export const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://alie.network/services/launchpad",
    "name": "LAUNCHPAD Package",
    "description": "A focused growth sprint to maximize launch impact for new Web3 projects preparing for TGE",
    "provider": {
      "@id": "https://alie.network/#organization"
    },
    "serviceType": "Web3 Launch Services",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Launchpad Services",
      "itemListElement": [
        "KOL Network Activation",
        "Strategic Partnerships",
        "Community Building",
        "Launch Optimization"
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://alie.network/services/ecosystem",
    "name": "ECOSYSTEM GROWTH Package",
    "description": "Monthly continuous growth partnership to revive community and drive adoption",
    "provider": {
      "@id": "https://alie.network/#organization"
    },
    "serviceType": "Web3 Growth Services",
    "areaServed": "Worldwide"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://alie.network/services/data",
    "name": "DATA & STRATEGY Module",
    "description": "Market analysis and strategic insights for projects with in-house teams",
    "provider": {
      "@id": "https://alie.network/#organization"
    },
    "serviceType": "Market Intelligence Services",
    "areaServed": "Worldwide"
  }
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Alie Network different from traditional marketing agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are not a marketing agency. We are a technology-driven intelligence partner that uses proprietary systems like Phoenix Engine and S.A.G.A. Analysis to find and grow high-potential Web3 projects through data-driven strategies."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Phoenix Engine work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Phoenix Engine is our autonomous intelligence system that scans the Web3 market 24/7 for alpha signals, identifying growth opportunities, market inefficiencies, and emerging trends before they become mainstream."
      }
    },
    {
      "@type": "Question",
      "name": "What is S.A.G.A. Analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "S.A.G.A. (Strategic Analysis Gem) is our proprietary scoring system that evaluates Web3 projects against hundreds of data points including team strength, technology innovation, community engagement, and market positioning to identify true growth potential."
      }
    },
    {
      "@type": "Question",
      "name": "Which blockchain networks do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with projects across all major blockchain ecosystems including Ethereum, BNB Chain, Polygon, Arbitrum, Optimism, Avalanche, and emerging chains. Our technology is blockchain-agnostic."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Results vary by package and project stage. LAUNCHPAD clients typically see significant community growth within 2-4 weeks. ECOSYSTEM GROWTH is a continuous partnership with monthly performance reviews. DATA & STRATEGY insights are delivered immediately upon engagement."
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const articleSchema = (article: {
  title: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified?: string,
  image?: string,
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author,
    "url": "https://alie.network/team"
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "image": article.image || "https://alie.network/logo-new.png",
  "publisher": {
    "@id": "https://alie.network/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});
