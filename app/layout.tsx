'use client';

import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import '@/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_TW_CLIENT_ID}
        activeChain="polygon"
      >
        <body>
          {children}
        </body>
      </ThirdwebProvider>
    </html>
  );
}
