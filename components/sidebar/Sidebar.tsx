import Link from 'next/link';
import React from 'react';
import { SiGoogledocs, SiWebmoney } from 'react-icons/si';

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
            <span className="text-2xl">Web3Pay</span>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/address-book"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <span>Add Client</span>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/invoice"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <span>Create Invoice</span>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/Statment"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <span>Statment</span>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="logout"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
