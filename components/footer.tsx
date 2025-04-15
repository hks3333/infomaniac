'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="bg-[#74512D] border-t border-dashed border-white mt-12">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 container py-10 text-background flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20">

        {/* Left: Quote and Copyright */}
        <div className="text-center lg:text-left max-w-lg space-y-6">
          <blockquote className="text-xl font-della">
            “Curiosity is the spark behind every great idea. Never stop exploring.”
          </blockquote>
          <p className="text-xs font-open">
            © {new Date().getFullYear()} Harikrishnan. All rights reserved.
          </p>
        </div>

        {/* Right: Links and Socials */}
        <div className="flex flex-col items-center lg:items-end space-y-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 font-open text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/categories" className="hover:underline">Categories</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/subscribe" className="hover:underline">Subscribe</Link>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-base items-center justify-center lg:justify-end">
            <a href="https://github.com/hks3333" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              <IconBrandGithub size={18} />
              GitHub
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              <IconBrandX size={18} />
              X
            </a>
            <a href="https://linkedin.com/in/harikris177" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              <IconBrandLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>

  );
}
