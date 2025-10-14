import React from "react";

interface JsonLdProps {
  data: object;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}

// Schema data for Commentify Figma Plugin
export const commentifySchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Commentify",
  description:
    "The ultimate Figma plugin for managing comments and layer annotations. Transform chaotic comment threads into organized productivity hubs.",
  url: "https://www.figma.com/community/plugin/1414902180901995274/commentify-ods",
  applicationCategory: "DesignApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  publisher: {
    "@type": "Organization",
    name: "Kubit",
    url: "https://kubit-ui.com",
  },
  softwareVersion: "1.0",
  applicationSubCategory: "Figma Plugin",
  downloadUrl:
    "https://www.figma.com/community/plugin/1414902180901995274/commentify-ods",
  screenshot: "/commentify_logo.svg",
  featureList: [
    "Comment management",
    "Layer annotations",
    "Team collaboration",
    "Productivity optimization",
    "Thread organization",
  ],
  keywords:
    "Figma plugin, comments, layer annotations, design collaboration, productivity",
};

// FAQ Schema for better search visibility
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Commentify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commentify is the ultimate Figma plugin for managing comments and layer annotations. It transforms chaotic comment threads into organized productivity hubs, helping design teams collaborate more effectively.",
      },
    },
    {
      "@type": "Question",
      name: "Is Commentify free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Commentify is completely free to download and use. You can install it directly from the Figma Community and start organizing your design comments immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What features does Commentify offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commentify offers team selector functionality, enhanced comment descriptions, action management, and powerful tools for organizing layer annotations in Figma. It helps streamline design workflows and improve team collaboration.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install Commentify in Figma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can install Commentify by visiting the Figma Community page, searching for 'Commentify', and clicking 'Install'. Once installed, you can access it from the Plugins menu in any Figma file.",
      },
    },
    {
      "@type": "Question",
      name: "Who developed Commentify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Commentify is developed by Kubit, a leading design system and digital solutions company specializing in Figma plugins and design tools.",
      },
    },
  ],
};

// Organization schema for Kubit
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kubit",
  url: "https://kubit-ui.com",
  logo: "https://commentify.kubit-lab.com/kubit_logo.svg",
  sameAs: ["https://x.com/kubit_ui", "https://github.com/kubit-ui"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "kubit.lab.dev@gmail.com",
    contactType: "customer support",
  },
};

// WebPage schema for the landing page
export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Commentify - Ultimate Figma Comments Plugin",
  description:
    "Transform chaotic comment threads into organized productivity hubs with Commentify, the most powerful Figma plugin for managing layer annotations.",
  url: "https://commentify.kubit-lab.com/",
  primaryImageOfPage: "https://commentify.kubit-lab.com/commentify_logo.svg",
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "Kubit",
  },
  publisher: {
    "@type": "Organization",
    name: "Kubit",
    logo: {
      "@type": "ImageObject",
      url: "https://commentify.kubit-lab.com/kubit_logo.svg",
    },
  },
  mainEntity: {
    "@id": "#commentify-software",
  },
};

export default JsonLd;
