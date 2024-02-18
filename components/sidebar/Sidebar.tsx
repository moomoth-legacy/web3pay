import Link from 'next/link';
import React from 'react';
import { SiGoogledocs, SiWebmoney } from 'react-icons/si';
import { Button } from '@/components/ui/button';

function Sidebar() {
  return (
    <div className="flex-1 bg-purple-500 min-w-[250px]">
      <ul className="pt-2 pb-4 space-y-1 text-sm">
        <li className="rounded-sm">
          <Link
            href="/"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiWebmoney />
            <h1 className="text-2xl font-extrabold">Web3Pay</h1>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/address-book"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <Button variant="ghost" className="text-lg">Add Client</Button>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/invoice"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <Button variant="ghost" className="text-lg">Create Invoice</Button>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/manage-invoice"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <Button variant="ghost" className="text-lg">Manage Invoices</Button>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/Statment"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <Button variant="ghost" className="text-lg">Statment</Button>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="logout"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <Button variant="ghost" className="text-lg">Logout</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
