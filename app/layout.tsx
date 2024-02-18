'use client';

import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import '@/app/globals.css';
import Sidebar from '@/components/sidebar/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_TW_CLIENT_ID}
        activeChain="polygon"
      >
        <body className="bg-purple-300">
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="w-full pt-16">{children}</main>
          </div>
        </body>
      </ThirdwebProvider>
    </html>
  );
}
