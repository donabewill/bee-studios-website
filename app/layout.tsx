import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bee Studios',
  description: 'a software studio building in nyc',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
);
}
