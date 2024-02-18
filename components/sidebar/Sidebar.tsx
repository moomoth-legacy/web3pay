import Link from 'next/link';
import React from 'react';
import { SiGoogledocs } from 'react-icons/si';

function Sidebar() {
  return (
    <div className="flex-1">
      <ul className="pt-2 pb-4 space-y-1 text-sm">
        <li className="rounded-sm">
          <Link
            href="/"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/mails"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <span>Mails</span>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="/products"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <span>Products</span>
          </Link>
        </li>
        <li className="rounded-sm">
          <Link
            href="setting"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <SiGoogledocs />
            <span>Settings</span>
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
