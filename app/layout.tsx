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
        <body>
          <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
              <div className="space-y-3">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold">Dashboard</h2>
                </div>
                <Sidebar />
              </div>
            </div>
            <div className="container mx-auto mt-12">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" />
            </div>
          </div>
          {children}
        </body>
      </ThirdwebProvider>
    </html>
  );
}
