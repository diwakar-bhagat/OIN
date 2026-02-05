import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OIN - Apple-Glass News Cards',
  description: 'Modern news card component with glassmorphism design',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}