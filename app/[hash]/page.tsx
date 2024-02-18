'use client';

import React from 'react';
import InvoiceForm from '@/components/invoice/Invoice';
import { usePathname } from 'next/navigation';

function Page() {
  const pathname = usePathname();
  // Check if pathname is defined before rendering InvoiceForm
  if (!pathname) {
    return null; // or any other fallback UI if you wish
  }

  return (
    <InvoiceForm status="update" code={pathname} />
  );
}

export default Page;
