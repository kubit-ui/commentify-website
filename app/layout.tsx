import type { Metadata, Viewport } from "next";

import FloatingBubbles from "./components/background/bubbles";
import JsonLd, {
  commentifySchema,
  faqSchema,
  organizationSchema,
  webPageSchema,
} from "./components/seo/jsonLd";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://commentify.kubit-lab.com"),
  title:
    "Commentify - Ultimate Figma Comments Plugin | Manage Layer Annotations",
  description:
    "Commentify is the most powerful Figma plugin for managing comments and layer annotations. Transform chaotic comment threads into organized productivity hubs. Download now!",
  keywords:
    "Commentify, Figma plugin, Figma comments plugin, layer annotations, Figma comments, design collaboration, comment management, Figma tools, Kubit",
  authors: [
    {
      name: "Kubit",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Commentify - Ultimate Figma Comments Plugin",
    description:
      "Transform chaotic comment threads into organized productivity hubs with Commentify, the most powerful Figma plugin for managing layer annotations.",
    url: "https://commentify.kubit-lab.com/",
    siteName: "Commentify by Kubit",
    images: [
      {
        url: "/og_image.png", // Main Open Graph image
        width: 1200,
        height: 630,
        alt: "Commentify - Figma Comments Plugin by Kubit - Organize layer annotations",
      },
      {
        url: "/commentify_logo.svg", // Fallback image
        width: 400,
        height: 400,
        alt: "Commentify Logo - Figma Plugin for Comment Management",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commentify - Ultimate Figma Comments Plugin",
    description:
      "Transform chaotic comment threads into organized productivity hubs. The most powerful Figma plugin for managing layer annotations.",
    images: ["/og_image.png", "/commentify_logo.svg"], // Multiple image options
    creator: "@kubit_ui",
    site: "@kubit_ui",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={commentifySchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={webPageSchema} />
      </head>
      <body>
        <FloatingBubbles />
        {children}
      </body>
    </html>
  );
}
