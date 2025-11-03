import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tanisha Natalia Aritonang - Portfolio',
  description: 'Computer Engineering Undergraduate | Aspiring Cloud Engineer',
  keywords: ['portfolio', 'cloud engineer', 'computer engineering', 'resume', 'tanisha aritonang'],
  authors: [{ name: 'Tanisha Natalia Aritonang' }],
  creator: 'Tanisha Natalia Aritonang',
  publisher: 'Tanisha Natalia Aritonang',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}