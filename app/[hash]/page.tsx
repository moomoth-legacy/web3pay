'use client';

import React from 'react';
import { ConnectWallet, WalletConnect } from '@thirdweb-dev/react';
import InvoiceForm from '@/components/invoice/Invoice';

function Page() {
  const wallet = new WalletConnect();
  console.log(wallet);
  return (
    <>
      <ConnectWallet />
      <InvoiceForm />
    </>
  );
}

export default Page;
