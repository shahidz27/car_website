// RootLayout.tsx

import { Footer, Navbar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Car hub',
  description: 'discover  the  best car in the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar/>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {children}
        </div>
        
        <Footer/>
      </body>
    </html>
  );
}
