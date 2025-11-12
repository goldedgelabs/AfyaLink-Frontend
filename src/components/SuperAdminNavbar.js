import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SuperAdminNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white/40 backdrop-blur-md shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="AfyaLink Logo"
          width={48}
          height={48}
          className="rounded-lg"
        />
        <span className="text-2xl font-bold text-gray-800">AfyaLink Infinity</span>
      </Link>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <Image
            src="/avatar-placeholder.png"
            alt="Admin Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="hidden md:inline text-gray-700 font-medium">Admin</span>
          <svg
            className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
            <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
            <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
            <Link href="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Logout</Link>
          </div>
        )}
      </div>
    </nav>
  );
              }
