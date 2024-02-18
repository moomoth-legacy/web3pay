'use client';

import React from 'react';
import InvoiceForm from '@/components/invoice/Invoice';
import { usePathname } from 'next/navigation';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';

function Page() {
  const pathname = usePathname();
  const address = useAddress();
  // Check if pathname is defined before rendering InvoiceForm
  if (!pathname) {
    return null; // or any other fallback UI if you wish
  }

  return (
    <>
      {!address && <ConnectWallet />}
      {address && <InvoiceForm status="update" code={pathname} />}
    </>
  );
}

export default Page;
