'use client';

import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_TW_CLIENT_ID}
        activeChain="polygon"
      >
        <body>{children}</body>
      </ThirdwebProvider>
    </html>
  );
}
