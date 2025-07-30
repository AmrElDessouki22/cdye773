import React from 'react';
import { Metadata } from 'next';
import '@/app/globals.css';
import { NotesProvider } from '@/contexts/NotesContext';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'AI Note App',
  description: 'A simple note-taking app',
};

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NotesProvider>
      </body>
    </html>
  );
};

export default RootLayout;
