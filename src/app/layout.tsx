import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Waari Book Cafe | Books • Cafe • Stage • Creative Centre',
  description: 'Find your corner at Waari Book Cafe in Kothrud, Pune — a book-filled cafe for coffee, comfort food, reading and creative connection.',
  openGraph: { title: 'Waari Book Cafe, Pune', description: 'Books, coffee and a little space to be yourself.', images: ['/images/waari-interior.jpg'], type: 'website' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
