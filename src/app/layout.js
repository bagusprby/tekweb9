"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const linkClass = (path) =>
  pathname === path || pathname.startsWith(path + "/")
    ? "font-semibold text-blue-600 border-b-2 border-blue-600 pb-1"
    : "text-gray-700 hover:text-blue-600 dark:text-gray-300";


  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <nav className="p-4 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto flex gap-6 items-center">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>

            <Link href="/blog" className={linkClass("/blog")}>
              Blog
            </Link>

            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
          </div>
        </nav>

        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
