/* eslint-disable no-underscore-dangle */

'use client';

import { Button } from '@/components/ui/button';
import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Page() {
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/invoice`);
      console.log(response);
      setData(response.data.invoices);
    } catch (error) {
      console.error('Error submitting invoice:', error);
    }
  }

  const shareLink = async (invoiceId: string) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/create-shorten-url`, { invoiceId });
      console.log(response.data.class);
      await navigator.clipboard.writeText(`${window.location.origin}/${response.data.class.shortenURL}`);
    } catch (error) {
      console.error('Error submitting invoice:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center flex-col w-3/4">
      <Table>
        <TableCaption>On Click of Share Button, Shareable URL Will get Copied!</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice Name</TableHead>
            {/* <TableHead>Bill To</TableHead> */}
            <TableHead>Currency</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Share Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.map((invoice: any) => (
            <TableRow key={invoice.invoiceName}>
              <TableCell className="font-medium">{invoice.invoiceName}</TableCell>
              {/* <TableCell>{invoice.billTo.Wallet}</TableCell> */}
              <TableCell>{invoice.invoiceCurrency}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>{invoice.tax}</TableCell>
              <TableCell>{invoice.discount}</TableCell>
              <TableCell>{invoice.quantity}</TableCell>
              <TableCell>{invoice.total}</TableCell>
              <TableCell>
                <Button onClick={() => { shareLink(invoice._id); }}>
                  Share
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Page;
