import type { Metadata } from 'next';
import './css/globals.css';
import './css/reset.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kubit-lab.com'),
  title: 'Commentify.',
  description:
    'Commentify is the tool you haveve been searching for to elevate communication and collaboration in your Figma design projects.',
  openGraph: {
    title: 'Commentify',
    description:
      'Commentify is the tool you haveve been searching for to elevate communication and collaboration in your Figma design projects.',
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.kubit-lab.com',
    siteName: 'Commentify',
    images: `/opengraph.png`,
  },
  authors: [{ name: 'Kubit', url: 'https://www.kubit-lab.com' }],
  generator: 'Next.js',
  keywords:
    'opensource, figma, library, ui, design, github, plugin, commentify',
  creator: 'Kubit',
  publisher: 'Kubit',
  category: 'Library Open Source',
  applicationName: 'Kubit',
  icons: {
    icon: `/favicon.ico`,
    shortcut: '/assets/ico.webp',
    apple: '/assets/ico.webp',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/assets/ico.webp',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
