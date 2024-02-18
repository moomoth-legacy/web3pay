'use client';

import InvoiceForm from '@/components/invoice/Invoice';
import React from 'react';

const page = () => (
  <div className="flex items-center flex-col w-2/3">
    <InvoiceForm status="add" code="" />
  </div>
);

export default page;
