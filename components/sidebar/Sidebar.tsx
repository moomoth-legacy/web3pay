import Link from 'next/link';
import React from 'react';
import { SiGoogledocs, SiWebmoney } from 'react-icons/si';
import {
  FaFileInvoice, FaFileInvoiceDollar, FaSignOutAlt, FaUserPlus,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function Sidebar() {
  return (
    <div className="flex-1 bg-purple-500 min-w-[250px] fixed h-screen">
      <ul className="pt-2 pb-4 space-y-1 text-sm">
        <li className="rounded-sm">
          <Link
            href="/"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <div className="flex flex-row">
              <SiWebmoney className="ml-4 mt-10 mr-4" />
              <h1 className="text-2xl font-extrabold mt-8 mb-14">
                Web3Pay
              </h1>
            </div>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/address-book"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <FaUserPlus />
            <Button variant="ghost" className="text-lg">Add Client</Button>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/invoice"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <FaFileInvoiceDollar />
            <Button variant="ghost" className="text-lg">Create Invoice</Button>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/manage-invoice"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <FaFileInvoice />
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
            <FaSignOutAlt />
            <Button variant="ghost" className="text-lg">Logout</Button>
          </Link>
        </li>
      </ul>
      <div className="fixed inset-x-0 bottom-0 mb-16 ml-4">
        Powered By
        <Image className="mt-4" src="/Thirdweb-Logo-Transparent-White.png" width="150" height="22" alt="Thirdweb Logo" />
      </div>
    </div>
  );
}

export default Sidebar;
