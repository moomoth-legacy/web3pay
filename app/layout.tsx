'use client';

import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import '@/app/globals.css';
import Sidebar from '@/components/sidebar/Sidebar';
import Footer from '@/components/footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_TW_CLIENT_ID}
        activeChain="polygon"
      >
        <body className="wp-primary wp-secondary wp-bg-primary wp-bg-secondary">
          <div className="flex flex-col h-screen">
            <Sidebar />
            <main className="w-full pl-[300px] pt-16 pb-12">{children}</main>
            <Footer />
          </div>
        </body>
      </ThirdwebProvider>
    </html>
  );
}
