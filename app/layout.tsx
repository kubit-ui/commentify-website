import type { Metadata } from 'next';
import FloatingBubbles from './components/background/bubbles';
import './globals.css';

export const metadata: Metadata = {
  title: 'Commentify',
  description:
    'Enhance your Figma experience with Commentify, a powerful plugin by Kubit for adding and managing comments.',
  keywords:
    'Figma, plugin, Commentify, Kubit, design, comments, collaboration, open-source',
  authors: [
    {
      name: 'kubit',
    },
  ],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FloatingBubbles />
        {children}
      </body>
    </html>
  );
}
